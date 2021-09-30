this.default = function () {
    var data = new ej.base.extend([], window.fifaEventsData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 5, 16),
        eventSettings: { dataSource: data },
        views: [
            { displayName: '3 Days', option: 'Day', interval: 3 },
            { displayName: '2 Weeks', option: 'Week', isSelected: true, interval: 2 },
            { displayName: '4 Months', option: 'Month', interval: 4 }
        ],
        eventRendered: function (args) { applyCategoryColor(args, scheduleObj.currentView); }
    });
    scheduleObj.appendTo('#Schedule');
};
