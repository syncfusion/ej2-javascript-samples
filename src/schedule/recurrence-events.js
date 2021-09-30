this.default = function () {
    var data = new ej.base.extend([], window.recurrenceData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 1, 20),
        views: ['Day', 'Week', 'Month'],
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');
    function onChange(args) {
        scheduleObj.eventSettings.editFollowingEvents = args.checked;
    }

    new ej.buttons.CheckBox({ label: 'Enable Following Events', checked: false, change: onChange }, '#editFollowingEvents');
};