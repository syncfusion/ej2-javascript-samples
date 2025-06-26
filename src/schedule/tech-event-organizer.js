this.default = function () {
    var eventsData = ej.base.extend([], window.TechnicalEventData, null, true);
    var scheduleFields = {
        subject: { name: 'Subject' },
        location: { name: 'Title', title: 'Event' },
        startTime: { name: 'StartTime', validation: { required: true } },
        endTime: { name: 'EndTime', validation: { required: true } },
        roomId: { name: 'RoomId' },
        description: {
            name: 'Capacity', title: 'Participants Count',
            validation: { required: true }
        }
    };

    var rooms = [
        { RoomId: 1, RoomName: 'Room A', RoomCapacity: 100, RoomColor: '#0F6CBD' },
        { RoomId: 2, RoomName: 'Room B', RoomCapacity: 200, RoomColor: '#B71C1C' },
        { RoomId: 3, RoomName: 'Room C', RoomCapacity: 300, RoomColor: '#E65100' },
        { RoomId: 4, RoomName: 'Room D', RoomCapacity: 400, RoomColor: '#558B2F' }
    ];

    var roomsData = [
        { RoomId: 0, RoomName: 'All' },
        { RoomId: 1, RoomName: 'Room A' },
        { RoomId: 2, RoomName: 'Room B' },
        { RoomId: 3, RoomName: 'Room C' },
        { RoomId: 4, RoomName: 'Room D' },
    ];

    var printExportItems = [
        { text: 'Print', id: 'print' },
        { text: 'Export', id: 'export' }
    ];

    var unplannedEvents = ['', 'Cloud Security Essentials', 'AI for Automation'];
    var unPlannedEventsList = [];

    for (var i = 0; i < unplannedEvents.length; i++) {
        unPlannedEventsList.push({
            id: i.toString(),
            name: unplannedEvents[i] === '' ? 'All' : unplannedEvents[i]
        });
    }

    var unplannedEvent1Data = ej.base.extend([], window.CloudSecurityEventData, null, true);
    var unplannedEvent2Data = ej.base.extend([], window.AIAutomationEventData, null, true);
    var allUnplannedEventsData = unplannedEvent1Data.concat(unplannedEvent2Data);

    var allUnplannedEventsTreeFields = {
        dataSource: allUnplannedEventsData,
        id: 'Id',
        text: 'Subject'
    };

    var unplannedEvent1TreeFields = {
        dataSource: unplannedEvent1Data,
        id: 'Id',
        text: 'Subject'
    };

    var unplannedEvent2TreeFields = {
        dataSource: unplannedEvent2Data,
        id: 'Id',
        text: 'Subject'
    };

    var intl = new ej.base.Internationalization();
    var isDraggedItemDropped = false;
    var draggedItemId = null;
    var draggedItemSpeakers = null;
    var draggedItemDescription = null;
    var selectedUnplannedEventItem = 0;

    var scheduleObj = new ej.schedule.Schedule({
        cssClass: 'schedule-event-management',
        currentView: 'Day',
        selectedDate: new Date(2025, 1, 24),
        width: '100%',
        height: '550px',
        startHour: "08:00",
        endHour: "18:00",
        timeScale: { slotCount: 3 },
        allowOverlap: false,
        allowDragAndDrop: false,
        allowResizing: false,
        eventSettings: {
            dataSource: eventsData, 
            fields: scheduleFields   
        },
        group: {
            resources: ['Rooms']
        },
        views: [
            { option: 'Day' },
            { option: 'Week' },
            { option: 'Agenda', eventTemplate: agendaTemplate }
        ],
        toolbarItems: [
            { align: 'Left', name: 'Previous' },
            { align: 'Left', name: 'Next' },
            { align: 'Left', name: 'DateRangeText' },
            { align: 'Right', name: 'Views' },
            { type: 'Separator', align: 'Right', cssClass: 'toolbar-post-agenda' },
            {
                name: 'Custom',
                type: 'Input',
                template: '#roomFilterTemplate',
                align: 'Right',
                cssClass: 'toolbar-post-agenda room-filter'
            },
            { type: 'Separator', align: 'Right', cssClass: 'toolbar-post-agenda' },
            {
                name: 'Custom',
                type: 'Button',
                prefixIcon: 'e-icons e-show-unplanned-events',
                align: 'Right',
                showTextOn: 'Overflow',
                overflow: 'Show',
                id: 'overview_toolbar_settings_unplanned_events',
                cssClass: 'toolbar-post-agenda',
                click: toggleUnplannedEventsElement
            },
            {
                name: 'Custom',
                type: 'Button',
                prefixIcon: 'e-icons e-print-export',
                showTextOn: 'Overflow',
                overflow: 'Show',
                align: 'Right',
                cssClass: 'toolbar-post-agenda',
                template: '#printExportTemplate'
            }
        ],
        resources: [{
            field: 'RoomId',
            title: 'Rooms',
            name: 'Rooms',
            dataSource: rooms, 
            textField: 'RoomName',
            idField: 'RoomId',
            colorField: 'RoomColor'
        }],
        resourceHeaderTemplate: resourceHeaderTemplate,
        quickInfoTemplates: {
            header: quickInfoHeader,
            content: quickInfoContent
        },
        eventRendered: onEventRendered,
        cellClick: onCellClick,
        popupClose: onPopupClose,
        popupOpen: onPopupOpen,
        actionComplete: onActionComplete
    });

    scheduleObj.appendTo('#Schedule');

    var dropDownList = new ej.dropdowns.DropDownList({
        dataSource: unPlannedEventsList,
        fields: { text: 'name', value: 'id' },
        value: '0',
        change: onUnplannedEventSelect
    });
    dropDownList.appendTo('#unplannedEventDropdown');

    var treeViewAll = new ej.navigations.TreeView({
        cssClass: 'event-management-treeview',
        fields: allUnplannedEventsTreeFields,
        nodeTemplate: '#treeTemplate',
        dragArea: '.event-management-wrapper',
        allowDragAndDrop: true,
        nodeDragStart: onTreeDragStart,
        nodeDragging: onTreeDragging,
        nodeDragStop: onTreeDragStop
    });
    treeViewAll.appendTo('#treeViewAll');

    var treeViewCloudSecurity = new ej.navigations.TreeView({
        cssClass: 'event-management-treeview',
        fields: unplannedEvent1TreeFields,
        nodeTemplate: '#treeTemplate',
        dragArea: '.event-management-wrapper',
        allowDragAndDrop: true,
        nodeDragStart: onTreeDragStart,
        nodeDragging: onTreeDragging,
        nodeDragStop: onTreeDragStop
    });
    treeViewCloudSecurity.appendTo('#treeViewCloudSecurity');

    var treeViewAI = new ej.navigations.TreeView({
        cssClass: 'event-management-treeview',
        fields: unplannedEvent2TreeFields,
        nodeTemplate: '#treeTemplate',
        dragArea: '.event-management-wrapper',
        allowDragAndDrop: true,
        nodeDragStart: onTreeDragStart,
        nodeDragging: onTreeDragging,
        nodeDragStop: onTreeDragStop
    });
    treeViewAI.appendTo('#treeViewAI');

    var alertDialog = new ej.popups.Dialog({
        cssClass: 'alert-dialog',
        isModal: true,
        header: 'Notice',
        height: '240px',
        width: '335px',
        showCloseIcon: true,
        animationSettings: { effect: 'None' },
        visible: false,
        buttons: [{
            click: dlgButtonClick,
            buttonModel: { content: 'OK', isPrimary: true }
        }],
        target: '#target'
    });
    alertDialog.appendTo('#modalDialog');

    function dlgButtonClick() {
        alertDialog.hide();
    }

    function onTreeDragStart() {
        document.body.classList.add('e-disble-not-allowed');
    }

    function onTreeDragging(event) {
        document.body.classList.add('tree-item-dragging');

        if (scheduleObj.isAdaptive) {
            var classElement = scheduleObj.element.querySelector('.e-device-hover');
            if (classElement) {
                classElement.classList.remove('e-device-hover');
            }
            if (event.target.classList.contains('e-work-cells')) {
                event.target.classList.add('e-device-hover');
            }
        }

        if (event.target.classList.contains('e-work-cells')) {
            event.target.classList.remove('not-allowed-cursor');
        } else {
            event.target.classList.add('not-allowed-cursor');
        }
    }

    function onTreeDragStop(event) {
        document.body.classList.remove('tree-item-dragging');

        var elements = document.querySelectorAll('.not-allowed-cursor');
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('not-allowed-cursor');
        }

        var treeviewElement = ej.base.closest(event.target, '.e-treeview');
        var classElement = scheduleObj.element.querySelector('.e-device-hover');
        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }

        if (!treeviewElement) {
            event.cancel = true;
            var scheduleElement = ej.base.closest(event.target, '.e-content-wrap');
            if (scheduleElement) {
                var treeviewData = treeViewAll.fields.dataSource;
                if (event.target.classList.contains('e-work-cells')) {
                    var draggedId = parseInt(event.draggedNodeData.id, 10);
                    var filteredData = [];
                    for (var j = 0; j < treeviewData.length; j++) {
                        if (treeviewData[j].Id === draggedId) {
                            filteredData.push(treeviewData[j]);
                        }
                    }

                    if (filteredData.length === 0) return;

                    var draggedItem = filteredData[0];
                    var Subject = draggedItem.Subject;
                    var Capacity = draggedItem.Capacity;
                    var Speakers = draggedItem.Speakers;
                    var Description = draggedItem.Description;
                    var Duration = draggedItem.Duration;
                    var EventType = draggedItem.EventType;
                    var TargetAudience = draggedItem.TargetAudience;
                    var EventLevel = draggedItem.EventLevel;
                    var EventTags = draggedItem.EventTags;
                    var Title = draggedItem.Title;

                    var cellData = scheduleObj.getCellDetails(event.target);
                    var StartTime = cellData.startTime;
                    var EndTime;

                    var durationParts = Duration.split(' ');
                    var durationValue = parseInt(durationParts[0], 10);
                    var durationUnit = durationParts[1];
                    var copyStartTime = new Date(StartTime);

                    if (durationUnit === 'hour' || durationUnit === 'hours') {
                        copyStartTime.setHours(copyStartTime.getHours() + durationValue);
                    } else if (durationUnit === 'minute' || durationUnit === 'minutes') {
                        copyStartTime.setMinutes(copyStartTime.getMinutes() + durationValue);
                    }
                    EndTime = copyStartTime;

                    var resourceDetails = scheduleObj.getResourcesByIndex(cellData.groupIndex);
                    var roomId = resourceDetails.resourceData.RoomId;
                    var isRoomFiltered = (scheduleObj.resourceCollection[0].dataSource).length === 1;
                    var isRoomAvailable = scheduleObj.isSlotAvailable(StartTime, EndTime, !isRoomFiltered ? roomId - 1 : 0);
                    var isCapacityAvailable = checkRoomCapacity(Capacity, roomId);

                    if (!isRoomAvailable || !isCapacityAvailable) {
                        alertDialog.content = !isRoomAvailable ? 'This room is already booked for this time slot. Please select a different room or time.' : 'This room cannot accommodate the stated number of attendees. Please select a room with a suitable capacity.';
                        alertDialog.show();
                        return;
                    }

                    var eventData = {
                        Subject: Subject,
                        Title: Title,
                        StartTime: StartTime,
                        EndTime: EndTime,
                        RoomId: roomId,
                        Capacity: Capacity,
                        Duration: Duration,
                        EventType: EventType,
                        TargetAudience: TargetAudience,
                        EventLevel: EventLevel,
                        EventTags: EventTags
                    };

                    isDraggedItemDropped = true;
                    draggedItemId = draggedId;
                    draggedItemSpeakers = Speakers;
                    draggedItemDescription = Description;

                    scheduleObj.openEditor(eventData, 'Add', true);
                }
            }
        }

        document.body.classList.remove('e-disble-not-allowed');
    }

    function onPopupClose(args) {
        if (args.type === 'Editor') {
            var targetElement = args.event ? args.event.target : null;

            var isSaveAction = targetElement &&(targetElement.textContent && targetElement.classList.contains('e-event-save')||targetElement.classList.contains('e-save-icon'));

            if (isSaveAction) {
                var roomId = args.data.RoomId;
                var startTime = new Date(args.data.StartTime);
                var endTime = new Date(args.data.EndTime);
                var capacity = args.data.Capacity;

                var isRoomFiltered = scheduleObj.resourceCollection[0].dataSource.length === 1;

                var isRoomAvailable = scheduleObj.isSlotAvailable(startTime, endTime, !isRoomFiltered ? roomId - 1 : 0) &&
                    startTime.getHours() >= 8 &&
                    (endTime.getHours() < 18 || (endTime.getHours() === 18 && endTime.getMinutes() === 0));

                var isCapacityAvailable = checkRoomCapacity(capacity, roomId);

                if (!isRoomAvailable) {
                    var timeElement = args.element.querySelector('.e-start-end-row');
                    if (!args.element.querySelector('.time-alert')) {
                        var newTimeDiv = document.createElement('div');
                        newTimeDiv.classList.add('time-alert');
                        newTimeDiv.textContent = 'Select an open time between 8 a.m. and 6 p.m.';
                        timeElement.insertAdjacentElement('afterend', newTimeDiv);
                    }
                } else {
                    var timeAlert = args.element.querySelector('.time-alert');
                    if (timeAlert) {
                        timeAlert.remove();
                    }
                }

                if (!isCapacityAvailable) {
                    var descElement = args.element.querySelector('.e-description-row');
                    if (!args.element.querySelector('.capacity-alert')) {
                        var newCapDiv = document.createElement('div');
                        newCapDiv.classList.add('capacity-alert');
                        newCapDiv.textContent = "Number of participants exceeds the room's limit.";
                        descElement.insertAdjacentElement('afterend', newCapDiv);
                    }
                } else {
                    var capAlert = args.element.querySelector('.capacity-alert');
                    if (capAlert) {
                        capAlert.remove();
                    }
                }

                if (!isRoomAvailable || !isCapacityAvailable) {
                    args.cancel = true;
                    return;
                }

                var unplannedTreeViews = [treeViewAll, treeViewCloudSecurity, treeViewAI];
                var activeTreeView = unplannedTreeViews[selectedUnplannedEventItem];

                var treeData = activeTreeView.fields.dataSource;
                var updatedData = treeData.filter(function (item) {
                    return item.Id !== draggedItemId;
                });

                activeTreeView.fields.dataSource = updatedData;
                allUnplannedEventsData = allUnplannedEventsData.filter(function (item) {
                    return item.Id !== draggedItemId;
                });

                handleEmptyDataSourceDisplay(activeTreeView, updatedData);

                args.data.Speakers = draggedItemSpeakers;
                args.data.Description = draggedItemDescription;
            }

            isDraggedItemDropped = false;
        }
    }

    function checkRoomCapacity(capacity, roomId) {
        for (var i = 0; i < rooms.length; i++) {
            if (rooms[i].RoomId === roomId) {
                return rooms[i].RoomCapacity >= capacity;
            }
        }
        return false;
    }

    function onUnplannedEventSelect(args) {
        var treeViewRefs = [treeViewAll, treeViewCloudSecurity, treeViewAI];
        var previouslySelectedItem = parseInt(args.previousItemData.id, 10);
        selectedUnplannedEventItem = parseInt(args.value, 10);

        treeViewRefs[previouslySelectedItem].element.style.display = 'none';

        var currentTreeView = treeViewRefs[selectedUnplannedEventItem];
        currentTreeView.element.style.display = '';

        if (selectedUnplannedEventItem === 0) {
            currentTreeView.fields = ej.base.extend({}, currentTreeView.fields, {
                dataSource: allUnplannedEventsData
            }, true);
        } else {
            var filteredData = unplannedEventsUpdatedData(allUnplannedEventsData, unplannedEvents[selectedUnplannedEventItem]);
            currentTreeView.fields = ej.base.extend({}, currentTreeView.fields, {
                dataSource: filteredData
            }, true);
        }

        var newDataSource = currentTreeView.fields.dataSource;
        handleEmptyDataSourceDisplay(currentTreeView, newDataSource);
    }

    function unplannedEventsUpdatedData(dataSource, value) {
        var result = [];
        for (var i = 0; i < dataSource.length; i++) {
            if (dataSource[i].Title === value) {
                result.push(dataSource[i]);
            }
        }
        return result;
    }

    function handleEmptyDataSourceDisplay(treeView, dataSource) {
        var noEventsElement = document.querySelector('.no-events-message');
        if (!noEventsElement) return;

        if (isDataSourceEmpty(dataSource)) {
            treeView.element.style.display = 'none';
            noEventsElement.classList.remove('hidden');
        } else {
            treeView.element.style.display = 'block';
            noEventsElement.classList.add('hidden');
        }
    }

    function isDataSourceEmpty(dataSource) {
        return !dataSource || dataSource.length === 0;
    }

    function onActionComplete(args) {
        if (args.requestType === 'toolBarItemRendered') {
            var btnObj = new ej.splitbuttons.DropDownButton({
                items: printExportItems,
                select: handlePrintExportSelect,
                iconCss: 'e-icons e-print-export',
                cssClass: 'e-caret-hide e-tbar-btn'
            });
            btnObj.appendTo('#printExportBtn');  

            var container = document.querySelector('#roomFilterDropdown');
            var existingInstance = container && container.ej2_instances && container.ej2_instances[0];
            if (existingInstance) {
                existingInstance.destroy(); 
                container.innerHTML = '';
            }

            new ej.dropdowns.DropDownList({
                dataSource: roomsData,
                fields: { text: 'RoomName', value: 'RoomId' },
                value: 0,
                valueTemplate: '#roomValueTemplate',
                change: onRoomChange
            }).appendTo(container);
        }
    }

    function handlePrintExportSelect(args) {
        switch (args.item.id) {
            case 'print':
                var toolbarItems = document.querySelectorAll('.toolbar-post-agenda');
                for (var i = 0; i < toolbarItems.length; i++) {
                    toolbarItems[i].style.display = 'none';
                }

                scheduleObj.print();

                setTimeout(function () {
                    var toolbarItems = document.querySelectorAll('.toolbar-post-agenda');
                    for (var i = 0; i < toolbarItems.length; i++) {
                        toolbarItems[i].style.display = 'inline-block';
                    }
                }, 1000);
                break;

            case 'export':
                var exportOptions = {
                    fields: ['Id', 'Subject', 'Title', 'StartTime', 'EndTime', 'RoomId', 'Capacity']
                };
                scheduleObj.exportToExcel(exportOptions);
                break;
        }
    }

    function toggleUnplannedEventsElement(args) {
        var settingsPanel = document.querySelector('.unplanned-events-container');

        var toggleButton = scheduleObj.element.querySelector('.e-show-unplanned-events') ||
            scheduleObj.element.querySelector('.e-hide-unplanned-events');

        if (settingsPanel.classList.contains('hide')) {
            ej.base.removeClass([settingsPanel], 'hide');
            toggleButton.classList.replace('e-hide-unplanned-events', 'e-show-unplanned-events');
        } else {
            ej.base.addClass([settingsPanel], 'hide');
            toggleButton.classList.replace('e-show-unplanned-events', 'e-hide-unplanned-events');
        }
    }

    function onRoomChange(args) {   
        var value = args.value;
        var previousItemData = args.previousItemData|| { RoomId: 0, RoomName: 'All' };

        if (!previousItemData) return;

        if (value === 0) {
            scheduleObj.removeResource(previousItemData.RoomId, 'Rooms');
            scheduleObj.addResource(rooms, 'Rooms', value);
        } else {
            if (previousItemData.RoomId === 0) {
                var toRemove = [];
                for (var i = 0; i < rooms.length; i++) {
                    if (rooms[i].RoomId !== value) {
                        toRemove.push(rooms[i]);
                    }
                }
                for (var j = 0; j < toRemove.length; j++) {
                    scheduleObj.removeResource(toRemove[j].RoomId, 'Rooms');
                }
            } else {
                scheduleObj.removeResource(previousItemData.RoomId, 'Rooms');

                var selectedRoom = null;
                for (var k = 0; k < rooms.length; k++) {
                    if (rooms[k].RoomId === value) {
                        selectedRoom = rooms[k];
                        break;
                    }
                }

                if (selectedRoom) {
                    scheduleObj.addResource(selectedRoom, 'Rooms', value);
                }
            }
        }
    }

    function getRoomName(value) {
        return value.resourceData ?
            value.resourceData[value.resource.textField] :
            value.resourceName;
    }

    function getRoomCapacity(capacity) {
        return 'Capacity - ' + capacity;
    }

    function resourceHeaderTemplate(props) {
        return '<div class="template-wrap">' +
            '<div class="resource-detail">' +
            '<div class="resource-name">' + getRoomName(props) + '</div>' +
            '<div class="capacity-wrap">' +
            '<span class="e-icons e-capacity-icon"></span>' +
            '<span class="e-capacity">' + getRoomCapacity(props.resourceData.RoomCapacity.toString()) + '</span>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
    function getResourceData(roomId) {
        var resourceCollections = scheduleObj.getResourceCollections();
        var lastResourceGroup = resourceCollections[resourceCollections.length - 1];
        var dataSource = lastResourceGroup.dataSource || [];

        for (var i = 0; i < dataSource.length; i++) {
            if (dataSource[i].RoomId === roomId) {
                return dataSource[i];
            }
        }
        return null;
    }

    function getQuickInfoHeaderStyle(data) {
        var res = getResourceData(data.RoomId);
        return {
            background: res.RoomColor,
            color: '#FFFFFF'
        };
    }

    function getQuickInfoDurationText(data) {
        return intl.formatDate(data.StartTime, { type: 'date', skeleton: 'full' }) + ' (' +
            intl.formatDate(data.StartTime, { skeleton: 'hm' }) + ' - ' +
            intl.formatDate(data.EndTime, { skeleton: 'hm' }) + ')';
    }

    function quickInfoHeader(props) {
        var style = getQuickInfoHeaderStyle(props);
        var subject = props.Subject;
        var durationText = getQuickInfoDurationText(props);

        return '<div class="e-event-header e-popup-header">' +
            '<div class="e-header-icon-wrapper">' +
            '<button id="close" class="e-close e-icons" title="CLOSE"></button>' +
            '</div>' +
            '<div class="quick-info-header-content" style="background:' + style.background + ';color:' + style.color + '">' +
            '<div class="quick-info-title">' + subject + '</div>' +
            '<div class="duration-text">' + durationText + '</div>' +
            '</div>' +
            '</div>';
    }

    function quickInfoContent(props) {
        var room = '';
        if (props.elementType !== 'cell') {
            for (var i = 0; i < rooms.length; i++) {
                if (rooms[i].RoomId === props.RoomId) {
                    room = rooms[i].RoomName;
                    break;
                }
            }
        }

        var speakersHtml = '';
        if (props.Speakers && props.Speakers.length > 0) {
            var label = props.Speakers.length > 1 ? 'Speakers' : 'Speaker';
            var speakerText = '';
            for (var j = 0; j < props.Speakers.length; j++) {
                var speaker = props.Speakers[j];
                speakerText += speaker.Name + ' (' + speaker.Title + ')';
                if (j < props.Speakers.length - 1) {
                    speakerText += (j === props.Speakers.length - 2) ? ' and ' : ', ';
                }
            }

            speakersHtml = '<div class="e-speaker e-content-item">' +
                '<label>' + label + '</label>' +
                '<span class="colon">:</span>' +
                '<span class="e-content">' + speakerText + '</span>' +
                '</div>';
        }

        return '<div class="quick-info-content">' +
            '<div class="event-content">' +
            '<div class="e-room e-content-item">' +
            '<label>Room</label>' +
            '<span class="colon">:</span>' +
            '<span class="e-content">' + room + '</span>' +
            '</div>' +
            '<div class="e-event e-content-item">' +
            '<label>Event</label>' +
            '<span class="colon">:</span>' +
            '<span class="e-content">' + (props.Title || '') + '</span>' +
            '</div>' +
            speakersHtml +
            '<div class="e-count e-content-item">' +
            '<label>Participant count</label>' +
            '<span class="colon">:</span>' +
            '<span class="e-content">' + (props.Capacity || '') + '</span>' +
            '</div>' +
            '</div>' +
            '</div>';
    }

    function getTimeString(value) {
        return intl.formatDate(value, { type: 'time', skeleton: 'short' });
    }

    function agendaTemplate(props) {
        var isBreak = props.Subject.toLowerCase().indexOf('break') !== -1 || props.Subject.toLowerCase().indexOf('lunch') !== -1;

        var speakerTemplate = '';
        if (props.Speakers && props.Speakers.length > 0) {
            speakerTemplate += '<div class="event-speaker">';
            speakerTemplate += '<div class="separator-line"></div>';
            speakerTemplate += '<label>' + (props.Speakers.length > 1 ? 'Speakers' : 'Speaker') + '</label>';

            for (var i = 0; i < props.Speakers.length; i++) {
                var speaker = props.Speakers[i];
                speakerTemplate +=
                    '<div class="speaker-details">' +
                    '<div class="speaker-image">' + speaker.Name.charAt(0) + '</div>' +
                    '<div class="speaker-info">' +
                    '<div class="speaker-name">' + speaker.Name + '</div>' +
                    '<div class="speaker-title">' + speaker.Title + '</div>' +
                    '<div class="speaker-note">' + speaker.Note + '</div>' +
                    '</div>' +
                    '</div>';
            }

            speakerTemplate += '</div>';
        }

        var durationAudience = '';
        if (!isBreak) {
            durationAudience += '<div class="event-duration-audience">';
            durationAudience += '<div class="event-duration">';
            durationAudience += '<span class="e-icons e-duration-icon"></span>';
            durationAudience += '<span class="e-duration">' + getTimeString(props.StartTime) + ' - ' + getTimeString(props.EndTime) + '</span>';
            durationAudience += '</div>';
            durationAudience += '<div class="event-audience">';
            durationAudience += '<span class="e-icons e-audience-icon"></span>';
            durationAudience += '<span class="e-audience-count">Audience : ' + props.Capacity + '</span>';
            durationAudience += '</div>';
            durationAudience += '</div>';
        }

        var html = '';
        html += '<div class="agenda-event">';
        html += '<div class="event-subject">' + props.Subject + '</div>';
        html += '<div class="event-description">' + props.Description + '</div>';
        html += durationAudience;
        html += speakerTemplate;
        html += '</div>';

        return html;
    }
    // Event handlers
    function onEventRendered(args) {
        var data = args.data;
        var subject = data.Subject ? data.Subject.toLowerCase() : '';
        var isBreakEvent = subject.indexOf('break') !== -1 || subject.indexOf('lunch') !== -1;

        if (isBreakEvent) {
            if (args.element.classList.contains('e-agenda-item')) {
                var appointmentEl = args.element.querySelector('.e-appointment');
                if (appointmentEl) {
                    appointmentEl.classList.add('e-break-event');
                }
            } else {
                args.element.classList.add('e-break-event');
            }
        }
    }

    function onCellClick(args) {
        args.cancel = true;
    }

    function onPopupOpen(args) {
        var isQuickInfoPopup = args.type === 'QuickInfo' || args.type === 'ViewEventInfo';
        var isEditorPopup = args.type === 'Editor';
        var isBreakEvent = args.target && args.target.classList.contains('e-break-event');

        if ((isQuickInfoPopup && isBreakEvent) || (isEditorPopup && !isDraggedItemDropped)) {
            args.cancel = true;
            return;
        }

        if (isQuickInfoPopup) {
            args.element.classList.add('event-management-quick-popup');
        } else if (isEditorPopup) {
            args.element.classList.add('event-management-editor-popup');

            var capacityAlert = args.element.querySelector('.capacity-alert');
            if (capacityAlert) {
                capacityAlert.remove();
            }

            var timeAlert = args.element.querySelector('.time-alert');
            if (timeAlert) {
                timeAlert.remove();
            }

            var startTimeElement = args.element.querySelector('.e-start-end-row .e-start.e-control.e-datetimepicker');
            var endTimeElement = args.element.querySelector('.e-start-end-row .e-end.e-control.e-datetimepicker');

            if (startTimeElement && endTimeElement) {
                var startPickerInstance = startTimeElement.ej2_instances && startTimeElement.ej2_instances[0];
                var endPickerInstance = endTimeElement.ej2_instances && endTimeElement.ej2_instances[0];

                if (startPickerInstance && endPickerInstance) {
                    startPickerInstance.change = function () {
                        var startTime = new Date(startPickerInstance.value);
                        if (args.data && args.data.Duration) {
                            var match = args.data.Duration.match(/(\d+)\s+(hour|hours|minute|minutes)/i);
                            if (match) {
                                var durationValue = parseInt(match[1], 10);
                                var durationUnit = match[2].toLowerCase();
                                var newEndTime = new Date(startTime);

                                if (durationUnit === 'hour' || durationUnit === 'hours') {
                                    newEndTime.setHours(newEndTime.getHours() + durationValue);
                                } else if (durationUnit === 'minute' || durationUnit === 'minutes') {
                                    newEndTime.setMinutes(newEndTime.getMinutes() + durationValue);
                                }

                                endPickerInstance.value = newEndTime;
                            }
                        }
                    };
                }
            }
        }
    }
};