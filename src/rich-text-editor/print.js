/*jshint esversion: 6 */
/**
 * RichTextEditor print sample
 */
this.default = function () {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments',
                'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo', 'Print']
        }
    });
    defaultRTE.appendTo('#defaultRTE');
};
