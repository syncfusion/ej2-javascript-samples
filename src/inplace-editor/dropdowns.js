this.default = function () {
    var autocompleteData = ['Australia', 'Bermuda', 'Canada', 'Cameroon', 'Denmark', 'Finland', 'Greenland', 'Poland'];
    var editObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        type: 'AutoComplete',
        value: 'Australia',
        model: {
            dataSource: autocompleteData,
            placeholder: ' Type to search country'
        },
    });
    editObj.appendTo('#autoCompleteEle');
    var multiObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        type: 'MultiSelect',
        popupSettings: {
            model: { width: 'auto' }
        },
        value: ['Canada', 'Bermuda'],
        model: {
            dataSource: autocompleteData,
            placeholder: 'Choose the countries',
            mode: 'Box'
        }
    });
    multiObj.appendTo('#multiSelectEle');
    var comboObbj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        type: 'ComboBox',
        value: 'Finland',
        model: {
            dataSource: autocompleteData,
            placeholder: 'Find a country'
        }
    });
    comboObbj.appendTo('#comboBoxEle');
    var dropObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        type: 'DropDownList',
        value: 'Canada',
        model: {
            dataSource: autocompleteData,
            placeholder: 'Find a country'
        }
    });
    dropObj.appendTo('#dropdownEle');
    var editorMode = new ej.dropdowns.DropDownList({
        width: '90%',
        change: changeEditorMode
    });
    editorMode.appendTo('#editorMode_dropdowns');
    function changeEditorMode(e) {
        var mode = e.itemData.value;
        editObj.mode = mode;
        editObj.dataBind();
        multiObj.mode = mode;
        multiObj.dataBind();
        comboObbj.mode = mode;
        comboObbj.dataBind();
        dropObj.mode = mode;
        dropObj.dataBind();
    }
    var dropdownpane = document.getElementById('right-pane');
    if(dropdownpane) {
    dropdownpane.onscroll = function() {
        if (editorMode.value === 'Inline') { return; }
        if (editObj && (editObj.element.querySelectorAll('.e-editable-open').length > 0)) {
            editObj.enableEditMode = false;
        }
        if (multiObj && (multiObj.element.querySelectorAll('.e-editable-open').length > 0)) {
            multiObj.enableEditMode = false;
        }
        if (comboObbj && (comboObbj.element.querySelectorAll('.e-editable-open').length > 0)) {
            comboObbj.enableEditMode = false;
        }
        if (dropObj && (dropObj.element.querySelectorAll('.e-editable-open').length > 0)) {
            dropObj.enableEditMode = false;
        }
    };
}
};