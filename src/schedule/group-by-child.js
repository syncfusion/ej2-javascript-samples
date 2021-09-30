this.default = function () {
    var data = new ej.base.extend([], window.resourceTeamData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        currentView: 'WorkWeek',
        selectedDate: new Date(2021, 5, 5),
        startHour: '09:00',
        endHour: '19:00',
        group: {
            byGroupID: false,
            resources: ['Projects', 'Categories']
        },
        resources: [
            {
                field: 'ProjectId', title: 'Choose Project', name: 'Projects',
                dataSource: [
                    { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
                    { text: 'PROJECT 2', id: 2, color: '#56ca85' }
                ],
                textField: 'text', idField: 'id', colorField: 'color'
            }, {
                field: 'CategoryId', title: 'Category',
                name: 'Categories', allowMultiple: true,
                dataSource: [
                    { text: 'Development', id: 1, color: '#df5286' },
                    { text: 'Testing', id: 2, color: '#7fa900' }
                ],
                textField: 'text', idField: 'id', colorField: 'color'
            }
        ],
        eventSettings: {
            dataSource: data,
            fields: {
                subject: { title: 'Summary', name: 'Subject' },
                description: { title: 'Comments', name: 'Description' }
            }
        }
    });
    scheduleObj.appendTo('#Schedule');
};