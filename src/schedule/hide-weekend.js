this.default = function () {
    var data = new ej.base.extend([], window.employeeEventData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        showWeekend: false,
        workDays: [1, 3, 4, 5],
        workHours: {
            start: '08:00'
        },
        views: ['Day', 'Week', 'Month', 'TimelineWeek', 'TimelineMonth'],
        selectedDate: new Date(2021, 1, 15),
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');

    var weekDays = [
        { Name: 'Sunday', Value: '0' },
        { Name: 'Monday', Value: '1' },
        { Name: 'Tuesday', Value: '2' },
        { Name: 'Wednesday', Value: '3' },
        { Name: 'Thursday', Value: '4' },
        { Name: 'Friday', Value: '5' },
        { Name: 'Saturday', Value: '6' }
    ];
    var checkList = new ej.dropdowns.MultiSelect({
        value: ['1', '3', '4', '5'],
        dataSource: weekDays,
        fields: { text: 'Name', value: 'Value' },
        mode: 'CheckBox',
        showDropDownIcon: true,
        showClearButton: false,
        popupWidth: 180,
        placeholder: "Working days",
        floatLabelType: "Always",
        change: function (args) {
            var value = args.value.slice(0).map(Number).sort();
            scheduleObj.workDays = value.length === 0 ? [0] : value;
            scheduleObj.dataBind();
        }
    });
    checkList.appendTo('#workdayscheckbox');

    var toggleBtn = new ej.buttons.Button({ isToggle: true });
    toggleBtn.appendTo('#showweekendbtn');
    toggleBtn.element.onclick = function () {
        if (toggleBtn.element.classList.contains('e-active')) {
            toggleBtn.content = 'Hide';
            scheduleObj.showWeekend = true;
        } else {
            toggleBtn.content = 'Show';
            scheduleObj.showWeekend = false;
        }
    };
};