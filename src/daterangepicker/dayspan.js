this.default = function () {
    var daterangepicker = new ej.calendars.DateRangePicker({
        placeholder: 'Select a range', 
        minDays: 5, 
        maxDays: 10
    });
    daterangepicker.appendTo('#daterangepicker');
};