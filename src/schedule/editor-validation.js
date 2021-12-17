this.default = function () {
    var data = new ej.base.extend([], window.scheduleData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 0, 10),
        eventSettings: {
            dataSource: data,
            fields: {
                subject: { name: 'Subject', validation: { required: true } },
                location: {
                    name: 'Location', validation: {
                        required: true,
                        regex: ['^[a-zA-Z0-9- ]*$', 'Special characters are not allowed in this field']
                    }
                },
                description: {
                    name: 'Description', validation: {
                        required: true, minLength: 5, maxLength: 500
                    }
                },
                startTime: { name: 'StartTime', validation: { required: true } },
                endTime: { name: 'EndTime', validation: { required: true } }
            }
        },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');
};