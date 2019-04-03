/**
 *  Multiline TextBox sample
 */
this.default = function () {
    var textareaObj = new ej.inputs.TextBox({
        placeholder: 'Enter your address',
        floatLabelType: 'Auto'
    });
    textareaObj.appendTo('#default');

     // initialize check box component
     var enabledCheckBox = new ej.buttons.CheckBox({
        checked: false,
        cssClass: 'multiline',
        change: function (args) {
            textareaObj.enabled = !args.checked;
        }
    });
    enabledCheckBox.appendTo('#enabled');
    var readonlyCheckBox = new ej.buttons.CheckBox({
        checked: false,
        cssClass: 'multiline',
        change: function (args) {
            textareaObj.readonly = args.checked;
        }
    });
    readonlyCheckBox.appendTo('#readonly');
    //initialize numeric textbox 
    var numeric = new ej.inputs.NumericTextBox({
        format: '##',
        min: 1,
        max: 20,
        value: 2,
        change: function (args) {
            textareaObj.addAttributes({rows: args.value});
        }
    });
    numeric.appendTo('#rows');
    // initialize dropdown component
    var floatLabel = new ej.dropdowns.DropDownList({
        // set the height of the popup element
        popupHeight: '200px',
        // bind the change event
            change: function(args) {
            switch (args.value) {
                case 'Auto':
                    textareaObj.floatLabelType = 'Auto';
                    break;
                case 'Always':
                    textareaObj.floatLabelType = 'Always';
                    break;
                case 'Never':
                    textareaObj.floatLabelType = 'Never';
                    break;
            }
        }
    });
    floatLabel.appendTo('#select');
};
