this.default = function () {
    var datepicker = new ej.calendars.DatePicker({
        start: 'Year', 
        depth: 'Year',
        format: 'MMMM y'
    });
    datepicker.appendTo('#datepicker');
};