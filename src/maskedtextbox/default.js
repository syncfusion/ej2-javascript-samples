this.default = function () {
    // Render Masked Textbox with default mask
    var mask = new ej.inputs.MaskedTextBox({
        mask: '000-000-0000'
    });
    mask.appendTo('#mask1');
    var mask2 = new ej.inputs.MaskedTextBox({
        mask: '>LL / LLL'
    });
    mask2.appendTo('#mask2');
    var mask3 = new ej.inputs.MaskedTextBox({
        mask: '00/00/0000'
    });
    mask3.appendTo('#mask3');
    var mask4 = new ej.inputs.MaskedTextBox({
        mask: '>AAAAA-AAAAA-AAAAA-AAAAA'
    });
    mask4.appendTo('#mask4');
};