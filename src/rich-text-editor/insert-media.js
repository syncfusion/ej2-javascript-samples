/**
 * Rich Text Editor Insert Media sample
 */
 this.default = function() {
    var hostUrl = 'https://services.syncfusion.com/js/production/';
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'Audio', 'Video', '|', 'SourceCode', 'Undo', 'Redo']
        },
        insertVideoSettings: {             
            saveUrl: hostUrl + 'api/RichTextEditor/SaveFile',             
            removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',             
            path: hostUrl + 'RichTextEditor/'       
        },
        insertAudioSettings: {             
            saveUrl: hostUrl + 'api/RichTextEditor/SaveFile',             
            removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',             
            path: hostUrl + 'RichTextEditor/'       
        }
    });
    defaultRTE.appendTo('#insertMedia');
};
