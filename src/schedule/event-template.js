this.default = function () {
    // Used in templates to get time string
    var instance = new ej.base.Internationalization();
    window.getTimeString = function (value) {
        return instance.formatDate(value, { skeleton: 'hm' });
    };
    var data = new ej.base.extend([], window.webinarData, null, true);
    var viewsCollection = [
        { option: 'Week', eventTemplate: '#event-template' },
        { option: 'TimelineWeek', eventTemplate: '#timeline-event-template' }
    ];
    if (ej.base.Browser.isDevice) {
        viewsCollection = [{ option: 'Day', eventTemplate: '#event-template' },
        { option: 'TimelineDay', eventTemplate: '#timeline-event-template' }];
    }
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        startHour: '08:00',
        endHour: '18:00',
        workHours: {
            start: '08:00'
        },
        views: viewsCollection,
        selectedDate: new Date(2021, 1, 15),
        readonly: true,
        eventSettings: {
            dataSource: data
        }
    });
    scheduleObj.appendTo('#Schedule');
};