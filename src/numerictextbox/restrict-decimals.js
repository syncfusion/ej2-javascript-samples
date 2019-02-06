this.default = function () {
    // Render the Numeric Textbox with decimal places as 3
    var numeric = new ej.inputs.NumericTextBox({
        format: 'n3',
        decimals: 3,
        validateDecimalOnType: true,
        value: 10
    });
    numeric.appendTo('#numeric');
    // Render the Percentage Textbox with decimal places as 3
    var percent = new ej.inputs.NumericTextBox({
        format: 'p3',
        decimals: 3,
        validateDecimalOnType: true,
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.01
    });
    percent.appendTo('#percent');
    // Render the Currency Textbox with decimal places as 3
    var currency = new ej.inputs.NumericTextBox({
        format: 'c3',
        decimals: 3,
        validateDecimalOnType: true,
        value: 100
    });
    currency.appendTo('#currency');
};