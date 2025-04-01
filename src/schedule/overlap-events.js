this.default = function () {
    var data = new ej.base.extend([], window.scheduleOverlapData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        selectedDate: new Date(2025, 1, 12),
        eventSettings: { dataSource: data },
        allowOverlap: false,
    });
    scheduleObj.appendTo('#Schedule');
};