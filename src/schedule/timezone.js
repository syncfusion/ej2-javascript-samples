this.default = function () {
    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        ej.schedule.Timezone.prototype.offset = function (date, timezone) {
            return moment.tz.zone(timezone).utcOffset(date.getTime());
        };
    }
    var data = new ej.base.extend([], window.fifaEventsData, null, true);
    var timezone = new ej.schedule.Timezone();
    // Here remove the local offset from events
    for (var i = 0; i < data.length; i++) {
        data[i].StartTime = timezone.removeLocalOffset(data[i].StartTime);
        data[i].EndTime = timezone.removeLocalOffset(data[i].EndTime);
    }
    // Initialize schedule component
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        timezone: 'UTC',
        workHours: { start: '11:00' },
        selectedDate: new Date(2021, 5, 20),
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');

    // Initialize DropDownList component for timezone list
    var dropDownListObject = new ej.dropdowns.DropDownList({
        popupWidth: 250,
        width: 250,
        floatLabelType: "Always",
        change: function (args) {
            scheduleObj.timezone = args.value;
            scheduleObj.dataBind();
        }
    });
    dropDownListObject.appendTo('#scheduletimezone');
};