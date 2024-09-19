/*jshint esversion: 6 */
/**
 * Rich Text Editor import sample
 */
this.default = function () {

    var hostUrl = 'https://services.syncfusion.com/js/production/';

    var importEditor = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: [
                'Undo', 'Redo', '|', 'ImportWord', '|',
                'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|', 'CreateLink', 'Image', 'CreateTable', '|', 'ClearFormat', 'SourceCode']
        },
        insertImageSettings: {
            saveUrl: hostUrl + 'api/RichTextEditor/SaveFile',
            removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',
            path: hostUrl + 'RichTextEditor/'
        },
        importWord: {
            serviceUrl: hostUrl + 'api/RichTextEditor/ImportFromWord',
        },
        enableXhtml: true,
    });
    importEditor.appendTo('#importEditor');
};