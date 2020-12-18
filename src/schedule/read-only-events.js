this.default = function () {
    var data = new ej.base.extend([], window.readonlyEventsData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        eventSettings: { dataSource: data },
        views: ['Day', 'Week', 'WorkWeek', 'Month'],
        popupOpen: onPopupOpen,
        dragStop: onDragStop,
        resizeStop: onResizeStop,
        actionBegin: onActionBegin
    });
    scheduleObj.appendTo('#Schedule');

    function onDragStop(args) {
        args.cancel = onEventCheck(args);
    }

    function onResizeStop(args) {
        args.cancel = onEventCheck(args);
    }

    function onActionBegin(args) {
        if ((args.requestType === 'eventCreate') || args.requestType === 'eventChange') {
            args.cancel = onEventCheck(args);
        }
    }

    function onPopupOpen(args) {
        if ((args.target && !args.target.classList.contains('e-appointment') && (args.type === 'QuickInfo')) || (args.type === 'Editor')) {
            args.cancel = onEventCheck(args);
        }
    }

    function onEventCheck(args) {
        var eventObj = args.data instanceof Array ? args.data[0] : args.data;
        return (eventObj.StartTime < new Date());
    }
};