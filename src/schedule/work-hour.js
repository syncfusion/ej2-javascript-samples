this.default = function () {
    var data = new ej.base.extend([], window.employeeEventData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        workHours: {
            highlight: true,
            start: '08:00',
            end: '20:00'
        },
        views: ['Day', 'Week', 'WorkWeek', 'Month', 'TimelineWeek', 'TimelineMonth'],
        selectedDate: new Date(2021, 1, 15),
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');

    var end = new ej.calendars.TimePicker({
        placeholder: 'Work End',
        floatLabelType: "Always",
        value: new Date(2000, 0, 1, 20),
        format: 'HH:mm'
    });
    end.appendTo('#endTime');

    var start = new ej.calendars.TimePicker({
        placeholder: 'Work Start',
        floatLabelType: "Always",
        value: new Date(2000, 0, 1, 8),
        format: 'HH:mm'
    });
    start.appendTo('#startTime');

    var button = new ej.buttons.Button();
    button.appendTo('#submit');
    document.getElementById('submit').onclick = function (args) {
        var start = document.getElementById('startTime');
        var end = document.getElementById('endTime');
        scheduleObj.workHours.start = start.value;
        scheduleObj.workHours.end = end.value;
    };
};