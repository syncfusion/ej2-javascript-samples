this.default = function () {
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();
    var datepicker = new ej.calendars.DatePicker({
        min: new Date(currentYear, currentMonth, 7),
        max: new Date(currentYear, currentMonth, 27),
        value: new Date(currentYear, currentMonth, 14)
    });
    datepicker.appendTo('#datepicker');
};