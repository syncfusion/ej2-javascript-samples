this.default = function () {

    var draggedEventDurations;

    var firstScheduleOptions = {
        width: '100%',
        height: '500px',
        selectedDate: new Date(2023, 0, 4),
        rowAutoHeight: true,
        views: ['Month'],
        eventDragArea: '.content-wrapper',
        group: {
            resources: ['Employees'],
        },
        resources: [
            {
                field: 'TaskId',
                title: 'Employee',
                name: 'Employees',
                dataSource: [
                    { text: 'Steven', id: 1, color: '#7fa900' }
                ],
                textField: 'text',
                idField: 'id',
                colorField: 'color',
            },
        ],
        eventSettings: {
            dataSource: new ej.base.extend( [], window.resourceData, null, true),
        },
        dragStop: function (args) {
            handleDragStop(args, firstScheduleObj, secondScheduleObj, '#second-schedule');
        },
    };

    var firstScheduleObj = new ej.schedule.Schedule( firstScheduleOptions, '#first-schedule');

    var secondScheduleOptions = {
        width: '100%',
        height: '500px',
        selectedDate: new Date(2023, 0, 4),
        rowAutoHeight: true,
        views: ['Month'],
        eventDragArea: '.content-wrapper',
        group: {
            resources: ['Employees'],
        },
        resources: [
            {
                field: 'TaskId',
                title: 'Employee',
                name: 'Employees',
                dataSource: [
                    { text: 'John', id: 2, color: '#ffb74d' },
                ],
                textField: 'text',
                idField: 'id',
                colorField: 'color',
            },
        ],
        dragStop: function (args) {
            handleDragStop(args, secondScheduleObj, firstScheduleObj, '#first-schedule');
        },
        eventSettings: {
            dataSource: new ej.base.extend( [], window.timelineResourceData, null, true),
        },
    };

    var secondScheduleObj = new ej.schedule.Schedule( secondScheduleOptions,'#second-schedule');

    function handleDragStop(args, sourceSchedule, targetSchedule, targetSelector) {
        if (ej.base.closest(args.event.target, targetSelector)) {
            args.cancel = true;
            var cellData = targetSchedule.getCellDetails(args.event.target);
            if (cellData) {
                var resourceDetails = targetSchedule.getResourcesByIndex(cellData.groupIndex);
                sourceSchedule.deleteEvent(args.data.Id);
                var eventData = {
                    Id: targetSchedule.getEventMaxID(),
                    Subject: args.data.Subject,
                    StartTime: args.data.StartTime,
                    EndTime: args.data.EndTime,
                    IsAllDay: args.data.IsAllDay,
                    Location: args.data.Location,
                    Description: args.data.Description,
                    StartTimezone: args.data.StartTimezone,
                    EndTimezone: args.data.EndTimezone,
                    TaskId: resourceDetails.resourceData.id
                };
                targetSchedule.addEvent(eventData);
                var classElement =
                    sourceSchedule.element.querySelector('.e-selected-cell');
                if (classElement) {
                    classElement.classList.remove('e-selected-cell');
                }
            }
        }
    }
};
