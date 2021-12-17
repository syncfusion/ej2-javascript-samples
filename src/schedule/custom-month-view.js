this.default = function () {
    var scheduleObj = new ej.schedule.Schedule({
        height: '650px',
        views: [{ option: 'Month', displayDate: new Date(2022, 0, 16), numberOfWeeks: 4 }],
        eventSettings: { dataSource: window.generateObject(new Date(2021, 11, 19).getTime(), new Date(2022, 2, 12).getTime(), true) }
    });
    scheduleObj.appendTo('#Schedule');
};