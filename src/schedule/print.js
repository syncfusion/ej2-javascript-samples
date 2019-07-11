this.default = function () {
    var data = new ej.base.extend([], window.scheduleData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        views: ['Month'],
        selectedDate: new Date(2019, 0, 10),
        eventSettings: { dataSource: data },
        actionBegin: function (args) {
            if (args.requestType === 'toolbarItemRendering') {
                var exportItem = {
                    align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-print',
                    text: 'Print', cssClass: 'e-print', click: onPrintIconClick
                };
                args.items.push(exportItem);
            }
        }
    });
    scheduleObj.appendTo('#Schedule');

    function onPrintIconClick() {
        scheduleObj.print();
    }
};