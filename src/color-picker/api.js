this.default = function () {
    //Initialize ColorPicker
    var colorPickerObj = new ej.inputs.ColorPicker({ change: change }, '#color-picker');
    
    var hexInput = document.getElementById('hex-input');

     // Triggers while changing colors.
     function change(args) {
        hexInput.value = args.currentValue.hex;
    }

    var ddlObj = new ej.dropdowns.DropDownList({
            value: 'Picker',
            popupHeight: '200px',
            change: function () {
                colorPickerObj.mode = ddlObj.value;
            }
        },
        '#ddl');

    new ej.buttons.CheckBox({
            checked: true,
            change: function (args) {
                colorPickerObj.showButtons = args.checked;

            }
        },
        '#show-btn');

    new ej.buttons.CheckBox({
            checked: false,
            change: function (args) {
                colorPickerObj.disabled = args.checked;
            }
        },
        '#disabled');

    new ej.buttons.CheckBox({
            checked: true,
            change: function (args) {
                colorPickerObj.modeSwitcher = args.checked;
            }
        },
        '#mode-switch');

    hexInput.oninput = function () {
        var val = hexInput.value;
        // Sets to color picker default color value if user types the invalid hex code.
        colorPickerObj.value = val && val.length > 2 ? (val[0] !== '#' ? '#' + val : val) : '#008000';
    };
};