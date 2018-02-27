this.default = function () {
    var datepicker = new ej.calendars.DatePicker({
        renderDayCell: disableDate
    });
    datepicker.appendTo('#datepicker');

    function disableDate(args) {
        if (args.date.getDay() === 0 || args.date.getDay() === 6) {
            args.isDisabled = true;
        }
    }
};