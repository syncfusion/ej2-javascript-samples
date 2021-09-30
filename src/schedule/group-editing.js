this.default = function () {
    var data = new ej.base.extend([], window.resourceConferenceData, null, true);
    var monthEventTemplate = '<div class="subject">${Subject}</div>';
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        currentView: 'WorkWeek',
        selectedDate: new Date(2021, 5, 5),
        resourceHeaderTemplate: '#resourceTemplate',
        views: [
            { option: 'Day' }, { option: 'WorkWeek' },
            { option: 'Month', eventTemplate: monthEventTemplate },
            { option: 'TimelineWeek' }
        ],
        group: {
            allowGroupEdit: true,
            resources: ['Conferences']
        },
        resources: [{
            field: 'ConferenceId', title: 'Attendees',
            name: 'Conferences', allowMultiple: true,
            dataSource: [
                { Text: 'Margaret', Id: 1, Color: '#1aaa55' },
                { Text: 'Robert', Id: 2, Color: '#357cd2' },
                { Text: 'Laura', Id: 3, Color: '#7fa900' }
            ],
            textField: 'Text', idField: 'Id', colorField: 'Color'
        }],
        eventSettings: {
            dataSource: data,
            fields: {
                subject: { title: 'Conference Name', name: 'Subject' },
                description: { title: 'Summary', name: 'Description' },
                startTime: { title: 'From', name: 'StartTime' },
                endTime: { title: 'To', name: 'EndTime' }
            }
        }
    });
    scheduleObj.appendTo('#Schedule');

    window.getEmployeeName = function (value) {
        return (value.resourceData) ? value.resourceData[value.resource.textField] : value.resourceName;
    };
    window.getEmployeeImage = function (value) {
        var resourceName = window.getEmployeeName(value);
        return resourceName.replace(' ', '-').toLowerCase();
    };
    window.getEmployeeDesignation = function (value) {
        var resourceName = window.getEmployeeName(value);
        return (resourceName === 'Margaret') ? 'Sales Representative' : (resourceName === 'Robert') ?
            'Vice President, Sales' : 'Inside Sales Coordinator';
    };
};