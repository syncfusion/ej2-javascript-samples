this.default = function () {
    // Render the Numeric Textbox
    var numeric = new ej.inputs.NumericTextBox({
        format: '###.### km',
        value: 250,
        min: 0
    });
    numeric.appendTo('#numeric');
    // Render the Percentage Textbox
    var percent = new ej.inputs.NumericTextBox({
        format: '### \'%\'',
        min: 0,
        value: 25,
        max: 100
    });
    percent.appendTo('#percent');
    // Render the Currency Textbox
    var currency = new ej.inputs.NumericTextBox({
        format: '$ ###.##',
        min: 0,
        value: 1025
    });
    currency.appendTo('#currency');
};