this.default = function () {
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();
    var datetimepicker1 = new ej.calendars.DateTimePicker({
        min: new Date(currentYear, currentMonth, 7, 10),
        max: new Date(currentYear, currentMonth, 27, 22, 30),
        value: new Date(currentYear, currentMonth, 14, 10, 30),
        placeholder: 'Choose a datetime'
    });
    datetimepicker1.appendTo('#datetimepicker1');

    var datetimepicker2 = new ej.calendars.DateTimePicker({
        minTime: new Date(currentYear, currentMonth, 7, 10),
        maxTime: new Date(currentYear, currentMonth, 27, 20, 30),
        value: new Date(currentYear, currentMonth, 14, 10, 30),
        placeholder: 'Choose a datetime'
    });
    datetimepicker2.appendTo('#datetimepicker2');
};