this.default = function () {
    // Render the Numeric Textbox
    var numeric = new ej.inputs.NumericTextBox({
        value: 10
    });
    numeric.appendTo('#numeric');
    // Render the Percentage Textbox
    var percent = new ej.inputs.NumericTextBox({
        format: 'p2',
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.01
    });
    percent.appendTo('#percent');
    // Render the Currency Textbox
    var currency = new ej.inputs.NumericTextBox({
        format: 'c2',
        value: 100
    });
    currency.appendTo('#currency');
};