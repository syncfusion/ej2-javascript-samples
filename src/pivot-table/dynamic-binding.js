this.default = function () {
    var dataSource;
    function toDialogText(value) {
        if (value == null) return '';
        if (typeof value === 'string') return value;
        if (value instanceof Error) return value.message || String(value);
        try { return JSON.stringify(value, null, 2); } catch (_) { return String(value); }
    }
    function ej2Alert(message, title) {
        return new Promise(function (resolve) {
            var dlg = ej.popups.DialogUtility.alert({
                title: title || 'Message',
                content: toDialogText(message),
                okButton: { text: 'OK', click: function () { dlg.hide(); } },
                position: { X: 'center', Y: 'center' },
                width: '420px',
                close: function () { resolve(); dlg.destroy(); }
            });
        });
    }
    function ej2Prompt(title, defaultValue, message) {
        return new Promise(function (resolve) {
            var resolved = false;
            var host = document.createElement('div');
            document.body.appendChild(host);
            var wrapper = document.createElement('div');
            wrapper.style.display = 'grid';
            wrapper.style.gridGap = '8px';
            if (message) {
                var msg = document.createElement('pre');
                msg.style.margin = '0';
                msg.style.whiteSpace = 'pre-wrap';
                msg.textContent = toDialogText(message);
                wrapper.appendChild(msg);
            }
            var input = document.createElement('input');
            input.type = 'text'; input.className = 'e-input'; input.value = defaultValue || ''; input.style.width = '100%';
            wrapper.appendChild(input);
            var dialog = new ej.popups.Dialog({
                header: title || 'Prompt', content: wrapper, isModal: true, showCloseIcon: true, visible: true, target: document.body, width: '480px',
                buttons: [
                    { click: function () { resolved = true; var v = input.value; dialog.hide(); resolve(v); }, buttonModel: { content: 'OK', isPrimary: true } },
                    { click: function () { resolved = true; dialog.hide(); resolve(null); }, buttonModel: { content: 'Cancel' } }
                ],
                created: function () { setTimeout(function () { input.focus(); input.select(); }, 0); },
                close: function () { if (!resolved) { resolve(null); } dialog.destroy(); try { host.remove(); } catch (_) { } }
            });
            dialog.appendTo(host);
        });
    }

    var defaultUrls = {
        CSV: 'https://cdn.syncfusion.com/data/sales-analysis.csv',
        JSON: 'https://cdn.syncfusion.com/data/sales-analysis.json',
        REPORT: 'https://api.jsonbin.io/v3/b/6912d9ecd0ea881f40e12335'
    };

    var pivot;
    var connectMenu, openMenu;
    var shouldAutoConfig = false;
    var currentData = window.Pivot_Data;
    var lastRemote = { kind: null, url: null };

    function parseCSV(csvString) {
        var lines = csvString.split(/\r?\n|\r/).filter(function (l) { return l.trim(); });
        return lines.map(function (line) {
            return line.split(',').map(function (cell) {
                return cell.trim().replace(/^"|"$/g, '').replace(/""/g, '"');
            });
        });
    }

    function isOlapActive() {
        if (!pivot) return false;
        var ds = pivot.dataSourceSettings || {};
        return pivot.dataType === 'olap' || !!pivot.olapEngineModule || ds.providerType === 'SSAS';
    }
    function cleanOlapForRelational() {
        if (!pivot) return;
        pivot.olapEngineModule = null; pivot.dataType = 'pivot'; pivot.engineModule = new ej.pivotview.PivotEngine();
        if (pivot.dataSourceSettings) {
            pivot.dataSourceSettings.providerType = undefined;
            pivot.dataSourceSettings.catalog = undefined;
            pivot.dataSourceSettings.cube = undefined;
            pivot.dataSourceSettings.url = undefined;
        }
        pivot.refresh();
    }
    function resetPivot() {
        if (!pivot) return;
        if (pivot.engineModule) { pivot.engineModule.fieldList = {}; }
        pivot.dataSourceSettings.rows = [];
        pivot.dataSourceSettings.columns = [];
        pivot.dataSourceSettings.values = [];
        pivot.dataSourceSettings.filters = [];
        (pivot.dataSourceSettings).conditionalFormatSettings = [];
        pivot.dataSourceSettings.formatSettings = [];
        pivot.dataSourceSettings.drilledMembers = [];
        pivot.dataSourceSettings.fieldMapping = [];
        pivot.dataSourceSettings.excludeFields = [];
        pivot.dataSourceSettings.filterSettings = [];
        pivot.dataSourceSettings.sortSettings = [];
        pivot.dataSourceSettings.valueSortSettings = {};
        pivot.dataSourceSettings.calculatedFieldSettings = [];
        pivot.dataSourceSettings.groupSettings = [];
        pivot.dataSourceSettings.expandAll = false;
        pivot.dataSourceSettings.showGrandTotals = true;
        pivot.dataSourceSettings.showRowGrandTotals = true;
        pivot.dataSourceSettings.showColumnGrandTotals = true;
        pivot.dataSourceSettings.showSubTotals = true;
        pivot.dataSourceSettings.showRowSubTotals = true;
        pivot.dataSourceSettings.showColumnSubTotals = true;
    }
    function setPivotData(type, data) {
        if (!pivot) return;
        if (isOlapActive()) cleanOlapForRelational();
        pivot.dataSourceSettings.type = type;
        pivot.dataSourceSettings.dataSource = data;
        delete pivot.dataSourceSettings.url;
        currentData = data; shouldAutoConfig = true; pivot.refresh();
    }

    function applyReportSettings(pv, reportSettings, isOlapReport, entireReportSettings) {
            return new Promise(function (resolve) {
                if (isOlapReport) {
                    currentData = [];
                    pv.olapEngineModule = new ej.pivotview.OlapEngine();
                    pv.dataType = 'olap';
                    pv.loadPersistData(JSON.stringify(entireReportSettings));
                    pv.refresh();
                    shouldAutoConfig = false;
                    pv.refresh();
                    resolve();
                }
                else {
                    cleanOlapForRelational();
                    var maybeDataUrl = reportSettings.dataUrl || reportSettings.url;
                    var maybeCsvUrl = reportSettings.csvUrl;
                    var isRemoteLoad_1 = !!maybeDataUrl || !!maybeCsvUrl;
                    var finalize_1 = function () {
                        var hasGlobalData = Array.isArray(dataSource) ? dataSource.length > 0 : !!dataSource;
                        var hasInlineIncoming = Array.isArray(reportSettings.dataSource) &&
                            reportSettings.dataSource.length > 0;
                        if (!isRemoteLoad_1 && !hasInlineIncoming && hasGlobalData) {
                            if (reportSettings) {
                                reportSettings.dataSource = dataSource;
                            }
                            if (entireReportSettings && entireReportSettings.dataSourceSettings) {
                                entireReportSettings.dataSourceSettings.dataSource = dataSource;
                            }
                        }
                        try {
                            if (entireReportSettings && entireReportSettings.dataSourceSettings) {
                                pv.loadPersistData(JSON.stringify(entireReportSettings));
                            }
                            else {
                                pv.dataSourceSettings = reportSettings;
                            }
                        }
                        catch (_a) {
                            pv.dataSourceSettings = reportSettings;
                        }
                        shouldAutoConfig = false;
                        pv.refresh();
                        resolve();
                    };
                    var hasInline = Array.isArray(reportSettings.dataSource) &&
                        reportSettings.dataSource.length > 0;
                    if (!hasInline) {
                        if (maybeDataUrl) {
                            fetch(maybeDataUrl, { cache: 'no-store' })
                                .then(function (r1) {
                                if (!r1.ok)
                                    return r1.text().then(function () {
                                        throw new Error('HTTP ' + r1.status + ': ' + r1.statusText);
                                    });
                                return r1.json();
                            })
                                .then(function (j) {
                                var arr = Array.isArray(j) ? j : (j && j.data ? j.data : j);
                                if (!Array.isArray(arr) || !arr.length || typeof arr[0] !== 'object') {
                                    throw new Error('Invalid JSON at dataUrl.');
                                }
                                reportSettings.type = 'JSON';
                                reportSettings.dataSource = arr;
                                currentData = arr;
                                finalize_1();
                            })
                                .catch(function () {
                                reportSettings.dataSource = currentData;
                                reportSettings.type = pv.dataSourceSettings.type || 'JSON';
                                finalize_1();
                            });
                        }
                        else if (maybeCsvUrl) {
                            fetch(maybeCsvUrl, { cache: 'no-store' })
                                .then(function (r2) {
                                if (!r2.ok)
                                    return r2.text().then(function () {
                                        throw new Error('HTTP ' + r2.status + ': ' + r2.statusText);
                                    });
                                return r2.text();
                            })
                                .then(function (t) {
                                var csvArray = parseCSV(t);
                                if (!csvArray.length)
                                    throw new Error('CSV appears empty.');
                                reportSettings.type = 'CSV';
                                reportSettings.dataSource = csvArray;
                                currentData = csvArray;
                                finalize_1();
                            })
                                .catch(function () {
                                reportSettings.dataSource = currentData;
                                reportSettings.type = pv.dataSourceSettings.type || 'JSON';
                                finalize_1();
                            });
                        }
                        else {
                            reportSettings.dataSource = currentData;
                            reportSettings.type = pv.dataSourceSettings.type || 'JSON';
                            finalize_1();
                        }
                    }
                    else {
                        currentData = reportSettings.dataSource;
                        reportSettings.type = reportSettings.type || 'JSON';
                        finalize_1();
                    }
                }
            });
        }
        function loadRemoteAndBind(kind, url) {
            var cleanUrl = (url || '').trim();
            if (!cleanUrl)
                return Promise.reject(new Error('Empty URL'));
            if (kind === 'CSV') {
                return fetch(cleanUrl, { cache: 'no-store' })
                    .then(function (rc) {
                    if (!rc.ok)
                        return rc.text().then(function () {
                            throw new Error('HTTP ' + rc.status + ': ' + rc.statusText);
                        });
                    return rc.text();
                })
                    .then(function (csv) {
                    var arr = parseCSV(csv);
                    resetPivot();
                    setPivotData('CSV', arr);
                    return;
                });
            }
            else {
                return fetch(cleanUrl, { cache: 'no-store' })
                    .then(function (rj) {
                    if (!rj.ok)
                        return rj.text().then(function () {
                            throw new Error('HTTP ' + rj.status + ': ' + rj.statusText);
                        });
                    return rj.json();
                })
                    .then(function (json) {
                    var unwrapped = json && typeof json === 'object' && 'record' in json ? json.record : json;
                    var looksLikeReport = !Array.isArray(unwrapped) &&
                        (unwrapped.dataSourceSettings ||
                            unwrapped.rows ||
                            unwrapped.columns ||
                            unwrapped.values ||
                            unwrapped.url ||
                            unwrapped.providerType);
                    if (looksLikeReport) {
                        var reportSettings = unwrapped.dataSourceSettings || unwrapped;
                        var isOlapReport = reportSettings && reportSettings.providerType === 'SSAS';
                        if (reportSettings.dataUrl) {
                            lastRemote = { kind: 'JSON', url: reportSettings.dataUrl };
                        }
                        else if (reportSettings.csvUrl) {
                            lastRemote = { kind: 'CSV', url: reportSettings.csvUrl };
                        }
                        else {
                            lastRemote = { kind: 'JSON', url: cleanUrl };
                        }
                        dataSource = undefined;
                        return applyReportSettings(pivot, reportSettings, isOlapReport, unwrapped);
                    }
                    var arr2 = Array.isArray(unwrapped) ? unwrapped : unwrapped && unwrapped.data ? unwrapped.data : unwrapped;
                    if (!Array.isArray(arr2) || !arr2.length || typeof arr2[0] !== 'object')
                        throw new Error('Invalid JSON: expected array or report.');
                    lastRemote = { kind: 'JSON', url: cleanUrl };
                    resetPivot();
                    setPivotData('JSON', arr2);
                    return;
                });
            }
        }

    function xmlaSoapEnvelope(requestType, restrictions, properties) {
        restrictions = restrictions || {}; properties = properties || {};
        var restrXml = Object.keys(restrictions).length ?
            '<Restrictions><RestrictionList>' + Object.keys(restrictions).map(function (k) { return '<' + k + '>' + String(restrictions[k]) + '</' + k + '>'; }).join('') + '</RestrictionList></Restrictions>' :
            '<Restrictions />';
        var propXml = '<Properties><PropertyList>' + Object.keys(properties).map(function (k) { return '<' + k + '>' + String(properties[k]) + '</' + k + '>'; }).join('') + '</PropertyList></Properties>';
        return '<?xml version="1.0" encoding="utf-8"?>' +
            '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soap:Header />' +
            '<soap:Body>' +
            '<Discover xmlns="urn:schemas-microsoft-com:xml-analysis">' +
            '<RequestType>' + requestType + '</RequestType>' +
            restrXml +
            propXml +
            '</Discover>' +
            '</soap:Body>' +
            '</soap:Envelope>';
    }
    function postXMLA(endpoint, bodyXml) {
        return fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'text/xml; charset=utf-8', 'Accept': 'text/xml, application/xml, */*;q=0.1' }, body: bodyXml })
            .then(function (res) { return res.text().then(function (text) { if (!res.ok) { throw new Error('HTTP ' + res.status + ': ' + res.statusText + '\n' + text); } return text; }); });
    }
    function parseRowset(xmlText) {
        var parser = new DOMParser(); var xml = parser.parseFromString(xmlText, 'text/xml');
        var rows = Array.prototype.slice.call(xml.getElementsByTagNameNS('*', 'row'));
        var result = rows.map(function (r) { var obj = {}; Array.prototype.slice.call(r.children).forEach(function (c) { obj[c.localName] = (c.textContent || '').trim(); }); return obj; });
        var fault = xml.getElementsByTagNameNS('*', 'Fault')[0]; if (fault) throw new Error((fault.textContent || 'SOAP Fault').trim());
        return result;
    }
    function discoverDataSources(endpoint) { var body = xmlaSoapEnvelope('DISCOVER_DATASOURCES'); return postXMLA(endpoint, body).then(function (xml) { return parseRowset(xml).map(function (r) { return r.DataSourceName || r.DATASOURCE_NAME || r.Name || r.NAME; }).filter(Boolean); }); }
    function discoverCatalogsWithDS(endpoint, dataSource) { var body = xmlaSoapEnvelope('DBSCHEMA_CATALOGS', {}, { DataSourceInfo: dataSource }); return postXMLA(endpoint, body).then(function (xml) { return parseRowset(xml).map(function (r) { return r.CATALOG_NAME; }).filter(Boolean); }); }
    function discoverCubesWithDS(endpoint, catalog, dataSource) { var body = xmlaSoapEnvelope('MDSCHEMA_CUBES', { CATALOG_NAME: catalog }, { DataSourceInfo: dataSource }); return postXMLA(endpoint, body).then(function (xml) { return parseRowset(xml).filter(function (r) { return r.CUBE_SOURCE === '1'; }).map(function (r) { return r.CUBE_NAME; }).filter(Boolean); }); }

    function applyOlapBinding(opts) {
        if (!pivot) return;
        var url = (opts && opts.url) || ''; var catalog = (opts && opts.catalog) || ''; var cube = (opts && opts.cube) || '';
        if (!url || !catalog || !cube) return;
        var olapSettings = { url: url, catalog: catalog, providerType: 'SSAS', cube: cube, localeIdentifier: 1033, rows: [], columns: [], values: [] };
        pivot.engineModule = null;
        pivot.olapEngineModule = new ej.pivotview.OlapEngine();
        pivot.dataType = 'olap';
        pivot.dataSourceSettings = olapSettings;
        currentData = [];
        shouldAutoConfig = true;
        pivot.refresh();
    }

    function toolbarRender(args) {
        var connectMenuTpl = { template: '<ul id="connect_menu"></ul>', id: 'custom_toolbar' };
        var openMenuTpl = { template: '<ul id="open_menu"></ul>', id: 'open_toolbar' };
        var saveItem = { prefixIcon: 'e-save-report e-btn-icon e-icons', tooltipText: 'Save Pivot Report as JSON', click: function () { saveReport(); } };
        args.customToolbar.splice(0, 0, connectMenuTpl); args.customToolbar.splice(1, 0, openMenuTpl); args.customToolbar.splice(2, 0, saveItem); args.customToolbar.splice(3, 0, { type: 'Separator' });
    }
    function dataBound() {
        var cmEl = document.getElementById('connect_menu');
        if (cmEl) {
            if (connectMenu) { connectMenu.destroy(); connectMenu = null; }
            connectMenu = new ej.navigations.Menu({
                items: [{ iconCss: 'e-connect-report e-btn-icon e-icons', items: [{ text: 'JSON', iconCss: 'e-json-icon e-icons', items: [{ text: 'Local', id: 'local_json' }, { text: 'Remote', id: 'remote_json' }] }, { text: 'CSV', iconCss: 'e-csv-icon e-icons', items: [{ text: 'Local', id: 'local_csv' }, { text: 'Remote', id: 'remote_csv' }] }, { text: 'OLAP(XMLA)', id: 'olap', iconCss: 'e-olap-icon e-icons' }] }],
                select: gridToolbarClicked, cssClass: 'e-pivot-toolbar-menu'
            }, '#connect_menu');
        }
        var omEl = document.getElementById('open_menu');
        if (omEl) {
            if (openMenu) { openMenu.destroy(); openMenu = null; }
            openMenu = new ej.navigations.Menu({
                items: [{ iconCss: 'e-open-report e-btn-icon e-icons', items: [{ text: 'Load Pivot Report', items: [{ text: 'Local JSON', id: 'local_report', iconCss: 'e-local-report-icon e-icons' }, { text: 'Remote JSON', id: 'remote_report', iconCss: 'e-remote-report-icon e-icons' }] }] }],
                select: openToolbarClicked, cssClass: 'e-pivot-toolbar-menu'
            }, '#open_menu');
        }
        if (shouldAutoConfig && pivot && (!pivot.dataSourceSettings.values || pivot.dataSourceSettings.values.length === 0)) {
            shouldAutoConfig = false;
            if (pivot.pivotFieldListModule && pivot.pivotFieldListModule.dialogRenderer) {
                setTimeout(function () { pivot.pivotFieldListModule.dialogRenderer.onShowFieldList(); }, 0);
            }
        }
    }
    function enginePopulated() {
        if (shouldAutoConfig && pivot) {
            shouldAutoConfig = false;
            pivot.displayOption = { view: 'Both', primary: 'Table' };
            if (!pivot.dataSourceSettings.values || pivot.dataSourceSettings.values.length === 0) {
                if (pivot.pivotFieldListModule && pivot.pivotFieldListModule.dialogRenderer) {
                    pivot.pivotFieldListModule.dialogRenderer.onShowFieldList();
                }
            }
        }
    }

    function saveReport() {
        if (!pivot) return;
        try {
            var persisted = pivot.getPersistData();
            var reportSettings = {};
            var parsed = JSON.parse(persisted);
            try {
                var isOlapReport = parsed && parsed.dataSourceSettings && parsed.dataSourceSettings.providerType === 'SSAS';
                if (!isOlapReport && parsed && parsed.dataSourceSettings) {
                    dataSource = parsed.dataSourceSettings.dataSource;
                    parsed.dataSourceSettings.dataSource = [];
                }
                if (parsed && typeof parsed === 'object' && 'pivotValues' in parsed) {
                    delete parsed.pivotValues;
                }
            } catch (_) { reportSettings = pivot.dataSourceSettings || {}; }
            var json = JSON.stringify(parsed, null, 2);
            var blob = new Blob([json], { type: 'application/json' });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a'); a.href = url; a.download = 'pivot.json'; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
        } catch (err) { ej2Alert('Failed to save: ' + err.message, 'Error'); }
    }

    function openToolbarClicked(args) {
        var id = args && args.item && args.item.id; if (!id) return;
        if (id === 'local_report') {
            var input = document.getElementById('connectFile');
            input.onchange = function (e) {
                var file = e.target.files && e.target.files[0]; if (!file) return;
                var reader = new FileReader();
                reader.onload = function (evt) {
                    try {
                        var raw = String(evt.target && evt.target.result || '');
                        var parsed = JSON.parse(raw);
                        var reportSettings = parsed.dataSourceSettings || parsed;
                        var isOlapReport = reportSettings && reportSettings.providerType === 'SSAS';
                        resetPivot();
                        applyReportSettings(pivot, reportSettings, isOlapReport, parsed).catch(function (err) { ej2Alert('Failed to load report: ' + err.message, 'Error'); });
                    } catch (err) { ej2Alert('Failed to load report: ' + err.message, 'Error'); }
                    finally { e.target.value = ''; }
                };
                reader.readAsText(file);
            };
            input.accept = '.json'; input.value = ''; input.click();
        }
        if (id === 'remote_report') {
            ej2Prompt('Load Pivot Report', defaultUrls.REPORT).then(function (url) {
                if (url == null) return;
                var clean = (url || '').trim();
                if (!clean) {
                    ej2Alert('Please enter a valid Report JSON URL.', 'Error');
                    return;
                }
                loadRemoteAndBind('JSON', clean)
                    .catch(function (err) {
                        ej2Alert('Failed to load remote report: ' + err.message + '\nTip: Ensure CORS is allowed.', 'Error');
                    });
            });
        }
    }

    function gridToolbarClicked(args) {
        var id = args && args.item && args.item.id; if (!id) return;
        if (id === 'local_csv' || id === 'local_json') {
            var ext = (id === 'local_csv') ? 'CSV' : 'JSON';
            var input = document.getElementById('connectFile');
            input.onchange = function (e) {
                var file = e.target.files && e.target.files[0]; if (!file) return;
                var reader = new FileReader();
                reader.onload = function (evt) {
                    try {
                        if (ext === 'CSV') {
                            var csv = String(evt.target && evt.target.result || '');
                            var arr = parseCSV(csv);
                            if (!arr.length || arr.length <= 1) { throw new Error('CSV appears empty or has only headers.'); }
                            var headerLen = arr[0].length;
                            var inconsistent = arr.slice(1).some(function (r) { return r.length !== headerLen; });
                            if (inconsistent) { throw new Error('Please enter the valid CSV file'); } resetPivot(); setPivotData('CSV', arr);
                        } else {
                            var raw = String(evt.target && evt.target.result || '');
                            var parsed = JSON.parse(raw);
                            var unwrapped = (parsed && typeof parsed === 'object' && 'record' in parsed) ? parsed.record : parsed;
                            var looksLikeReport = !Array.isArray(unwrapped) && (unwrapped.dataSourceSettings || unwrapped.rows || unwrapped.columns || unwrapped.values || unwrapped.url || unwrapped.providerType);
                            if (looksLikeReport) {
                                var reportSettings = unwrapped.dataSourceSettings || unwrapped; var isOlapReport = reportSettings && reportSettings.providerType === 'SSAS'; resetPivot(); applyReportSettings(pivot, reportSettings, isOlapReport, unwrapped).catch(function (err) { ej2Alert('Failed to load file: ' + err.message, 'Error'); });
                            } else {
                                var arr2 = Array.isArray(unwrapped) ? unwrapped : (unwrapped && unwrapped.data ? unwrapped.data : unwrapped);
                                if (!Array.isArray(arr2) || !arr2.length || typeof arr2[0] !== 'object') { throw new Error('Invalid JSON: expected report or array of objects.'); }
                                resetPivot(); setPivotData('JSON', arr2);
                            }
                        }
                    } catch (err) { ej2Alert('Failed to load ' + ext + ' file: ' + err.message, 'Error'); }
                    finally { e.target.value = ''; }
                };
                reader.readAsText(file);
            };
            input.accept = (ext === 'CSV') ? '.csv' : '.json'; input.value = ''; input.click();
        }
        if (id === 'remote_csv' || id === 'remote_json') {
            var kind = (id === 'remote_csv') ? 'CSV' : 'JSON';
            ej2Prompt('Connect to ' + kind, defaultUrls[kind]).then(function (url) {
                if (url == null) return;
                var clean = (url || '').trim();
                if (!clean) {
                    ej2Alert('Please enter a valid ' + kind + ' URL.', 'Error');
                    return;
                }
                loadRemoteAndBind(kind, clean)
                    .catch(function (err) {
                        ej2Alert('Failed to load remote ' + kind + ': ' + err.message + '\nTip: Ensure CORS is allowed.', 'Error');
                    });
            });
        }
        if (id === 'olap') {
            (function showOlapDialog() {
                var host = document.createElement('div'); document.body.appendChild(host);
                var container = document.createElement('div'); container.style.display = 'grid'; container.style.gridTemplateColumns = '160px 1fr'; container.style.gridRowGap = '14px'; container.style.alignItems = 'center';
                function addLabel(text) { var l = document.createElement('label'); l.textContent = text; l.style.color = '#666'; l.style.fontSize = '14px'; l.style.fontWeight = '500'; return l; }
                container.appendChild(addLabel('URL'));
                var urlRow = document.createElement('div'); urlRow.style.display = 'flex'; urlRow.style.flex = '1 1 0%'; urlRow.style.gap = '8px'; urlRow.style.alignItems = 'center';
                var urlInput = document.createElement('input'); urlInput.type = 'text'; urlInput.className = 'e-input'; urlInput.placeholder = 'Enter OLAP endpoint URL (e.g., https://bi.syncfusion.com/olap/msmdpump.dll)'; urlInput.value = 'https://bi.syncfusion.com/olap/msmdpump.dll'; urlInput.style.flex = '1 1 0%';
                var connectBtnEl = document.createElement('button'); connectBtnEl.className = 'e-control e-btn e-lib e-primary'; connectBtnEl.textContent = 'Connect';
                urlRow.appendChild(urlInput); urlRow.appendChild(connectBtnEl); container.appendChild(urlRow);
                container.appendChild(addLabel('Data Sources')); var dsDropEl = document.createElement('input'); container.appendChild(dsDropEl);
                container.appendChild(addLabel('Catalogs')); var catDropEl = document.createElement('input'); container.appendChild(catDropEl);
                container.appendChild(addLabel('Cubes')); var cubeDropEl = document.createElement('input'); container.appendChild(cubeDropEl);
                var errorEl = document.createElement('div'); errorEl.className = 'error-message'; errorEl.style.gridColumn = '1 / span 2'; errorEl.style.marginTop = '6px'; errorEl.textContent = ''; container.appendChild(errorEl);

                var dialog = new ej.popups.Dialog({ header: 'Connect to OLAP(XMLA)', content: container, isModal: true, showCloseIcon: true, visible: true, width: '620px', target: document.body, buttons: [{ buttonModel: { content: 'OK', isPrimary: true }, click: onOk }, { buttonModel: { content: 'Cancel' }, click: function () { dialog.hide(); } }], close: function () { dialog.destroy(); host.remove(); } });
                dialog.appendTo(host);

                var connectBtn = new ej.buttons.Button({ content: 'Connect', isPrimary: true }, connectBtnEl);
                var dsDrop = new ej.dropdowns.DropDownList({ dataSource: [], enabled: false, placeholder: 'Select data source', change: onDsChange }); dsDrop.appendTo(dsDropEl);
                var catDrop = new ej.dropdowns.DropDownList({ dataSource: [], enabled: false, placeholder: 'Select catalog', change: onCatChange }); catDrop.appendTo(catDropEl);
                var cubeDrop = new ej.dropdowns.DropDownList({ dataSource: [], enabled: false, placeholder: 'Select cube' }); cubeDrop.appendTo(cubeDropEl);

                function connect() {
                    try {
                        errorEl.textContent = ''; connectBtn.disabled = true;
                        if (connectBtn && connectBtn.setProperties) { connectBtn.setProperties({ content: 'Connecting...' }); connectBtn.dataBind(); }
                        dsDrop.enabled = false; catDrop.enabled = false; cubeDrop.enabled = false;
                        dsDrop.placeholder = 'Loading...'; dsDrop.value = null; dsDrop.dataSource = []; dsDrop.dataBind();
                        catDrop.placeholder = 'Select catalog'; catDrop.value = null; catDrop.dataSource = []; catDrop.dataBind();
                        cubeDrop.placeholder = 'Select cube'; cubeDrop.value = null; cubeDrop.dataSource = []; cubeDrop.dataBind();

                        discoverDataSources(urlInput.value.trim()).then(function (list) {
                            if (!list.length) { errorEl.textContent = 'No data sources found.'; return; }
                            dsDrop.placeholder = 'Select data source'; dsDrop.dataSource = list; dsDrop.enabled = true; dsDrop.dataBind();
                        }).catch(function (e) { errorEl.textContent = 'Connect failed: ' + e.message + '. If the browser blocks this due to CORS, configure a proxy base URL and try again.'; })
                            .finally(function () { if (connectBtn && connectBtn.setProperties) { connectBtn.setProperties({ content: 'Connect' }); connectBtn.dataBind(); } connectBtn.disabled = false; });
                    } catch (e) {
                        errorEl.textContent = 'Connect failed: ' + e.message;
                        if (connectBtn && connectBtn.setProperties) { connectBtn.setProperties({ content: 'Connect' }); connectBtn.dataBind(); }
                        connectBtn.disabled = false;
                    }
                }
                function onDsChange() {
                    try {
                        errorEl.textContent = '';
                        var ds = dsDrop.value; if (!ds) return;
                        catDrop.enabled = false; cubeDrop.enabled = false;
                        catDrop.placeholder = 'Loading...'; catDrop.value = null; catDrop.dataSource = []; catDrop.dataBind();
                        cubeDrop.placeholder = 'Select cube'; cubeDrop.value = null; cubeDrop.dataSource = []; cubeDrop.dataBind();
                        discoverCatalogsWithDS(urlInput.value.trim(), ds).then(function (catalogs) {
                            catDrop.placeholder = 'Select catalog'; catDrop.dataSource = catalogs; catDrop.enabled = catalogs.length > 0; catDrop.dataBind();
                        }).catch(function (e) { errorEl.textContent = 'Failed to load catalogs: ' + e.message; });
                    } catch (e) { errorEl.textContent = 'Failed to load catalogs: ' + e.message; }
                }
                function onCatChange() {
                    try {
                        errorEl.textContent = '';
                        var ds = dsDrop.value; var cat = catDrop.value; if (!ds || !cat) return;
                        cubeDrop.enabled = false; cubeDrop.placeholder = 'Loading...'; cubeDrop.value = null; cubeDrop.dataSource = []; cubeDrop.dataBind();
                        discoverCubesWithDS(urlInput.value.trim(), cat, ds).then(function (cubes) {
                            cubeDrop.placeholder = 'Select cube'; cubeDrop.dataSource = cubes; cubeDrop.enabled = cubes.length > 0; cubeDrop.dataBind();
                        }).catch(function (e) { errorEl.textContent = 'Failed to load cubes: ' + e.message; });
                    } catch (e) { errorEl.textContent = 'Failed to load cubes: ' + e.message; }
                }
                function onOk() {
                    var url = urlInput.value.trim(); var ds = dsDrop.value; var cat = catDrop.value; var cube = cubeDrop.value;
                    if (!url || !ds || !cat || !cube) { errorEl.textContent = 'Please connect and select Data Source, Catalog and Cube.'; return; }
                    try { errorEl.textContent = ''; applyOlapBinding({ url: url, catalog: cat, cube: cube }); dialog.hide(); }
                    catch (e) { errorEl.textContent = 'Failed to apply OLAP: ' + e.message; }
                }
                connectBtnEl.addEventListener('click', connect);
            })();
        }
    }

    pivot = new ej.pivotview.PivotView({
        height: 500, width: '100%', showFieldList: true, showToolbar: true, allowCalculatedField: true, allowPdfExport: true, allowExcelExport: true, allowNumberFormatting: true, allowConditionalFormatting: true, displayOption: { view: 'Both' }, gridSettings: { columnWidth: ej.base.Browser.isDevice ? 100 : 120 }, toolbar: ['Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'Formatting', 'FieldList'],
        dataSourceSettings: { type: 'JSON', dataSource: window.Pivot_Data, expandAll: false, filters: [], drilledMembers: [{ name: 'Country', items: ['France'] }], formatSettings: [{ name: 'Amount', format: 'C0' }], rows: [{ name: 'Country' }, { name: 'Products' }], columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }], values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }] },
        toolbarRender: toolbarRender, dataBound: dataBound, enginePopulated: enginePopulated
    });
    pivot.appendTo('#pivotview');
};