this.default = function () {
    var data = new ej.base.extend([], window.scheduleData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        views: ['Week'],
        currentView: 'Week',
        selectedDate: new Date(2021, 0, 10),
        eventSettings: { dataSource: data },
        actionBegin: function (args) {
            if (args.requestType === 'toolbarItemRendering') {
                var exportItem = {
                    align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icons e-export-excel',
                    text: 'Excel Export', cssClass: 'e-excel-export', click: onExportClick
                };
                args.items.push(exportItem);
            }
        }
    });
    scheduleObj.appendTo('#Schedule');

    function onExportClick() {
        var exportFields = [
            { name: 'Id', text: 'Id' },
            { name: 'Subject', text: 'Summary' },
            { name: 'StartTime', text: 'Start Date' },
            { name: 'EndTime', text: 'End Date' },
            { name: 'Location', text: 'Place' }
        ];
        var exportValues = { fieldsInfo: exportFields };
        scheduleObj.exportToExcel(exportValues);
    }
};