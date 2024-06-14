/*jshint esversion: 6 */
/**
 * Rich Text Editor import sample
 */
this.default = function () {

    var hostUrl = 'https://services.syncfusion.com/js/production/';

    var importEditor = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: [
                'Undo', 'Redo', '|',    
                {
                    tooltipText: "Import from Word",
                    template:
                        `<button class="e-tbar-btn e-control e-btn e-lib e-icon-btn" tabindex="-1" id="custom_tbarbtn_1" style="width:100%">
                      <span class="e-icons e-rte-import-doc e-btn-icon"></span></button>`,
                    click: importContentFromWord
                },
                '|',
                'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'Formats', 'Alignments', 'blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|', 'CreateLink', 'Image', 'CreateTable', '|', 'ClearFormat', 'SourceCode']
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
    importEditor.appendTo('#importEditor');

    var uploadObj = new ej.inputs.Uploader({
        allowedExtensions: '.docx,.doc,.rtf',
        asyncSettings: {
            saveUrl: hostUrl + 'api/RichTextEditor/ImportFromWord',
        },
        success: onUploadSuccess,
    });
    uploadObj.appendTo('#rteCustomWordUpload');

    (uploadObj.element.closest('.e-upload')).style.display = 'none';

    function importContentFromWord() {
        uploadObj.element.click();
    }

    function onUploadSuccess(args) {
        importEditor.executeCommand('insertHTML', args.e.currentTarget.response, { undo: true });
    }

    function actionCompleteHandler(e) {
        if (e.requestType === 'SourceCode') {
            importEditor.getToolbar().querySelector('#custom_tbarbtn_1').parentElement.classList.add('e-overlay');
        } else if (e.requestType === 'Preview') {
            importEditor.getToolbar().querySelector('#custom_tbarbtn_1').parentElement.classList.remove('e-overlay');
        }
    }
    function quickToolbarOpenHandler(args) {
        if (!ej.base.isNullOrUndefined(args.targetElement) && args.targetElement.nodeName === 'IMG') {
            importEditor.getToolbar().querySelector('#custom_tbarbtn_1').parentElement.classList.add('e-overlay');
        }

    }
    function quickToolbarClosehandler(args) {
        if (!ej.base.isNullOrUndefined(args.element) && args.element.classList.contains('e-rte-image-popup')) {
            importEditor.getToolbar().querySelector('#custom_tbarbtn_1').parentElement.classList.remove('e-overlay');
        }

    }
};