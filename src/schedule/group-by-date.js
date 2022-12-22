this.default = function () {
    var data = new ej.base.extend([], window.resourceData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2023, 0, 6),
        group: {
            byDate: true,
            hideNonWorkingDays: true,
            resources: ['Owners']
        },
        resources: [{
            field: 'TaskId', title: 'Assignee',
            name: 'Owners', allowMultiple: true,
            dataSource: [
                { text: 'Alice', id: 1, color: '#df5286', workDays: [1, 2, 3, 4] },
                { text: 'Smith', id: 2, color: '#7fa900', workDays: [2, 3, 5] }
            ],
            textField: 'text', idField: 'id', colorField: 'color', workDaysField: 'workDays'
        }],
        views: ['Day', 'Week', 'Month', 'Agenda'],
        eventSettings: {
            dataSource: data,
            fields: {
                subject: { title: 'Task', name: 'Subject' },
                location: { title: 'Project Name', name: 'Location' },
                description: { title: 'Comments', name: 'Description' }
            }
        }
    });
    scheduleObj.appendTo('#Schedule');

    var checkboxObj = new ej.buttons.CheckBox({ label: 'Hide non working days', checked: true, change: onChange });
        checkboxObj.appendTo('#checkbox');
        function onChange(args) {
            if (args.checked) {
                scheduleObj.group.hideNonWorkingDays = true;
            }
            else {
                scheduleObj.group.hideNonWorkingDays = false;
            }
        }
};