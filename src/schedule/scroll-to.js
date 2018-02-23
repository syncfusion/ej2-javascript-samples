this.default = function () {
    var data = new ej.base.extend([], window.scheduleData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        selectedDate: new Date(2018, 1, 15),
        views: ['Day', 'Week', 'WorkWeek'],
        eventSettings: {
            dataSource: data,
        },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');
    var scrollToHour = new ej.calendars.TimePicker({
        width: 100,
        value: new Date(2000, 0, 1, 9),
        format: 'HH:mm',
        change: function (args) {
            scheduleObj.scrollTo(args.text);
        }
    });
    scrollToHour.appendTo('#ScrollToHour');
};