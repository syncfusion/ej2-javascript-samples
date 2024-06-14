/*jshint esversion: 6 */
/**
 * Rich Text Editor print sample
 */
this.default = function () {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'Blockquote',
                'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo', 'Print']
        }
    });
    defaultRTE.appendTo('#defaultRTE');
};
