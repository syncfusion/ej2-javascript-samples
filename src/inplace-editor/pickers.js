this.default = function () {
    var dateObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        type: 'Date',
        value: new Date('5/23/2017'),
        model: {
            placeholder: 'Select a date',
        }
    });
    dateObj.appendTo('#datePickerEle');
    var timeObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        type: 'Time',
        value: new Date('5/23/2017 12:00 PM'),
        model: {
            placeholder: 'Select a time',
        }
    });
    timeObj.appendTo('#timePickerEle');
    var dateTimeObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        type: 'DateTime',
        value: new Date('5/23/2017 12:00 PM'),
        model: {
            placeholder: 'Select a date and time'
        }
    });
    dateTimeObj.appendTo('#dateTimePickerEle');
    var dateRangeObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        type: 'DateRange',
        value: [new Date('5/23/2017'),new Date('7/5/2017')],
        model: {
            placeholder: 'Select a date range',
        }
    });
    dateRangeObj.appendTo('#dateRangePickerEle');
    var editorMode = new ej.dropdowns.DropDownList({
        width: '90%',
        change: changeEditorMode
    });
    editorMode.appendTo('#editorMode_pickers');
    function changeEditorMode(e) {
        var mode = e.itemData.value;
        dateObj.mode = mode;
        dateObj.dataBind();
        timeObj.mode = mode;
        timeObj.dataBind();
        dateTimeObj.mode = mode;
        dateTimeObj.dataBind();
        dateRangeObj.mode = mode;
        dateRangeObj.dataBind();
    }
    var pickerspane = document.getElementById('right-pane');
    if(pickerspane) {
    pickerspane.onscroll = function() {
        if (editorMode.value === 'Inline') { return; }
        if (dateObj && (dateObj.element.querySelectorAll('.e-editable-open').length > 0)) {
            dateObj.enableEditMode = false;
        }
        if (timeObj && (timeObj.element.querySelectorAll('.e-editable-open').length > 0)) {
            timeObj.enableEditMode = false;
        }
        if (dateObj && (dateTimeObj.element.querySelectorAll('.e-editable-open').length > 0)) {
            dateTimeObj.enableEditMode = false;
        }
        if (dateObj && (dateRangeObj.element.querySelectorAll('.e-editable-open').length > 0)) {
            dateRangeObj.enableEditMode = false;
        }
    };
}
};