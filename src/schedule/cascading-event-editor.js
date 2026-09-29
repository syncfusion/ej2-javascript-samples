this.default = function () {

    var floors = [
        { id: 1, name: 'Floor 1' },
        { id: 2, name: 'Floor 2' }
    ];

    var rooms = [
        { id: 101, name: 'Room 101', floorId: 1 },
        { id: 102, name: 'Room 102', floorId: 1 },
        { id: 201, name: 'Room 201', floorId: 2 },
        { id: 202, name: 'Room 202', floorId: 2 }
    ];

    var resources = [
        { id: 1, name: 'Projector', roomId: 101 },
        { id: 2, name: 'Whiteboard', roomId: 102 },
        { id: 3, name: 'Conference Kit', roomId: 201 }
    ];

    var typeOptions = ['Meeting', 'Appointment', 'Internal'];

    var staffData = [
        { id: 1, text: 'Mike Anderson', color: '#1aaa55', type: 'Consultants' },
        { id: 2, text: 'Kevin Larson', color: '#357cd2', type: 'Sales' },
        { id: 3, text: 'Sarah Johnson', color: '#f57f17', type: 'Sales' },
        { id: 4, text: 'David Miller', color: '#7fa900', type: 'Testers' },
        { id: 5, text: 'Emma Wilson', color: '#df5286', type: 'Testers' }
    ];

    var eventsData = [
        {
            Id: 1,
            Subject: 'Meeting',
            Type: 'Meeting',
            StartTime: new Date(2026, 4, 11, 9, 0, 0),
            EndTime: new Date(2026, 4, 11, 12, 0, 0),
            StaffId: 1,
            FloorId: 1,
            RoomId: 101
        },
        {
            Id: 2,
            Subject: 'Appointment',
            Type: 'Appointment',
            StartTime: new Date(2026, 4, 11, 13, 0, 0),
            EndTime: new Date(2026, 4, 11, 14, 0, 0),
            StaffId: 2
        },
        {
            Id: 3,
            Subject: 'Internal Review',
            Type: 'Internal',
            StartTime: new Date(2026, 4, 11, 10, 0, 0),
            EndTime: new Date(2026, 4, 11, 11, 0, 0),
            StaffId: 3
        },
        {
            Id: 4,
            Subject: 'Planning',
            Type: 'Meeting',
            StartTime: new Date(2026, 4, 11, 15, 0, 0),
            EndTime: new Date(2026, 4, 11, 17, 0, 0),
            StaffId: 4,
            FloorId: 1,
            RoomId: 101
        },
        {
            Id: 5,
            Subject: 'Discussion',
            Type: 'Meeting',
            StartTime: new Date(2026, 4, 11, 11, 0, 0),
            EndTime: new Date(2026, 4, 11, 12, 30, 0),
            StaffId: 5,
            FloorId: 2,
            RoomId: 201
        },
        {
            Id: 6,
            Subject: 'Morning Sync',
            Type: 'Meeting',
            StartTime: new Date(2026, 4, 11, 8, 0, 0),
            EndTime: new Date(2026, 4, 11, 9, 0, 0),
            StaffId: 1,
            FloorId: 1,
            RoomId: 101
        },
        {
            Id: 7,
            Subject: 'Follow-up Call',
            Type: 'Appointment',
            StartTime: new Date(2026, 4, 11, 12, 0, 0),
            EndTime: new Date(2026, 4, 11, 13, 0, 0),
            StaffId: 1
        },
        {
            Id: 8,
            Subject: 'Client Discussion',
            Type: 'Appointment',
            StartTime: new Date(2026, 4, 11, 10, 0, 0),
            EndTime: new Date(2026, 4, 11, 11, 0, 0),
            StaffId: 2
        },
        {
            Id: 9,
            Subject: 'Demo Presentation',
            Type: 'Meeting',
            StartTime: new Date(2026, 4, 11, 14, 0, 0),
            EndTime: new Date(2026, 4, 11, 15, 0, 0),
            StaffId: 2,
            FloorId: 1,
            RoomId: 102
        },
        {
            Id: 10,
            Subject: 'Code Refactoring',
            Type: 'Internal',
            StartTime: new Date(2026, 4, 11, 8, 30, 0),
            EndTime: new Date(2026, 4, 11, 9, 30, 0),
            StaffId: 3
        },
        {
            Id: 11,
            Subject: 'System Testing',
            Type: 'Internal',
            StartTime: new Date(2026, 4, 11, 11, 0, 0),
            EndTime: new Date(2026, 4, 11, 12, 0, 0),
            StaffId: 3
        },
        {
            Id: 12,
            Subject: 'Project Review',
            Type: 'Meeting',
            StartTime: new Date(2026, 4, 11, 13, 0, 0),
            EndTime: new Date(2026, 4, 11, 14, 0, 0),
            StaffId: 4,
            FloorId: 1,
            RoomId: 101
        },
        {
            Id: 13,
            Subject: 'Wrap-up Meeting',
            Type: 'Meeting',
            StartTime: new Date(2026, 4, 11, 17, 0, 0),
            EndTime: new Date(2026, 4, 11, 18, 0, 0),
            StaffId: 4,
            FloorId: 1,
            RoomId: 101
        },
        {
            Id: 14,
            Subject: 'Bug Fixing',
            Type: 'Internal',
            StartTime: new Date(2026, 4, 11, 9, 0, 0),
            EndTime: new Date(2026, 4, 11, 10, 30, 0),
            StaffId: 5
        },
        {
            Id: 15,
            Subject: 'QA Review',
            Type: 'Internal',
            StartTime: new Date(2026, 4, 11, 13, 0, 0),
            EndTime: new Date(2026, 4, 11, 14, 0, 0),
            StaffId: 5
        }
    ];

    function getTypeColor(type) {
        switch (type) {
            case 'Meeting': return '#22c55e';
            case 'Appointment': return '#3b82f6';
            case 'Internal': return '#f59e0b';
            default: return '#6b7280';
        }
    }

    function onPopupOpen(args) {
        if (args.type !== 'Editor') return;

        args.element.classList.add('cascading-editor-dialog');

        var data = args.data;

        var typeValue = data.Type || 'Meeting';
        var floorValue = data.FloorId || null;
        var roomValue = data.RoomId || null;

        function getField(name) {
            var fields = args.element.querySelectorAll('.e-field');
            for (var i = 0; i < fields.length; i++) {
                if (fields[i].name === name) return fields[i];
            }
            return null;
        }

        var typeEl = getField('Type');
        var floorEl = getField('FloorId');
        var roomEl = getField('RoomId');
        var staffEl = getField('StaffId');
        var startEl = getField('StartTime');
        var endEl = getField('EndTime');

        if (!typeEl) return;

        var typeObj = new ej.dropdowns.DropDownList({
            dataSource: typeOptions,
            value: typeValue,
            change: onTypeChange
        });
        typeObj.appendTo(typeEl);

        var floorObj = new ej.dropdowns.DropDownList({
            dataSource: floors,
            fields: { text: 'name', value: 'id' },
            value: floorValue,
            change: onFloorChange
        });
        floorObj.appendTo(floorEl);

        var roomObj = new ej.dropdowns.DropDownList({
            dataSource: [],
            fields: { text: 'name', value: 'id' },
            value: roomValue,
            change: onRoomChange
        });
        roomObj.appendTo(roomEl);

        new ej.dropdowns.DropDownList({
            dataSource: staffData,
            fields: { text: 'text', value: 'id' },
            value: data.StaffId || null
        }).appendTo(staffEl);

        new ej.calendars.DateTimePicker({
            value: data.StartTime
        }).appendTo(startEl);

        new ej.calendars.DateTimePicker({
            value: data.EndTime
        }).appendTo(endEl);
        toggleMeeting(typeValue === 'Meeting');

        if (typeValue === 'Meeting') {
            toggleMeeting(true);

            var filteredRooms;

            if (floorValue) {
                filteredRooms = rooms.filter(function (r) {
                    return r.floorId === floorValue;
                });
            } else {
                filteredRooms = [];
            }


            roomObj.dataSource = filteredRooms;
            roomObj.dataBind();
        } else {
            toggleMeeting(false);
        }

        function onTypeChange(e) {
            floorObj.value = null;
            roomObj.value = null;

            roomObj.dataSource = [];
            roomObj.dataBind();

            toggleMeeting(e.value === 'Meeting');
        }

        function onFloorChange(e) {
            var filtered = rooms.filter(function (r) {
                return r.floorId === e.value;
            });

            roomObj.dataSource = filtered;
            roomObj.dataBind();
            roomObj.value = null;
        }

        function onRoomChange(e) { }

        function toggleMeeting(show) {
            var rows = args.element.querySelectorAll('.meeting-field');
            rows.forEach(function (row) {
                row.style.display = show ? '' : 'none';
            });
        }
    }


    function onPopupClose(args) {
        if (args.type === 'Editor') {
            args.element.classList.remove('cascading-editor-dialog');
        }
    }

    function onEventRendered(args) {
        args.element.style.backgroundColor =
            getTypeColor(args.data.Type || 'Meeting');
    }

    var scheduleObj = new ej.schedule.Schedule({
        cssClass: 'custom-scheduler',
        height: '600px',
        selectedDate: new Date(2026, 4, 11),
        currentView: 'TimelineDay',
        group: { resources: ['Staff'] },
        eventSettings: { dataSource: eventsData },

        popupOpen: onPopupOpen,
        popupClose: onPopupClose,
        eventRendered: onEventRendered,

        resourceHeaderTemplate: function (props) {
            return '<div class="template-wrap">' +
                '<div style="display:flex;gap:8px;align-items:center;">' +
                '<div style="' +
                'width:32px;' +
                'height:32px;' +
                'border-radius:50%;' +
                'background:' + props.resourceData.color + ';' +
                'display:flex;' +
                'align-items:center;' +
                'justify-content:center;' +
                'color:#fff;">' +
                props.resourceData.text.charAt(0) +
                '</div>' +
                '<div>' + props.resourceData.text + '</div>' +
                '</div>' +
                '<div>' + props.resourceData.type + '</div>' +
                '</div>';
        },

        headerIndentTemplate: function () {
            return '<div class="template-wrap header-indent">' +
                '<div>Staff</div>' +
                '<div>Type</div>' +
                '</div>';
        },

        editorTemplate: function (props) {
            var template = document.getElementById('EditorTemplate').innerHTML;
            return template;
        },

        resources: [{
            field: 'StaffId',
            name: 'Staff',
            title: 'Staff',
            dataSource: staffData,
            textField: 'text',
            idField: 'id',
            colorField: 'color'
        }],

        views: ['TimelineDay']
    });

    scheduleObj.appendTo('#Schedule');
};
