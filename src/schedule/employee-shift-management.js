this.default = function () {
    ej.schedule.Schedule.Inject(
        ej.schedule.TimelineViews,
        ej.schedule.Agenda,
        ej.schedule.Toolbar
    );
    var intl = new ej.base.Internationalization();
    var isDraggedItemDropped = false;
    var tooltipInstances = [];
    var draggedItemId = null;
    var previousIndex = 0;
    var currentChipIndex = 0;
    var employeeNamesList = [];
    var shiftList = [];
    var shiftsData = [];
    var toolbarChipsRef = { current: null };
    var eventsdata = new ej.base.extend([], window.employeeShiftData, null, true);
    var imagePath = 'src/schedule/images/';
    var salamanImage = imagePath + 'salman@3x.png';
    var brianImage = imagePath + 'brian@3x.png';
    var jakeImage = imagePath + 'jake@3x.png';
    var jenniferImage = imagePath + 'Jennifer.png';
    var davidImage = imagePath + 'David.png';
    var williammImage = imagePath + 'William.png';
    var emmaImage = imagePath + 'Emma.png';
    var lilyImage = imagePath + 'Lily.png';
    var avaImage = imagePath + 'Ava.png';
    var graceImage = imagePath + 'Grace.png';
    var michaelImage = imagePath + 'Michael.png';
    var thomasImage = imagePath + 'Thomas.png';
    var rickyImage = imagePath + 'Ricky.png';
    var jamesImage = imagePath + 'James.png';
    var benjaminImage = imagePath + 'Benjamin.png';
    var oliviaImage = imagePath + 'Olivia.png';
    var chloeImage = imagePath + 'Chloe.png';

    var employeeImages = [
        { name: 'John', image: imagePath + 'robert.png' },
        { name: 'Nashil', image: imagePath + 'nancy.png' },
        { name: 'Jennifer', image: jenniferImage },
        { name: 'William', image: williammImage },
        { name: 'David', image: davidImage },
        { name: 'Michael', image: michaelImage },
        { name: 'Thomas', image: thomasImage },
        { name: 'Daniel', image: imagePath + 'robson.png' },
        { name: 'Mark', image: imagePath + 'will-smith.png' },
        { name: 'Brian', image: brianImage },
        { name: 'Kevin', image: imagePath + 'alice.png' },
        { name: 'Salman', image: salamanImage },
        { name: 'Emma', image: emmaImage },
        { name: 'Lily', image: lilyImage },
        { name: 'Ava', image: avaImage },
        { name: 'Grace', image: graceImage },
        { name: 'Zoe', image: imagePath + 'laura.png' },
        { name: 'James', image: jamesImage },
        { name: 'Benjamin', image: benjaminImage },
        { name: 'Olivia', image: oliviaImage },
        { name: 'Chloe', image: chloeImage },
        { name: 'Ricky', image: rickyImage },
        { name: 'Jake', image: jakeImage }
    ];
    var employeeRole = [
        { role: 'Doctors', id: 1 },
        { role: 'Nurses', id: 2 },
        { role: 'Support Staffs', id: 3 }
    ];
    var designationsData = [
        { name: 'Attending Physician', id: 1, groupId: 1 },
        { name: 'Hospitalist', id: 2, groupId: 1 },
        { name: 'General Pediatrician', id: 3, groupId: 1 },
        { name: 'Resident Doctor', id: 4, groupId: 1 },
        { name: 'Senior Nurse', id: 5, groupId: 2 },
        { name: 'Nurse Practitioner', id: 6, groupId: 2 },
        { name: 'Medical Assistant', id: 7, groupId: 3 },
        { name: 'Receptionist', id: 8, groupId: 3 }
    ];

    var imageMap = {
        mark: imagePath + 'will-smith.png',
        brian: imagePath + 'brian@3x.png',
        kevin: imagePath + 'alice.png',
        salman: imagePath + 'salman@3x.png',
        olivia: imagePath + 'Olivia.png',
        zoe: imagePath + 'laura.png',
        ricky: imagePath + 'Ricky.png',
        jake: imagePath + 'jake@3x.png'
    };
    var allowDragAndDrop = true;
    var doctorsData = [
        { Id: 1, Name: "Mark", Description: 'Attending Physician', role: 'Doctors' },
        { Id: 2, Name: "Brian", Description: 'Hospitalist', role: 'Doctors' },
        { Id: 3, Name: "Kevin", Description: 'General Pediatrician', role: 'Doctors' },
        { Id: 4, Name: "Salman", Description: 'Resident Doctor', role: 'Doctors' }
    ];

    var nursesData = [
        { Id: 5, Name: "Olivia", Description: 'Senior Nurse', role: 'Nurses' },
        { Id: 6, Name: "Zoe", Description: 'Nurse Practitioner', role: 'Nurses' }
    ];

    var staffsData = [
        { Id: 7, Name: "Ricky", Description: 'Medical Assistant', role: 'Support Staffs' },
        { Id: 8, Name: "Jake", Description: 'Receptionist', role: 'Support Staffs' }
    ];

    // Combine all data into one array
    var allData = doctorsData.concat(nursesData, staffsData);

    // Fields for TreeView
    var allStaffsTreeFields = { dataSource: allData, id: 'Id', text: 'Name' };
    var doctorsTreeFields = { dataSource: doctorsData, id: 'Id', text: 'Name' };
    var nursesTreeFields = { dataSource: nursesData, id: 'Id', text: 'Name' };
    var staffsTreeFields = { dataSource: staffsData, id: 'Id', text: 'Name' };
    var mergedList = doctorsData.concat(nursesData).concat(staffsData);
    mergedList.forEach(function (item) {
        item.ImageSrc = imageMap[item.Name.toLowerCase()] || 'path/to/default.png';
    });
    function setAgendaContentHeight() {
        // Locate the Agenda view content wrapper
        var agendaContentElement = document.querySelector(
            '.e-table-wrap.e-agenda-view .e-schedule-table .e-content-wrap'
        );
        if (agendaContentElement && agendaContentElement.style.height) {
            var currentHeight = parseFloat(agendaContentElement.style.height);
            var toolbarHeight = 72;
            agendaContentElement.style.height = (currentHeight - toolbarHeight) + 'px';
        }
    }
    function onActionComplete(args) {
        var type = args.requestType;
        var currentView = this.currentView;
        if (type === 'viewNavigate' || type === 'dateNavigate') {
            setAgendaContentHeight();
        }
        else if (type === 'toolBarItemRendered' && currentView === 'Agenda') {
            createAgendaToolbar();
            setTimeout(setAgendaContentHeight);
        }
    }
    function onNavigating(args) {
        var scheduleToolbar = scheduleObj.element.querySelector('.e-schedule-toolbar-container');
        if (!scheduleToolbar || args.action !== 'view') {
            return;
        }
        if (args.currentView === 'Agenda') {
            createAgendaToolbar();
        }
        else {
            var toolbarContainer = scheduleToolbar.querySelector('#agenda-toolbar-container');
            if (toolbarContainer) {
                if (toolbarContainer.parentNode) {
                    toolbarContainer.parentNode.removeChild(toolbarContainer);
                }
            }
            var settings = scheduleObj.eventSettings;
            if (settings && settings.query) {
                settings.query.queries = [];
            }
        }
    }

    function onEventRendered(args) {
        var data = args.data;
        var element = args.element;
        var startHour = new Date(data.StartTime).getHours();
        element.classList.add(startHour === 7 ? 'morning-shift' : 'evening-shift');
        var innerWrap = element.querySelector('.e-inner-wrap');
        if (innerWrap) {
            innerWrap.innerHTML = '';
            var elementToAppend = getEventElement(data, element);
            var appointmentWidth = parseInt(element.style.width.split('px')[0], 10) - 5;
            element.style.width = appointmentWidth + 'px';
            innerWrap.appendChild(elementToAppend);
            if (!element.classList.contains('e-read-only')) {
                var groupIndex = parseInt(element.getAttribute('data-group-index'), 10);
                var classToAdd = groupIndex === 0 ? 'doctors-event' :
                    groupIndex === 1 ? 'nurses-event' : 'staffs-event';
                element.classList.add(classToAdd);
            }
        }

        function appendTooltipIcon(element, iconClass, tooltipText, onClick) {
            var iconContainer = element.querySelector('.e-icon-element');
            if (!iconContainer) {
                iconContainer = document.createElement('span');
                iconContainer.className = 'e-icon-element';
                element.appendChild(iconContainer);
            }
            var icon = document.createElement('span');
            icon.className = 'e-icons ' + iconClass;
            icon.style.cursor = 'pointer';
            if (onClick) {
                icon.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    onClick(e);
                });
            }
            iconContainer.appendChild(icon);

            var tooltip = new ej.popups.Tooltip({
                cssClass: 'shift-management-tooltip',
                content: tooltipText,
                position: 'RightCenter',
                opensOn: 'Hover'
            }, icon);
            tooltipInstances.push(tooltip);
        }

        if (data.Description && data.Description.toLowerCase().includes('leave')) {
            element.classList.add('event-leave');
            if (scheduleObj.currentView !== 'Agenda') {
                appendTooltipIcon(
                    element,
                    'e-leave',
                    data.Subject + ' is on leave. To cover this shift, drag a staff member with the same designation from the available list and drop them here.'
                );
            }
        }

        if (data.Subject && data.Subject.includes('covers for')) {
            element.classList.add('e-covers');
            element.classList.remove('event-leave');
            if (scheduleObj.currentView !== 'Agenda') {
                appendTooltipIcon(
                    element,
                    'e-replaced sf-icon-user-replace',
                    'Leave covered by replacement'
                );
            }
        }

        if (
            data.Description && data.Description.toLowerCase().includes('swap-request') &&
            data.Subject && !data.Subject.toLowerCase().includes('swapped') &&
            scheduleObj.currentView !== 'Agenda'
        ) {
            element.classList.add('event-swap');
            appendTooltipIcon(
                element,
                'e-swap sf-icon-replace-request',
                'Click here to swap shift',
                function (e) { onSwapIconClick(e, element, data); }
            );
        }

        if (data.Subject && data.Subject.toLowerCase().includes('swapped')) {
            element.classList.remove('event-swap');
            element.classList.add('event-swapped');
            if (scheduleObj.currentView !== 'Agenda') {
                appendTooltipIcon(
                    element,
                    'e-swapped sf-icon-replace-accepted',
                    'This shift has been swapped'
                );
            }
        }
    }
    function onSwapIconClick(e, element, data) {
        e.preventDefault(); e.stopPropagation();
        data.swapRequested = true;
        scheduleObj.saveEvent(data, 'Add');
        scheduleObj.refreshEvents();
        requestShiftSwap({ element: element, data: data });
    }

    function getEventElement(props) {
        var Subject = props.Subject || '';
        var Description = props.Description || '';
        var StartTime = props.StartTime;
        var EndTime = props.EndTime;
        var isSwappedEvent = Subject.includes('swapped');
        var isLeaveReplacedEvent = Subject.includes('covers for');
        var isLeave = Description.toLowerCase().includes('leave') && !isLeaveReplacedEvent;
        var employeeName;
        if (isLeaveReplacedEvent) {
            employeeName = Subject.split('covers for')[0].trim();
        } else if (isSwappedEvent) {
            var match = Subject.match(/with ([A-Za-z]+)'s shift/);
            employeeName = match ? match[1] : Subject;
        } else {
            employeeName = Subject;
        }
        var matchedEmployee = employeeImages.filter(function (item) {
            return item.name === employeeName;
        });
        var imageUrl = matchedEmployee.length > 0 ? matchedEmployee[0].image : '';
        var templateWrap = document.createElement('div');
        templateWrap.className = 'template-wrap';
        var staffWrap = document.createElement('div');
        staffWrap.className = 'e-staff';
        var staffImage = document.createElement('img');
        staffImage.className = 'staff-image';
        staffImage.src = imageUrl;
        var staffInfo = document.createElement('div');
        staffInfo.className = 'staff-info';
        var name = document.createElement('div');
        name.className = 'e-name';
        name.innerHTML = isLeave ? Description.split('(')[0].trim() : employeeName;
        var designation = document.createElement('div');
        designation.className = 'e-designation';
        designation.textContent = getTimeString(StartTime) + ' - ' + getTimeString(EndTime);
        staffInfo.appendChild(name);
        staffInfo.appendChild(designation);
        staffWrap.appendChild(staffImage);
        staffWrap.appendChild(staffInfo);
        templateWrap.appendChild(staffWrap);
        return templateWrap;
    }
    function majorSlotTemplate(props) {
        var hour = props.date.getHours();
        var shift = (hour === 7) ? 'Morning Shift' : 'Evening Shift';
        return '<div>' + shift + '</div>';
    }

    function onPopupOpen(args) {
        if (args.type === 'Editor') {
            if (!isDraggedItemDropped) {
                args.cancel = true;
                return;
            }
            args.element.classList.add('shift-management-editor-popup');
        }
    }

    // ——— onPopupClose equivalent ———
    function onPopupClose(args) {
    if (args.type === 'Editor') {
        var isSaveButton = args.event && args.event.target &&
                           args.event.target.classList &&
                           args.event.target.classList.contains('e-event-save');

        if (isSaveButton) {
            var treeObj = treeInstances[currentChipIndex];
            if (treeObj && draggedItemId) {
                var draggedId = parseInt(draggedItemId, 10);

                // Remove from tree data
                var updated = treeObj.fields.dataSource.filter(function (item) {
                    return item.Id !== draggedId;
                });
                treeObj.fields.dataSource = updated;
                treeObj.dataBind();

                // Remove drag preview DOM elements
                document.querySelectorAll('.e-drag-item.shift-management-treeview')
                    .forEach(function (el) { el.remove(); });

                // Remove from global data
                allData = allData.filter(function (item) {
                    return item.Id !== draggedId;
                });

                // Replace 'Leave' with 'Available'
                if (args.data && args.data.Description && args.data.Description.includes('Leave')) {
                    args.data.Description = args.data.Description.replace('Leave ', 'Available ');
                }
            }
        }

        isDraggedItemDropped = false;
    }
}
    // ——— onCellClick equivalent ———
    function onCellClick(args) {
        // prevent creating events by clicking cells
        args.cancel = true;
    }

    // ——— onEventClick equivalent ———
    function onEventClick(args) {
        if (args.event && args.event.IsReadonly) {
            args.cancel = true;
        }
    }
    window.scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        selectedDate: new Date(2025, 2, 5),
        startHour: '07:00',
        endHour: '23:00',
        currentView: 'TimelineWeek',
        showTimeIndicator: true,
        toolbarItems: [
            { align: 'Left', name: 'Previous' },
            { align: 'Left', name: 'Next' },
            { align: 'Left', name: 'DateRangeText' },
            { align: 'Right', name: 'Views' }],
        cssClass: 'schedule-shift-management',
        workHours: {
            start: '00:00',
            end: '23:59'
        },
        timeScale: {
            interval: 480,
            slotCount: 3,
            majorSlotTemplate: majorSlotTemplate
        },
        views: [
            { option: 'TimelineWeek' },
            { option: 'Agenda', eventTemplate: agendaTemplate }
        ],
        group: {
            enableCompactView: false,
            resources: ['Role', 'Designation']
        },
        resources: [
            {
                field: 'RoleId', title: 'Department',
                name: 'Role', allowMultiple: false,
                dataSource: [
                    { Text: 'Doctors', Id: 1 },
                    { Text: 'Nurses', Id: 2 },
                    { Text: 'Supporting Staffs', Id: 3 }
                ],
                textField: 'Text', idField: 'Id'
            },
            {
                field: 'DesignationId', title: 'Consultant',
                name: 'Designation', allowMultiple: false,
                dataSource: [
                    { Text: 'Attending Physician', Id: 1, GroupId: 1 },
                    { Text: 'Hospitalist', Id: 2, GroupId: 1 },
                    { Text: 'General Pediatrician', Id: 3, GroupId: 1 },
                    { Text: 'Resident Doctor', Id: 4, GroupId: 1 },
                    { Text: 'Senior Nurse', Id: 5, GroupId: 2 },
                    { Text: 'Nurse Practitioner', Id: 6, GroupId: 2 },
                    { Text: 'Medical Assistant', Id: 7, GroupId: 3 },
                    { Text: 'Receptionist', Id: 8, GroupId: 3 },
                ],
                textField: 'Text', idField: 'Id', groupIDField: 'GroupId'
            }
        ],
        eventSettings: {
            dataSource: eventsdata,
            fields: {
                subject: { title: 'Name', name: 'Subject' },
                startTime: { title: 'From', name: 'StartTime' },
                endTime: { title: 'To', name: 'EndTime' },
                description: { title: 'Reason', name: 'Description' }
            }
        },
        resizeStart: function (args) {
            args.cancel = true;
        },
        allowDragAndDrop: false,
        editorHeaderTemplate: '#editorHeaderTemplate',
        eventRendered: onEventRendered,
        actionComplete: onActionComplete,
        navigating: onNavigating,
        popupOpen: onPopupOpen,
        popupClose: onPopupClose,
        cellClick: onCellClick,
        eventClick: onEventClick,
    });
    scheduleObj.appendTo('#schedule');

    function agendaTemplate(props) {
        var roleItem = employeeRole.find(function (item) {
            return item.id === parseInt(props.RoleId, 10);
        }) || {};
        var designationItem = designationsData.find(function (item) {
            return item.id === parseInt(props.DesignationId, 10);
        }) || {};

        var role = roleItem.role || '';
        var designation = designationItem.name || '';
        var isEmployeeLeave = props.Description.toLowerCase().includes('leave');
        var html =
            '<div class="agenda-event">' +
            '<div class="e-staff">' +
            '<div class="staff-image">' + props.Subject.charAt(0) + '</div>' +
            '<div class="event-details">' +
            '<div class="staff-info">' +
            '<span class="staff-name">' + props.Subject + '</span> ' +
            '<span class="staff-role">' + role + '</span> ' +
            '<span class="staff-designation">(' + designation + ')' +
            '</span>' +
            (isEmployeeLeave ? '<span class="staff-availability"> - On Leave</span>' : ''
            ) +
            '</div>' +
            '<div class="event-time">Shift Time: ' +
            getTimeString(props.StartTime) +
            ' - ' +
            getTimeString(props.EndTime) +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        return html;
    }

    function onTreeDragStop(event) {
        var classElement = event.target.classList.contains('e-device-hover') ? event.target : ej.base.closest(event.target, '.e-device-hover');
        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }
        event.cancel = true;
        var scheduleElement = ej.base.closest(event.target, '.e-content-wrap');
        if (scheduleElement) {
            var treeviewData = allStaffsTreeview.fields.dataSource;
            var target = ej.base.closest(event.target, '.e-appointment.event-leave');
            if (target) {
                var draggedId = parseInt(event.draggedNodeData.id, 10);
                var filteredData = treeviewData.filter(function (item) {
                    return item.Id === draggedId;
                });
                var eventDetails = Object.assign({}, scheduleObj.getEventDetails(target));
                var roleId = parseInt(eventDetails.RoleId, 10);
                var designationId = parseInt(eventDetails.DesignationId, 10);
                var role = employeeRole.filter(function (item) {
                    return item.id === roleId;
                })[0].role;
                var designation = designationsData.filter(function (item) {
                    return item.id === designationId;
                })[0].name;
                if (role === filteredData[0].role && designation === filteredData[0].Description) {
                    eventDetails.Subject = filteredData[0].Name + ' covers for ' + eventDetails.Subject;
                    eventDetails.Designation = filteredData[0].Description;
                    isDraggedItemDropped = true;
                    scheduleObj.openEditor(eventDetails, 'EditOccurrence');
                }
            }
        }
        document.body.classList.remove('e-disble-not-allowed');
    }

    function onTreeDragStart(args) {
        draggedItemId = args.draggedNodeData.id;
        document.body.classList.add('e-disble-not-allowed');
    }

    function chipClick(args) {
        var chipText = args && args.text ? args.text.trim() : '';
        if (!chipText) return;
        var newIndex = args.index;
        if (newIndex === -1) return;
        var prevTree = treeInstances[previousIndex];
        if (prevTree && prevTree.element) {
            prevTree.element.style.display = 'none';
        }
        var activeTree = treeInstances[newIndex];
        if (activeTree && activeTree.element) {
            activeTree.element.style.display = '';
            var newData;
            if (newIndex === 0) {
                newData = allData;
            } else {
                newData = allData.filter(function (item) {
                    var roleMatch = item.role
                        .toLowerCase()
                        .includes(chipText.toLowerCase().trim());
                    return roleMatch;
                });
            }
            activeTree.setProperties({
                fields: {
                    dataSource: newData,
                    id: 'Id',
                    text: 'Name'
                }
            });
        }
        previousIndex = newIndex;
    }
    var externalChipsRef = new ej.buttons.ChipList({
        selection: 'Single',
        cssClass: 'e-outline',
        selectedChips: [0],
        chips: [
            { text: 'All' },
            { text: 'Doctors' },
            { text: 'Nurses' },
            { text: 'Staffs' }
        ],
        click: chipClick,
        beforeClick: function (args) {
            handleChipBeforeClick(args, true); // `true` is your original flag
        },
    });
    externalChipsRef.appendTo('#chip-avatar');
    var allStaffsTreeview = new ej.navigations.TreeView({
        cssClass: 'shift-management-treeview',
        dragArea: '.shift-management-sample-wrapper',
        nodeTemplate: '#treeTemplate',
        fields: allStaffsTreeFields,
        dataSource: allData,
        nodeDragStop: onTreeDragStop,
        nodeDragStart: onTreeDragStart,
        allowDragAndDrop: allowDragAndDrop
    });
    allStaffsTreeview.appendTo('#allStaffsTreeview');

    // TreeView: Doctors
    var doctorsTreeview = new ej.navigations.TreeView({
        cssClass: 'shift-management-treeview',
        dragArea: '.shift-management-sample-wrapper',
        nodeTemplate: '#treeTemplate',
        fields: doctorsTreeFields,
        dataSource: doctorsData,
        nodeDragStop: onTreeDragStop,
        nodeDragStart: onTreeDragStart,
        allowDragAndDrop: allowDragAndDrop
    });
    doctorsTreeview.appendTo('#doctorsTreeview');

    // TreeView: Nurses
    var nursesTreeview = new ej.navigations.TreeView({
        cssClass: 'shift-management-treeview',
        dragArea: '.shift-management-sample-wrapper',
        nodeTemplate: '#treeTemplate',
        fields: nursesTreeFields,
        dataSource: nursesData,
        nodeDragStop: onTreeDragStop,
        nodeDragStart: onTreeDragStart,
        allowDragAndDrop: allowDragAndDrop
    });
    nursesTreeview.appendTo('#nursesTreeview');

    // TreeView: Staffs
    var staffsTreeview = new ej.navigations.TreeView({
        cssClass: 'shift-management-treeview',
        dragArea: '.shift-management-sample-wrapper',
        nodeTemplate: '#treeTemplate',
        fields: staffsTreeFields,
        dataSource: staffsData,
        nodeDragStop: onTreeDragStop,
        nodeDragStart: onTreeDragStart,
        allowDragAndDrop: allowDragAndDrop
    });
    staffsTreeview.appendTo('#staffsTreeview');


    var treeInstances = [
        allStaffsTreeview,
        doctorsTreeview,
        nursesTreeview,
        staffsTreeview
    ];

    //     // Handle chip before click
    var handleChipBeforeClick = function (args, isExternalChipClick) {
        currentChipIndex = args.index;
        previousChipIndex = isExternalChipClick ? externalChipsRef.selectedChips : toolbarChipsRef.current.selectedChips;

        if (currentChipIndex === previousChipIndex) {
            args.cancel = true;
        }
    };


    var animationSettings = { effect: 'Zoom' };
    function getButtons() {
        return [
            {
                click: function () {
                    dialogClose();
                },
                buttonModel: {
                    content: 'Cancel'
                }
            },
            {
                click: function () {
                    dialogObj.hide();
                    var dataSource = window.scheduleObj.eventSettings.dataSource.slice();
                    var requestingEventIndex = 0;
                    var requestedShiftId = requestedShift.id;
                    var requestingEvent = dataSource.filter(function (item, index) {
                        if (item.Id === requestedShiftId) {
                            requestingEventIndex = index;
                            return true;
                        }
                        return false;
                    });
                    var approvedEventIndex = 0;
                    var accShiftId = selectedShift.eventId;
                    var approvedEvent = dataSource.filter(function (item, index) {
                        if (item.Id === accShiftId) {
                            approvedEventIndex = index;
                            return true;
                        }
                        return false;
                    });
                    requestingEvent[0].Description = requestingEvent[0].Description.replace(' - Swap-Request', '');
                    requestingEvent[0].Subject =
                        requestedShift.name + ' swapped the shift with ' +
                        selectedEmployee.name + '\'s shift scheduled from ' +
                        intl.formatDate(new Date(approvedEvent[0].StartTime), { skeleton: 'MMMd' }) + ', ' +
                        getTimeString(new Date(approvedEvent[0].StartTime)) + ' to ' +
                        getTimeString(new Date(approvedEvent[0].EndTime));
                    dataSource[requestingEventIndex] = requestingEvent[0];
                    approvedEvent[0].Description = approvedEvent[0].Description.replace(' - Swap-Request', '');
                    approvedEvent[0].Subject =
                        selectedEmployee.name + ' swapped the shift with ' + requestedShift.name + '\'s shift scheduled from ' + intl.formatDate(new Date(requestingEvent[0].StartTime), { skeleton: 'MMMd' }) + ', ' + getTimeString(new Date(requestingEvent[0].StartTime)) + ' to ' + getTimeString(new Date(requestingEvent[0].EndTime));
                    dataSource[approvedEventIndex] = approvedEvent[0];
                    window.scheduleObj.eventSettings.dataSource = dataSource;
                    window.scheduleObj.refreshEvents();
                    employeeNamesList = [];
                    shiftList = [];
                    dialogClose();
                },
                buttonModel: {
                    content: 'Swap Shift',
                    disabled: true,
                    cssClass: 'swap-shift-btn'
                }
            }
        ];
    }

    // ---- Instantiate the Dialog ----
    var dialogObj = new ej.popups.Dialog({
        header: 'Shift swap',
        cssClass: 'swap-dialog',
        height: '250px',
        width: '378px',
        isModal: true,
        showCloseIcon: true,
        animationSettings: animationSettings,
        buttons: getButtons(),
        content: document.getElementById('dialogTemplate').innerHTML,
        visible: false,
        open: dialogOpen,
        close: dialogClose,
    });
    dialogObj.appendTo('#dialogContainer');

    var employeeDDL = new ej.dropdowns.DropDownList({
        dataSource: employeeNamesList,
        fields: { text: 'name', value: 'id' },
        placeholder: 'Select an employee',
        change: employeeNameChange
    });
    employeeDDL.appendTo('#employeeDDL');

    var shiftDDL = new ej.dropdowns.DropDownList({
        dataSource: shiftList,
        fields: { text: 'name', value: 'id' },
        placeholder: 'Select shift',
        change: shiftChange
    });
    shiftDDL.appendTo('#shiftDDL');

    // ------ DialogControl: Open and Close ------
    function dialogOpen() {
        document.getElementById('target').style.display = 'block';
        dialogObj.show();
    }

    function dialogClose() {
        if (employeeDDL) {
            employeeDDL.value = null;
            employeeDDL.dataSource = [];
        }

        if (shiftDDL) {
            shiftDDL.value = null;
            shiftDDL.dataSource = [];
        }
        dialogObj.hide();
        document.getElementById('target').style.display = 'none';

    }

    // ------ Utility functions used ------
    function getTimeString(value) {
        return intl.formatDate(value, { skeleton: 'h' });
    }

    function getDayString(date) {
        return date.toLocaleDateString('en-US', { weekday: 'short' }); // Example: "Mon"
    }

    function getShortTimeString(date) {
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }); // Example: "10:30 AM"
    }

    // ------ Shift Swap Request Handler ------
    function requestShiftSwap(args) {

        var scheduleElement = document.getElementById('schedule');
        var scheduleObj = ej.base.getComponent(scheduleElement, 'schedule');
        var eventsData = scheduleObj.eventSettings.dataSource;
        var appointment = args.element.classList.contains('e-appointment') ? args.element : ej.base.closest(args.element, '.e-appointment');
        if (!eventsData || !appointment) return;
        if (window.tooltipInstances && window.tooltipInstances.length) {
            window.tooltipInstances.forEach(function (t) {
                if (t && typeof t.destroy === 'function') {
                    t.destroy();
                }
            });
            window.tooltipInstances.length = 0;
        }
        var eventDetails = scheduleObj.getEventDetails(appointment);
        if (!eventDetails) return;
        var roleId = eventDetails.RoleId;
        var designationId = eventDetails.DesignationId;
        var employeeName = eventDetails.Subject;
        var employeesData = [];
        var newShiftsData = [];
        var filteredData = eventsData.filter(function (item) {
            return item.Description.toLowerCase().includes('swap-request') &&
                item.RoleId === roleId &&
                item.DesignationId === designationId &&
                item.Subject !== employeeName;
        });

        filteredData.forEach(function (item, index) {
            if (!employeesData.some(function (e) {
                return e.name === item.Subject;
            })) {
                employeesData.push({
                    id: item.DesignationId,
                    name: item.Subject,
                    employeeId: item.EmployeeId
                });
            }
            newShiftsData.push({
                id: index + 1,
                name: intl.formatDate(new Date(item.StartTime), { skeleton: 'MMMd' }) +
                    ' ' + getDayString(new Date(item.StartTime)) +
                    ' ' + getShortTimeString(new Date(item.StartTime)) +
                    ' - ' + getShortTimeString(new Date(item.EndTime)),
                designationId: item.DesignationId,
                employeeId: item.EmployeeId,
                eventId: item.Id
            });
        });

        requestedShift = {
            id: eventDetails.Id,
            name: employeeName
        };

        shiftsData = newShiftsData;
        employeeNamesList = employeesData;

        // Update dropdowns
        employeeDDL.setProperties({ dataSource: employeeNamesList }, true);
        shiftDDL.setProperties({ dataSource: [] }, true);
        dialogOpen();
    }

    // ------ Dropdown Change Handlers ------
    function employeeNameChange(args) {
        if (args.itemData) {
            var filteredShifts = shiftsData.filter(function (item) {
                return item.designationId === args.itemData.id &&
                    item.employeeId === args.itemData.employeeId;
            });
            shiftDDL.setProperties({ dataSource: filteredShifts }, true);
            selectedEmployee = args.itemData;
        }
    }

    function shiftChange(args) {
        if (args.itemData) {
            selectedShift = args.itemData;
        }
        var swapBtn = dialogObj.element.querySelector('.swap-shift-btn');
        if (!swapBtn) {
            return;
        }
        swapBtn.disabled = !args.value;
    }

    function createAgendaToolbar() {
        var scheduleToolbar = window.scheduleObj.element.querySelector('.e-schedule-toolbar-container');
        if (!scheduleToolbar || scheduleToolbar.querySelector('.agenda-toolbar')) return;
        var toolbarElement = document.createElement('div');
        toolbarElement.id = 'agenda-toolbar-container';
        scheduleToolbar.appendChild(toolbarElement);
        var agendaToolbar = new ej.navigations.Toolbar({
            cssClass: 'agenda-toolbar',
            overflowMode: 'Scrollable',
            width: '100%',
            items: [
                {
                    template: '<div id="chip-wrapper"></div>',
                    type: 'Input',
                    align: 'Left'
                },
                {
                    template: '<div id="ddl-wrapper" style="width:230px;"><input id="employee-ddl"/></div>',
                    type: 'Input',
                    align: 'Right'
                }
            ]
        });
        agendaToolbar.appendTo('#agenda-toolbar-container');
        window.agendaToolbar = agendaToolbar;
        //  Initialize the chip list manually
        var chipList = new ej.buttons.ChipList({
            selection: 'Single',
            cssClass: 'e-outline',
            selectedChips: [0],
            chips: ['All', 'Doctors', 'Nurses', 'Staffs'],
            beforeClick: handleChipBeforeClick,
            click: function (args) {
                agendaChipsClick(args);
            }
        });
        chipList.appendTo('#chip-wrapper');
        toolbarChipsRef.current = chipList;

        var ddl = new ej.dropdowns.DropDownList({
            change: onDropDownListChange,
            beforeOpen: onDropDownListBeforeOpen,
            placeholder: 'Select an employee',
            popupHeight: '220px',
            showClearButton: true
        });
        ddl.appendTo('#employee-ddl');
        window.dropdownListObj = ddl;
    }

    function agendaChipsClick(args) {
        if (!dropdownListObj || !scheduleObj) return;
        selectedChipIndex = args.index;
        selectedDropdownValue = null;
        dropdownListObj.dataSource = [];
        dropdownListObj.value = null;
        dropdownListObj.dataBind();
        dropdownListObj.focusOut();
        // Apply filter query to the scheduler
        var query = new ej.data.Query().where('RoleId', 'contains', args.index || '', true);
        scheduleObj.eventSettings.query = query;
    }
    function onDropDownListChange(args) {
        if (!scheduleObj || !dropdownListObj || !toolbarChipsRef.current) return;
        selectedDropdownValue = args.value;
        var employeeName = args.itemData && args.itemData.value;
        var selectedChipIndex = toolbarChipsRef.current.selectedChips;
        var query;
        if (employeeName) {
            query = new ej.data.Query().where('Subject', 'contains', employeeName, true);
        } else {
            query = new ej.data.Query().where('RoleId', 'contains', selectedChipIndex || '', true);
        }

        scheduleObj.eventSettings.query = query;
        dropdownListObj.focusIn();
    }

    function onDropDownListBeforeOpen() {
        if (!scheduleObj || !dropdownListObj || !toolbarChipsRef.current) return;
        var activeChipIndex = toolbarChipsRef.current.selectedChips;
        var allEvents = scheduleObj.eventSettings.dataSource || [];

        var relevantEvents = activeChipIndex === 0 ? allEvents : allEvents.filter(function (item) {
            return item.RoleId === activeChipIndex;
        });
        var subjects = relevantEvents
            .map(function (item) { return item.Subject; })
            .filter(function (subject) {
                subject = subject.toLowerCase();
                return !subject.includes('covers') && !subject.includes('swapped');
            });
        var uniqueSubjects = Array.from(new Set(subjects));
        dropdownListObj.dataSource = uniqueSubjects;
    }
};