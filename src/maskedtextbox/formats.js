this.default = function () {
    var ele1 = document.getElementById('input1');
    var ele3 = document.getElementById('val1');
    var ele4 = document.getElementById('val2');
    // Render dropdown to set prompt character for Masked Textbox
    var ddlObj = new ej.dropdowns.DropDownList({
        popupHeight: '200px',
        change: function () {
            mask.setProperties({ promptChar: ddlObj.value });
            ele3.innerHTML = mask.value;
            ele4.innerHTML = mask.getMaskedValue();
        }
    });
    ddlObj.appendTo('#ddl');
    // Render the Masked Textbox
    var mask = new ej.inputs.MaskedTextBox({
        mask: '(999)-999-9999',
        change: function (args) {
            ele3.innerHTML = args.value;
            ele4.innerHTML = args.maskedValue;
        },
        floatLabelType: 'Never'
    });
    ele1.value = '(999)-999-9999';
    mask.appendTo('#mask1');
    ele4.innerHTML = mask.getMaskedValue();
    // Mask will be updated for MaskedTextBox, whenever mask format from properties panel has been changed
    ele1.oninput = function () {
        var start = ele1.selectionStart;
        var end = ele1.selectionEnd;
        mask.setProperties({ mask: ele1.value });
        ele1.setSelectionRange(start, end);
        ele3.innerHTML = mask.value;
        ele4.innerHTML = mask.getMaskedValue();
    };
};