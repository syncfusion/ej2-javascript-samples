this.default = function () {
    var data = new ej.base.extend([], window.employeeEventData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        workHours: {
            highlight: true,
            start: '11:00',
            end: '20:00'
        },
        views: ['Day', 'Week', 'WorkWeek', 'Month'],
        selectedDate: new Date(2018, 1, 15),
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');

    var start = new ej.calendars.TimePicker({
        width: 90,
        value: new Date(2000, 0, 1, 11),
        format: 'HH:mm'
    });
    start.appendTo('#startTime');
    var end = new ej.calendars.TimePicker({
        width: 90,
        value: new Date(2000, 0, 1, 20),
        format: 'HH:mm'
    });
    end.appendTo('#endTime');

    var button = new ej.buttons.Button();
    button.appendTo('#submit');
    document.getElementById('submit').onclick = function (args) {
        var start = document.getElementById('startTime');
        var end = document.getElementById('endTime');
        scheduleObj.workHours.start = start.value;
        scheduleObj.workHours.end = end.value;
    };
};