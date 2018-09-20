this.default = function () {
    //Initialize ColorPicker
    var colorPickerObj = new ej.inputs.ColorPicker({ change: change }, '#color-picker');

     // Triggers while changing colors.
     function change(args) {
        document.getElementById('hex-input').value = args.currentValue.hex;
    }

    var ddlObj = new ej.dropdowns.DropDownList({
            value: 'Picker',
            popupHeight: '200px',
            change: function () {
                colorPickerObj.mode = ddlObj.value;
            }
        },
        '#ddl');

    var button = new ej.buttons.CheckBox({
            checked: true,
            change: function (args) {
                colorPickerObj.showButtons = args.checked;

            }
        },
        '#show-btn');

    var disabled = new ej.buttons.CheckBox({
            checked: false,
            change: function (args) {
                colorPickerObj.disabled = args.checked;
            }
        },
        '#disabled');

    var modeSwitch = new ej.buttons.CheckBox({
            checked: true,
            change: function (args) {
                colorPickerObj.modeSwitcher = args.checked;
            }
        },
        '#mode-switch');

    document.getElementById('hex-input').onchange = function () {
        colorPickerObj.value = document.getElementById('hex-input').value;
    };
};