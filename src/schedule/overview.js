this.default = function () {
    var intlObj = new ej.base.Internationalization();
    window.getDateHeaderDay = function (value) {
        return intlObj.formatDate(value, { skeleton: 'E' });
    };
    window.getDateHeaderDate = function (value) {
        return intlObj.formatDate(value, { skeleton: 'd' });
    };
    window.getWeather = function (value) {
        switch (value.getDay()) {
            case 0:
                return '<img class="weather-image" src="src/schedule/images/weather-clear.svg" alt="Clear Weather"/>';
            case 1:
                return '<img class="weather-image" src="src/schedule/images/weather-clouds.svg" alt="Clouds Weather"/>';
            case 2:
                return '<img class="weather-image" src="src/schedule/images/weather-rain.svg" alt="Rain Weather"/>';
            case 3:
                return '<img class="weather-image" src="src/schedule/images/weather-clouds.svg" alt="Clouds Weather"/>';
            case 4:
                return '<img class="weather-image" src="src/schedule/images/weather-rain.svg" alt="Rain Weather"/>';
            case 5:
                return '<img class="weather-image" src="src/schedule/images/weather-clear.svg" alt="Clear Weather"/>';
            case 6:
                return '<img class="weather-image" src="src/schedule/images/weather-clouds.svg" alt="Clouds Weather"/>';
            default:
                return null;
        }
    };

    var importTemplateFn = function (data) {
        var template = '<div class="e-template-btn"><span class="e-btn-icon e-icons e-upload-1 e-icon-left"></span>${text}</div>';
        return ej.base.compile(template.trim())(data);
    };
    var liveTimeInterval;
    var defaultAppBarObj = new ej.navigations.AppBar({
        colorMode: 'Primary'
    });
    defaultAppBarObj.appendTo('#defaultAppBar');
    var updateLiveTime = function () {
        var scheduleTimezone = scheduleObj ? scheduleObj.timezone : 'Etc/GMT';
        var timeBtn = document.querySelector('.current-time');
        if (!timeBtn) {
            return;
        }
        if (scheduleObj.isAdaptive) {
            timeBtn.innerHTML = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: scheduleTimezone });
        }
        else {
            timeBtn.innerHTML = new Date().toLocaleTimeString('en-US', { timeZone: scheduleTimezone });
        }
    };
    var generateEvents = function () {
        var eventData = [];
        var eventSubjects = [
            'Bering Sea Gold', 'Technology', 'Maintenance', 'Meeting', 'Traveling', 'Annual Conference', 'Birthday Celebration',
            'Farewell Celebration', 'Wedding Anniversary', 'Alaska: The Last Frontier', 'Deadliest Catch', 'Sports Day', 'MoonShiners',
            'Close Encounters', 'HighWay Thru Hell', 'Daily Planet', 'Cash Cab', 'Basketball Practice', 'Rugby Match', 'Guitar Class',
            'Music Lessons', 'Doctor checkup', 'Brazil - Mexico', 'Opening ceremony', 'Final presentation'
        ];
        var weekDate = new Date(new Date().setDate(new Date().getDate() - new Date().getDay()));
        var startDate = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate(), 10, 0);
        var endDate = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate(), 11, 30);
        eventData.push({
            Id: 1,
            Subject: eventSubjects[Math.floor(Math.random() * (24 - 0 + 1) + 0)],
            StartTime: startDate,
            EndTime: endDate,
            Location: '',
            Description: 'Event Scheduled',
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1;COUNT=10;',
            IsAllDay: false,
            IsReadonly: false,
            CalendarId: 1
        });
        for (var a = 0, id = 2; a < 500; a++) {
            var month = Math.floor(Math.random() * (11 - 0 + 1) + 0);
            var date = Math.floor(Math.random() * (28 - 1 + 1) + 1);
            var hour = Math.floor(Math.random() * (23 - 0 + 1) + 0);
            var minutes = Math.floor(Math.random() * (59 - 0 + 1) + 0);
            var start = new Date(new Date().getFullYear(), month, date, hour, minutes, 0);
            var end = new Date(start.getTime());
            end.setHours(end.getHours() + 2);
            startDate = new Date(start.getTime());
            endDate = new Date(end.getTime());
            eventData.push({
                Id: id,
                Subject: eventSubjects[Math.floor(Math.random() * (24 - 0 + 1) + 0)],
                StartTime: startDate,
                EndTime: endDate,
                Location: '',
                Description: 'Event Scheduled',
                IsAllDay: id % 10 === 0,
                IsReadonly: endDate < new Date(),
                CalendarId: (a % 4) + 1
            });
            id++;
        }
        if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
            ej.schedule.Timezone.prototype.offset = function (date, timezone) {
                return moment.tz.zone(timezone).utcOffset(date.getTime());
            };
        }
        var overviewEvents = ej.base.extend([], eventData, null, true);
        var timezone = new ej.schedule.Timezone();
        var currentTimezone = timezone.getLocalTimezoneName();
        for (var i = 0; i < overviewEvents.length; i++) {
            var event = overviewEvents[i];
            event.StartTime = timezone.convert(event.StartTime, 'UTC', currentTimezone);
            event.EndTime = timezone.convert(event.EndTime, 'UTC', currentTimezone);
        }
        return overviewEvents;
    };
    var isTimelineView = false;
    var printBtn = new ej.buttons.Button({ iconCss: 'e-icons e-print', cssClass: 'e-inherit' });
    printBtn.appendTo('#printBtn');
    printBtn.element.onclick = function () { scheduleObj.print(); };
    var importObj = new ej.inputs.Uploader({
        allowedExtensions: '.ics',
        cssClass: 'calendar-import',
        buttons: { browse: importTemplateFn({ text: 'Import' })[0] },
        multiple: false,
        showFileList: false,
        selected: function (args) { return scheduleObj.importICalendar(args.event.target.files[0]); }
    });
    importObj.appendTo('#icalendar');
    document.querySelector('.calendar-import .e-btn').classList.add('e-inherit');
    var exportObj = new ej.splitbuttons.DropDownButton({
        items: [
            { text: 'iCalendar', iconCss: 'e-icons e-export' },
            { text: 'Excel', iconCss: 'e-icons e-export-excel' }
        ],
        cssClass: 'e-inherit',
        select: function (args) {
            if (args.item.text === 'Excel') {
                var exportDatas = [];
                var eventCollection = scheduleObj.getEvents();
                var resourceCollection = scheduleObj.getResourceCollections();
                var resourceData = resourceCollection[0].dataSource;
                var _loop = function (resource) {
                    var data = eventCollection.filter(function (e) { return e.CalendarId === resource.CalendarId; });
                    exportDatas = exportDatas.concat(data);
                };
                for (var i = 0; i < resourceData.length; i++) {
                    var resource = resourceData[i];
                    _loop(resource);
                }
                scheduleObj.exportToExcel({
                    exportType: 'xlsx', customData: exportDatas, fields: ['Id', 'Subject', 'StartTime', 'EndTime', 'CalendarId']
                });
            }
            else {
                scheduleObj.exportToICalendar();
            }
        }
    });
    exportObj.appendTo('#exportBtn');
    var timelineTemplate = '<div class="template"><label><div class="icon-child">' +
        '<input id="timeline-views" aria-label="Timeline Views"></input></div><div class="text-child">Timeline Views</div></label></div>';
    var groupTemplate = '<div class="template"><label><div class="icon-child">' +
        '<input id="grouping" aria-label="Grouping"></input></div><div class="text-child">Grouping</div></label></div>';
    var gridlineTemplate = '<div class="template"><label><div class="icon-child">' +
        '<input id="timeSlot" aria-label="Time Slots"></input></div><div class="text-child">Time Slots</div></label></div>';
    var autoHeightTemplate = '<div class="template"><label><div class="icon-child">' +
        '<input id="row_auto_height" aria-label="Auto Fit Rows"></input></div><div class="text-child">Auto Fit Rows</div></label></div>';
    var toolbarObj = new ej.navigations.Toolbar({
        height: 70,
        overflowMode: 'Scrollable',
        scrollStep: 100,
        cssClass: 'overview-toolbar',
        items: [
            { prefixIcon: 'e-icons e-plus', tooltipText: 'New Event', text: 'New Event',  tabIndex: 0 },
            { prefixIcon: 'e-icons e-repeat', tooltipText: 'New Recurring Event', text: 'New Recurring Event',  tabIndex: 0 },
            { type: 'Separator' },
            { prefixIcon: 'e-icons e-day', tooltipText: 'Day', text: 'Day',  tabIndex: 0 },
            { prefixIcon: 'e-icons e-week', tooltipText: 'Week', text: 'Week',  tabIndex: 0 },
            { prefixIcon: 'e-icons e-week', tooltipText: 'WorkWeek', text: 'WorkWeek',  tabIndex: 0 },
            { prefixIcon: 'e-icons e-month', tooltipText: 'Month', text: 'Month',  tabIndex: 0 },
            { prefixIcon: 'e-icons e-month', tooltipText: 'Year', text: 'Year',  tabIndex: 0 },
            { prefixIcon: 'e-icons e-agenda-date-range', tooltipText: 'Agenda', text: 'Agenda',  tabIndex: 0 },
            { tooltipText: 'Timeline Views', text: 'Timeline Views', template: timelineTemplate },
            { type: 'Separator' },
            { tooltipText: 'Grouping', text: 'Grouping', template: groupTemplate },
            { tooltipText: 'Time Slots', text: 'Time Slots', template: gridlineTemplate },
            { tooltipText: 'Auto Fit Rows', text: 'Auto Fit Rows', template: autoHeightTemplate },
        ],
        created: function () {
            liveTimeInterval = setInterval(function () { updateLiveTime(); }, 1000);
            var timelineView = new ej.buttons.CheckBox({
                checked: false,
                created: function () { this.element.setAttribute('tabindex', '0'); },
                change: function (args) {
                    isTimelineView = args.checked;
                    switch (scheduleObj.currentView) {
                        case 'Day':
                        case 'TimelineDay':
                            scheduleObj.currentView = isTimelineView ? 'TimelineDay' : 'Day';
                            break;
                        case 'Week':
                        case 'TimelineWeek':
                            scheduleObj.currentView = isTimelineView ? 'TimelineWeek' : 'Week';
                            break;
                        case 'WorkWeek':
                        case 'TimelineWorkWeek':
                            scheduleObj.currentView = isTimelineView ? 'TimelineWorkWeek' : 'WorkWeek';
                            break;
                        case 'Month':
                        case 'TimelineMonth':
                            scheduleObj.currentView = isTimelineView ? 'TimelineMonth' : 'Month';
                            break;
                        case 'Year':
                        case 'TimelineYear':
                            scheduleObj.currentView = isTimelineView ? 'TimelineYear' : 'Year';
                            break;
                        case 'Agenda':
                            scheduleObj.currentView = 'Agenda';
                            break;
                    }
                }
            });
            timelineView.appendTo('#timeline-views');
            var grouping = new ej.buttons.CheckBox({
                checked: true,
                created: function () { this.element.setAttribute('tabindex', '0'); },
                change: function (args) { scheduleObj.group.resources = args.checked ? ['Calendars'] : []; }
            });
            grouping.appendTo('#grouping');
            var timeSlot = new ej.buttons.CheckBox({
                checked: true,
                created: function () { this.element.setAttribute('tabindex', '0'); },
                change: function (args) { scheduleObj.timeScale.enable = args.checked; }
            });
            timeSlot.appendTo('#timeSlot');
            var rowAutoHeight = new ej.buttons.CheckBox({
                checked: false,
                created: function () { this.element.setAttribute('tabindex', '0'); },
                change: function (args) { scheduleObj.rowAutoHeight = args.checked; }
            });
            rowAutoHeight.appendTo('#row_auto_height');
            document.querySelector('#settingsBtn').onclick = function () {
                var settingsPanel = document.querySelector('.overview-content .right-panel');
                if (settingsPanel.classList.contains('hide')) {
                    ej.base.removeClass([settingsPanel], 'hide');
                    workweek.refresh();
                    resources.refresh();
                }
                else {
                    ej.base.addClass([settingsPanel], 'hide');
                }
                scheduleObj.refreshEvents();
            };
        },
        clicked: function (args) {
            switch (args.item.text) {
                case 'Day':
                    scheduleObj.currentView = isTimelineView ? 'TimelineDay' : 'Day';
                    break;
                case 'Week':
                    scheduleObj.currentView = isTimelineView ? 'TimelineWeek' : 'Week';
                    break;
                case 'WorkWeek':
                    scheduleObj.currentView = isTimelineView ? 'TimelineWorkWeek' : 'WorkWeek';
                    break;
                case 'Month':
                    scheduleObj.currentView = isTimelineView ? 'TimelineMonth' : 'Month';
                    break;
                case 'Year':
                    scheduleObj.currentView = isTimelineView ? 'TimelineYear' : 'Year';
                    break;
                case 'Agenda':
                    scheduleObj.currentView = 'Agenda';
                    break;
                case 'New Event':
                    var date = scheduleObj.selectedDate;
                    var eventData = {
                        Id: scheduleObj.getEventMaxID(),
                        Subject: '',
                        StartTime: new Date(date.getFullYear(), date.getMonth(), date.getDate(), new Date().getHours(), 0, 0),
                        EndTime: new Date(date.getFullYear(), date.getMonth(), date.getDate(), new Date().getHours() + 1, 0, 0),
                        Location: '',
                        Description: '',
                        IsAllDay: false,
                        CalendarId: 1
                    };
                    scheduleObj.openEditor(eventData, 'Add', true);
                    break;
                case 'New Recurring Event':
                    var dates = scheduleObj.selectedDate;
                    var recEventData = {
                        Id: scheduleObj.getEventMaxID(),
                        Subject: '',
                        StartTime: new Date(dates.getFullYear(), dates.getMonth(), dates.getDate(), new Date().getHours(), 0, 0),
                        EndTime: new Date(dates.getFullYear(), dates.getMonth(), dates.getDate(), new Date().getHours() + 1, 0, 0),
                        Location: '',
                        Description: '',
                        IsAllDay: false,
                        CalendarId: 1
                    };
                    scheduleObj.openEditor(recEventData, 'Add', true, 1);
                    break;
            }
        }
    });
    toolbarObj.appendTo('#toolbarOptions');
    var settingsBtn = new ej.buttons.Button({
        iconCss: 'e-icons e-settings',
        cssClass: 'e-inherit'
    });
    settingsBtn.appendTo('#settingsBtn');
    var resourceData = [
        { CalendarName: 'My Calendar', CalendarId: 1, CalendarColor: '#c43081' },
        { CalendarName: 'Company', CalendarId: 2, CalendarColor: '#ff7f50' },
        { CalendarName: 'Birthday', CalendarId: 3, CalendarColor: '#AF27CD' },
        { CalendarName: 'Holiday', CalendarId: 4, CalendarColor: '#808000' }
    ];
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '100%',
        cssClass: 'schedule-overview',
        views: [
            'Day', 'Week', 'WorkWeek', 'Month', 'Year', 'Agenda', 'TimelineDay',
            'TimelineWeek', 'TimelineWorkWeek', 'TimelineMonth', 'TimelineYear'
        ],
        timezone: 'UTC',
        group: { resources: ['Calendars'] },
        resources: [{
                field: 'CalendarId', title: 'Calendars', name: 'Calendars', allowMultiple: true,
                textField: 'CalendarName', idField: 'CalendarId', colorField: 'CalendarColor',
                dataSource: resourceData, query: new ej.data.Query().where('CalendarId', 'equal', 1)
            }],
        dateHeaderTemplate: '<div class="date-text">${getDateHeaderDay(data.date)}</div><div class="date-text">' +
            '${getDateHeaderDate(data.date)}</div>${getWeather(data.date)}',
        eventSettings: { dataSource: generateEvents() },
        destroyed: function () {
            contextMenuObj.destroy();
            if (liveTimeInterval) {
                clearInterval(liveTimeInterval);
            }
        }
    });
    scheduleObj.appendTo('#scheduler');
    var selectedTarget;
    var contextMenuObj = new ej.navigations.ContextMenu({
        target: '.e-schedule',
        items: [
            { text: 'New Event', iconCss: 'e-icons e-plus', id: 'Add' },
            { text: 'New Recurring Event', iconCss: 'e-icons e-repeat', id: 'AddRecurrence' },
            { text: 'Today', iconCss: 'e-icons e-timeline-today', id: 'Today' },
            { text: 'Edit Event', iconCss: 'e-icons e-edit', id: 'Save' },
            { text: 'Delete Event', iconCss: 'e-icons e-trash', id: 'Delete' },
            {
                text: 'Delete Event', id: 'DeleteRecurrenceEvent', iconCss: 'e-icons e-trash',
                items: [
                    { text: 'Delete Occurrence', id: 'DeleteOccurrence' },
                    { text: 'Delete Series', id: 'DeleteSeries' }
                ]
            },
            {
                text: 'Edit Event', id: 'EditRecurrenceEvent', iconCss: 'e-icons e-edit',
                items: [
                    { text: 'Edit Occurrence', id: 'EditOccurrence' },
                    { text: 'Edit Series', id: 'EditSeries' }
                ]
            }
        ],
        beforeOpen: function (args) {
            var eventElement = document.querySelector('.e-new-event');
            if (eventElement) {
                ej.base.remove(eventElement);
                ej.base.removeClass([document.querySelector('.e-selected-cell')], 'e-selected-cell');
            }
            scheduleObj.closeQuickInfoPopup();
            var targetEle = args.event.target;
            if (ej.base.closest(targetEle, '.e-contextmenu')) {
                return;
            }
            selectedTarget = ej.base.closest(targetEle, '.e-appointment,.e-work-cells,' +
                '.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells');
            if (ej.base.isNullOrUndefined(selectedTarget)) {
                args.cancel = true;
                return;
            }
            if (selectedTarget.classList.contains('e-appointment')) {
                var eventObj = scheduleObj.getEventDetails(selectedTarget);
                if (eventObj.RecurrenceRule) {
                    contextMenuObj.showItems(['EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
                    contextMenuObj.hideItems(['Add', 'AddRecurrence', 'Today', 'Save', 'Delete'], true);
                }
                else {
                    contextMenuObj.showItems(['Save', 'Delete'], true);
                    contextMenuObj.hideItems(['Add', 'AddRecurrence', 'Today', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
                }
                return;
            } else if ((selectedTarget.classList.contains('e-work-cells') || selectedTarget.classList.contains('e-all-day-cells')) &&
                !selectedTarget.classList.contains('e-selected-cell')) {
                var selectedCells = [].slice.call(scheduleObj.element.querySelectorAll('.e-selected-cell'));
                ej.base.removeClass(selectedCells, 'e-selected-cell');
                selectedTarget.classList.add('e-selected-cell');
                selectedTarget.setAttribute('aria-selected', 'true');
            }
            contextMenuObj.hideItems(['Save', 'Delete', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
            contextMenuObj.showItems(['Add', 'AddRecurrence', 'Today'], true);
        },
        select: function (args) {
            var selectedItem = args.item.id;
            var eventObj;
            if (selectedTarget && selectedTarget.classList.contains('e-appointment')) {
                eventObj = scheduleObj.getEventDetails(selectedTarget);
            }
            switch (selectedItem) {
                case 'Today':
                    scheduleObj.selectedDate = new Date();
                    break;
                case 'Add':
                case 'AddRecurrence':
                    var selectedCells = scheduleObj.getSelectedElements();
                    var isRightClickInSelectedCells = selectedCells.some(function (cell) {
                        return cell === selectedTarget;
                    });
                    var activeCellsData = scheduleObj.getCellDetails(isRightClickInSelectedCells ? selectedCells : [selectedTarget]);
                    if (selectedItem === 'Add') {
                        scheduleObj.openEditor(activeCellsData, 'Add');
                    }
                    else {
                        scheduleObj.openEditor(activeCellsData, 'Add', null, 1);
                    }
                    break;
                case 'Save':
                case 'EditOccurrence':
                case 'EditSeries':
                    if (selectedItem === 'EditSeries') {
                        var query = new ej.data.Query().where(scheduleObj.eventFields.id, 'equal', eventObj.RecurrenceID);
                        eventObj = new ej.data.DataManager(scheduleObj.eventsData).executeLocal(query)[0];
                    }
                    scheduleObj.openEditor(eventObj, selectedItem);
                    break;
                case 'Delete':
                    scheduleObj.deleteEvent(eventObj);
                    break;
                case 'DeleteOccurrence':
                case 'DeleteSeries':
                    scheduleObj.deleteEvent(eventObj, selectedItem);
                    break;
            }
        },
        cssClass: 'schedule-context-menu'
    });
    contextMenuObj.appendTo('#overviewContextMenu');
    var weekDays = [
        { text: 'Sunday', value: 0 },
        { text: 'Monday', value: 1 },
        { text: 'Tuesday', value: 2 },
        { text: 'Wednesday', value: 3 },
        { text: 'Thursday', value: 4 },
        { text: 'Friday', value: 5 },
        { text: 'Saturday', value: 6 }
    ];
    var weekFirstDay = new ej.dropdowns.DropDownList({
        dataSource: weekDays,
        fields: { text: 'text', value: 'value' },
        popupHeight: 150,
        value: 0,
        change: function (args) { scheduleObj.firstDayOfWeek = args.value; }
    });
    weekFirstDay.appendTo('#weekFirstDay');
    var workweek = new ej.dropdowns.MultiSelect({
        cssClass: 'schedule-workweek',
        dataSource: weekDays,
        fields: { text: 'text', value: 'value' },
        mode: 'CheckBox',
        enableSelectionOrder: false,
        showClearButton: false,
        showDropDownIcon: true,
        value: [1, 2, 3, 4, 5],
        change: function (args) { scheduleObj.workDays = args.value; }
    });
    workweek.appendTo('#workWeekDays');
    var resources = new ej.dropdowns.MultiSelect({
        cssClass: 'schedule-resource',
        dataSource: resourceData,
        fields: { text: 'CalendarName', value: 'CalendarId' },
        mode: 'CheckBox',
        showClearButton: false,
        showDropDownIcon: true,
        value: [1],
        change: function (args) {
            var resourcePredicate;
            for (var i = 0, a = args.value; i < a.length; i++) {
                var value = a[i];
                if (resourcePredicate) {
                    resourcePredicate = resourcePredicate.or(new ej.data.Predicate('CalendarId', 'equal', value));
                }
                else {
                    resourcePredicate = new ej.data.Predicate('CalendarId', 'equal', value);
                }
            }
            scheduleObj.resources[0].query = resourcePredicate ? new ej.data.Query().where(resourcePredicate) :
                new ej.data.Query().where('CalendarId', 'equal', 1);
        }
    });
    resources.appendTo('#resources');
    var timezone = new ej.dropdowns.DropDownList({
        dataSource: [
            { text: 'UTC -12:00', value: 'Etc/GMT+12' },
            { text: 'UTC -11:00', value: 'Etc/GMT+11' },
            { text: 'UTC -10:00', value: 'Etc/GMT+10' },
            { text: 'UTC -09:00', value: 'Etc/GMT+9' },
            { text: 'UTC -08:00', value: 'Etc/GMT+8' },
            { text: 'UTC -07:00', value: 'Etc/GMT+7' },
            { text: 'UTC -06:00', value: 'Etc/GMT+6' },
            { text: 'UTC -05:00', value: 'Etc/GMT+5' },
            { text: 'UTC -04:00', value: 'Etc/GMT+4' },
            { text: 'UTC -03:00', value: 'Etc/GMT+3' },
            { text: 'UTC -02:00', value: 'Etc/GMT+2' },
            { text: 'UTC -01:00', value: 'Etc/GMT+1' },
            { text: 'UTC +00:00', value: 'Etc/GMT' },
            { text: 'UTC +01:00', value: 'Etc/GMT-1' },
            { text: 'UTC +02:00', value: 'Etc/GMT-2' },
            { text: 'UTC +03:00', value: 'Etc/GMT-3' },
            { text: 'UTC +04:00', value: 'Etc/GMT-4' },
            { text: 'UTC +05:00', value: 'Etc/GMT-5' },
            { text: 'UTC +05:30', value: 'Asia/Calcutta' },
            { text: 'UTC +06:00', value: 'Etc/GMT-6' },
            { text: 'UTC +07:00', value: 'Etc/GMT-7' },
            { text: 'UTC +08:00', value: 'Etc/GMT-8' },
            { text: 'UTC +09:00', value: 'Etc/GMT-9' },
            { text: 'UTC +10:00', value: 'Etc/GMT-10' },
            { text: 'UTC +11:00', value: 'Etc/GMT-11' },
            { text: 'UTC +12:00', value: 'Etc/GMT-12' },
            { text: 'UTC +13:00', value: 'Etc/GMT-13' },
            { text: 'UTC +14:00', value: 'Etc/GMT-14' }
        ],
        fields: { text: 'text', value: 'value' },
        popupHeight: 150,
        value: 'Etc/GMT',
        change: function (args) {
            scheduleObj.timezone = args.value;
            updateLiveTime();
            document.querySelector('.schedule-overview #timezoneBtn').innerHTML = args.itemData.text;
        }
    });
    timezone.appendTo('#timezone');
    var dayStartHour = new ej.calendars.TimePicker({
        value: new Date(new Date().setHours(0, 0, 0)), showClearButton: false,
        change: function (args) {
            scheduleObj.startHour = new ej.base.Internationalization().formatDate(args.value, { skeleton: 'Hm' });
        }
    });
    dayStartHour.appendTo('#dayStartHour');
    var dayEndHour = new ej.calendars.TimePicker({
        value: new Date(new Date().setHours(23, 59, 59)), showClearButton: false,
        change: function (args) {
            scheduleObj.endHour = new ej.base.Internationalization().formatDate(args.value, { skeleton: 'Hm' });
        }
    });
    dayEndHour.appendTo('#dayEndHour');
    var workHourStart = new ej.calendars.TimePicker({
        value: new Date(new Date().setHours(9, 0, 0)), showClearButton: false,
        change: function (args) {
            scheduleObj.workHours.start = new ej.base.Internationalization().formatDate(args.value, { skeleton: 'Hm' });
        }
    });
    workHourStart.appendTo('#workHourStart');
    var workHourEnd = new ej.calendars.TimePicker({
        value: new Date(new Date().setHours(18, 0, 0)), showClearButton: false,
        change: function (args) {
            scheduleObj.workHours.end = new ej.base.Internationalization().formatDate(args.value, { skeleton: 'Hm' });
        }
    });
    workHourEnd.appendTo('#workHourEnd');
    var slotDuration = new ej.dropdowns.DropDownList({
        dataSource: [
            { Name: '1 hour', Value: 60 },
            { Name: '1.5 hours', Value: 90 },
            { Name: '2 hours', Value: 120 },
            { Name: '2.5 hours', Value: 150 },
            { Name: '3 hours', Value: 180 },
            { Name: '3.5 hours', Value: 210 },
            { Name: '4 hours', Value: 240 },
            { Name: '4.5 hours', Value: 270 },
            { Name: '5 hours', Value: 300 },
            { Name: '5.5 hours', Value: 330 },
            { Name: '6 hours', Value: 360 },
            { Name: '6.5 hours', Value: 390 },
            { Name: '7 hours', Value: 420 },
            { Name: '7.5 hours', Value: 450 },
            { Name: '8 hours', Value: 480 },
            { Name: '8.5 hours', Value: 510 },
            { Name: '9 hours', Value: 540 },
            { Name: '9.5 hours', Value: 570 },
            { Name: '10 hours', Value: 600 },
            { Name: '10.5 hours', Value: 630 },
            { Name: '11 hours', Value: 660 },
            { Name: '11.5 hours', Value: 690 },
            { Name: '12 hours', Value: 720 }
        ],
        fields: { text: 'Name', value: 'Value' },
        popupHeight: 150,
        value: 60,
        change: function (args) { scheduleObj.timeScale.interval = args.value; }
    });
    slotDuration.appendTo('#slotDuration');
    var slotInterval = new ej.dropdowns.DropDownList({
        dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        popupHeight: 150,
        value: 2,
        change: function (args) { scheduleObj.timeScale.slotCount = args.value; }
    });
    slotInterval.appendTo('#slotInterval');
    var timeFormat = new ej.dropdowns.DropDownList({
        dataSource: [
            { Name: '12 hours', Value: 'hh:mm a' },
            { Name: '24 hours', Value: 'HH:mm' }
        ],
        fields: { text: 'Name', value: 'Value' },
        popupHeight: 150,
        value: 'hh:mm a',
        change: function (args) { scheduleObj.timeFormat = args.value; },
    });
    timeFormat.appendTo('#timeFormat');
    var weekNumber = new ej.dropdowns.DropDownList({
        dataSource: [
            { Name: 'Off', Value: 'Off' },
            { Name: 'First Day of Year', Value: 'FirstDay' },
            { Name: 'First Full Week', Value: 'FirstFullWeek' },
            { Name: 'First Four-Day Week', Value: 'FirstFourDayWeek' }
        ],
        fields: { text: 'Name', value: 'Value' },
        popupHeight: 150,
        value: 'Off',
        change: function (args) {
            if (args.value === 'Off') {
                scheduleObj.showWeekNumber = false;
            }
            else {
                scheduleObj.showWeekNumber = true;
                scheduleObj.weekRule = args.value;
            }
        },
    });
    weekNumber.appendTo('#weekNumber');
    var tooltip = new ej.dropdowns.DropDownList({
        dataSource: [
            { Name: 'Off', Value: 'Off' },
            { Name: 'On', Value: 'On' },
        ],
        fields: { text: 'Name', value: 'Value' },
        popupHeight: 150,
        value: 'Off',
        change: function (args) {
            if (args.value === 'Off') {
                scheduleObj.eventSettings.enableTooltip = false;
            }
            else {
                scheduleObj.eventSettings.enableTooltip = true;
            }
        },
    });
    tooltip.appendTo('#tooltip');
};
