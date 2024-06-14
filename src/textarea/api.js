/**
 * Sample for Textarea api functionalities.
 */
this.default = function () {
    var textareaObj = new ej.inputs.TextArea({
        placeholder: 'Enter your comments',
        floatLabelType: 'Auto'
    });
    textareaObj.appendTo('#api');
    var enabledCheckBox = new ej.buttons.CheckBox({
        checked: true,
        cssClass: 'api',
        // bind the change event
        change: function (args) {
            textareaObj.enabled = args.checked;
        }
    });
    enabledCheckBox.appendTo('#enabled');
    var readonlyCheckBox = new ej.buttons.CheckBox({
        checked: false,
        cssClass: 'api',
        // bind the change event
        change: function (args) {
            textareaObj.readonly = args.checked;
        }
    });
    readonlyCheckBox.appendTo('#readonly');
    var showClearIcon = new ej.buttons.CheckBox({
        checked: false,
        cssClass: 'api',
        // bind the change event
        change: function (args) {
            textareaObj.showClearButton = args.checked;
        }
    });
    showClearIcon.appendTo('#clearicon');
    var rows = new ej.inputs.NumericTextBox({
        format: '##',
        min: 1,
        max: 10,
        value: 2,
        // bind the change event
        change: function (args) {
            textareaObj.rows = args.value;
        }
    });
    rows.appendTo('#rows');
    var cols = new ej.inputs.NumericTextBox({
        format: '##',
        min: 5,
        max: 40,
        value: 20,
        // bind the change event
        change: function (args) {
            textareaObj.cols = args.value;
        }
    });
    cols.appendTo('#cols');
    var maxLength = new ej.inputs.NumericTextBox({
        format: '##',
        value: -1,
        // bind the change event
        change: function (args) {
            textareaObj.maxLength = args.value;
        }
    });
    maxLength.appendTo('#maxlength');
    var value = new ej.inputs.TextBox({
        value: '',
        placeholder: 'Enter a value',
        // bind the change event
        change: function (args) {
            textareaObj.value = args.value;
        }
    });
    value.appendTo('#value');
};