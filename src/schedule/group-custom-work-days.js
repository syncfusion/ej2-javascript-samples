this.default = function () {
    var data = new ej.base.extend([], window.doctorData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 3, 6),
        currentView: 'WorkWeek',
        resourceHeaderTemplate: '#resourceTemplate',
        group: {
            resources: ['Doctors']
        },
        resources: [{
            field: 'DoctorId', title: 'Doctor Name', name: 'Doctors',
            dataSource: [
                { text: 'Will Smith', id: 1, color: '#ea7a57', workDays: [1, 2, 4, 5], startHour: '08:00', endHour: '15:00' },
                { text: 'Alice', id: 2, color: 'rgb(53, 124, 210)', workDays: [1, 3, 5], startHour: '08:00', endHour: '17:00' },
                { text: 'Robson', id: 3, color: '#7fa900', startHour: '08:00', endHour: '16:00' }
            ],
            textField: 'text', idField: 'id', colorField: 'color', workDaysField: 'workDays', startHourField: 'startHour',
            endHourField: 'endHour'
        }],
        views: ['WorkWeek', 'Month'],
        eventSettings: {
            dataSource: data,
            fields: {
                subject: { title: 'Service Type', name: 'Subject' },
                location: { title: 'Patient Name', name: 'Location' },
                description: { title: 'Summary', name: 'Description' },
                startTime: { title: 'From', name: 'StartTime' },
                endTime: { title: 'To', name: 'EndTime' },
                startTimezone: { title: 'StartTimezone', name: 'StartTimezone' },
                endTimezone: { title: 'EndTimezone', name: 'EndTimezone' }
            }
        },
        actionBegin: function (args) {
            var isEventChange = (args.requestType === 'eventChange');
            if ((args.requestType === 'eventCreate' && args.data.length > 0) || isEventChange) {
                var eventData = (isEventChange) ? args.data : args.data[0];
                var eventField = scheduleObj.eventFields;
                var startDate = eventData[eventField.startTime];
                var endDate = eventData[eventField.endTime];
                var resourceIndex = [1, 2, 3].indexOf(eventData.DoctorId);
                args.cancel = !isValidateTime(startDate, endDate, resourceIndex);
                if (!args.cancel) {
                    args.cancel = !scheduleObj.isSlotAvailable(startDate, endDate, resourceIndex);
                }
            }
        },
        popupOpen: function (args) {
            if (args.target && args.target.classList.contains('e-work-cells')) {
                args.cancel = !args.target.classList.contains('e-work-hours');
            }
        },
        renderCell: function (args) {
            if (args.element.classList.contains('e-work-hours') || args.element.classList.contains('e-work-cells')) {
                ej.base.addClass([args.element], ['willsmith', 'alice', 'robson'][parseInt(args.element.getAttribute('data-group-index'), 10)]);
            }
        },
        resizeStart: function (args) {
            args.cancel = true;
        },
        dragStart: function (args) {
            args.cancel = true;
        }
    });
    window.getDoctorName = function (value) {
        return (value.resourceData) ? value.resourceData[value.resource.textField] : value.resourceName;
    };
    window.getDoctorImage = function (value) {
        var resourceName = window.getDoctorName(value);
        return resourceName.replace(' ', '-').toLowerCase();
    };
    window.getDoctorLevel = function (value) {
        var resourceName = window.getDoctorName(value);
        return (resourceName === 'Will Smith') ? 'Cardiologist' : (resourceName === 'Alice') ? 'Neurologist' : 'Orthopedic Surgeon';
    };
    scheduleObj.appendTo('#Schedule');
    function isValidateTime(startDate, endDate, resIndex) {
        var resource = scheduleObj.getResourcesByIndex(resIndex);
        var startHour = parseInt(resource.resourceData.startHour.toString().slice(0, 2), 10);
        var endHour = parseInt(resource.resourceData.endHour.toString().slice(0, 2), 10);
        return (startHour <= startDate.getHours() && endHour >= endDate.getHours());
    }
};