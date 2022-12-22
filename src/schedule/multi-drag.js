this.default = function () {
    var data = new ej.base.extend([], window.resourceData.concat(window.timelineResourceData), null, true);
    var scheduleOptions = {
        width: '100%',
        height: '650px',
        selectedDate: new Date(2023, 0, 4),
        views: ['Month', 'TimelineMonth'],
        currentView: 'Month',
        allowMultiDrag: true,
        showQuickInfo: false,
        allowResizing: false,
        group: {
            resources: ['Owners']
        },
        resources: [
            {
                field: 'TaskId', title: 'Owners', name: 'Owners',
                dataSource: [
                    { text: 'Nancy', id: 1, color: '#df5286' },
                    { text: 'Steven', id: 2, color: '#7fa900' },
                    { text: 'Robert', id: 3, color: '#ea7a57' },
                    { text: 'Michael', id: 5, color: '#df5286' },
                    { text: 'Smith', id: 4, color: '#5978ee' }
                ],
                textField: 'text', idField: 'id', colorField: 'color'
            }
        ],
        eventSettings: {
            dataSource: data
        }
    };
    var scheduleObj = new ej.schedule.Schedule(scheduleOptions, '#Schedule');
};
