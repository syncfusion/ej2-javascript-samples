this.default = function () {
    // Render numeric textbox with specific range
    var numeric = new ej.inputs.NumericTextBox({
        min: 10,
        max: 100,
        value: 15
    });
    numeric.appendTo('#numeric');
    // Render Button control in properties panel
    var buttonApply = new ej.buttons.Button();
    buttonApply.appendTo('#buttonApply');
    // After clicking apply button- 'min', 'max' and 'increment step' details will be received from properties panel
    // and set it to Numeric Textbox.
    document.getElementById('buttonApply').onclick = function () {
        var min = parseFloat(document.getElementById('min').value);
        var max = parseFloat(document.getElementById('max').value);
        var step = parseFloat(document.getElementById('step').value);
        numeric.min = min;
        numeric.max = max;
        numeric.step = isNaN(step) ? 1 : step;
    };
};
