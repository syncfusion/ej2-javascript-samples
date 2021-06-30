this.default = function () {
    var datetimepicker = new ej.calendars.DateTimePicker({
        format: "M/d/yyyy hh:mm a",
        enableMask: true
    });
    datetimepicker.appendTo('#datetimepicker');
};