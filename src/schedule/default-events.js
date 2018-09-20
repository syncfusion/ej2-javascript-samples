this.default = function () {
    var data = new ej.base.extend([], window.leaveData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2018, 1, 15),
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            var categoryColor;
            var appData = args.data;
            var eventFields = scheduleObj.eventFields;
            var parentApp = new ej.data.DataManager(scheduleObj.eventsData).
                executeLocal(new ej.data.Query().where(eventFields.id, 'equal', appData[eventFields.id]))[0];
            var start = new Date(parentApp[eventFields.startTime]).setHours(0, 0, 0, 0);
            var end = new Date(parentApp[eventFields.endTime]).setHours(0, 0, 0, 0);
            if (appData.IsAllDay) {
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