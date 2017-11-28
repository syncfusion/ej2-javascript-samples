this.default = function () {
    var calendar = new ej.calendars.Calendar({
        min: new Date('05/05/2017'),
        max: new Date('05/27/2017'),
        change: startDate
    });
    calendar.appendTo('#calendar');
    function startDate(args) {
        (document.getElementById('date_label')).textContent = 'Selected Value: ' + args.value.toLocaleDateString();
    }
};