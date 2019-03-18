/**
 * PivotView sample with Cell Template.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotGridObj = new ej.pivotview.PivotView({
        dataSource: {
            data: window.renewableEnergy,
            expandAll: true,
            enableSorting: true,
            drilledMembers: [{name:'Year', items:['FY 2015', 'FY 2017', 'FY 2018']}],
            formatSettings: [{ name: 'ProCost', format: 'C0' }, { name: 'PowUnits', format: 'N0' }],
            rows: [
                { name: 'Year', caption: 'Production Year' },
                { name: 'HalfYear', caption: 'Half Year' }
            ],
            columns: [
                { name: 'EnerType', caption: 'Energy Type' },
                { name: 'EneSource', caption: 'Energy Source' }
            ],
            values: [
                { name: 'ProCost', caption: 'Revenue Growth' }
            ],
            filters: []
        },
        dataBound: function (args) {
            trend();
        },
        height: 300,
        width: '100%',
        cellTemplate: '${getCellContent(data)}',
        gridSettings: { columnWidth: 140 }
    });
    pivotGridObj.appendTo('#PivotView');

    window.getCellContent = function (e) {
        var template;
        if (e && e.targetCell.className.indexOf('e-valuescontent') > -1) {
            template = '<span class="tempwrap sb-icon-neutral pv-icons"></span>';
        } else {
            template = '';
        }
        return template;
    };
    /* jshint ignore:start */
    function trend() {
        var cTable = document.getElementsByClassName("e-table");
        var colLen = pivotGridObj.pivotValues[3].length;
        var cLen = cTable[3].children[0].children.length;
        var rLen = cTable[3].children[1].children.length;
     
        for (let k = 0; k < rLen; k++) {
            if (pivotGridObj.pivotValues[k] && pivotGridObj.pivotValues[k][0] !== undefined) {
                rowIndx = (pivotGridObj.pivotValues[k][0]).rowIndex;
                break;
            }
        }
        var rowHeaders = [].slice.call(cTable[2].children[1].querySelectorAll('td'));
        var rows = pivotGridObj.dataSource.rows;
        if (rowHeaders.length > 1) {
            for (var i = 0, Cnt = rows; i < Cnt.length; i++) {
                var fields = {};
                var fieldHeaders = [];
                    for (var j = 0, Lnt = rowHeaders; j < Lnt.length; j++) {
                        var header = rowHeaders[j];
                        if (header.className.indexOf('e-gtot') === -1 && header.className.indexOf('e-rowsheader') > -1 && header.getAttribute('fieldname') === rows[i].name) {
                            var headerName = rowHeaders[j].getAttribute('fieldname') + '_' + rowHeaders[j].textContent;
                            fields[rowHeaders[j].textContent] = j;
                            fieldHeaders.push(rowHeaders[j].textContent);
                        }
                    }
                    if (i === 0) {
                        for (var rnt = 0, Lnt = fieldHeaders; rnt < Lnt.length; rnt++) {
                            if (rnt !== 0) {
                                var row = fields[fieldHeaders[rnt]];
                                var prevRow = fields[fieldHeaders[rnt - 1]];
                                for (var j = 0, ci = 1; j < cLen && ci < colLen; j++, ci++) {
                                    var node = cTable[3].children[1].children[row].childNodes[j];
                                    var prevNode = cTable[3].children[1].children[prevRow].childNodes[j];
                                    var ri = undefined;
                                    var prevRi = undefined;
                                    if (node) {
                                        ri = node.getAttribute("index");
                                    }
                                    if (prevNode) {
                                        prevRi = prevNode.getAttribute("index");
                                    }
                                    if (ri && ri < pivotGridObj.pivotValues.length) {
                                        if ((pivotGridObj.pivotValues[prevRi][ci]).value > (pivotGridObj.pivotValues[ri][ci]).value && node.querySelector('.tempwrap')) {
                                            var trendElement = node.querySelector('.tempwrap');
                                            trendElement.className = trendElement.className.replace('sb-icon-neutral', 'sb-icon-loss');
                                        } else if ((pivotGridObj.pivotValues[prevRi][ci]).value < (pivotGridObj.pivotValues[ri][ci]).value && node.querySelector('.tempwrap')) {
                                            var trendElement = node.querySelector('.tempwrap');
                                            trendElement.className = trendElement.className.replace('sb-icon-neutral', 'sb-icon-profit');
                                        }
                                    }
                                }
                            }
                        }
                } else {
                    for (var rnt = 0, Lnt = fieldHeaders; rnt < Lnt.length; rnt++) {
                        var row = fields[fieldHeaders[rnt]];
                        for (var j = 0, ci = 1; j < cLen && ci < colLen; j++, ci++) {
                            var node = cTable[3].children[1].children[row].childNodes[j];
                            var prevNode = cTable[3].children[1].children[row - 1].childNodes[j];
                            var ri = undefined;
                            var prevRi = undefined;
                            if (node) {
                                ri = node.getAttribute("index");
                            }
                            if (prevNode) {
                                prevRi = prevNode.getAttribute("index");
                            }
                            if (ri && ri < pivotGridObj.pivotValues.length) {
                                var cRowFieldName = cTable[2].children[1].children[row].childNodes[0].getAttribute('fieldname');
                                var prevRowFieldName = cTable[2].children[1].children[row -1].childNodes[0].getAttribute('fieldname');
                                if ((pivotGridObj.pivotValues[prevRi][ci]).value > (pivotGridObj.pivotValues[ri][ci]).value && node.querySelector('.tempwrap') &&
                                cRowFieldName === prevRowFieldName) {
                                    var trendElement = node.querySelector('.tempwrap');
                                    trendElement.className = trendElement.className.replace('sb-icon-neutral', 'sb-icon-loss');
                                } else if ((pivotGridObj.pivotValues[prevRi][ci]).value < (pivotGridObj.pivotValues[ri][ci]).value && node.querySelector('.tempwrap') &&
                                cRowFieldName === prevRowFieldName) {
                                    var trendElement = node.querySelector('.tempwrap');
                                    trendElement.className = trendElement.className.replace('sb-icon-neutral', 'sb-icon-profit');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    /* jshint ignore:end */
};
