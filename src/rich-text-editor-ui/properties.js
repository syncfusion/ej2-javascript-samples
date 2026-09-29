this.default = function () {
    var propertiesRTE = new ej.richtexteditorui.RichTextEditorUI({
        value: '<p>Welcome to Rich Text Editor</p>',
        valueFormat: 'html'
    });

    propertiesRTE.appendTo('#editor');

    var valueFormatData = [
        { text: 'HTML', value: 'html' },
        { text: 'JSON', value: 'json' }
    ];

    var valueFormatDropdown = new ej.dropdowns.DropDownList({
        dataSource: valueFormatData,
        fields: { text: 'text', value: 'value' },
        value: 'html',
        popupHeight: '150px',
        floatLabelType: 'Auto',
        change: function (args) {
            var currentValue = propertiesRTE.value;
            propertiesRTE.valueFormat = args.value;
            propertiesRTE.value = currentValue;
            propertiesRTE.dataBind();
        }
    });

    valueFormatDropdown.appendTo('#valueFormat');

    var enableCheckbox = new ej.buttons.CheckBox({
        checked: true,
        label: 'Enable',
        change: function (args) {
            propertiesRTE.enable = args.checked;
        }
    });

    enableCheckbox.appendTo('#enable');

    var readonlyCheckbox = new ej.buttons.CheckBox({
        checked: false,
        label: 'Readonly',
        change: function (args) {
            propertiesRTE.readonly = args.checked;
        }
    });

    readonlyCheckbox.appendTo('#readonly');

    var enableRTLCheckbox = new ej.buttons.CheckBox({
        checked: false,
        label: 'Enable RTL',
        change: function (args) {
            propertiesRTE.enableRtl = args.checked;
        }
    });

    enableRTLCheckbox.appendTo('#enableRTL');

    var enablePersistenceCheckbox = new ej.buttons.CheckBox({
        checked: false,
        label: 'Enable Persistence',
        change: function (args) {
            propertiesRTE.enablePersistence = args.checked;
        }
    });

    enablePersistenceCheckbox.appendTo('#enablePersistence');
};