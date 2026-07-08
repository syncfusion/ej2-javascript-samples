this.default = function () {
    var data = ej.base.extend([], overlappingData, null, true);
    var displayMode = 'limited';
    var maxEventsLimit = 1;

    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2026, 4, 29),
        currentView: 'Week',
        eventSettings: { dataSource: data },
        navigating: function (args) {
            if (args.action === 'view') {
                applyMaxStackToAllViews();
            }
        },
        views: [
            { option: 'Day', maxEventStack: getMaxStack() },
            { option: 'Week', maxEventStack: getMaxStack() },
            { option: 'WorkWeek', maxEventStack: getMaxStack() }
        ]
    });
    scheduleObj.appendTo('#Schedule');

    var radioButton1 = new ej.buttons.RadioButton({
        cssClass: 'schedule-radio-button',
        name: 'eventDisplay',
        value: 'all',
        change: function () { onDisplayModeChange("all"); }
    });
    radioButton1.appendTo('#radio1');

    var radioButton2 = new ej.buttons.RadioButton({
        cssClass: 'schedule-radio-button',
        name: 'eventDisplay',
        value: 'limited',
        checked: true,
        change: function () { onDisplayModeChange("limited"); }
    });
    radioButton2.appendTo('#radio2');

    var numericTextBox = new ej.inputs.NumericTextBox({
        value: maxEventsLimit,
        min: 1,
        width: '110px',
        format: 'n0',
        enabled: true,
        change: onLimitChange
    });
    numericTextBox.appendTo('#numeric');

    function getMaxStack() {
        return displayMode === 'all' ? 0 : maxEventsLimit;
    }

    function onDisplayModeChange(mode) {
        displayMode = mode;
        if (displayMode === 'all') {
            scheduleObj.activeViewOptions.maxEventStack = 0;
            numericTextBox.enabled = false;
            numericTextBox.dataBind();
        } else {
            scheduleObj.activeViewOptions.maxEventStack = maxEventsLimit;
            numericTextBox.enabled = true;
            numericTextBox.dataBind();
        }
        scheduleObj.refreshEvents();
    }

    function onLimitChange(args) {
        maxEventsLimit = args.value;
        scheduleObj.activeViewOptions.maxEventStack = maxEventsLimit;
        scheduleObj.refreshEvents();
    }

    function applyMaxStackToAllViews() {
        var value = displayMode === 'all' ? 0 : maxEventsLimit;
        var currentViews = scheduleObj.views;
        var updatedViews = currentViews.map(function (view) {
            var newView = Object.assign({}, view);
            newView.maxEventStack = value;
            return newView;
        });
        scheduleObj.setProperties({ views: updatedViews }, true);
        scheduleObj.dataBind();
        scheduleObj.refreshEvents();
    }
};
