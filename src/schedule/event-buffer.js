this.default = function () {
    var roomData = [
        {
            RoomId: 1,
            RoomText: 'Cardiac Surgery Suite',
            Specialty: 'Cardiology',
            RoomColor: '#ef4444',
            Icon: '❤',
        },
        {
            RoomId: 2,
            RoomText: 'Orthopedic Center',
            Specialty: 'Orthopedics',
            RoomColor: '#2563eb',
            Icon: '🦴',
        },
        {
            RoomId: 3,
            RoomText: 'Neuroscience Unit',
            Specialty: 'Neurology',
            RoomColor: '#8b5cf6',
            Icon: '🧠',
        },
        {
            RoomId: 4,
            RoomText: 'Pediatric Care Suite',
            Specialty: 'Pediatrics',
            RoomColor: '#10b981',
            Icon: '👶',
        },
        {
            RoomId: 5,
            RoomText: 'Emergency Trauma Bay',
            Specialty: 'Emergency',
            RoomColor: '#f97316',
            Icon: '🚑',
        },
        {
            RoomId: 6,
            RoomText: 'Diagnostic Imaging Center',
            Specialty: 'Radiology',
            RoomColor: '#0ea5e9',
            Icon: '🔬',
        },
    ];

    var subjects = {
        Cardiology: [
            'Cardiac Workup',
            'Heart Valve Assessment',
            'Stress Test',
            'ECG Review',
        ],
        Orthopedics: [
            'Knee Replacement',
            'Bone Fracture Assessment',
            'Spinal Workup',
        ],
        Neurology: ['Neurology Workup', 'Brain MRI Review'],
        Pediatrics: ['Child Wellness Review', 'Immunization Follow-up'],
        Emergency: ['Emergency Care', 'Acute Care', 'Trauma Care', 'Critical Care'],
        Radiology: ['CT Scan Analysis', 'MRI Scan Review'],
    };

    function generateEvents(date) {
        var events = [];
        var id = date.getDate() * 100;

        roomData.forEach(function (room) {
            var roomSubjects = subjects[room.Specialty] || ['Procedure'];

            var startPatterns = [
                { hour: 9, minute: 0 },
                { hour: 9, minute: 15 },
                { hour: 9, minute: 30 },
                { hour: 9, minute: 45 },
            ];

            var secondPatterns = [
                { hour: 11, minute: 0 },
                { hour: 11, minute: 15 },
                { hour: 11, minute: 30 },
                { hour: 11, minute: 45 },
            ];

            var pattern1 =
                startPatterns[Math.floor(Math.random() * startPatterns.length)];

            var pattern2 =
                secondPatterns[Math.floor(Math.random() * secondPatterns.length)];

            function createEvent(startHour, startMinute) {
                var duration = [75, 90][Math.floor(Math.random() * 2)];

                var bufferBefore = [30, 45, 60][Math.floor(Math.random() * 3)];

                var bufferAfter = [30, 45, 60][Math.floor(Math.random() * 3)];

                var subject =
                    roomSubjects[Math.floor(Math.random() * roomSubjects.length)];

                var startTime = new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate(),
                    startHour,
                    startMinute
                );

                var endTime = new Date(startTime.getTime() + duration * 60000);

                return {
                    Id: id++,
                    Subject: subject,
                    StartTime: startTime,
                    EndTime: endTime,
                    IsAllDay: false,
                    RoomId: room.RoomId,
                    RequiredSkill: room.Specialty,
                    bufferBefore: bufferBefore,
                    bufferAfter: bufferAfter,
                };
            }

            events.push(createEvent(pattern1.hour, pattern1.minute));

            events.push(createEvent(pattern2.hour, pattern2.minute));
        });

        return events;
    }

    function generateAllEvents(selectedDate) {
        var previousDate = new Date(selectedDate);
        previousDate.setDate(previousDate.getDate() - 1);

        var nextDate = new Date(selectedDate);
        nextDate.setDate(nextDate.getDate() + 1);

        return []
            .concat(generateEvents(previousDate))
            .concat(generateEvents(selectedDate))
            .concat(generateEvents(nextDate));
    }

    var surgeryData = generateAllEvents(new Date());

    var dialogObj = new ej.popups.Dialog({
        visible: false,
        isModal: true,
        width: '320px',
        header: 'Alert',
        showCloseIcon: true,
        content:
            'Events cannot be scheduled in this operating room because it does not match the required specialty.',
        buttons: [
            {
                buttonModel: {
                    content: 'Ok',
                    isPrimary: true,
                },
                click: function () {
                    dialogObj.hide();
                },
            },
        ],
    });

    dialogObj.appendTo('#alertDialog');

    var scheduleObj = new ej.schedule.Schedule({
        cssClass: 'medical-scheduler',

        width: '100%',
        height: '650px',

        selectedDate: new Date(),

        currentView: 'TimelineDay',

        startHour: '08:00',

        allowOverlap: false,

        workHours: {
            start: '08:00',
            end: '18:00',
        },

        group: {
            resources: ['Rooms'],
        },

        views: ['Day', 'TimelineDay', 'TimelineWeek'],

        resourceHeaderTemplate: '#resourceTemplate',

        headerIndentTemplate: getHeaderIndentTemplate,

        resources: [
            {
                field: 'RoomId',
                title: 'Operating Room',
                name: 'Rooms',
                dataSource: roomData,
                textField: 'RoomText',
                idField: 'RoomId',
                colorField: 'RoomColor',
            },
        ],

        timeScale: {
            enable: true,
            interval: 60,
            slotCount: 4,
        },

        dragStop: onDragStop,

        actionBegin: onActionBegin,

        eventSettings: {
            dataSource: surgeryData,

            enableBuffer: true,

            bufferTemplate: '#bufferTemplate',

            fields: {
                bufferBefore: {
                    name: 'bufferBefore',
                },
                bufferAfter: {
                    name: 'bufferAfter',
                },
            },
        },
    });

    function onDragStop(args) {
        var data = Array.isArray(args.data) ? args.data[0] : args.data;

        var room = roomData.filter(function (r) {
            return r.RoomId === data.RoomId;
        })[0];

        if (!room) {
            return;
        }

        if (room.Specialty !== data.RequiredSkill) {
            args.cancel = true;

            dialogObj.setProperties({
                enableRtl: scheduleObj.element.classList.contains('e-rtl'),
            });

            dialogObj.show();
        }
    }

    function onActionBegin(args) {
        if (args.requestType === 'eventCreate') {
            var records = args.data;

            records.forEach(function (event) {
                var room = roomData.filter(function (r) {
                    return r.RoomId === event.RoomId;
                })[0];

                if (room) {
                    event.RequiredSkill = room.Specialty;
                }
            });
        }
    }

    function getHeaderIndentTemplate() {
        if (scheduleObj && scheduleObj.currentView === 'Day') {
            return '';
        }

        return (
            '<div class="resource-header-title">' +
            '<div class="resource-header-main">Operating Rooms</div>' +
            '<div class="resource-header-sub">Surgery Suites</div>' +
            '</div>'
        );
    }


    window.getBufferTemplate = function (args) {
        var isBefore = args.bufferType === 'before';

        var duration = isBefore ? args.data.bufferBefore
            : args.data.bufferAfter;

        var iconSrc = isBefore ? 'https://ej2.syncfusion.com/demos/src/schedule/images/health-day.svg'
            : 'https://ej2.syncfusion.com/demos/src/schedule/images/cancer-day.svg';

        // duration < 10 -> hide
        if (duration < 10) {
            return '';
        }

        var isDayView = scheduleObj.currentView === 'Day';

        if (isDayView) {

            // 10 < duration <= 15 -> text only
            if (duration <= 15) {
                return (
                    '<div class="buffer-minimal">' +
                    '<span class="buffer-duration">' +
                    duration + ' min' +
                    '</span>' +
                    '</div>'
                );
            }

            // duration > 15 -> image + text
            return (
                '<div class="buffer-minimal">' +
                '<img src="' + iconSrc + '" class="buffer-icon" />' +
                '<span class="buffer-duration">' +
                duration + ' min' +
                '</span>' +
                '</div>'
            );
        }

        // TimelineDay / TimelineWeek

        // 10 < duration <= 20 -> image only
        if (duration <= 20) {
            return (
                '<div class="buffer-minimal">' +
                '<img src="' + iconSrc + '" class="buffer-icon" />' +
                '</div>'
            );
        }

        // duration > 20 -> image + text
        return (
            '<div class="buffer-minimal">' +
            '<img src="' + iconSrc + '" class="buffer-icon" />' +
            '<span class="buffer-duration">' +
            duration + ' min' +
            '</span>' +
            '</div>'
        );
    };
    scheduleObj.appendTo('#scheduler');
};