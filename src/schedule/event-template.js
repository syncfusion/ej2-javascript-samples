this.default = function () {
    // Used in templates to get time string
    var instance = new ej.base.Internationalization();
    window.getTimeString = function (value) {
        return instance.formatDate(value, { skeleton: 'hm' });
    };
    var data = new ej.base.extend([], window.webinarData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        views: ej.base.Browser.isDevice ? ['Day'] : ['Week'],
        selectedDate: new Date(2018, 1, 15),
        eventSettings: {
            dataSource: data,
            template: '#apptemplate'
        }
    });
    scheduleObj.appendTo('#Schedule');
};