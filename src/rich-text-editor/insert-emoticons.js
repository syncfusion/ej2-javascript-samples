/*jshint esversion: 6 */
/**
 * Rich Text Editor insert emoticons sample
 */
this.default = function() {
    var emojiPickerRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList',
                'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'EmojiPicker',
                '|', 'Undo', 'Redo'
            ]
        },
    });
    emojiPickerRTE.appendTo('#emojiPickerRTE');
};      