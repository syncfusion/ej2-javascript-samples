this.default = function () {
    var instance = new ej.base.Internationalization();
    window.getTimeString = function (value) {
        return instance.formatDate(value, { skeleton: 'Hm' });
    };
    var data = new ej.base.extend([], window.fifaEventsData, null, true);
    var agendaTemplate = '<div class="subject">${Subject}</div><div class="group">${Description}</div>' +
        '<div class="location">${getTimeString(data.StartTime)}, ${City}</div>';
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        selectedDate: new Date(2018, 5, 20),
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        },
        views: [
            { option: 'Day', startHour: '07:00', endHour: '18:00' },
            { option: 'Week', startHour: '09:00', endHour: '19:00', showWeekend: false },
            { option: 'Month' },
            { option: 'Agenda', eventTemplate: agendaTemplate }
        ]
    });
    scheduleObj.appendTo('#Schedule');
};