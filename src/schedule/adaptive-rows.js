this.default = function () {
    var data = new ej.base.extend([], window.roomData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 7, 2),
        currentView: 'TimelineWeek',
        cssClass: 'adaptive-rows',
        rowAutoHeight: true,
        views: [
            { option: 'TimelineDay' },
            { option: 'TimelineWeek' }
        ],
        group: {
            enableCompactView: false,
            resources: ['MeetingRoom']
        },
        resources: [{
            field: 'RoomId', title: 'Room Type',
            name: 'MeetingRoom', allowMultiple: true,
            dataSource: [
                { text: 'Room A', id: 1, color: '#98AFC7' },
                { text: 'Room B', id: 2, color: '#99c68e' },
                { text: 'Room C', id: 3, color: '#C2B280' },
                { text: 'Room D', id: 4, color: '#3090C7' },
                { text: 'Room E', id: 5, color: '#95b9' },
                { text: 'Room F', id: 6, color: '#95b9c7' },
                { text: 'Room G', id: 7, color: '#deb887' },
                { text: 'Room H', id: 8, color: '#3090C7' },
                { text: 'Room I', id: 9, color: '#98AFC7' },
                { text: 'Room J', id: 10, color: '#778899' }
            ],
            textField: 'text', idField: 'id', colorField: 'color'
        }],
        eventSettings: {
            dataSource: data,
            fields: {
                id: 'Id',
                subject: { name: 'Subject', title: 'Summary' },
                location: { name: 'Location', title: 'Location' },
                description: { name: 'Description', title: 'Comments' },
                startTime: { name: 'StartTime', title: 'From' },
                endTime: { name: 'EndTime', title: 'To' }
            }
        }
    });
    scheduleObj.appendTo('#Schedule');

    function onChange(args) {
        scheduleObj.rowAutoHeight = args.checked;
    }
    new ej.buttons.CheckBox({ label: 'Row Auto Height', checked: true, change: onChange }, '#adaptive-rows');
};