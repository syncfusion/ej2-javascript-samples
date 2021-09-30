this.default = function () {
    var data = new ej.base.extend([], window.scheduleData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 0, 10),
        views: ['Day', 'Week', 'WorkWeek', 'TimelineDay', 'TimelineWeek'],
        eventSettings: {
            dataSource: data
        },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');
    var scrollToHour = new ej.calendars.TimePicker({
        placeholder: 'Scroll To',
        floatLabelType: "Always",
        value: new Date(2000, 0, 1, 9),
        format: 'HH:mm',
        change: function (args) {
            scheduleObj.scrollTo(args.text);
        }
    });
    scrollToHour.appendTo('#ScrollToHour');
};