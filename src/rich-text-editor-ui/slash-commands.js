ej.richtexteditorui.RichTextEditorUI.Inject(ej.richtexteditorui.SlashCommand);

this.default = function () {
    var formatRTE = new ej.richtexteditorui.RichTextEditorUI({
        slashCommandSettings: {
            enable: true,
            items: [
                'Paragraph',
                'Heading 1',
                'Heading 2',
                'Heading 3',
                'Heading 4',
                'NumberedList',
                'BulletList',
                'Blockquote',
                'Table',
                'Link',
                'Image'
            ]
        },
        placeholder: 'Type "/" and choose format.'
    });

    formatRTE.appendTo('#editor');
};