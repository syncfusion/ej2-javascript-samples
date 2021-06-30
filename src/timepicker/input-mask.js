this.default = function () {
    var timepicker = new ej.calendars.TimePicker({
        format: "h:mm a",
        enableMask: true
    });
    timepicker.appendTo('#timepicker');
};