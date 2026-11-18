this.default = function () {
    var propertiesRTE = new ej.richtexteditorui.RichTextEditorUI({
        value: '<p>Welcome to Rich Text Editor</p>',
        valueFormat: 'html',
        enablePersistence: true,
        saveInterval: 100,
        change: function () {
            log(propertiesRTE.value);
        }
    });
    propertiesRTE.appendTo('#editor');

    var output = document.getElementById('value-format-output');

    function log(value) {
        var text;

        if (value === undefined || value === null) {
            text = String(value);
        } else if (typeof value === 'string') {
            text = value;
        } else {
            text = JSON.stringify(value, null, 2);
        }

        output.textContent = text;
    }

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

            log(propertiesRTE.value);
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
        checked: true,
        label: 'Enable Persistence',
        change: function (args) {
            propertiesRTE.enablePersistence = args.checked;
            propertiesRTE.dataBind();
        }
    });

    enablePersistenceCheckbox.appendTo('#enablePersistence');
    log(propertiesRTE.value);
};