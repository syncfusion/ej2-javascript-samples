// tslint:disable-next-line:max-func-body-length
this.default = function () {
    window.getResourceData = function (data) {
        var resources = scheduleObj.getResourceCollections().slice(-1)[0];
        var resourceData = resources.dataSource.filter(function (resource) { return resource.Id === data.RoomId; })[0];
        return resourceData;
    };

    window.getHeaderDetails = function (data) {
        var intl = new ej.base.Internationalization();
        return intl.formatDate(data.StartTime, { type: 'date', skeleton: 'full' }) + ' (' +
            intl.formatDate(data.StartTime, { skeleton: 'hm' }) + ' - ' + intl.formatDate(data.EndTime, { skeleton: 'hm' }) + ')';
    };

    window.getHeaderStyles = function (data) {
        if (data.elementType === 'cell') {
            return 'align-items: center; color: #919191;';
        } else {
            var resourceData = window.getResourceData(data);
            return 'background:' + resourceData.Color + '; color: #FFFFFF;';
        }
    };

    window.getEventType = function (data) {
        var resourceData = window.getResourceData(data);
        return resourceData.Name;
    };

    var buttonClickActions = function (e) {
        var quickPopup = ej.base.closest(e.target, '.e-quick-popup-wrapper');
        var getSlotData = function () {
            var subject = quickPopup.querySelector('#title').ej2_instances[0].value;
            var notes = quickPopup.querySelector('#notes').ej2_instances[0].value;
            var addObj = {};
            addObj.Id = scheduleObj.getEventMaxID();
            addObj.Subject = ej.base.isNullOrUndefined(subject) ? 'Add title' : subject;
            addObj.StartTime = new Date(scheduleObj.activeCellsData.startTime);
            addObj.EndTime = new Date(scheduleObj.activeCellsData.endTime);
            addObj.IsAllDay = scheduleObj.activeCellsData.isAllDay;
            addObj.Description = ej.base.isNullOrUndefined(notes) ? 'Add notes' : notes;
            addObj.RoomId = quickPopup.querySelector('#eventType').ej2_instances[0].value;
            return addObj;
        };
        var eventDetails;
        var currentAction;
        if (e.target.id === 'add') {
            var addObj = getSlotData();
            scheduleObj.addEvent(addObj);
        } else if (e.target.id === 'delete') {
            eventDetails = scheduleObj.activeEventData.event;
            if (eventDetails.RecurrenceRule) {
                currentAction = 'DeleteOccurrence';
            }
            scheduleObj.deleteEvent(eventDetails, currentAction);
        } else {
            var isCellPopup = quickPopup.firstElementChild.classList.contains('e-cell-popup');
            eventDetails = isCellPopup ? getSlotData() : scheduleObj.activeEventData.event;
            currentAction = isCellPopup ? 'Add' : 'Save';
            if (eventDetails.RecurrenceRule) {
                currentAction = 'EditOccurrence';
            }
            scheduleObj.openEditor(eventDetails, currentAction, true);
        }
        scheduleObj.closeQuickInfoPopup();
    };

    var roomData = [
        { Name: 'Jammy', Id: 1, Capacity: 20, Color: '#ea7a57', Type: 'Conference' },
        { Name: 'Tweety', Id: 2, Capacity: 7, Color: '#7fa900', Type: 'Cabin' },
        { Name: 'Nestle', Id: 3, Capacity: 5, Color: '#5978ee', Type: 'Cabin' },
        { Name: 'Phoenix', Id: 4, Capacity: 15, Color: '#fec200', Type: 'Conference' },
        { Name: 'Mission', Id: 5, Capacity: 25, Color: '#df5286', Type: 'Conference' },
        { Name: 'Hangout', Id: 6, Capacity: 10, Color: '#00bdae', Type: 'Cabin' },
        { Name: 'Rick Roll', Id: 7, Capacity: 20, Color: '#865fcf', Type: 'Conference' },
        { Name: 'Rainbow', Id: 8, Capacity: 8, Color: '#1aaa55', Type: 'Cabin' },
        { Name: 'Swarm', Id: 9, Capacity: 30, Color: '#df5286', Type: 'Conference' },
        { Name: 'Photogenic', Id: 10, Capacity: 25, Color: '#710193', Type: 'Conference' }
    ];

    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 0, 9),
        eventSettings: {
            dataSource: ej.base.extend([], window.quickInfoTemplateData, null, true)
        },
        resources: [{
            field: 'RoomId', title: 'Room Type', name: 'MeetingRoom', textField: 'Name', idField: 'Id',
            colorField: 'Color', dataSource: ej.base.extend([], roomData, null, true)
        }],
        quickInfoTemplates: {
            header: '#header-template',
            content: '#content-template',
            footer: '#footer-template'
        },
        eventRendered: function (args) {
            var categoryColor = args.data.CategoryColor;
            if (!args.element || !categoryColor) {
                return;
            }
            if (scheduleObj.currentView === 'Agenda') {
                args.element.firstChild.style.borderLeftColor = categoryColor;
            } else {
                args.element.style.backgroundColor = categoryColor;
            }
        },
        popupOpen: function (args) {
            if (args.type === 'QuickInfo' || args.type === 'ViewEventInfo') {
                if (!args.target.classList.contains('e-appointment')) {
                    var title = new ej.inputs.TextBox({ placeholder: 'Title' });
                    title.appendTo(args.element.querySelector('#title'));
                    title.focusIn();
                    var typeObj = new ej.dropdowns.DropDownList({
                        dataSource: ej.base.extend([], roomData, null, true),
                        placeholder: 'Choose Type',
                        fields: { text: 'Name', value: 'Id' },
                        index: 0
                    });
                    typeObj.appendTo(args.element.querySelector('#eventType'));
                    var notesObj = new ej.inputs.TextBox({ placeholder: 'Notes' });
                    notesObj.appendTo(args.element.querySelector('#notes'));
                }

                var moreDetailsBtn = args.element.querySelector('#more-details');
                if (moreDetailsBtn) {
                    var moreObj = new ej.buttons.Button({
                        content: 'More Details', cssClass: 'e-flat',
                        isPrimary: args.element.firstElementChild.classList.contains('e-event-popup')
                    });
                    moreObj.appendTo(moreDetailsBtn);
                    moreDetailsBtn.onclick = function (e) { buttonClickActions(e); };
                }
                var addBtn = args.element.querySelector('#add');
                if (addBtn) {
                    new ej.buttons.Button({ content: 'Add', cssClass: 'e-flat', isPrimary: true }, addBtn);
                    addBtn.onclick = function (e) { buttonClickActions(e); };
                }
                var deleteBtn = args.element.querySelector('#delete');
                if (deleteBtn) {
                    new ej.buttons.Button({ content: 'Delete', cssClass: 'e-flat' }, deleteBtn);
                    deleteBtn.onclick = function (e) { buttonClickActions(e); };
                }
            }
        }
    });
    scheduleObj.appendTo('#Schedule');
};
