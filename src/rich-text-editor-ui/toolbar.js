this.default = function () {
    var toolbarRTE = new ej.richtexteditorui.RichTextEditorUI({
        height: '350px',
        toolbarSettings: {
            items: [
                'Undo', 'Redo', '|',
                'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
                'FontColor', 'BackgroundColor', '|',
                'Formats', 'Alignment', '|',
                'Table', 'Image', 'Link', '|',
                'FontName', 'FontSize', '|',
                'NumberFormatList', 'BulletFormatList', '|',
                'Subscript', 'Superscript'
            ],
            type: 'Expanded',
            position: 'Top'
        }
    });

    toolbarRTE.appendTo('#editor');

    var toolbarTypeData = [
        { text: 'Expanded', value: 'Expanded' },
        { text: 'MultiRow', value: 'MultiRow' },
        { text: 'Scrollable', value: 'Scrollable' }
    ];

    var toolbarPositionData = [
        { text: 'Top', value: 'Top' },
        { text: 'Bottom', value: 'Bottom' }
    ];

    var toolbarTypeDropdown = new ej.dropdowns.DropDownList({
        dataSource: toolbarTypeData,
        fields: { text: 'text', value: 'value' },
        value: 'Expanded',
        popupHeight: '200px',
        floatLabelType: 'Auto',
        change: function (args) {
            toolbarRTE.toolbarSettings.type = args.value;
            toolbarRTE.dataBind();
        }
    });

    toolbarTypeDropdown.appendTo('#toolbarType');

    var toolbarPositionDropdown = new ej.dropdowns.DropDownList({
        dataSource: toolbarPositionData,
        fields: { text: 'text', value: 'value' },
        value: 'Top',
        popupHeight: '150px',
        floatLabelType: 'Auto',
        change: function (args) {
            toolbarRTE.toolbarSettings.position = args.value;
            toolbarRTE.dataBind();
        }
    });

    toolbarPositionDropdown.appendTo('#toolbarPosition');

    var float = new ej.buttons.CheckBox({
        checked: true,
        label: 'Enable Floating',
        change: function (args) {
            toolbarRTE.toolbarSettings.enableFloating = args.checked;
            toolbarRTE.dataBind();
        }
    });

    float.appendTo('#float');
};  