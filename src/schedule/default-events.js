this.default = function () {
    var data = new ej.base.extend([], window.leaveData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        selectedDate: new Date(2018, 1, 15),
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            var categoryColor;
            var start = new Date(args.data.StartTime).setHours(0, 0, 0, 0);
            var end = new Date(args.data.EndTime).setHours(0, 0, 0, 0);
            if (args.data.IsAllDay) {
                categoryColor = '#8e24aa';
            } else if (start !== end) {
                categoryColor = '#f57f17';
            } else {
                categoryColor = '#7fa900';
            }
            if (scheduleObj.currentView === 'Agenda') {
                (args.element.firstChild).style.borderLeftColor = categoryColor;
            } else {
                args.element.style.backgroundColor = categoryColor;
            }
        }
    });
    scheduleObj.appendTo('#Schedule');
};