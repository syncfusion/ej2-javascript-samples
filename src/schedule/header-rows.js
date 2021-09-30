this.default = function () {
    var instance = new ej.base.Internationalization();
    window.getMonthDetails = function (value) {
        return instance.formatDate(value.date, { skeleton: 'yMMMM' });
    };
    window.getWeekDetails = function (value) {
        return 'Week ' + ej.schedule.getWeekNumber(ej.schedule.getWeekLastDate(value.date, 0));
    };
    var data = new ej.base.extend([], window.headerRowData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 0, 1),
        headerRows: [
            { option: 'Month', template: '#month-template' },
            { option: 'Week', template: '#week-template' },
            { option: 'Date' }
        ],
        views: [
            { option: 'TimelineMonth', interval: 12 }
        ],
        eventSettings: {
            dataSource: data
        },
        eventRendered: function (args) { return window.applyCategoryColor(args, scheduleObj.currentView); }
    });
    scheduleObj.appendTo('#Schedule');
};