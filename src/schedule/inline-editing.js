this.default = function () {
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2023, 0, 4),
        views: ['TimelineWeek', 'TimelineMonth'],
        currentView: 'TimelineWeek',
        allowInline: true,
        workDays: [0, 1, 2, 3, 4, 5],
        eventSettings: {
            dataSource: ej.base.extend([], window.resourceData.concat(window.timelineResourceData), null, true)
        },
        group: { resources: ['Categories'] },
        resources: [{
            field: 'TaskId', title: 'Category', name: 'Categories', allowMultiple: true,
            textField: 'text', idField: 'id', groupIDField: 'groupId', colorField: 'color',
            dataSource: [
                { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
                { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
                { text: 'Michael', id: 5, groupId: 3, color: '#df5286' },
                { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
                { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' }
            ]
        }]
    });
    scheduleObj.appendTo('#Schedule');
};
