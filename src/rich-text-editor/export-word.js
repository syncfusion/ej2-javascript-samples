/*jshint esversion: 6 */
/**
 * Rich Text Editor export sample
 */
this.default = function () {

    var hostUrl = 'https://services.syncfusion.com/js/production/';

    var exportEditor = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: [
                'Undo', 'Redo', '|',
                {
                    tooltipText: "Export to Word",
                    template:
                        `<button class="e-tbar-btn e-control e-btn e-lib e-icon-btn" tabindex="-1" id="custom_tbarbtn_2" style="width:100%">
                  <span class="e-icons e-rte-export-doc e-btn-icon"></span></button>`,
                    click: exportContentToWord
                },
                {
                    tooltipText: "Export to PDF",
                    template:
                        `<button class="e-tbar-btn e-control e-btn e-lib e-icon-btn" tabindex="-1" id="custom_tbarbtn_3" style="width:100%">
                  <span class="e-icons e-rte-export-pdf e-btn-icon"></span></button>`,
                    click: exportContentToPDF
                }, '|',
                'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|', 'CreateLink', 'Image', 'CreateTable', '|', 'ClearFormat', 'SourceCode']
        },
        insertImageSettings: {
            saveUrl: hostUrl + 'api/RichTextEditor/SaveFile',
            removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',
            path: hostUrl + 'RichTextEditor/'
        },
        enableXhtml: true,
        actionComplete: actionCompleteHandler,
        beforeQuickToolbarOpen: quickToolbarOpenHandler,
        quickToolbarClose: quickToolbarClosehandler
    });
    exportEditor.appendTo('#exportEditor');

    function actionCompleteHandler(e) {
        if (e.requestType === 'SourceCode') {
            exportEditor.getToolbar().querySelector('#custom_tbarbtn_2').parentElement.classList.add('e-overlay');
            exportEditor.getToolbar().querySelector('#custom_tbarbtn_3').parentElement.classList.add('e-overlay');
        } else if (e.requestType === 'Preview') {
            exportEditor.getToolbar().querySelector('#custom_tbarbtn_2').parentElement.classList.remove('e-overlay');
            exportEditor.getToolbar().querySelector('#custom_tbarbtn_3').parentElement.classList.remove('e-overlay');
        }
    }
    function quickToolbarOpenHandler(args) {
        if (!ej.base.isNullOrUndefined(args.targetElement) && args.targetElement.nodeName === 'IMG') {
            exportEditor.getToolbar().querySelector('#custom_tbarbtn_2').parentElement.classList.add('e-overlay');
            exportEditor.getToolbar().querySelector('#custom_tbarbtn_3').parentElement.classList.add('e-overlay');
        }

    }
    function quickToolbarClosehandler(args) {
        if (!ej.base.isNullOrUndefined(args.element) && args.element.classList.contains('e-rte-image-popup')) {
            exportEditor.getToolbar().querySelector('#custom_tbarbtn_2').parentElement.classList.remove('e-overlay');
            exportEditor.getToolbar().querySelector('#custom_tbarbtn_3').parentElement.classList.remove('e-overlay');
        }

    }

    function exportContentToWord() {
        var rteHtmlData = exportEditor.getHtml();
        var html = `<html><head></head><body>${rteHtmlData}</body></html>`;
        fetch(hostUrl + 'api/RichTextEditor/ExportToDocx', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ html: html }) // Wrap HTML in a JSON object
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                var filename = 'Result.docx';
                // Create a Blob from the response and initiate the download
                return response.blob().then(blob => ({ blob, filename }));
            })
            .then(({ blob, filename }) => {
                var url = window.URL.createObjectURL(blob);       // Create a Blob URL from the response and initiate the download    
                var a = document.createElement('a');              // Create an anchor element
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);                       // Append the anchor element to the document
                a.click();                                          // Trigger a click on the anchor element to initiate the download
                document.body.removeChild(a);                       // Remove the anchor element from the document
                window.URL.revokeObjectURL(url);                    // Revoke the object URL to free up resources
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }

    function exportContentToPDF() {
        var rteHtmlData = exportEditor.getHtml();
        var html = `<html><head></head><body>${rteHtmlData}</body></html>`;
        fetch(hostUrl + 'api/RichTextEditor/ExportToPdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ html: html }) // Wrap HTML in a JSON object
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.blob();
            })
            .then(blob => {
                var url = window.URL.createObjectURL(blob);       // Create a Blob URL from the response and initiate the download
                var a = document.createElement('a');   // Create an anchor element
                a.href = url;
                a.download = 'Sample.pdf';
                document.body.appendChild(a);             // Append the anchor element to the document
                a.click();                                // Trigger a click on the anchor element to initiate the download
                document.body.removeChild(a);             // Remove the anchor element from the document
                window.URL.revokeObjectURL(url);          // Revoke the object URL to free up resources
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }
};