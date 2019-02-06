this.default = function () {
    var datetimepicker = new ej.calendars.DateTimePicker({
        format: 'dd-MMM-yy hh:mm a',
        value: new Date()
    });
    datetimepicker.appendTo('#datetimepicker');

    var dropDownInstance = new ej.dropdowns.DropDownList({
        placeholder: 'Format',
        floatLabelType: 'Auto',
        change: onChange
    });
    dropDownInstance.appendTo('#dateformats');

    function onChange() {
        //dropdown change event handler
        datetimepicker.format = dropDownInstance.value;
    }
};