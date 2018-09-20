this.default = function () {
    var data = new ej.base.extend([], window.employeeEventData, null, true);
    // Initialize schedule component
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        workDays: [1, 3, 5],
        workHours: {
            start: '08:00'
        },
        views: ['Week', 'WorkWeek', 'Month', 'TimelineWeek', 'TimelineMonth'],
        selectedDate: new Date(2018, 1, 14),
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');

    // Initialize DropDownList component for work days
    var workDaysDropDown = new ej.dropdowns.DropDownList({
        popupWidth: 180,
        change: function (args) {
            scheduleObj.workDays = args.value.toString().split(',').map(Number);
            scheduleObj.dataBind();
        }
    });
    workDaysDropDown.appendTo('#scheduleworkdays');

    var dayOfWeekDropDown = new ej.dropdowns.DropDownList({
        change: function (args) {
            scheduleObj.firstDayOfWeek = parseInt(args.value, 10);
            scheduleObj.dataBind();
        }
    });
    dayOfWeekDropDown.appendTo('#scheduledayofweek');
};