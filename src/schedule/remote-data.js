this.default = function () {
    var dataManger = new ej.data.DataManager({
        url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    });
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        selectedDate: new Date(2017, 5, 5),
        eventSettings: { dataSource: dataManger },
        readonly: true,
        actionBegin: function (args) {
            if (args.requestType === 'viewNavigate' || args.requestType === 'dateNavigate') {
                new ej.popups.showSpinner(scheduleObj.element);
            }
        },
        actionFailure: function () {
            new ej.popups.hideSpinner(scheduleObj.element);
        },
        dataBound: function () {
            new ej.popups.hideSpinner(scheduleObj.element);
        }

    });
    scheduleObj.appendTo('#Schedule');
    // create the spinner
    new ej.popups.createSpinner({ target: scheduleObj.element });
};