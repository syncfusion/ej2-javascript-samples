this.default = function () {
    var daterangepicker = new ej.calendars.DateRangePicker({
        format: "dd'/'MMM'/'yy hh:mm a",// custom format 
        startDate: new Date(new Date().setDate(1)),
        endDate: new Date(new Date().setDate(20))
    });
    daterangepicker.appendTo('#daterangepicker');

    var dropDownInstance = new ej.dropdowns.DropDownList({
        placeholder: 'Format',
        floatLabelType: 'Auto',
        change: onChange
    });
    dropDownInstance.appendTo('#dateformats');

    function onChange() {
        //dropdown change event handler
        daterangepicker.format = dropDownInstance.value;
        daterangepicker.separator = (dropDownInstance.text === 'yyyy/MM/dd HH:mm') ? 'to' : '-';
    }
};