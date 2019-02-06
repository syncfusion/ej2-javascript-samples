this.default = function () {
    // Initialize schedule component
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        views: [{ option: 'Agenda', allowVirtualScrolling: false }],
        selectedDate: new Date(2018, 1, 15),
        currentView: 'Agenda',
        eventSettings: { dataSource: window.generateObject() },
    });
    scheduleObj.appendTo('#Schedule');

    // Initialize NumericTextBox component for agenda days count
    var numericText = new ej.inputs.NumericTextBox({
        value: 7,
        min: 1,
        max: 15,
        format: 'n0',
        change: function (args) {
            scheduleObj.agendaDaysCount = args.value !== null ? args.value : 7;
            scheduleObj.dataBind();
        }
    });
    numericText.appendTo('#agendadayscount');

    // Initialize DropDownList component for allow virtual scroll
    var virtualScrollDropDown = new ej.dropdowns.DropDownList({
        change: function (args) {
            var allowVS = (args.value === 'true') ? true : false;
            scheduleObj.views = [{ option: 'Agenda', allowVirtualScrolling: allowVS }];
            scheduleObj.dataBind();
        }
    });
    virtualScrollDropDown.appendTo('#virtualscroll');

    // Initialize DropDownList component for hide empty agenda days
    var hideEmptyDaysDropDown = new ej.dropdowns.DropDownList({
        change: function (args) {
            scheduleObj.hideEmptyAgendaDays = (args.value === 'true') ? true : false;
            scheduleObj.dataBind();
        }
    });
    hideEmptyDaysDropDown.appendTo('#hideemptydays');
};