/*jshint esversion: 6 */
/**
 * Rich Text Editor overview sample
 */
this.default = function() {
    var hostUrl = 'https://services.syncfusion.com/js/production/';

    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: [
                'Undo', 'Redo', '|',
                {
                    tooltipText: 'Import from Word',
                    template: `<button class="e-tbar-btn e-control e-btn e-lib e-icon-btn" tabindex="-1" id="custom_tbarbtn_1" style="width:100%">
                      <span class="e-icons e-rte-import-doc e-btn-icon"></span></button>`,
                    click: importContentFromWord,
                },
                {
                    tooltipText: 'Export to Word',
                    template: `<button class="e-tbar-btn e-control e-btn e-lib e-icon-btn" tabindex="-1" id="custom_tbarbtn_2" style="width:100%">
                      <span class="e-icons e-rte-export-doc e-btn-icon"></span></button>`,
                    click: exportContentToWord,
                },
                {
                    tooltipText: 'Export to PDF',
                    template: `<button class="e-tbar-btn e-control e-btn e-lib e-icon-btn" tabindex="-1" id="custom_tbarbtn_3" style="width:100%">
                      <span class="e-icons e-rte-export-pdf e-btn-icon"></span></button>`,
                    click: exportContentToPDF,
                },
                '|',
                'Bold', 'Italic', 'Underline', 'StrikeThrough', 'SuperScript', 'SubScript', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|',
                'Outdent', 'Indent', '|', 'CreateLink', 'Image', 'FileManager', 'Video', 'Audio', 'CreateTable', '|', 'FormatPainter', 'ClearFormat',
                '|', 'EmojiPicker', 'Print', '|',
                'SourceCode', 'FullScreen',]
        },
        insertImageSettings: {
            saveUrl: hostUrl + 'api/RichTextEditor/SaveFile',
            removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',
            path: hostUrl + 'RichTextEditor/',
        },
        fileManagerSettings: {
            enable: true,
            path: '/Pictures/Food',
            ajaxSettings: {
                url: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations',
                getImageUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage',
                uploadUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload',
                downloadUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download'
            }
        },
        quickToolbarSettings: {
            table: ['TableHeader', 'TableRows', 'TableColumns', 'TableCell', '-', 'BackgroundColor', 'TableRemove', 'TableCellVerticalAlign', 'Styles'],
            showOnRightClick: true,
        },
        enableXhtml: true,
        showCharCount: true,
        enableTabKey : true,
        placeholder: 'Type something or use @ to tag a user...',
        actionBegin: actionBeginHandler,
        actionComplete: actionCompleteHandler,
        beforeQuickToolbarOpen: quickToolbarOpenHandler,
        quickToolbarClose: quickToolbarClosehandler
    });
    defaultRTE.appendTo("#defaultRTE");
    var uploadObj = new ej.inputs.Uploader({
        allowedExtensions: '.docx,.doc,.rtf',
        asyncSettings: {
            saveUrl: hostUrl + 'api/RichTextEditor/ImportFromWord',
        },
        success: onUploadSuccess,
    });
    uploadObj.appendTo('#rteCustomWordUpload');
    uploadObj.element.closest('.e-upload').style.display = 'none';
    var emailData = [
        { name: "Selma Rose", initial: 'SR', email: "selma@gmail.com", color: '#FAFDFF', bgColor: '#01579B' },
        { name: "Maria", initial: 'MA', email: "maria@gmail.com", color: '#004378', bgColor: '#ADDBFF' },
        { name: "Russo Kay", initial: 'RK', email: "russo@gmail.com", color: '#F9DEDC', bgColor: '#8C1D18' },
        { name: "Robert", initial: 'RO', email: "robert@gmail.com", color: '#FFD6F7', bgColor: '#37003A' },
        { name: "Camden Kate", initial: 'CK', email: "camden@gmail.com", color: '#FFFFFF', bgColor: '#464ECF' },
        { name: "Garth", initial: 'GA', email: "garth@gmail.com", color: '#FFFFFF', bgColor: '#008861' },
        { name: "Andrew James", initial: 'AJ', email: "james@gmail.com", color: '#FFFFFF', bgColor: '#53CA17' },
        { name: "Olivia", initial: 'OL', email: "olivia@gmail.com", color: '#FFFFFF', bgColor: '#8C1D18' },
        { name: "Sophia", initial: 'SO', email: "sophia@gmail.com", color: '#000000', bgColor: '#D0BCFF' },
        { name: "Margaret", initial: 'MA', email: "margaret@gmail.com", color: '#000000', bgColor: '#F2B8B5' },
        { name: "Ursula Ann", initial: 'UA', email: "ursula@gmail.com", color: '#000000', bgColor: '#47ACFB' },
        { name: "Laura Grace", initial: 'LG', email: "laura@gmail.com", color: '#000000', bgColor: '#FFE088' },
        { name: "Albert", initial: 'AL', email: "albert@gmail.com", color: '#FFFFFF', bgColor: '#00335B' },
        { name: "William", initial: 'WA', email: "william@gmail.com", color: '#FFFFFF', bgColor: '#163E02' }
    ];
    var mention = new ej.dropdowns.Mention({
        dataSource: emailData,
        fields: { text: 'name' },
        displayTemplate: '<a href=mailto:${email} title=${email}>@${name}</a>',
        itemTemplate: '<div class="editor-mention-item-template"><div class="em-header"><div class="em-avatar" style="background-color: ${bgColor}; color: ${color}"><div class="em-initial">${initial}</div></div></div><div class="em-content"><div class="em-name">${name}</div><div class="em-email">${email}</div></div></div>',
        popupWidth: '250px',
        popupHeight: '200px',
        sortOrder: 'Ascending',
        target: defaultRTE.inputElement,
        allowSpaces: true
    });
    mention.appendTo('#editorMention');
    var myCodeMirror;
    function mirrorConversion(e) {
        var id = defaultRTE.getID() + 'mirror-view';
        var mirrorView = defaultRTE.element.querySelector('#' + id);
        var rteContainer = defaultRTE.element.querySelector('.e-rte-container');
        if (e.targetItem === 'Preview') {
            defaultRTE.value = myCodeMirror.getValue();
            defaultRTE.dataBind();
            rteContainer.classList.remove('e-rte-code-mirror-enabled');
            defaultRTE.focusIn();
        } else {
            rteContainer.classList.add('e-rte-code-mirror-enabled');
            rteContainer.classList.remove('e-source-code-enabled');
            if (!mirrorView) {
                mirrorView = ej.base.createElement('div', { className: 'rte-code-mirror', id: id, styles: 'display: none;' });
                rteContainer.appendChild(mirrorView);
                renderCodeMirror(
                    mirrorView,
                    defaultRTE.value === null ? '' : defaultRTE.value
                );
            } else {
                myCodeMirror.setValue(defaultRTE.value === null ? '' : defaultRTE.value);
                mirrorView.innerHTML = '';
            }
            myCodeMirror.focus();
        }
    }
    function renderCodeMirror(mirrorView, content) {
        myCodeMirror = CodeMirror(mirrorView, {
            value: content,
            lineNumbers: true,
            mode: 'text/html',
            lineWrapping: true,
        });
    }
    function actionBeginHandler(e) {
        if (
            e.requestType === 'EnterAction' &&
            mention.element.classList.contains('e-popup-open')
        ) {
            e.cancel = true;
        }
        if (e.requestType === 'Maximize' || e.requestType === 'Minimize') {
            handleFullScreen(e);
        }
    }
    function handleFullScreen(e) {
        var sbCntEle = document.querySelector('.sb-content.e-view');
        var sbHdrEle = document.querySelector('.sb-header.e-view');
        var leftBar;
        var transformElement;
        if (ej.base.Browser.isDevice) {
            leftBar = document.querySelector('#right-sidebar');
            transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');
        }
        else {
            leftBar = document.querySelector('#left-sidebar');
            transformElement = document.querySelector('#right-pane');
        }
        if (e.targetItem === 'Maximize') {
            if (ej.base.Browser.isDevice &&  ej.base.Browser.isIos) {
                ej.base.addClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            ej.base.addClass([leftBar], ['e-close']);
            ej.base.removeClass([leftBar], ['e-open']);
            if (!ej.base.Browser.isDevice) {
                transformElement.style.marginLeft = '0px';
            }
            transformElement.style.transform = 'inherit';
        }
        else if (e.targetItem === 'Minimize') {
            if (ej.base.Browser.isDevice &&  ej.base.Browser.isIos) {
                ej.base.removeClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            ej.base.removeClass([leftBar], ['e-close']);
            if (!ej.base.Browser.isDevice) {
                ej.base.addClass([leftBar], ['e-open']);
                transformElement.style.marginLeft = leftBar.offsetWidth + 'px';
            }
            transformElement.style.transform = 'translateX(0px)';
        }
    }
    function actionCompleteHandler(e) {
        if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
            mirrorConversion(e);
        }
        if (e.requestType === 'SourceCode') {
            defaultRTE.getToolbar().querySelector('#custom_tbarbtn_1').parentElement.classList.add('e-overlay');
            defaultRTE.getToolbar().querySelector('#custom_tbarbtn_2').parentElement.classList.add('e-overlay');
            defaultRTE.getToolbar().querySelector('#custom_tbarbtn_3').parentElement.classList.add('e-overlay');
        } else if (e.requestType === 'Preview') {
            defaultRTE.getToolbar().querySelector('#custom_tbarbtn_1').parentElement.classList.remove('e-overlay');
            defaultRTE.getToolbar().querySelector('#custom_tbarbtn_2').parentElement.classList.remove('e-overlay');
            defaultRTE.getToolbar().querySelector('#custom_tbarbtn_3').parentElement.classList.remove('e-overlay');
        }
    }
    function quickToolbarOpenHandler(args) {
        if (!ej.base.isNullOrUndefined(args.targetElement) && args.targetElement.nodeName === 'IMG') {
            defaultRTE.getToolbar().querySelector('#custom_tbarbtn_1').parentElement.classList.add('e-overlay');
            defaultRTE.getToolbar().querySelector('#custom_tbarbtn_2').parentElement.classList.add('e-overlay');
            defaultRTE.getToolbar().querySelector('#custom_tbarbtn_3').parentElement.classList.add('e-overlay');
        }

    }
    function quickToolbarClosehandler(args) {
        if (!ej.base.isNullOrUndefined(args.element) && args.element.classList.contains('e-rte-image-popup')) {
            defaultRTE.getToolbar().querySelector('#custom_tbarbtn_1').parentElement.classList.remove('e-overlay');
            defaultRTE.getToolbar().querySelector('#custom_tbarbtn_2').parentElement.classList.remove('e-overlay');
            defaultRTE.getToolbar().querySelector('#custom_tbarbtn_3').parentElement.classList.remove('e-overlay');
        }

    }
    function importContentFromWord() {
        uploadObj.element.click();
    }
    function exportContentToWord() {
        var rteHtmlData = defaultRTE.getHtml();
        var html = `<html><head></head><body>${rteHtmlData}</body></html>`;
        fetch(hostUrl + 'api/RichTextEditor/ExportToDocx', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ html: html }) // Wrap HTML in a JSON object
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                var filename = 'Result.docx';
                // Create a Blob from the response and initiate the download
                return response.blob().then((blob) => ({ blob, filename }));
            })
            .then(({ blob, filename }) => {
                var url = window.URL.createObjectURL(blob); // Create a Blob URL from the response and initiate the download
                var a = document.createElement('a'); // Create an anchor element
                a.href = url;
                a.download = filename;
                document.body.appendChild(a); // Append the anchor element to the document
                a.click(); // Trigger a click on the anchor element to initiate the download
                document.body.removeChild(a); // Remove the anchor element from the document
                window.URL.revokeObjectURL(url); // Revoke the object URL to free up resources
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }

    function exportContentToPDF() {
        var rteHtmlData = defaultRTE.getHtml();
        var html = `<html><head></head><body>${rteHtmlData}</body></html>`;
        fetch(hostUrl + 'api/RichTextEditor/ExportToPdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ html: html }) // Wrap HTML in a JSON object
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.blob();
            })
            .then((blob) => {
                var url = window.URL.createObjectURL(blob); // Create a Blob URL from the response and initiate the download
                var a = document.createElement('a'); // Create an anchor element
                a.href = url;
                a.download = 'Sample.pdf';
                document.body.appendChild(a); // Append the anchor element to the document
                a.click(); // Trigger a click on the anchor element to initiate the download
                document.body.removeChild(a); // Remove the anchor element from the document
                window.URL.revokeObjectURL(url); // Revoke the object URL to free up resources
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }

    function onUploadSuccess(args) {
        defaultRTE.executeCommand('insertHTML', args.e.currentTarget.response, {
            undo: true,
        });
    }
};
    