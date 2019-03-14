this.default = function () {
    var daterangepicker = new ej.calendars.DateRangePicker({
        start: 'Year', 
        depth: 'Year',
        format: "MMM yyyy" 
    });
    daterangepicker.appendTo('#daterangepicker');
};