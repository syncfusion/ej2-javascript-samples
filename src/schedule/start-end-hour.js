this.default = function () {
    var globalize = new ej.base.Internationalization();
    var data = new ej.base.extend([], window.employeeEventData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        startHour: '08:00',
        endHour: '20:00',
        views: ['Day', 'Week', 'WorkWeek', 'Month', 'TimelineDay', 'TimelineWeek'],
        workHours: { highlight: false },
        selectedDate: new Date(2021, 1, 15),
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');
    var start = new ej.calendars.TimePicker({
        placeholder: 'Start Hour',
        floatLabelType: "Always",
        value: new Date(2000, 0, 1, 8),
        format: 'HH:mm'
    });
    start.appendTo('#startTime');
    var end = new ej.calendars.TimePicker({
        placeholder: 'End Hour',
        floatLabelType: "Always",
        value: new Date(2000, 0, 1, 20),
        format: 'HH:mm'
    });
    end.appendTo('#endTime');
    var button = new ej.buttons.Button();
    button.appendTo('#submit');
    document.getElementById('submit').onclick = function () {
        scheduleObj.startHour = globalize.formatDate(start.value, { skeleton: 'Hm' });
        scheduleObj.endHour = globalize.formatDate(end.value, { skeleton: 'Hm' });
        scheduleObj.dataBind();
    };
};