this.default = function () {
    window.getEmployeeName = function (value) {
        return value.resourceData[value.resource.textField];
    };
    window.getEmployeeImage = function (value) {
        var resourceName = value.resourceData[value.resource.textField];
        return '<img class="employee-image" src="src/schedule/images/' +
            resourceName.toLowerCase() + '.png" alt="' + resourceName.toLowerCase() + '"/>';
    };
    window.getEmployeeDesignation = function (value) {
        return value.resourceData.Designation;
    };
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 7, 2),
        currentView: 'TimelineDay',
        views: [
            { option: 'Day' },
            { option: 'TimelineDay' },
            { option: 'TimelineMonth' }
        ],
        resourceHeaderTemplate: '#resource-template',
        group: {
            enableCompactView: false,
            resources: ['Employee']
        },
        resources: [{
            field: 'EmployeeId', title: 'Employees',
            name: 'Employee', allowMultiple: true,
            dataSource: [
                { Text: 'Alice', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Content writer' },
                { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Designer' },
                { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Software Engineer' },
                { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Support Engineer' },
                { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Human Resource' },
                { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Content Analyst' }
            ],
            textField: 'Text', idField: 'Id', groupIDField: 'GroupId', colorField: 'Color'
        }],
        eventSettings: {
            dataSource: window.blockData
        }
    });
    scheduleObj.appendTo('#Schedule');
};