this.default = function () {
    var editor = new ej.richtexteditorui.RichTextEditorUI({
        placeholder: 'Type something ...',
        toolbarSettings: {
            enable: false
        },
        quickToolbarSettings: {
            text: [
                'Undo', 'Redo', '|',
                'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
                'FontColor', 'BackgroundColor', '|',
                'Formats', 'Alignment', '|',
                'Table', 'Image', 'Link', '|',
                'FontName', 'FontSize', '|',
                'NumberFormatList', 'BulletFormatList', '|',
                'Subscript', 'Superscript'
            ]
        }
    });

    editor.appendTo('#editor');
};