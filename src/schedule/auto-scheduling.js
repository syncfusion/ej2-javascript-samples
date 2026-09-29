this.default = function () {

    var MAX_DAILY_WORKLOAD = 8;
    var draggedEventData = null;
    var scheduleObj;
    var gridObj;

    var scheduledAppointments = new Set();

    var resourceData = [
        { text: 'Smith', id: 1, color: '#df5286', group: 'Doctor', skills: ['Cardiology', 'General'] },
        { text: 'Lee', id: 2, color: '#7fa900', group: 'Doctor', skills: ['Pediatrics', 'General'] },
        { text: 'Patel', id: 3, color: '#ea7a57', group: 'Doctor', skills: ['Surgery', 'General'] },
        { text: 'Amy', id: 4, color: '#007bff', group: 'Nurse', skills: ['ICU', 'Ward'] },
        { text: 'John', id: 5, color: '#00bdae', group: 'Nurse', skills: ['ER', 'Ward'] },
        { text: 'Sara', id: 6, color: '#f57b42', group: 'Nurse', skills: ['ICU', 'ER'] }
    ];


    var gridData = [
        { Id: 101, Task: 'Cardiology Consultation', Duration: '2 Hours', RequiredSkill: 'Cardiology' },
        { Id: 102, Task: 'Pediatric Health Assessment', Duration: '1 Hour', RequiredSkill: 'Pediatrics' },
        { Id: 103, Task: 'Pre-Surgical Evaluation', Duration: '3 Hours', RequiredSkill: 'Surgery' },
        { Id: 104, Task: 'Critical Care Monitoring', Duration: '2 Hours', RequiredSkill: 'ICU' },
        { Id: 105, Task: 'Emergency Patient Intake', Duration: '1 Hour', RequiredSkill: 'ER' },
        { Id: 106, Task: 'Inpatient Care Management', Duration: '2 Hours', RequiredSkill: 'Ward' },
        { Id: 107, Task: 'General Medical Examination', Duration: '1 Hour', RequiredSkill: 'General' },
        { Id: 108, Task: 'Emergency Case Assessment', Duration: '1 Hour', RequiredSkill: 'ER' }
    ];

    function getInitialEvents() {

        var today = new Date();
        today.setHours(0, 0, 0, 0);

        return [
            {
                Id: 1,
                Subject: 'Cardiac Checkup - Mr. Johnson',
                StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
                EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 30),
                IsAllDay: false,
                StaffId: 1,
                RequiredSkill: 'Cardiology'
            },
            {
                Id: 2,
                Subject: 'Consultation - ECG Review',
                StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0),
                EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0),
                IsAllDay: false,
                StaffId: 1,
                RequiredSkill: 'Cardiology'
            },
            {
                Id: 3,
                Subject: 'Child Wellness Exam - Emma',
                StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
                EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0),
                IsAllDay: false,
                StaffId: 2,
                RequiredSkill: 'Pediatrics'
            },
            {
                Id: 4,
                Subject: 'Vaccination Clinic',
                StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 30),
                EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 0),
                IsAllDay: false,
                StaffId: 2,
                RequiredSkill: 'General'
            },
            {
                Id: 5,
                Subject: 'Pre-Op Assessment',
                StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
                EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 30),
                IsAllDay: false,
                StaffId: 3,
                RequiredSkill: 'Surgery'
            },
            {
                Id: 6,
                Subject: 'Surgical Consultation - Mrs. Smith',
                StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0),
                EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30),
                IsAllDay: false,
                StaffId: 3,
                RequiredSkill: 'Surgery'
            },
            {
                Id: 7,
                Subject: 'ICU Patient Monitoring',
                StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 30),
                EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 30),
                IsAllDay: false,
                StaffId: 4,
                RequiredSkill: 'ICU'
            },
            {
                Id: 8,
                Subject: 'Vitals Check - ICU Ward',
                StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 0),
                EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0),
                IsAllDay: false,
                StaffId: 4,
                RequiredSkill: 'Ward'
            },
            {
                Id: 9,
                Subject: 'ER Triage - Patient Intake',
                StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
                EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0),
                IsAllDay: false,
                StaffId: 5,
                RequiredSkill: 'ER'
            },
            {
                Id: 10,
                Subject: 'Emergency Response Team',
                StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 30),
                EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 17, 0),
                IsAllDay: false,
                StaffId: 5,
                RequiredSkill: 'ER'
            },
            {
                Id: 11,
                Subject: 'ICU Support & Monitoring',
                StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0),
                EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 0),
                IsAllDay: false,
                StaffId: 6,
                RequiredSkill: 'ICU'
            },
            {
                Id: 12,
                Subject: 'ER Support - Critical Care',
                StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 16, 0),
                EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 17, 30),
                IsAllDay: false,
                StaffId: 6,
                RequiredSkill: 'ER'
            }
        ];
    }

    function parseDuration(duration) {
        return parseInt(duration.split(' ')[0], 10);
    }

    function safeDeleteGridRecord(record) {
        if (!record) return;
        var id = record.Id !== undefined ? record.Id : null;
        gridData = gridData.filter(function (item) {
            if (id !== null) {
                return item.Id !== id;
            }
            return (item.Task + '|' + item.RequiredSkill) !== (record.Task + '|' + record.RequiredSkill);
        });
        if (gridObj) {
            gridObj.dataSource = gridData;
            gridObj.dataBind();
        }
    }

    function getResourceWorkloadForDate(resourceId, date, excludeEventId) {

        var events = scheduleObj.getEvents() || [];

        var dayStart = new Date(date);
        dayStart.setHours(0, 0, 0, 0);

        var total = 0;

        events.forEach(function (event) {

            var eventDate = new Date(event.StartTime);
            eventDate.setHours(0, 0, 0, 0);

            if (
                event.StaffId === resourceId &&
                eventDate.getTime() === dayStart.getTime() &&
                (!excludeEventId || event.Id !== excludeEventId)
            ) {

                total +=
                    (new Date(event.EndTime) -
                        new Date(event.StartTime)) /
                    3600000;
            }
        });

        return total;
    }

    function isTimeSlotAvailableForResource(
        resourceId,
        startTime,
        endTime
    ) {

        var events = scheduleObj.getEvents() || [];

        return !events.some(function (event) {

            if (event.StaffId !== resourceId) {
                return false;
            }

            return (
                startTime.getTime() <
                new Date(event.EndTime).getTime() &&
                endTime.getTime() >
                new Date(event.StartTime).getTime()
            );
        });
    }

    function getEventSkill(eventData) {

        if (eventData.RequiredSkill) {
            return eventData.RequiredSkill;
        }

        var subject = eventData.Subject || '';

        for (var i = 0; i < resourceData.length; i++) {

            var resource = resourceData[i];

            for (var j = 0; j < resource.skills.length; j++) {

                if (subject.indexOf(resource.skills[j]) !== -1) {
                    return resource.skills[j];
                }
            }
        }

        return 'General';
    }
    function findAvailableTimeSlotForResource(
        resourceId,
        durationHours,
        date,
        tempScheduledEvents
    ) {

        var dayStart = new Date(date);
        dayStart.setHours(0, 0, 0, 0);

        var dayEnd = new Date(date);
        dayEnd.setHours(23, 59, 59, 999);

        var workingStart = new Date(dayStart);
        workingStart.setHours(9, 0, 0, 0);

        var workingEnd = new Date(dayStart);
        workingEnd.setHours(23, 0, 0, 0);

        var resourceEvents =
            scheduleObj.getEvents(dayStart, dayEnd)
                .filter(function (event) {
                    return event.StaffId === resourceId;
                });

        if (tempScheduledEvents && tempScheduledEvents.length) {

            tempScheduledEvents.forEach(function (event) {

                if (event.StaffId === resourceId) {
                    resourceEvents.push(event);
                }
            });
        }

        resourceEvents.sort(function (a, b) {
            return (
                new Date(a.StartTime).getTime() -
                new Date(b.StartTime).getTime()
            );
        });

        var durationMs =
            durationHours * 60 * 60 * 1000;

        if (resourceEvents.length === 0) {

            if (
                workingStart.getTime() + durationMs <=
                workingEnd.getTime()
            ) {

                return {
                    startTime: new Date(workingStart),
                    endTime: new Date(
                        workingStart.getTime() + durationMs
                    )
                };
            }

            return null;
        }

        var firstEventStart =
            new Date(resourceEvents[0].StartTime).getTime();

        if (
            workingStart.getTime() + durationMs <=
            firstEventStart
        ) {

            return {
                startTime: new Date(workingStart),
                endTime: new Date(
                    workingStart.getTime() + durationMs
                )
            };
        }

        for (var i = 0; i < resourceEvents.length - 1; i++) {

            var currentEnd =
                new Date(resourceEvents[i].EndTime).getTime();

            var nextStart =
                new Date(resourceEvents[i + 1].StartTime).getTime();

            if ((nextStart - currentEnd) >= durationMs) {

                return {
                    startTime: new Date(currentEnd),
                    endTime: new Date(
                        currentEnd + durationMs
                    )
                };
            }
        }

        var lastEnd =
            new Date(
                resourceEvents[
                    resourceEvents.length - 1
                ].EndTime
            ).getTime();

        if (
            lastEnd + durationMs <=
            workingEnd.getTime()
        ) {

            return {
                startTime: new Date(lastEnd),
                endTime: new Date(
                    lastEnd + durationMs
                )
            };
        }

        return null;
    }

    function handleAutoScheduling() {

        var tempScheduledEvents = [];

        var workloadMap = {};

        resourceData.forEach(function (resource) {

            workloadMap[resource.id] =
                getResourceWorkloadForDate(
                    resource.id,
                    scheduleObj.selectedDate
                );
        });

        var appointmentsToSchedule =
            gridData.filter(function (item) {

                var key =
                    item.Task +
                    '|' +
                    item.RequiredSkill;

                return !scheduledAppointments.has(key);
            });

        var allEvents =
            scheduleObj.getEvents() || [];

        var nextEventId =
            allEvents.length ?
                Math.max.apply(
                    null,
                    allEvents.map(function (e) {
                        return e.Id || 0;
                    })
                ) + 1 :
                1;

        appointmentsToSchedule.forEach(function (appt) {

            var matchingResources =
                resourceData.filter(function (resource) {

                    return resource.skills.indexOf(
                        appt.RequiredSkill
                    ) !== -1;
                });

            var durationHours =
                parseDuration(appt.Duration);

            var bestResource = null;
            var bestSlot = null;
            var bestWorkload = Infinity;

            matchingResources.forEach(function (resource) {

                var workload =
                    workloadMap[resource.id] || 0;

                if (
                    workload + durationHours >
                    MAX_DAILY_WORKLOAD
                ) {
                    return;
                }

                var slot =
                    findAvailableTimeSlotForResource(
                        resource.id,
                        durationHours,
                        scheduleObj.selectedDate,
                        tempScheduledEvents
                    );

                if (!slot) {
                    return;
                }

                if (workload < bestWorkload) {

                    bestResource = resource;
                    bestSlot = slot;
                    bestWorkload = workload;
                }
            });

            if (
                !bestResource ||
                !bestSlot
            ) {
                return;
            }

            var eventData = {
                Id: nextEventId++,
                Subject: appt.Task,
                StartTime: bestSlot.startTime,
                EndTime: bestSlot.endTime,
                IsAllDay: false,
                StaffId: bestResource.id,
                RequiredSkill: appt.RequiredSkill
            };

            scheduleObj.addEvent(eventData);

            tempScheduledEvents.push(eventData);

            workloadMap[bestResource.id] =
                bestWorkload + durationHours;

            scheduledAppointments.add(
                appt.Task +
                '|' +
                appt.RequiredSkill
            );
        });

        gridData = gridData.filter(function (item) {

            var key =
                item.Task +
                '|' +
                item.RequiredSkill;

            return !scheduledAppointments.has(key);
        });

        gridObj.dataSource = gridData;
        gridObj.dataBind();

        scheduleObj.refreshTemplates(
            'resourceHeaderTemplate'
        );
    }

    function resourceHeaderTemplate(props) {

        var workload =
            getResourceWorkloadForDate(
                props.resourceData.id,
                scheduleObj.selectedDate
            );

        return (
            '<div class="resource-header-container">' +

            '<div class="resource-header-avatar" ' +
            'style="background-color:' +
            props.resourceData.color +
            '">' +
            props.resourceData.text.charAt(0) +
            '</div>' +

            '<div class="resource-header-info">' +

            '<div class="resource-header-name">' +
            props.resourceData.text +
            '</div>' +

            '<div class="resource-header-skills">' +

            props.resourceData.skills.map(function (skill) {

                return (
                    '<span class="skill-badge">' +
                    skill +
                    '</span>'
                );
            }).join('') +

            '</div>' +
            '</div>' +

            '<div class="resource-header-workload">' +
            workload +
            '/8h</div>' +

            '</div>'
        );
    }

    function taskTemplate(props) {

        return (
            '<div class="task-template">' +

            '<div class="task-name">' +
            props.Task +
            '</div>' +

            '<div class="task-skill">' +
            props.RequiredSkill +
            '</div>' +

            '</div>'
        );
    }

    scheduleObj = new ej.schedule.Schedule({

        width: '100%',
        height: '100%',
        cssClass: 'grid-auto-scheduling',
        currentView: 'TimelineDay',
        selectedDate: new Date(),

        group: {
            resources: ['Staff']
        },

        views: [
            {
                option: 'TimelineDay'
            }
        ],

        resources: [
            {
                field: 'StaffId',
                title: 'Staff',
                name: 'Staff',
                allowMultiple: false,
                dataSource: resourceData,
                textField: 'text',
                idField: 'id',
                colorField: 'color',
                groupIDField: 'group'
            }
        ],

        eventSettings: {
            dataSource: getInitialEvents()
        },

        resourceHeaderTemplate:
            resourceHeaderTemplate,

        allowOverlap: false,
        allowResizing: false,

        dragStart: function (args) {

            draggedEventData = args.data;
        },

        dragStop: function (args) {

            if (
                !draggedEventData ||
                !args.data
            ) {
                return;
            }

            var targetResource =
                resourceData.find(function (r) {

                    return r.id === args.data.StaffId;
                });

            var requiredSkill =
                draggedEventData.RequiredSkill ||
                getEventSkill(draggedEventData);

            var startTime =
                new Date(args.data.StartTime);

            var endTime =
                new Date(args.data.EndTime);

            var durationHours =
                (endTime - startTime) / 3600000;

            if (
                targetResource &&
                targetResource.skills.indexOf(
                    requiredSkill
                ) === -1
            ) {

                args.data.StaffId =
                    draggedEventData.StaffId;
                args.data.StartTime =
                    draggedEventData.StartTime;
                args.data.EndTime =
                    draggedEventData.EndTime;

                scheduleObj.saveEvent(args.data);

                draggedEventData = null;
                scheduleObj.refreshTemplates(
                    'resourceHeaderTemplate'
                );

                return;
            }

            var workload =
                getResourceWorkloadForDate(
                    args.data.StaffId,
                    startTime,
                    args.data.Id
                );

            if (
                workload + durationHours >
                MAX_DAILY_WORKLOAD
            ) {

                args.data.StaffId =
                    draggedEventData.StaffId;
                args.data.StartTime =
                    draggedEventData.StartTime;
                args.data.EndTime =
                    draggedEventData.EndTime;

                scheduleObj.saveEvent(args.data);

                draggedEventData = null;
                scheduleObj.refreshTemplates(
                    'resourceHeaderTemplate'
                );

                return;
            }

            draggedEventData = null;

            scheduleObj.refreshTemplates(
                'resourceHeaderTemplate'
            );
        },

        actionBegin: function (args) {

            if (
                args.requestType !==
                'eventChange'
            ) {
                return;
            }

            var eventData = Array.isArray(args.data) ? args.data[0] : args.data;

            var start =
                new Date(eventData.StartTime);

            var end =
                new Date(eventData.EndTime);

            var duration =
                (end - start) / 3600000;

            var workload =
                getResourceWorkloadForDate(
                    eventData.StaffId,
                    start,
                    eventData.Id
                );

            if (
                workload + duration >
                MAX_DAILY_WORKLOAD
            ) {

                args.cancel = true;
            }
        },

        actionComplete: function (args) {

            if (args.requestType === 'toolBarItemRendered') {

                new ej.buttons.Button({
                    content: 'Auto Scheduling',
                    cssClass: 'e-primary'
                }).appendTo('#autoScheduleBtn');

                document
                    .getElementById('autoScheduleBtn')
                    .onclick = handleAutoScheduling;
            }
        },

        cellClick: function (args) {
            args.cancel = true;
        },

        popupOpen: function (args) {
            if (args.type === 'Editor') {
                args.cancel = true;
            }
        },

        dataBound: function (args) {
            scheduleObj.refreshTemplates('resourceHeaderTemplate');
        },

        toolbarItems: [
            { align: 'Left', name: 'Previous' },
            { align: 'Left', name: 'Next' },
            { align: 'Left', name: 'DateRangeText' },

            { align: 'Right', name: 'Today' },

            {
                name: 'Custom',
                type: 'Input',
                template: '<button id="autoScheduleBtn"></button>',
                align: 'Right'
            }
        ],
    });

    scheduleObj.appendTo('#Schedule');

    gridObj = new ej.grids.Grid({

        dataSource: gridData,
        cssClass: 'drag-grid-data',

        width: '300px',
        height: '100%',

        allowRowDragAndDrop: true,

        rowDropSettings: {
            targetID: 'Schedule'
        },

        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true
        },

        columns: [
            {
                field: 'Id',
                isPrimaryKey: true,
                visible: false
            },
            {
                field: 'Task',
                headerText: 'Task',
                width: 200,
                template: taskTemplate
            },
            {
                field: 'Duration',
                headerText: 'Duration',
                width: 110
            }
        ],
        rowDrag: function (args) {
            args.cancel = true;
        },
        rowDrop: function (args) {
            args.cancel = true;
            var scheduleElement = ej.base.closest(args.target, '.e-content-wrap');
            if (!scheduleElement || !args.target.classList.contains('e-work-cells')) {
                return;
            }

            var cellData = scheduleObj.getCellDetails(args.target) || scheduleObj.getCellDetails(scheduleElement);
            if (!cellData) return;
            var resourceDetails = scheduleObj.getResourcesByIndex(cellData.groupIndex);
            var durationHours = parseDuration(args.data[0].Duration);
            var requiredSkill = args.data[0].RequiredSkill;

            if (requiredSkill && resourceDetails.resourceData.skills.indexOf(requiredSkill) === -1) {
                return;
            }

            var startTime = new Date(cellData.startTime);
            var endTime = new Date(startTime.getTime() + durationHours * 3600000);
            var currentWorkload = getResourceWorkloadForDate(resourceDetails.resourceData.id, startTime);
            if (currentWorkload + durationHours > MAX_DAILY_WORKLOAD) {
                return;
            }

            if (!isTimeSlotAvailableForResource(resourceDetails.resourceData.id, startTime, endTime)) {
                return;
            }

            var newEventData = {
                Id: scheduleObj.getEventMaxID(),
                Subject: args.data[0].Task,
                StartTime: startTime,
                EndTime: endTime,
                IsAllDay: cellData.isAllDay,
                StaffId: resourceDetails.resourceData.id,
                RequiredSkill: requiredSkill
            };
            safeDeleteGridRecord(args.data[0]);
            gridObj.dataSource = gridData;
            gridObj.dataBind();

            scheduleObj.addEvent(newEventData);

            scheduleObj.refreshTemplates(
                'resourceHeaderTemplate'
            );
        }
    });

    gridObj.appendTo('#Grid');
};