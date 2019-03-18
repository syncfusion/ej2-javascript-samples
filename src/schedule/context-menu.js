this.default = function () {
    var data = new ej.base.extend([], window.scheduleData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2019, 0, 10),
        eventSettings: {
            dataSource: data
        },
        allowDragAndDrop: false,
        allowResizing: false,
    });
    scheduleObj.appendTo('#Schedule');

    var menuObj, selectedTarget;

    var menuItems = [{
        text: 'New Event',
        iconCss: 'e-icons new',
        id: 'Add'
    }, {
        text: 'New Recurring Event',
        iconCss: 'e-icons recurrence',
        id: 'AddRecurrence'
    }, {
        text: 'Today',
        iconCss: 'e-icons today',
        id: 'Today'
    }, {
        text: 'Edit Event',
        iconCss: 'e-icons edit',
        id: 'Save'
    }, {
        text: 'Edit Event',
        id: 'EditRecurrenceEvent',
        iconCss: 'e-icons edit',
        items: [{
            text: 'Edit Occurrence',
            id: 'EditOccurrence'
        }, {
            text: 'Edit Series',
            id: 'EditSeries'
        }]
    }, {
        text: 'Delete Event',
        iconCss: 'e-icons delete',
        id: 'Delete'
    }, {
        text: 'Delete Event',
        id: 'DeleteRecurrenceEvent',
        iconCss: 'e-icons delete',
        items: [{
            text: 'Delete Occurrence',
            id: 'DeleteOccurrence'
        }, {
            text: 'Delete Series',
            id: 'DeleteSeries'
        }]
    }];
    menuObj = new ej.navigations.ContextMenu({
        target: '.e-schedule',
        items: menuItems,
        beforeOpen: onContextMenuBeforeOpen,
        select: onMenuItemSelect,
        cssClass: 'schedule-context-menu'
    });
    menuObj.appendTo('#ContextMenu');

    function onContextMenuBeforeOpen(args) {
        var newEventElement = document.querySelector('.e-new-event');
        if (newEventElement) {
            ej.base.remove(newEventElement);
            ej.base.removeClass([document.querySelector('.e-selected-cell')], 'e-selected-cell');
        }
        var targetElement = args.event.target;
        if (ej.base.closest(targetElement, '.e-contextmenu')) {
            return;
        }
        selectedTarget = ej.base.closest(targetElement, '.e-appointment,.e-work-cells,' +
            '.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells');
        if (ej.base.isNullOrUndefined(selectedTarget)) {
            args.cancel = true;
            return;
        }
        if (selectedTarget.classList.contains('e-appointment')) {
            var eventObj = scheduleObj.getEventDetails(selectedTarget);
            if (eventObj.RecurrenceRule) {
                menuObj.showItems(['EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
                menuObj.hideItems(['Add', 'AddRecurrence', 'Today', 'Save', 'Delete'], true);
            } else {
                menuObj.showItems(['Save', 'Delete'], true);
                menuObj.hideItems(['Add', 'AddRecurrence', 'Today', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
            }
            return;
        }
        menuObj.hideItems(['Save', 'Delete', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
        menuObj.showItems(['Add', 'AddRecurrence', 'Today'], true);
    }

    function onMenuItemSelect(args) {
        var selectedMenuItem = args.item.id;
        var eventObj;
        if (selectedTarget.classList.contains('e-appointment')) {
            eventObj = scheduleObj.getEventDetails(selectedTarget);
        }
        switch (selectedMenuItem) {
            case 'Today':
                scheduleObj.selectedDate = new Date();
                break;
            case 'Add':
            case 'AddRecurrence':
                var selectedCells = scheduleObj.getSelectedElements();
                var activeCellsData = scheduleObj.getCellDetails(selectedCells.length > 0 ? selectedCells : selectedTarget);
                if (selectedMenuItem === 'Add') {
                    scheduleObj.openEditor(activeCellsData, 'Add');
                } else {
                    scheduleObj.openEditor(activeCellsData, 'Add', null, 1);
                }
                break;
            case 'Save':
            case 'EditOccurrence':
            case 'EditSeries':
                if (selectedMenuItem === 'EditSeries') {
                    eventObj = new ej.data.DataManager(scheduleObj.eventsData).executeLocal(new ej.data.Query().where(scheduleObj.eventFields.id, 'equal', eventObj[scheduleObj.eventFields.recurrenceID]))[0];
                }
                scheduleObj.openEditor(eventObj, selectedMenuItem);
                break;
            case 'Delete':
                scheduleObj.deleteEvent(eventObj);
                break;
            case 'DeleteOccurrence':
            case 'DeleteSeries':
                scheduleObj.deleteEvent(eventObj, selectedMenuItem);
                break;
        }
    }
};