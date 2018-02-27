this.default = function () {
    var datepicker = new ej.calendars.DatePicker({
        format: 'dd-MMM-yy',
        value: new Date(),
    });
    datepicker.appendTo('#datepicker');
    var dropDownInstance = new ej.dropdowns.DropDownList({
        placeholder: 'Format',
        floatLabelType: 'Auto',
        change: onChange
    });
    dropDownInstance.appendTo('#dateformats');

    function onChange() {
        //dropdown change event handler
        datepicker.format = dropDownInstance.value;
    }
};