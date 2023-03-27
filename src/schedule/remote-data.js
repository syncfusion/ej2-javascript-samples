this.default = function () {
    var dataManager = new ej.data.DataManager({
        url: 'https://services.syncfusion.com/js/production/api/schedule',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    });
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        currentView: 'Month',
        eventSettings: { dataSource: dataManager },
        readonly: true
    });
    scheduleObj.appendTo('#Schedule');
};
