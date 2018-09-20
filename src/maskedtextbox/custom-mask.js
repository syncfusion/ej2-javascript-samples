this.default = function () {
    var mask1 = new ej.inputs.MaskedTextBox({
        mask: '00:00 >PM',
        // Custom characters to specify time value
        customCharacters: {
            P: 'P,A,a,p',
            M: 'M,m'
        },
        floatLabelType: 'Never'
    });
    mask1.appendTo('#mask1');
    var mask2 = new ej.inputs.MaskedTextBox({
        // Mask in range format
        mask: '[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9]',
        floatLabelType: 'Never'
    });
    mask2.appendTo('#mask2');
};