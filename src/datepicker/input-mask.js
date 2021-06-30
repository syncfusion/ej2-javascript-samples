this.default = function () {
    var datepicker = new ej.calendars.DatePicker({
        format: "M/d/yyyy",
        enableMask: true
    });
    datepicker.appendTo('#datepicker');
};