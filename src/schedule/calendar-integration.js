this.default = function () {
    var calendarId = '5105trob9dasha31vuqek6qgp0@group.calendar.google.com';
    var publicKey = 'AIzaSyD76zjMDsL_jkenM5AAnNsORypS1Icuqxg';
    var dataManger = new ej.data.DataManager({
        url: 'https://www.googleapis.com/calendar/v3/calendars/' + calendarId + '/events?key=' + publicKey,
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    });
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2018, 10, 14),
        eventSettings: { dataSource: dataManger },
        readonly: true,
        dataBinding: function (e) {
            var items = e.result.items;
            var scheduleData = [];
            if (items.length > 0) {
                for (var i = 0; i < items.length; i++) {
                    var event = items[i];
                    var when = event.start.dateTime;
                    var start = event.start.dateTime;
                    var end = event.end.dateTime;
                    if (!when) {
                        when = event.start.date;
                        start = event.start.date;
                        end = event.end.date;
                    }
                    scheduleData.push({
                        Id: event.id,
                        Subject: event.summary,
                        StartTime: new Date(start),
                        EndTime: new Date(end),
                        IsAllDay: !event.start.dateTime
                    });
                }
            }
            e.result = scheduleData;
        }
    });
    scheduleObj.appendTo('#Schedule');
};