this.default = function () {
    function isReadOnly(data) {
        return data.ReadOnly || (data.EndTime < new Date());
    }
    var data = new ej.base.extend([], window.readonlyEventsData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        eventSettings: { dataSource: data },
        views: ['Day', 'Week', 'WorkWeek', 'Month'],
        eventClick: function (args) {
            if ((args.element).classList.contains('e-read-only')) {
                args.cancel = true;
            }
        },
        popupOpen: function (args) {
            if (args.type === 'Editor' && isReadOnly(args.data)) {
                args.cancel = true;
            }
        },
        eventRendered: function (args) {
            if (isReadOnly(args.data)) {
                args.element.setAttribute('aria-readonly', 'true');
                args.element.classList.add('e-read-only');
            }
        }
    });
    scheduleObj.appendTo('#Schedule');
};