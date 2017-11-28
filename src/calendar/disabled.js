this.default = function () {
    var calendar = new ej.calendars.Calendar({
        renderDayCell: disableDate, change: valueChange
    });
    calendar.appendTo('#calendar');
    function valueChange(args) {
        (document.getElementById('date_label')).textContent = 'Selected Value: ' + args.value.toLocaleDateString();
    }
    function disableDate(args) {
        if (args.date.getDay() === 0 || args.date.getDay() === 6) {
            args.isDisabled = true;
        }
    }
};