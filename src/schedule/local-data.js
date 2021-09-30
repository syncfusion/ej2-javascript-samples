this.default = function () {
    var data = new ej.base.extend([], window.zooEventsData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 1, 15),
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            var categoryColor = args.data.CategoryColor;
            if (!args.element || !categoryColor) {
                return;
            }
            if (scheduleObj.currentView === 'Agenda') {
                (args.element.firstChild).style.borderLeftColor = categoryColor;
            } else {
                args.element.style.backgroundColor = categoryColor;
            }
        }
    });
    scheduleObj.appendTo('#Schedule');
};