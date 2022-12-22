this.default = function () {
    window.majorSlotTemplate = function (date) {
        var instance = new ej.base.Internationalization();
        return instance.formatDate(date, { skeleton: 'hm' });
    };
    window.minorSlotTemplate = function (date) {
        var instance = new ej.base.Internationalization();
        return instance.formatDate(date, { skeleton: 'ms' }).replace(':00', '');
    };
    var data = new ej.base.extend([], window.scheduleData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        height: '650px',
        selectedDate: new Date(2021, 0, 10),
        currentView: 'TimelineWeek',
        cssClass: 'time-scale',
        views: ['Day', 'Week', 'WorkWeek', 'TimelineDay', 'TimelineWeek'],
        timeScale: {
            enable: true,
            interval: 60,
            slotCount: 6
        },
        workDays: [0, 1, 2, 3, 4, 5],
        eventSettings: { dataSource: data }
    });
    scheduleObj.appendTo('#Schedule');
    var minorSlot = new ej.dropdowns.DropDownList({
        placeholder: "Slot Count",
        floatLabelType: "Always",
        change: function (args) {
            scheduleObj.timeScale.slotCount = parseInt(args.value, 10);
            scheduleObj.dataBind();
        }
    });
    minorSlot.appendTo('#slotCount');

    var majorSlotCount = new ej.dropdowns.DropDownList({
        placeholder: "Interval (in Minutes)",
        floatLabelType: "Always",
        change: function (args) {
            scheduleObj.timeScale.interval = parseInt(args.value, 10);
            scheduleObj.dataBind();
        }
    });
    majorSlotCount.appendTo('#interval');

    var timeScale = new ej.dropdowns.DropDownList({
        placeholder: "Grid lines",
        floatLabelType: "Always",
        change: function (args) {
            scheduleObj.timeScale.enable = (args.value === 'enable') ? true : false;
            scheduleObj.dataBind();
        }
    });
    timeScale.appendTo('#timescale');

    var timescaleTemplate = new ej.dropdowns.DropDownList({
        placeholder: "Apply Template",
        floatLabelType: "Always",
        change: function (args) {
            scheduleObj.timeScale.majorSlotTemplate = (args.value === 'yes') ? '#majorSlotTemplate' : null;
            scheduleObj.timeScale.minorSlotTemplate = (args.value === 'yes') ? '#minorSlotTemplate' : null;
            scheduleObj.dataBind();
        }
    });
    timescaleTemplate.appendTo('#template');
};