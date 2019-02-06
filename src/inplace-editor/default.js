this.default = function () {
    var editObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        type: 'Text',
        value: 'Andrew',
        submitOnEnter: true,
        model: {
            placeholder: 'Enter employee name'
        },
        popupSettings: {
            title: 'Enter Employee Name'
        }
    });
    editObj.appendTo('#inplace_editor');
    var numericObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        type: 'Numeric',
        value: '$100.00',
        model: {
            format: 'c2',
            value: 100,
            placeholder: 'Currency format'
        }
    });
    numericObj.appendTo('#numericTextBoxEle');
    var maskedObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        type: 'Mask',
        value: '012-345-6789',
        model: {
            mask: '000-000-0000'
        }
    });
    maskedObj.appendTo('#maskedTextBoxEle');
    var editorMode = new ej.dropdowns.DropDownList({
        width: '90%',
        change: changeEditorMode
    });
    editorMode.appendTo('#editorMode_default');
    var editableOn = new ej.dropdowns.DropDownList({
        width: '90%',
        change: onEditableOn
    });
    editableOn.appendTo('#editableon');
    function changeEditorMode(e) {
        var mode = e.itemData.value;
        editObj.mode = mode;
        editObj.dataBind();
        numericObj.mode = mode;
        numericObj.dataBind();
        maskedObj.mode = mode;
        maskedObj.dataBind();
    }
    var checkBoxObj = new ej.buttons.CheckBox({ checked: true, change: onChange, labelPosition: 'Before' });
    checkBoxObj.appendTo('#showbuttons');
    function onChange(args) {
        editObj.showButtons = args.checked;
        numericObj.showButtons = args.checked;
        maskedObj.showButtons = args.checked;
    }
    var enableCheckObj = new ej.buttons.CheckBox({ checked: false, change: onChangeEnable, labelPosition: 'Before' });
    enableCheckObj.appendTo('#editorEnable');
    function onChangeEnable(args) {
        editObj.disabled = args.checked;
        numericObj.disabled = args.checked;
        maskedObj.disabled = args.checked;
    }
    function onEditableOn(e) {
        if (e.itemData.value === 'Click') {
            editObj.editableOn = 'Click';
            numericObj.editableOn = 'Click';
            maskedObj.editableOn = 'Click';
        }
        else if (e.itemData.value === 'DblClick') {
            editObj.editableOn = 'DblClick';
            numericObj.editableOn = 'DblClick';
            maskedObj.editableOn = 'DblClick';
        }
        else {
            editObj.editableOn = 'EditIconClick';
            numericObj.editableOn = 'EditIconClick';
            maskedObj.editableOn = 'EditIconClick';
        }
        editObj.dataBind();
    }
    var defaultpane = document.getElementById('right-pane');
    if(defaultpane) {
    defaultpane.onscroll = function () {
        if (editorMode.value === 'Inline') { return; }
        if (editObj && (editObj.element.querySelectorAll('.e-editable-open').length > 0)) {
            editObj.enableEditMode = false;
        }
        if (maskedObj && (maskedObj.element.querySelectorAll('.e-editable-open').length > 0)) {
            maskedObj.enableEditMode = false;
        }
        if (numericObj && (numericObj.element.querySelectorAll('.e-editable-open').length > 0)) {
            numericObj.enableEditMode = false;
        }
    };
}
};
