this.default = function () {
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();
    var datetimepicker = new ej.calendars.DateTimePicker({
        min: new Date(currentYear, currentMonth, 7, 10),
        max: new Date(currentYear, currentMonth, 27, 22, 30),
        value: new Date(currentYear, currentMonth, 14, 10, 30),
        placeholder: 'Choose a datetime'
    });
    datetimepicker.appendTo('#datetimepicker');
};