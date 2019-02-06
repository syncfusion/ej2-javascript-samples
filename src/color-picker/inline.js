/**
 * Inline Sample
 */
this.default = function () {

    var defaultObj = new ej.inputs.ColorPicker({
        mode: 'Palette',
        modeSwitcher: false,
        inline: true,
        showButtons: false,
        change: change
    });
    defaultObj.appendTo('#inline-color-palette');

    defaultObj = new ej.inputs.ColorPicker({
        mode: 'Picker',
        modeSwitcher: false,
        inline: true,
        showButtons: false,
        change: change
    });
    defaultObj.appendTo('#inline-color-picker');

    if (ej.base.Browser.isDevice) {
        document.getElementById('colorpicker-control').classList.add('e-mobile-control');

    }

    /**
     * Triggers while changing colors
     */
    function change(args) {
        document.getElementById('preview').style.backgroundColor = args.currentValue.rgba;
    }
};