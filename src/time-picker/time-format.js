this.default = function () {
    var timepicker = new ej.calendars.TimePicker({
        value: new Date(),
        step: 60,
        format: 'HH:mm'
    });
    timepicker.appendTo('#timepicker');
};