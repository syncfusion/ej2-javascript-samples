this.default = function () {
    var instance = new ej.base.Internationalization();
    window.getTimeString = function (value) {
        return instance.formatDate(value, { skeleton: 'Hm' });
    };
    var data = new ej.base.extend([], window.fifaEventsData, null, true);
    var agendaTemplate = '<div><div class="subject">${Subject}</div> ${if(Description !== null && Description !== undefined)}' +
        '<div class="group" > ${ Description } </div>${/if}<div class="location">${getTimeString(data.StartTime)} ${if(City !== null &&' +
        'City !== undefined)}, ${ City } ${/if}</div ></div> ';
    var monthEventTemplate = '<div class="e-subject">${Subject}</div>';
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        currentView: 'Month',
        selectedDate: new Date(2021, 5, 20),
        eventSettings: { dataSource: data },
        resources: [{
            field: 'GroupId', title: 'Owner', name: 'Owners',
            dataSource: [
                { GroupText: 'Group A', GroupId: 1, GroupColor: '#1aaa55' },
                { GroupText: 'Group B', GroupId: 2, GroupColor: '#357cd2' }
            ],
            textField: 'GroupText', idField: 'GroupId', colorField: 'GroupColor'
        }],
        views: [
            { option: 'Day', startHour: '07:00', endHour: '18:00' },
            { option: 'Week', startHour: '09:00', endHour: '19:00', showWeekend: false, timeScale: { interval: 60, slotCount: 4 } },
            { option: 'Month', group: { resources: ['Owners'] }, eventTemplate: monthEventTemplate },
            { option: 'Agenda', eventTemplate: agendaTemplate }
        ]
    });
    scheduleObj.appendTo('#Schedule');
};
