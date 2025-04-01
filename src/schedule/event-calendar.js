
this.default = function () {


    var personalData = new ej.base.extend([], window.personalData, null, true);
    var companyData = new ej.base.extend([], window.companyData, null, true);
    var birthdayData = new ej.base.extend([], window.birthdayData, null, true);
    var holidayData = new ej.base.extend([], window.holidayData, null, true);
    var calendars = [
        { name: 'My Calendar', id: 1, color: '#c43081', isSelected: true },
        { name: 'Company', id: 2, color: '#ff7f50', isSelected: true },
        { name: 'Birthday', id: 3, color: '#AF27CD', isSelected: true },
        { name: 'Holiday', id: 4, color: '#808000', isSelected: true }
    ];
    var isAdd;
    var calendarLength = calendars.length;
    var selectedCalendars = getSelectedCalendars();
    var appointmentData = generateCalendarData();
    var filteredData = getFilteredData();

    function generateCalendarData() {

        var MS_PER_MINUTE = 60000;
        var MS_PER_DAY = 86400000;
        var collections = [];
        var dataCollections = [
            personalData,
            companyData,
            birthdayData,
            holidayData
        ];
        var oldTime = new Date(2021, 3, 1).getTime();
        var newTime = resetTime(new Date()).getTime();
        for (var i = 0; i < dataCollections.length; i++) {
            collections = collections.concat(dataCollections[i]);
        }
        collections = new ej.base.extend([], collections, null, true);
        for (var j = 0; j < collections.length; j++) {
            var data = collections[j];
            data.IsPlanned = (data.Id % 2) === 0;
            data.IsAllDay = [1, 2].indexOf(data.CalendarId) === -1;
            var diff = oldTime - resetTime(new Date(data.StartTime)).getTime();
            var hour = Math.floor(Math.random() * (13 - 9) + 9);
            data.StartTime = new Date(newTime - diff + (data.IsAllDay ? 0 : (hour * 60 * MS_PER_MINUTE)));
            data.EndTime = new Date(data.StartTime.getTime() + (data.IsAllDay ? MS_PER_DAY : MS_PER_MINUTE * 60));
            data.ResourceId = Math.floor(Math.random() * 6) + 1;
        }
        return collections;
    }


    function getSelectedCalendars() {
        var selectedIds = [];
        var selectedItems = [];
        for (var i = 0; i < calendars.length; i++) {
            var calendar = calendars[i];
            if (calendar.isSelected) {
                selectedIds.push(calendar.id);
                selectedItems.push(calendar);
            }
        }

        return { ids: selectedIds, items: selectedItems };
    }

    function getFilteredData() {
        var planned = [];
        var unPlanned = [];

        for (var i = 0; i < appointmentData.length; i++) {
            var data = appointmentData[i];
            if (selectedCalendars.ids.indexOf(data.CalendarId) > -1) {
                if (data.IsPlanned) {
                    planned.push(data);
                } else {
                    unPlanned.push(data);
                }
            }
        }

        return { planned: planned, unPlanned: unPlanned };
    }


    function resetTime(date) {
        var newDate = new Date(date);
        newDate.setHours(0, 0, 0, 0);
        return newDate;
    }



    var toolbarObj = new ej.navigations.Toolbar({
        clicked: toolbarClick,
        items: [
            { tooltipText: "Menu", prefixIcon: "e-menu", cssClass: 'e-menu-btn' },
            { prefixIcon: "e-chevron-left", tooltipText: 'Previous', cssClass: 'e-previous' },
            { prefixIcon: "e-chevron-right", tooltipText: 'Next', cssClass: 'e-next' },
            { text: new Date().toLocaleDateString(), cssClass: 'e-date-range' },
            { text: "Create", align: 'Right', prefixIcon: "e-plus", cssClass: 'e-create' },
            { type: 'Separator', align: 'Right' },
            { text: 'Today', align: 'Right', cssClass: 'e-today' },
            { type: 'Separator', align: 'Right' },
            { text: 'Day', align: 'Right', cssClass: 'e-day' },
            { text: 'Week', align: 'Right', cssClass: 'e-week' },
            { text: 'Month', align: 'Right', cssClass: 'e-month' },
            { text: 'Agenda', align: 'Right', cssClass: 'e-agenda' },
            { text: 'Timeline', align: 'Right', cssClass: 'e-timeline' },
            { text: 'Year', align: 'Right', cssClass: 'e-year' },
        ],
        cssClass: 'event-calendar-toolbar'
    });
    toolbarObj.appendTo("#event-calendar-toolbar");

    var scheduleObj = new ej.schedule.Schedule({
        height: '650px',
        width: '100%',
        showHeaderBar: false,
        rowAutoHeight: true,
        selectedDate: new Date(),
        views: [
            { option: 'Day' },
            { option: 'Week' },
            { option: 'Month' },
            { option: 'Agenda' },
            { option: 'Year' },
            { option: 'TimelineMonth', group: { resources: ['Resources'] } }
        ],
        currentView: 'Week',
        eventSettings: {
            dataSource: new ej.base.extend([], filteredData.planned, null, true)
        },
        resources: [
            {
                field: 'ResourceId', title: 'Resources',
                name: 'Resources',
                dataSource: [
                    { name: 'Nancy', id: 1, color: '#df5286' },
                    { name: 'Steven', id: 2, color: '#7fa900' },
                    { name: 'Robert', id: 3, color: '#ea7a57' },
                    { name: 'Smith', id: 4, color: '#5978ee' },
                    { name: 'Micheal', id: 5, color: '#df5286' },
                    { name: 'Root', id: 6, color: '#00bdae' }
                ],
                textField: 'name', idField: 'id', colorField: 'color'
            }
        ],
        created: function(){
            updateDateRange();
        },
        actionComplete: actionComplete,
        eventRendered: function (args) {
            var categoryColor = calendars.find(function (c) {
                return c.id === args.data.CalendarId;
            }) && calendars.find(function (c) {
                return c.id === args.data.CalendarId;
            }).color;

            if (!args.element || !categoryColor) {
                return;
            }
            if (scheduleObj.currentView === 'Agenda') {
                (args.element.firstChild).style.borderLeftColor = categoryColor;
            } else {
                args.element.style.backgroundColor = categoryColor;
            }
        },
        popupOpen: function (args) {
            if (args.type === "Editor") {
                if (!args.element.querySelector(".custom-field-row")) {
                    var row = new ej.base.createElement("div", { className: "custom-field-row" });
                    var formElement = args.element.querySelector(".e-schedule-form");
                    formElement.firstChild.insertBefore(row, args.element.querySelector(".e-resources-row"));
                    var container = new ej.base.createElement("div", { className: "custom-field-container" });
                    var inputEle = new ej.base.createElement("input", { className: "e-field", attrs: { name: "CalendarId" } });
                    container.appendChild(inputEle);
                    row.appendChild(container);
                    var dropDownList = new ej.dropdowns.DropDownList({
                        dataSource: new ej.base.extend([], calendars, null, true),
                        cssClass: "calendar-ddl",
                        fields: { text: "name", value: "id" },
                        value: (args.data && args.data.CalendarId) ||
                            (selectedCalendars && selectedCalendars.ids && selectedCalendars.ids[0]) ||
                            (calendars.length > 0 && calendars[0].id),
                        floatLabelType: "Always", placeholder: "Calendar"
                    });
                    dropDownList.appendTo(inputEle);
                    inputEle.setAttribute("name", "CalendarId");
                } else {
                    var calendarDDL = (args.element.querySelector(".calendar-ddl input")).ej2_instances[0];
                    calendarDDL.dataSource = new ej.base.extend([], calendars, null, true);
                    calendarDDL.value = (args.data && args.data.CalendarId) ||
                        (selectedCalendars && selectedCalendars.ids[0]) ||
                        (calendars.length > 0 && calendars[0].id);
                }
            }
            else if (args.type === "QuickInfo" && ej.base.isNullOrUndefined(args.data.Id)) {
                args.cancel = true;
            }
        }
    });
    scheduleObj.appendTo('#Schedule');

    function actionComplete(args) {
        if (args.requestType === 'dateNavigate' || args.requestType === 'viewNavigate') {
            updateDateRange();
            if (args.requestType === 'dateNavigate' && resetTime(calendarObj && calendarObj.value) !== resetTime(scheduleObj.selectedDate)) {
                calendarObj.value = scheduleObj.selectedDate;
            }
        } else if (args.requestType === "eventCreated" || args.requestType === "eventChanged" || args.requestType === "eventRemoved") {
            args.addedRecords.forEach(function (newEvent) {
                newEvent.IsPlanned = true;
                appointmentData.push(newEvent);
            });
        
            for (var i = 0; i < args.changedRecords.length; i++) {
                var updatedEvent = args.changedRecords[i];
                var updatedIndex = -1;
                for (var j = 0; j < appointmentData.length; j++) {
                    if (appointmentData[j].Id === updatedEvent.Id) {
                        updatedIndex = j;
                        break;
                    }
                }
                if (updatedIndex !== -1) {
                    appointmentData[updatedIndex] = updatedEvent;
                }
            }
        
            for (var k = 0; k < args.deletedRecords.length; k++) {
                var deletedEvent = args.deletedRecords[k];
                var deletedIndex = -1;
                for (var l = 0; l < appointmentData.length; l++) {
                    if (appointmentData[l].Id === deletedEvent.Id) {
                        deletedIndex = l;
                        break;
                    }
                }
                if (deletedIndex !== -1) {
                    appointmentData.splice(deletedIndex, 1);
                }
            }
        
            var events = args.addedRecords.slice(0);
            for (var m = 0; m < args.changedRecords.length; m++) {
                events.push(args.changedRecords[m]);
            }
            for (var n = 0; n < events.length; n++) {
                var currentEvent = events[n];
                var calendar = null;
                for (var p = 0; p < selectedCalendars.items.length; p++) {
                    if (selectedCalendars.items[p].id === currentEvent.CalendarId) {
                        calendar = selectedCalendars.items[p];
                        break;
                    }
                }
                if (calendar === null) {
                    for (var q = 0; q < calendars.length; q++) {
                        if (calendars[q].id === currentEvent.CalendarId) {
                            calendar = calendars[q];
                            calendar.isSelected = true;
                            break;
                        }
                    }
                    selectedCalendars = getSelectedCalendars();
                    filteredData = getFilteredData();
                    calendarsList.dataSource = new ej.base.extend([], calendars, null, true);
                    scheduleObj.eventSettings.dataSource = new ej.base.extend([], filteredData.planned, null, true);
                    grid.dataSource = new ej.base.extend([], filteredData.planned, null, true);
                }
            }
        }        
    }

    function getWeekFirstDate(date, firstDayOfWeek) {
        var date1 = new Date(date.getTime());
        firstDayOfWeek = (firstDayOfWeek - date1.getDay() + 7 * (-1)) % 7;
        return new Date(date1.setDate(date1.getDate() + (isNaN(firstDayOfWeek) ? 0 : firstDayOfWeek)));
    }
    
    function getWeekLastDate(date, firstDayOfWeek) {
        var weekFirst = getWeekFirstDate(date, firstDayOfWeek);
        var weekLast = new Date(weekFirst.getFullYear(), weekFirst.getMonth(), weekFirst.getDate() + 6);
        return new Date(weekLast.getTime());
    }

    function updateDateRange() {
        var dateRange;
        var view = scheduleObj.currentView;
        switch (view) {
            case 'Day':
                var options = { month: 'long', day: '2-digit', year: 'numeric' };
                dateRange = new Intl.DateTimeFormat('en-US', options).format(scheduleObj.selectedDate);
                break;
            case 'Week':
            case 'Agenda': {
                var currentViewDates = scheduleObj.getCurrentViewDates();
                if (view === 'Week' && currentViewDates.length < 1) {
                    currentViewDates = [
                        getWeekFirstDate(scheduleObj.selectedDate, scheduleObj.firstDayOfWeek),
                        getWeekLastDate(scheduleObj.selectedDate, scheduleObj.firstDayOfWeek)
                    ];
                }
                if (currentViewDates.length > 0) {
                    var start = currentViewDates[0];
                    var end = currentViewDates[currentViewDates.length - 1];

                    var optionsFull = { month: 'long', day: '2-digit', year: 'numeric' };
                    var optionsMonthDay = { month: 'long', day: '2-digit' };

                    if (start.getFullYear() !== end.getFullYear()) {
                        dateRange = new Intl.DateTimeFormat('en-US', optionsFull).format(start) + ' - ' + new Intl.DateTimeFormat('en-US', optionsFull).format(end);
                    } else if (start.getMonth() !== end.getMonth()) {
                        dateRange = new Intl.DateTimeFormat('en-US', optionsMonthDay).format(start) + ' - ' + new Intl.DateTimeFormat('en-US', optionsFull).format(end);
                    } else {
                        dateRange = new Intl.DateTimeFormat('en-US', optionsFull).format(start) + ' - ' + new Intl.DateTimeFormat('en-US', optionsFull).format(end);
                    }
                }
                break;
            }
            case 'Month':
            case 'TimelineMonth':
                dateRange = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(scheduleObj.selectedDate);
                break;
            case 'Year':
                dateRange = new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(scheduleObj.selectedDate);
                break;
            default:
                break;
        }
        if (dateRange !== '' && toolbarObj) {
            var dateRangeElement = toolbarObj.element.querySelector('.e-date-range .e-tbar-btn-text');
            toolbarObj.element.querySelector('.e-date-range .e-tbar-btn').setAttribute('aria-label', dateRange);
            dateRangeElement.textContent = dateRange;
        }
    }

    var calendarObj = new ej.calendars.Calendar({
        cssClass: 'selected-date-calendar',
        value: new Date(),
        change: function (args) {
            if (args && args.isInteracted && scheduleObj) {
                scheduleObj.selectedDate = args.value;
            }
        }
    });
    calendarObj.appendTo('#calendar');

    var dialog = new ej.popups.Dialog({
        cssClass: 'calendar-edit-dialog',
        header: 'New Calendar',
        content: '<div>Calendar Name</div><div class="dialog-content"><input id="text-box"><input id="color-picker" type="color"></div>',
        showCloseIcon: true,
        animationSettings: { effect: 'Zoom' },
        visible: false,
        width: '320px',
        height: '250px',
        isModal: true,
        buttons: [{ buttonModel: { content: 'Add', isPrimary: true } }]
    });
    dialog.appendTo('#dialog');
    var saveButton = new ej.buttons.Button();
    saveButton.appendTo('#saveButton');

    var outlineTextBox = new ej.inputs.TextBox({
        placeholder: 'Enter the calendar name',
        cssClass: 'e-outline calendar-name',
        floatLabelType: 'Never',
    });
    outlineTextBox.appendTo('#text-box');

    var colorPicker = new ej.inputs.ColorPicker({ cssClass: 'calendar-color' }, '#color-picker');

    var calendarsList = new ej.lists.ListView({
        dataSource: calendars,
        template: "<div class='calendar-list-item'><div class='calendar-name' title='${name}'>${name}</div>${if(id !== 1)}<div class='calendar-buttons'><span id='calendar-edit-btn' class='e-icons e-edit' data-calendar-id='${id}'></span><span id='calendar-delete-btn' class='e-icons e-trash' data-calendar-id='${id}'></span></div>${/if}</div>",
        headerTemplate: '<div class="calendars-list-header"><div class="header-text">Calendars</div><div class="header-icon e-icons e-plus"></div></div>',
        showCheckBox: true,
        showHeader: true,
        actionComplete: onComplete,
        select: onChange,
        fields: { id: 'id', text: 'name', isChecked: 'isSelected' },
        height: '240px'
    });
    calendarsList.appendTo('#listview-def');

    function onChange(args) {
        if (args && args.event && args.event.target !== null && args.event.target !== undefined) {
            var target = args.event.target;
            if (target.classList.contains('e-edit') && args && args.data != null && dialog != null) {
                calendarsList.refresh();
                if (outlineTextBox) {
                    outlineTextBox.value = (args.data).name;
                    colorPicker.value = (args.data).color;
                    dialog.buttons = [{ buttonModel: { content: 'Save', isPrimary: true } }];
                    dialog.header = 'Edit Calendar';
                    dialog.show();
                    dialog.buttons = [{
                        buttonModel: { isPrimary: true, content: 'Save' }, click: function () {
                            if (outlineTextBox) {
                                var newValue = outlineTextBox.value.trim();
                                var newColor = colorPicker.value.trim();
                                if (newValue.length > 0) {
                                    calendars = calendars.map(function (item) {
                                        if (item.name === args.data.name) {
                                            return Object.assign({}, item, { name: newValue, color: newColor });
                                        }
                                        return item;
                                    });
                                    selectedCalendars = getSelectedCalendars();
                                    calendarsList.dataSource = new ej.base.extend([], calendars, null, true);
                                    scheduleObj.refreshEvents();
                                    dialog.hide();
                                }
                            }
                        }
                    }];
                }
            } else if (target && target.classList.contains('e-trash') && args && args.item != null && calendars.length > 1) {
                if (calendars.length > 1) {
                    calendarsList.removeItem(args.item);
                    var newCalendars = [];
                    for (var i = 0; i < calendars.length; i++) {
                        if (calendars[i].id !== args.data.id) {
                            newCalendars.push(calendars[i]);
                        }
                    }
                    calendars = newCalendars;
                    var newAppointmentData = [];
                    for (var j = 0; j < appointmentData.length; j++) {
                        if (appointmentData[j].CalendarId !== args.data.id) {
                            newAppointmentData.push(appointmentData[j]);
                        }
                    }
                    appointmentData = newAppointmentData;
                    selectedCalendars = getSelectedCalendars();
                    filteredData = getFilteredData();
                    scheduleObj.eventSettings.dataSource = new ej.base.extend([], filteredData.planned, null, true);
                    grid.dataSource = new ej.base.extend([], filteredData.unPlanned, null, true);
                }
                else {
                    calendarsList.refresh();
                    alert("At least one calendar should be available.");
                }
            } else {
                calendarSelection(args);
            }
        } else {
            calendarSelection(args);
        }
    }

    function changeCheckboxBackgroundColor(idFromArgs) {
        var listItem = calendarsList.element.querySelector('[data-uid="' + idFromArgs + '"]');
        if (listItem) {
            var selectedItem = calendars.find(function (item) {
                return item.id === idFromArgs;
            });

            if (selectedItem && selectedItem.color) {
                var checkboxFrame = listItem.querySelector(
                    '.e-checkbox-wrapper .e-frame.e-check, ' +
                    '.e-css.e-checkbox-wrapper .e-frame.e-check, ' +
                    '.e-checkbox-wrapper .e-frame, ' +
                    '.e-css.e-checkbox-wrapper .e-frame'
                );

                if (checkboxFrame) {
                    checkboxFrame.style.backgroundColor = selectedItem.color;
                    checkboxFrame.style.borderColor = selectedItem.color;
                }
            }
        }
    }

    function applyBackgroundColors() {
        calendars.forEach(function (calendar) {
            var listItem = calendarsList.element.querySelector('[data-uid="' + calendar.id + '"]');
            if (listItem) {
                var checkboxFrame = listItem.querySelector(
                    '.e-checkbox-wrapper .e-frame.e-check, ' +
                    '.e-css.e-checkbox-wrapper .e-frame.e-check, ' +
                    '.e-checkbox-wrapper .e-frame, ' +
                    '.e-css.e-checkbox-wrapper .e-frame'
                );
                if (checkboxFrame) {
                    checkboxFrame.style.backgroundColor = calendar.color;
                    checkboxFrame.style.borderColor = calendar.color;
                }
            }
        });
    }

    function calendarSelection(args) {
        var idFromArgs = Number(args.data.id);
        calendars[args.index].isSelected = args.isChecked;
        selectedCalendars = getSelectedCalendars();

        if (args.isChecked) {
            changeCheckboxBackgroundColor(idFromArgs);
        }

        filteredData = getFilteredData();
        scheduleObj.eventSettings.dataSource = new ej.base.extend([], filteredData.planned, null, true);
        grid.dataSource = new ej.base.extend([], filteredData.unPlanned, null, true);
    }

    function onComplete(args) {
        var iconAdd = calendarsList.element.querySelector(".e-plus");
        applyBackgroundColors();
        if (iconAdd) {
            iconAdd.addEventListener("click", function (args) {
                isAdd = true;
                dialog.buttons = [{ buttonModel: { content: 'Add', isPrimary: true } }];
                if (outlineTextBox) {
                    outlineTextBox.value = "";
                    colorPicker.value = "#008000ff";
                }
                dialog.header = 'New Calendar';
                dialog.show();
                dialog.buttons = [{
                    buttonModel: { isPrimary: true, content: 'Add' }, click: function () {
                        updateTextValue();
                    }
                }];
            });
        }
    }

    function updateTextValue() {
        if (isAdd) {
            if (outlineTextBox) {
                var newValue = outlineTextBox.value.trim();
                newValue = newValue === "" ? "New Calendar" : newValue;
                var newId = (calendars.length + 1);
                var newItem = { name: newValue, id: newId, color: colorPicker.value, isSelected: true };
                calendars.push(newItem);
                selectedCalendars = getSelectedCalendars();
                calendarsList.dataSource = new ej.base.extend([], calendars, null, true);
                dialog.hide();
                dialog.hide();
            }
            isAdd = false;
        }
    }


    var leftSidebar = new ej.navigations.Sidebar({
        width: '300px',
        target: '.main-content',
    });
    leftSidebar.appendTo('#sidebar-left');

    var unPlannedEventsToolbarObj = new ej.navigations.Toolbar({
        cssClass: 'unplanned-events-toolbar',
        items: [
            { prefixIcon: "e-exit-full-screen", cssClass: 'e-exit', tooltipText: 'Open/Close Sidebar', click: collapseRightSidebar },
            { template: '<h4 id="headerText">Unplanned Events</h4>' }
        ]
    });
    unPlannedEventsToolbarObj.appendTo('#unplanned-events-toolbar');

    function collapseRightSidebar() {
        if (rightSidebar.isOpen) {
            rightSidebar.toggle();
        }
    }


    var rightSidebar = new ej.navigations.Sidebar({
        width: "300px",
        target: '.main-content',
        position: 'Right',
        type: 'Push',
        isOpen: false,
        created: function () {
            var open = rightSidebar.element.parentElement.querySelector('#plannedOpen');
            var unplannedElement = rightSidebar.element.parentElement.querySelector('.unplanned-container');
            if (open) {
                open.onclick = function () {
                    rightSidebar.show();
                    filteredData = getFilteredData();
                    grid.dataSource = new ej.base.extend([], filteredData.unPlanned, null, true);
                    if (unplannedElement) {
                        unplannedElement.style.display = 'none';
                    }
                };
            }
        },
        close: function () {
            var unplannedElement = rightSidebar.element.parentElement.querySelector('.unplanned-container');
            if (unplannedElement) {
                unplannedElement.style.display = 'block';
            }
        }
    });
    rightSidebar.appendTo('#sidebar-right');

    var grid = new ej.grids.Grid({
        cssClass: 'unplanned-events-grid',
        dataSource: new ej.base.extend([], filteredData.unPlanned, null, true),
        columns: [
            { field: 'Subject', headerText: 'Event', textAlign: 'Left', width: 120 },
            { field: 'StartTime', width: 140, headerText: 'Date', format: 'dd MMMM yyyy' },
        ]
    });
    grid.appendTo("#unplanned-events-grid");

    function toolbarClick(args) {
        if (!args.item) {
            return;
        }
        switch (args.item.cssClass) {
            case 'e-menu-btn':
                leftSidebar.toggle();
                break;
            case 'e-create':
                if (scheduleObj && selectedCalendars.ids.length > 0) {
                    var data = {
                        StartTime: resetTime(new Date()),
                        EndTime: resetTime(ej.schedule.addDays(new Date(), 1)),
                        ResourceId: selectedCalendars.ids[0]
                    };
                    scheduleObj.openEditor(data, 'Add', true);
                    scheduleObj.dataBind();
                }
                break;
            case 'e-previous':
                scheduleObj.selectedDate = getPreviousNextDate(true);
                break;
            case 'e-next':
                scheduleObj.selectedDate = getPreviousNextDate(false);
                break;
            case 'e-today':
                scheduleObj.selectedDate = new Date();
                break;
            case 'e-day':
                scheduleObj.currentView = 'Day';
                break;
            case 'e-week':
                scheduleObj.currentView = 'Week';
                break;
            case 'e-month':
                scheduleObj.currentView = 'Month';
                break;
            case 'e-agenda':
                scheduleObj.currentView = 'Agenda';
                break;
            case 'e-timeline':
                scheduleObj.currentView = 'TimelineMonth';
                break;
            case 'e-year':
                scheduleObj.currentView = 'Year';
                break;
            default:
                break;
        }
    }

    function getPreviousNextDate(isPrevious) {
        var currentDate = scheduleObj.selectedDate;
        if (scheduleObj) {
            var view = scheduleObj.currentView;
            switch (view) {
                case 'Day':
                case 'Agenda':
                    currentDate = new ej.schedule.addDays(currentDate, isPrevious ? -1 : 1);
                    break;
                case 'Week':
                    currentDate = new ej.schedule.addDays(currentDate, isPrevious ? -ej.schedule.WEEK_LENGTH : ej.schedule.WEEK_LENGTH);
                    break;
                case 'Month':
                case 'TimelineMonth':
                    currentDate = new ej.schedule.addMonths(currentDate, isPrevious ? -1 : 1);
                    break;
                case 'Year':
                    currentDate = new ej.schedule.addYears(currentDate, isPrevious ? -1 : 1);
                    break;
                default:
                    break;
            }
        }
        return currentDate;
    }
};
