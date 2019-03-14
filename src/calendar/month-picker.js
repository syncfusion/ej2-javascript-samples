this.default = function () {
    var calendar = new ej.calendars.Calendar({
        start: 'Year',
        depth: 'Year',
        change: valueChange
    });
    calendar.appendTo('#calendar');
    var Intl = new ej.base.Internationalization();
    function valueChange(args) {
        var value = Intl.formatDate(args.value, { type: 'dateTime', format: 'MMMM y' });
        document.getElementById('date_label').textContent = 'Selected Value: ' + value;
    }
};