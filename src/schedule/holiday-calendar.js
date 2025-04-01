this.default = function () {
    var data = new ej.base.extend([], window.scheduleEvent, null, true);
    var holidayList = new ej.base.extend([], window.holidayList, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        height: '100%',
        width: '100%',
        rowAutoHeight: true,
        cssClass: 'schedule-holiday-calendar',
        selectedDate: new Date(2024, 7, 5),
        cellClick: clickOnHoliday,
        cellDoubleClick: clickOnHoliday,
        resizeStop: onEventDragOrResize,
        dragStop: onEventDragOrResize,
        actionBegin: onActionBegin,
        eventRendered: onEventRender,
        views: ['Month'],
        currentView: 'Month',
        eventSettings: {
            dataSource: data.concat(holidayList),
        }
    });
    scheduleObj.appendTo('#Schedule');

    var holidayEventCollection = true;
    var holidayListCollection = true;

    var eventCheckBoxObj = new ej.buttons.CheckBox({
        label: 'Scheduling event  on holiday',
        checked: holidayEventCollection,
        change: updateHolidayEventCollection,
    });
    eventCheckBoxObj.appendTo('#event-schedule');

    var holidayCheckBoxObj = new ej.buttons.CheckBox({
        label: 'Holiday events',
        checked: holidayListCollection,
        change: updateHolidayListCollection,
    });
    holidayCheckBoxObj.appendTo('#holiday-list');

    var toast = new ej.notifications.Toast({
        title: 'Information!',
        cssClass: 'e-toast-info',
        target: '.e-schedule',
        icon: 'e-info toast-icons',
        position: { X: 'Right', Y: 'Top' },
    });
    toast.appendTo('#schedule-reminder');

    function updateHolidayEventCollection(args) {
        holidayEventCollection = args.checked;
        scheduleObj.refreshEvents();
    }

    function updateHolidayListCollection(args) {
        holidayListCollection = args.checked;
        scheduleObj.refreshEvents();
    }

    function isEventWithinHolidayRange(eventStartDate, eventEndDate) {
        var isInRange = false;
        for (var i = 0; i < holidayList.length; i++) {
            var holiday = holidayList[i];
            var holidayStartDate = holiday.StartTime;
            var holidayEndDate = holiday.EndTime;
            if ((eventStartDate >= holidayStartDate &&
                eventStartDate <= holidayEndDate) ||
                (eventEndDate >= holidayStartDate && eventEndDate <= holidayEndDate) ||
                (eventStartDate <= holidayStartDate && eventEndDate >= holidayEndDate)
            ) {
                isInRange = true;
                break;
            }
        }
        return isInRange;
    }

    function showToastForAction(actionName, holidayDateRange) {
        if (!holidayDateRange) return;
        var messages = {
            resizeStop: 'You cannot resize an event within the holiday date range',
            dragStop: 'You cannot drop an event within the holiday date range',
            eventCreate: 'You cannot add an event within the holiday date range',
            eventChange: 'You cannot edit an event within the holiday date range',
        };
        if (messages[actionName]) {
            toast.content = messages[actionName];
            toast.show();
        }
    }

    function onActionBegin(args) {
        var requestType = args.requestType;
        var isCreateOrChange = requestType === 'eventCreate' || requestType === 'eventChange';
        if (isCreateOrChange) {
            var eventData = requestType === 'eventCreate' ? args.data[0]: args.data;
            var adjustedEndTime = eventData.IsAllDay ?
                new Date(eventData.EndTime.setMinutes(eventData.EndTime.getMinutes() - 1)) :
                eventData.EndTime;
            var isHolidayDateRange = !holidayEventCollection &&
                !eventData.RecurrenceRule &&
                isEventWithinHolidayRange(eventData.StartTime, adjustedEndTime);
            args.cancel = isHolidayDateRange;
            showToastForAction(requestType, isHolidayDateRange);
        }
    }

    function onEventRender(args) {
        var event = args.data;
        if (!holidayEventCollection) {
            if (!event.isHoliday && event.IsAllDay) {
                event.EndTime.setMinutes(event.EndTime.getMinutes() - 1);
            }
            args.cancel =
                !event.isHoliday &&
                isEventWithinHolidayRange(event.StartTime, event.EndTime);
        }
        if (event.isHoliday && !holidayListCollection) {
            args.cancel = true;
        }
        window.applyCategoryColor(args, scheduleObj.currentView);
    }

    function clickOnHoliday(args) {
        args.cancel =
            !holidayEventCollection &&
            isEventWithinHolidayRange(
                args.startTime,
                args.endTime.setMinutes(args.endTime.getMinutes() - 1)
            );
    }

    function onEventDragOrResize(args) {
        var isHolidayDateRange =
            !holidayEventCollection &&
            isEventWithinHolidayRange(args.data.StartTime,
                args.data.EndTime.setMinutes(args.data.EndTime.getMinutes() - 1));
        args.cancel = isHolidayDateRange;
        showToastForAction(args.name, isHolidayDateRange);
    }
};
