this.default = function () {
    var data = new ej.base.extend([], window.fifaEventsData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        views: ['MonthAgenda'],
        selectedDate: new Date(2018, 5, 20),
        eventSettings: { dataSource: data }
    });
    scheduleObj.appendTo('#Schedule');
};