this.default = function () {
    var data = new ej.base.extend([], window.eventsData, null, true);
    var template = '<div class="tooltip-wrap">' +
        '<div class="image ${EventType}"></div>' +
        '<div class="content-area"><div class="name">${Subject}</></div>' +
        '${if(City !== null && City !== undefined)}<div class="city">${City}</div>${/if}' +
        '<div class="time">From&nbsp;:&nbsp;${StartTime.toLocaleString()} </div>' +
        '<div class="time">To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;${EndTime.toLocaleString()} </div></div></div>';
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 1, 15),
        eventSettings: {
            dataSource: data,
            enableTooltip: true,
            tooltipTemplate: template
        },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');

    var enableTooltipCheckObj = new ej.buttons.CheckBox({
        label: 'Enable Tooltip', checked: true,
        change: function (args) {
            if (args.checked) {
                scheduleObj.eventSettings.enableTooltip = true;
            } else {
                scheduleObj.eventSettings.enableTooltip = false;
            }
            scheduleObj.dataBind();
        }
    });
    enableTooltipCheckObj.appendTo('#enableTooltip');

    var enableTooltipTemplateCheckObj = new ej.buttons.CheckBox({
        label: 'Enable Tooltip Template', checked: true,
        change: function (args) {
            if (args.checked) {
                scheduleObj.eventSettings.tooltipTemplate = template;
            } else {
                scheduleObj.eventSettings.tooltipTemplate = null;
            }
            scheduleObj.dataBind();
        }
    });
    enableTooltipTemplateCheckObj.appendTo('#enableTooltipTemplate');
};