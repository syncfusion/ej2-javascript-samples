this.default = function() {
    var checkBoxObj = new ej.buttons.CheckBox({ label: 'CheckBox: true', checked: true, change: onChange });
    checkBoxObj.appendTo('#checked');

    checkBoxObj = new ej.buttons.CheckBox({ label: 'Checked, Disabled', disabled: true, checked: true });
    checkBoxObj.appendTo('#disabled');

    checkBoxObj = new ej.buttons.CheckBox({ label: 'Indeterminate, Disabled', indeterminate: true, disabled: true });
    checkBoxObj.appendTo('#indeterminate');

    // function to handle the CheckBox change event
    function onChange(args) {
        this.label = 'CheckBox: ' + args.checked;
    }
};