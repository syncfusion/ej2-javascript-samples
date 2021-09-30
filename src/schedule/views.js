this.default = function () {
    var data = new ej.base.extend([], window.zooEventsData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        views: ['Day', 'Week', 'WorkWeek', 'Month'],
        selectedDate: new Date(2021, 1, 15),
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');

    // Initialize DropDownList component for views
    var dropDownListObject = new ej.dropdowns.DropDownList({
        placeholder: 'Current View',
        floatLabelType: "Always",
        change: function (args) {
            scheduleObj.currentView = args.value;
            scheduleObj.dataBind();
        }
    });
    dropDownListObject.appendTo('#scheduleview');
};