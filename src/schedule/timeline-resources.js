this.default = function () {
    var isReadOnly = function (endDate) {
        return (endDate < new Date(2021, 6, 31, 0, 0));
    };
    window.getRoomName = function (value) {
        return value.resourceData[value.resource.textField];
    };
    window.getRoomType = function (value) {
        return value.resourceData.type;
    };
    window.getRoomCapacity = function (value) {
        return value.resourceData.capacity;
    };
    var data = new ej.base.extend([], window.roomData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        cssClass: 'room-schedule',
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 7, 2),
        currentView: 'TimelineWeek',
        workHours: {
            start: '08:00',
            end: '18:00'
        },
        timeScale: {
            slotCount: 1,
            interval: 60
        },
        views: [
            { option: 'TimelineDay' },
            { option: 'TimelineWeek' }
        ],
        resourceHeaderTemplate: '#resource-template',
        group: {
            enableCompactView: false,
            resources: ['MeetingRoom']
        },
        resources: [{
            field: 'RoomId', title: 'Room Type',
            name: 'MeetingRoom', allowMultiple: true,
            dataSource: [
                { text: 'Jammy', id: 1, color: '#ea7a57', capacity: 20, type: 'Conference' },
                { text: 'Tweety', id: 2, color: '#7fa900', capacity: 7, type: 'Cabin' },
                { text: 'Nestle', id: 3, color: '#5978ee', capacity: 5, type: 'Cabin' },
                { text: 'Phoenix', id: 4, color: '#fec200', capacity: 15, type: 'Conference' },
                { text: 'Mission', id: 5, color: '#df5286', capacity: 25, type: 'Conference' },
                { text: 'Hangout', id: 6, color: '#00bdae', capacity: 10, type: 'Cabin' },
                { text: 'Rick Roll', id: 7, color: '#865fcf', capacity: 20, type: 'Conference' },
                { text: 'Rainbow', id: 8, color: '#1aaa55', capacity: 8, type: 'Cabin' },
                { text: 'Swarm', id: 9, color: '#df5286', capacity: 30, type: 'Conference' },
                { text: 'Photogenic', id: 10, color: '#710193', capacity: 25, type: 'Conference' }
            ],
            textField: 'text', idField: 'id', colorField: 'color'
        }],
        eventSettings: {
            dataSource: data,
            fields: {
                id: 'Id',
                subject: { title: 'Summary', name: 'Subject' },
                location: { title: 'Location', name: 'Location' },
                description: { title: 'Comments', name: 'Description' },
                startTime: { title: 'From', name: 'StartTime' },
                endTime: { title: 'To', name: 'EndTime' }
            }
        },
        popupOpen: function (args) {
            var data = args.data;
            if (args.type === 'QuickInfo' || args.type === 'Editor' || args.type === 'RecurrenceAlert' || args.type === 'DeleteAlert') {
                var target = (args.type === 'RecurrenceAlert' ||
                    args.type === 'DeleteAlert') ? args.element[0] : args.target;
                if (!ej.base.isNullOrUndefined(target) && target.classList.contains('e-work-cells')) {
                    if ((target.classList.contains('e-read-only-cells')) || (!scheduleObj.isSlotAvailable(data))) {
                        args.cancel = true;
                    }
                }
                else if (!ej.base.isNullOrUndefined(target) && target.classList.contains('e-appointment') &&
                    (isReadOnly(data.EndTime))) {
                    args.cancel = true;
                }
            }
        },
        renderCell: function (args) {
            if (args.element.classList.contains('e-work-cells')) {
                if (args.date < new Date(2021, 6, 31, 0, 0)) {
                    args.element.setAttribute('aria-readonly', 'true');
                    args.element.classList.add('e-read-only-cells');
                }
            }
            if (args.elementType === 'emptyCells' && args.element.classList.contains('e-resource-left-td')) {
                var target = args.element.querySelector('.e-resource-text');
                target.innerHTML = '<div class="name">Rooms</div><div class="type">Type</div><div class="capacity">Capacity</div>';
            }
        },
        eventRendered: function (args) {
            var data = args.data;
            if (isReadOnly(data.EndTime)) {
                args.element.setAttribute('aria-readonly', 'true');
                args.element.classList.add('e-read-only');
            }
        },
        actionBegin: function (args) {
            if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
                var data = void 0;
                if (args.requestType === 'eventCreate') {
                    data = args.data[0];
                }
                else if (args.requestType === 'eventChange') {
                    data = args.data;
                }
                if (!scheduleObj.isSlotAvailable(data)) {
                    args.cancel = true;
                }
            }
        }
    });
    scheduleObj.appendTo('#Schedule');
};