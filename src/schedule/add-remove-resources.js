this.default = function () {
    var calendarCollections = [
        { CalendarText: 'My Calendar', CalendarId: 1, CalendarColor: '#c43081' },
        { CalendarText: 'Company', CalendarId: 2, CalendarColor: '#ff7f50' },
        { CalendarText: 'Birthday', CalendarId: 3, CalendarColor: '#AF27CD' },
        { CalendarText: 'Holiday', CalendarId: 4, CalendarColor: '#808000' }
    ];

    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 3, 1),
        group: {
            resources: ['Calendars']
        },
        resources: [{
            field: 'CalendarId', title: 'Calendars',
            name: 'Calendars', allowMultiple: true,
            dataSource: [calendarCollections[0]],
            textField: 'CalendarText', idField: 'CalendarId', colorField: 'CalendarColor'
        }],
        views: ['Month', 'TimelineWeek', 'TimelineMonth'],
        eventSettings: { dataSource: generateCalendarData() }
    });
    scheduleObj.appendTo('#Schedule');
    function onChange(args) {
        var value = parseInt(args.event.currentTarget.querySelector('input').getAttribute('value'), 10);
        var resourceData = calendarCollections.filter(function (calendar) { return calendar.CalendarId === value; });
        if (args.checked) {
            scheduleObj.addResource(resourceData[0], 'Calendars', value - 1);
            scheduleObj.dataBind();
        } else {
            scheduleObj.removeResource(value, 'Calendars');
            scheduleObj.dataBind();
        }
    }
    var check1 = new ej.buttons.CheckBox({ cssClass: 'personal', value: '1', label: 'My Calendar', checked: true, disabled: true, change: onChange }, '#personal');
    var check2 = new ej.buttons.CheckBox({ cssClass: 'company', value: '2', label: 'Company', checked: false, change: onChange }, '#company');
    var check3 = new ej.buttons.CheckBox({ cssClass: 'birthday', value: '3', label: 'Birthday', checked: false, change: onChange }, '#birthdays');
    var check4 = new ej.buttons.CheckBox({ cssClass: 'holiday', value: '4', label: 'Holiday', checked: false, change: onChange }, '#holidays');

    function generateCalendarData() {
        var collections = [];
        var dataCollections = [personalData, companyData, birthdayData, holidayData];
        for (var i = 0; i < dataCollections.length; i++) {
            collections = collections.concat(dataCollections[i]);
        }
        return collections;
    }
};