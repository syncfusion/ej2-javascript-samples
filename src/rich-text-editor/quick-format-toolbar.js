/*jshint esversion: 6 */
/**
 * Rich Text Editor text quick toolbar sample
 */
this.default = function() {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        quickToolbarSettings: {
            text: ['FormatPainter', 'Bold', 'Italic', 'Underline', 'Formats', '-', 'Alignments', 'OrderedList', 'UnorderedList', 'CreateLink', 'Image']
        },
        toolbarSettings: {
            type: 'MultiRow',
            enableFloating: false,
        },
    });
    defaultRTE.appendTo("#quickRTE");
};
    