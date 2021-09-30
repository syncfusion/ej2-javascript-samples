this.default = function () {
    var scheduleObj = new ej.schedule.Schedule({
        height: '650px',
        selectedDate: new Date(2021, 0, 10),
        currentView: 'TimelineWeek',
        workDays: [0, 1, 2, 3, 4, 5],
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

    var selectedDate = new ej.calendars.DatePicker({
        placeholder: 'Current Date',
        floatLabelType: "Always",
        value: new Date(2021, 0, 10),
        showClearButton: false,
        change: function (args) {
            scheduleObj.selectedDate = args.value;
            scheduleObj.dataBind();
        }
    });
    selectedDate.appendTo('#scheduledate');
};