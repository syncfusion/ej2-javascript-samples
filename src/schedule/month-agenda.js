this.default = function () {
    var data = new ej.base.extend([], window.fifaEventsData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '510px',
        views: ['MonthAgenda'],
        selectedDate: new Date(2021, 5, 20),
        eventSettings: { dataSource: data }
    });
    scheduleObj.appendTo('#Schedule');
};