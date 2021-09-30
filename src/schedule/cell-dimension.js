/**
 * Schedule cell dimension sample
 */
this.default = function () {
    var data = new ej.base.extend([], window.employeeEventData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        views: ['Day', 'Week', 'WorkWeek', 'Month', 'TimelineWeek', 'TimelineMonth'],
        selectedDate: new Date(2021, 1, 15),
        cssClass: 'schedule-cell-dimension',
        showTimeIndicator: false,
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');
};