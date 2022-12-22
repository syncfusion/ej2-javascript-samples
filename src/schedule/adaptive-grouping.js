this.default = function () {
    var data = new ej.base.extend([], window.resourceData.concat(window.timelineResourceData), null, true);
    var projectsData = [
        { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
        { text: 'PROJECT 2', id: 2, color: '#56ca85' },
        { text: 'PROJECT 3', id: 3, color: '#df5286' }
    ];
    var categoryData = [
        { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
        { text: 'Steven', id: 2, groupId: 2, color: '#7fa900' },
        { text: 'Robert', id: 3, groupId: 3, color: '#ea7a57' },
        { text: 'Smith', id: 4, groupId: 1, color: '#5978ee' },
        { text: 'Michael', id: 5, groupId: 2, color: '#df5286' },
        { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
    ];
    var scheduleOptions = {
        width: '100%',
        height: '650px',
        selectedDate: new Date(2023, 0, 4),
        views: ['Day', 'Week', 'Month'],
        currentView: 'Month',
        enableAdaptiveUI: true,
        resources: [
            {
                field: 'ProjectId', title: 'Choose Project', name: 'Projects',
                dataSource: projectsData,
                textField: 'text', idField: 'id', colorField: 'color'
            }, {
                field: 'TaskId', title: 'Category',
                name: 'Categories', allowMultiple: true,
                dataSource: categoryData,
                textField: 'text', idField: 'id', groupIDField: 'groupId', colorField: 'color'
            }
        ],
        group: {
            resources: ['Projects', 'Categories']
        },
        eventSettings: {
            dataSource: data
        }
    };
    var scheduleObj = new ej.schedule.Schedule(scheduleOptions, '#Schedule');
};