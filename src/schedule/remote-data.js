this.default = function () {
    var dataManger = new ej.data.DataManager({
        url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    });
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2017, 5, 5),
        eventSettings: { dataSource: dataManger },
        readonly: true
    });
    scheduleObj.appendTo('#Schedule');
};