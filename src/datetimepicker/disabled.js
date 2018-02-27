this.default = function () {
    var datetimepicker = new ej.calendars.DateTimePicker({
        renderDayCell: disableDate
    });
    datetimepicker.appendTo('#datetimepicker');

    function disableDate(args) {
        if (args.date.getDay() === 0 || args.date.getDay() === 6) {
            args.isDisabled = true;
        }
    }
};