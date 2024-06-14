/**
 * Rich Text Editor Insert Media sample
 */
 this.default = function() {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'Audio', 'Video', '|', 'SourceCode', 'Undo', 'Redo']
        },
    });
    defaultRTE.appendTo('#insertMedia');
};
