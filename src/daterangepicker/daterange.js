this.default = function () {
    var daterangepicker = new ej.calendars.DateRangePicker({
        min: new Date('1/15/2017'),
        max: new Date('12/20/2017')
    });
    daterangepicker.appendTo('#daterangepicker');
};