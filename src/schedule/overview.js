this.default = function () {
    var intlObj = new ej.base.Internationalization();
    window.getDateHeaderText = function (value) {
        return intlObj.formatDate(value, { skeleton: 'Ed' });
    };
    window.getWeather = function (value) {
        var weatherList = [
            '<img class="weather-image" src="src/schedule/images/weather-clear.svg"/><div class="weather-text">25°C</div>',
            '<img class="weather-image" src="src/schedule/images/weather-clouds.svg"/><div class="weather-text">18°C</div>',
            '<img class="weather-image" src="src/schedule/images/weather-rain.svg"/><div class="weather-text">10°C</div>',
            '<img class="weather-image" src="src/schedule/images/weather-clouds.svg"/><div class="weather-text">16°C</div>',
            '<img class="weather-image" src="src/schedule/images/weather-rain.svg"/><div class="weather-text">8°C</div>',
            '<img class="weather-image" src="src/schedule/images/weather-clear.svg"/><div class="weather-text">27°C</div>',
            '<img class="weather-image" src="src/schedule/images/weather-clouds.svg"/><div class="weather-text">17°C</div>'
        ];
        var index = value.getDay();
        return weatherList[index] ? weatherList[index] : null;
    };
    window.getResourceData = function (data) {
        var resources = scheduleObj.getResourceCollections().slice(-1)[0];
        var resourceData = resources.dataSource.filter(function (resource) {
            return resource.CalendarId === data.CalendarId;
        })[0];
        return resourceData;
    };
    window.getHeaderDetails = function (data) {
        return intlObj.formatDate(data.StartTime, { type: 'date', skeleton: 'full' }) + ' (' +
            intlObj.formatDate(data.StartTime, { skeleton: 'hm' }) + ' - ' + intlObj.formatDate(data.EndTime, { skeleton: 'hm' }) + ')';
    };
    window.getHeaderStyles = function (data) {
        if (data.elementType === 'event') {
            var resourceData = window.getResourceData(data);
            var calendarColor = '#3f51b5';
            if (resourceData) {
                calendarColor = (resourceData.CalendarColor).toString();
            }
            return 'background:' + calendarColor + '; color: #FFFFFF;';
        }
        else {
            return 'align-items: center; color: #919191;';
        }
    };
    window.getEventType = function (data) {
        var resourceData = window.getResourceData(data);
        var calendarText = '';
        if (resourceData) {
            calendarText = resourceData.CalendarName.toString();
        }
        return calendarText;
    };
    var importTemplateFn = function (data) {
        var template = '<div class="e-template-btn"><span class="e-btn-icon e-icons e-upload-1 e-icon-left"></span>${text}</div>';
        return ej.base.compile(template.trim())(data);
    };
    var updateLiveTime = function () {
        var scheduleTimezone = scheduleObj ? scheduleObj.timezone : 'Etc/GMT';
        var timeBtn = document.querySelector('.schedule-overview #timeBtn');
        if (timeBtn) {
            timeBtn.innerHTML = '<span class="e-btn-icon e-icons e-clock e-icon-left"></span>' +
                new Date().toLocaleTimeString('en-US', { timeZone: scheduleTimezone });
        }
    };
    var generateEvents = function () {
        var eventData = [];
        var eventSubjects = [
            'Bering Sea Gold', 'Technology', 'Maintenance', 'Meeting', 'Travelling', 'Annual Conference', 'Birthday Celebration',
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
    var buttonClickActions = function (e) {
        var popupElement = ej.base.closest(e.target, '.e-quick-popup-wrapper');
        var getSlotData = function () {
            var cellDetails = scheduleObj.getCellDetails(scheduleObj.getSelectedElements());
            if (ej.base.isNullOrUndefined(cellDetails)) {
                cellDetails = scheduleObj.getCellDetails(scheduleObj.activeCellsData.element);
            }
            var subject = popupElement.querySelector('#title').ej2_instances[0].value;
            var notes = popupElement.querySelector('#notes').ej2_instances[0].value;
            var eventObj = {};
            eventObj.Id = scheduleObj.getEventMaxID();
            eventObj.Subject = ej.base.isNullOrUndefined(subject) ? 'Add title' : subject;
            eventObj.StartTime = new Date(+cellDetails.startTime);
            eventObj.EndTime = new Date(+cellDetails.endTime);
            eventObj.IsAllDay = cellDetails.isAllDay;
            eventObj.Description = ej.base.isNullOrUndefined(notes) ? 'Add notes' : notes;
            eventObj.CalendarId = popupElement.querySelector('#eventType').ej2_instances[0].value;
            return eventObj;
        };
        if (e.target.id === 'add') {
            var addObj = getSlotData();
            scheduleObj.addEvent(addObj);
        }
        else if (e.target.id === 'delete') {
            var currentAction = void 0;
            if (scheduleObj.activeEventData.event.RecurrenceRule) {
                currentAction = 'DeleteOccurrence';
            }
            scheduleObj.deleteEvent(scheduleObj.activeEventData.event, currentAction);
        }
        else {
            var isCellPopup = popupElement.firstElementChild.classList.contains('e-cell-popup');
            var eventDetails = isCellPopup ? getSlotData() : scheduleObj.activeEventData.event;
            var action = isCellPopup ? 'Add' : 'Save';
            if (eventDetails.RecurrenceRule) {
                action = 'EditOccurrence';
            }
            scheduleObj.openEditor(eventDetails, action, true);
        }
        scheduleObj.closeQuickInfoPopup();
    };
    var isTimelineView = false;
    var timezoneBtn = new ej.buttons.Button({ iconCss: 'e-icons e-time-zone', cssClass: 'title-bar-btn', disabled: true });
    timezoneBtn.appendTo('#timezoneBtn');
    var timeBtn = new ej.buttons.Button({ iconCss: 'e-icons e-clock', cssClass: 'title-bar-btn', disabled: true });
    timeBtn.appendTo('#timeBtn');
    var printBtn = new ej.buttons.Button({ iconCss: 'e-icons e-print', cssClass: 'title-bar-btn' });
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
    var exportObj = new ej.splitbuttons.DropDownButton({
        items: [
            { text: 'iCalendar', iconCss: 'e-icons e-export' },
            { text: 'Excel', iconCss: 'e-icons e-export-excel' }
        ],
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
    exportObj.appendTo('#exporting');
    var timelineTemplate = '<div style="height: 46px; line-height: 23px;"><div class="icon-child" style="text-align: center;">' +
        '<button id="timeline_views"></button></div><div class="text-child" style="font-size: 14px;">Timeline Views</div></div>';
    var multiDragTemplate = '<div style="height: 46px; line-height: 23px;"><div class="icon-child" style="text-align: center;">' +
        '<button id="multi_Drag"></button></div><div class="text-child" style="font-size: 14px;">Allow Multi Drag</div></div>';
    var groupTemplate = '<div style="height: 46px; line-height: 23px;"><div class="icon-child" style="text-align: center;">' +
        '<button id="grouping"></button></div><div class="text-child" style="font-size: 14px;">Grouping</div></div>';
    var gridlineTemplate = '<div style="height: 46px; line-height: 23px;"><div class="icon-child" style="text-align: center;">' +
        '<button id="gridlines"></button></div><div class="text-child" style="font-size: 14px;">Gridlines</div></div>';
    var autoHeightTemplate = '<div style="height: 46px; line-height: 23px;"><div class="icon-child" style="text-align: center;">' +
        '<button id="row_auto_height"></button></div><div class="text-child" style="font-size: 14px;">Row Auto Height</div></div>';
    var tooltipTemplate = '<div style="height: 46px; line-height: 23px;"><div class="icon-child" style="text-align: center;">' +
        '<button id="tooltip"></button></div><div class="text-child" style="font-size: 14px;">Tooltip</div></div>';
    var toolbarObj = new ej.navigations.Toolbar({
        height: 70,
        overflowMode: 'Scrollable',
        scrollStep: 100,
        items: [
            { prefixIcon: 'e-icons e-plus', tooltipText: 'New Event', text: 'New Event' },
            { prefixIcon: 'e-icons e-repeat', tooltipText: 'New Recurring Event', text: 'New Recurring Event' },
            { type: 'Separator' },
            { prefixIcon: 'e-icons e-day', tooltipText: 'Day', text: 'Day' },
            { prefixIcon: 'e-icons e-week', tooltipText: 'Week', text: 'Week' },
            { prefixIcon: 'e-icons e-week', tooltipText: 'WorkWeek', text: 'WorkWeek' },
            { prefixIcon: 'e-icons e-month', tooltipText: 'Month', text: 'Month' },
            { prefixIcon: 'e-icons e-month', tooltipText: 'Year', text: 'Year' },
            { prefixIcon: 'e-icons e-agenda-date-range', tooltipText: 'Agenda', text: 'Agenda' },
            { tooltipText: 'Timeline Views', text: 'Timeline Views', template: timelineTemplate },
            { type: 'Separator' },
            { tooltipText: 'Grouping', text: 'Grouping', template: groupTemplate },
            { tooltipText: 'Gridlines', text: 'Gridlines', template: gridlineTemplate },
            { tooltipText: 'Row Auto Height', text: 'Row Auto Height', template: autoHeightTemplate },
            { tooltipText: 'Tooltip', text: 'Tooltip', template: tooltipTemplate },
            { tooltipText: 'Allow Multi Drag', text: 'Allow Multi Drag', template: multiDragTemplate }
        ],
        created: function () {
            setInterval(function () { updateLiveTime(); }, 1000);
            var timelineView = new ej.buttons.Switch({
                checked: false,
                created: function () { this.element.setAttribute('tabindex', '-1'); },
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
            timelineView.appendTo('#timeline_views');
            var multiDrag = new ej.buttons.Switch({
                checked: false,
                created: function () { this.element.setAttribute('tabindex', '-1'); },
                change: function (args) { scheduleObj.allowMultiDrag = args.checked; }
            });
            multiDrag.appendTo('#multi_Drag');
            var grouping = new ej.buttons.Switch({
                checked: true,
                created: function () { this.element.setAttribute('tabindex', '-1'); },
                change: function (args) { scheduleObj.group.resources = args.checked ? ['Calendars'] : []; }
            });
            grouping.appendTo('#grouping');
            var gridlines = new ej.buttons.Switch({
                checked: true,
                created: function () { this.element.setAttribute('tabindex', '-1'); },
                change: function (args) { scheduleObj.timeScale.enable = args.checked; }
            });
            gridlines.appendTo('#gridlines');
            var rowAutoHeight = new ej.buttons.Switch({
                checked: false,
                created: function () { this.element.setAttribute('tabindex', '-1'); },
                change: function (args) { scheduleObj.rowAutoHeight = args.checked; }
            });
            rowAutoHeight.appendTo('#row_auto_height');
            var tooltip = new ej.buttons.Switch({
                checked: false,
                created: function () { this.element.setAttribute('tabindex', '-1'); },
                change: function (args) { scheduleObj.eventSettings.enableTooltip = args.checked; }
            });
            tooltip.appendTo('#tooltip');
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
    toolbarObj.appendTo('#toolbar_options');
    var settingsBtn = new ej.buttons.Button({
        iconCss: 'e-icons e-settings',
        cssClass: 'overview-toolbar-settings', iconPosition: 'Top'
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
        dateHeaderTemplate: '<div class="date-text">${getDateHeaderText(data.date)}</div>${getWeather(data.date)}',
        quickInfoTemplates: {
            header: '#header-template',
            content: '#content-template',
            footer: '#footer-template'
        },
        eventSettings: { dataSource: generateEvents() },
        popupOpen: function (args) {
            if (args.type === 'QuickInfo' || args.type === 'ViewEventInfo') {
                if (!args.target.classList.contains('e-appointment')) {
                    var titleObj = new ej.inputs.TextBox({ placeholder: 'Title' });
                    titleObj.appendTo(args.element.querySelector('#title'));
                    titleObj.focusIn();
                    var eventTypeObj = new ej.dropdowns.DropDownList({
                        dataSource: resourceData,
                        placeholder: 'Choose Type',
                        fields: { text: 'CalendarName', value: 'CalendarId' },
                        index: args.data.CalendarId - 1 
                    });
                    eventTypeObj.appendTo(args.element.querySelector('#eventType'));
                    var eventNotesObj = new ej.inputs.TextBox({ placeholder: 'Notes' });
                    eventNotesObj.appendTo(args.element.querySelector('#notes'));   
                }
                var detailsBtn = args.element.querySelector('#more-details');
                if (detailsBtn) {
                    var moreObj = new ej.buttons.Button({
                        content: 'More Details', cssClass: 'e-flat',
                        isPrimary: args.element.firstElementChild.classList.contains('e-event-popup')
                    });
                    moreObj.appendTo(detailsBtn);
                    detailsBtn.onclick = function (e) { buttonClickActions(e); };
                }
                var addBtn = args.element.querySelector('#add');
                if (addBtn) {
                    var addBtnObj = new ej.buttons.Button({ content: 'Add', cssClass: 'e-flat', isPrimary: true });
                    addBtnObj.appendTo(addBtn);
                    addBtn.onclick = function (e) { buttonClickActions(e); };
                }
                var deleteBtn = args.element.querySelector('#delete');
                if (deleteBtn) {
                    var deleteBtnObj = new ej.buttons.Button({ content: 'Delete', cssClass: 'e-flat' });
                    deleteBtnObj.appendTo(deleteBtn);
                    deleteBtn.onclick = function (e) { buttonClickActions(e); };
                }
            }
        },
        destroyed: function () {
            contextMenuObj.destroy();
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
            var targetElement = args.event.target;
            if (ej.base.closest(targetElement, '.e-contextmenu')) {
                return;
            }
            var selectors = '.e-appointment,.e-work-cells,.e-vertical-view .e-date-header-wrap .e-all-day-cells,' +
                '.e-vertical-view .e-date-header-wrap .e-header-cells';
            selectedTarget = ej.base.closest(targetElement, selectors);
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
                    var activeCellsData = scheduleObj.getCellDetails(selectedCells.length > 0 ? selectedCells : selectedTarget);
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
    contextMenuObj.appendTo('#OverViewContextMenu');
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
        popupHeight: 150,
        value: [1, 2, 3, 4, 5],
        change: function (args) { scheduleObj.workDays = args.value; }
    });
    workweek.appendTo('#workWeekDays');
    var resources = new ej.dropdowns.MultiSelect({
        cssClass: 'schedule-resource',
        dataSource: resourceData,
        fields: { text: 'CalendarName', value: 'CalendarId' },
        mode: 'CheckBox',
        enableSelectionOrder: false,
        showClearButton: false,
        showDropDownIcon: true,
        popupHeight: 150,
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
            document.querySelector('.schedule-overview #timezoneBtn').innerHTML =
                '<span class="e-btn-icon e-icons e-time-zone e-icon-left"></span>' + args.itemData.text;
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
        change: function (args) { scheduleObj.timeFormat = args.value; }
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
            } else {
                scheduleObj.showWeekNumber = true;
                scheduleObj.weekRule = args.value;
            }
        }
    });
    weekNumber.appendTo('#week_number');
};
