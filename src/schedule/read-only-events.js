this.default = function () {    
    var data = new ej.base.extend([], window.readonlyEventsData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        eventSettings: { dataSource: data },
        views: ['Day', 'Week', 'WorkWeek', 'Month']
    });
    scheduleObj.appendTo('#Schedule');
};