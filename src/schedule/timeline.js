this.default = function () {
    var scheduleObj = new ej.schedule.Schedule({
        height: '650px',
        selectedDate: new Date(2018, 1, 15),
        currentView: 'TimelineWeek',
        views: [
            { option: 'TimelineDay' },
            { option: 'TimelineWeek' },
            { option: 'TimelineWorkWeek' },
            { option: 'TimelineMonth' },
            { option: 'Agenda' }
        ],
        eventSettings: { dataSource: new ej.base.extend([], window.scheduleData.concat(window.timelineData), null, true) }
    });
    scheduleObj.appendTo('#Schedule');
    var currentDate = new ej.calendars.DatePicker({
        value: new Date(2018, 1, 15),
        change: function (args) {
            scheduleObj.selectedDate = args.value;
            scheduleObj.dataBind();
        }
    });
    currentDate.appendTo('#scheduledate');
};