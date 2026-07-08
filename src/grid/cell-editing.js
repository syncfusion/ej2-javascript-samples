this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.appointmentData,
        editSettings: {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            mode: 'Cell'
        },
        clipMode: 'EllipsisWithTooltip',
        allowPaging: true,
        toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'CheckBox' },
        height: 400,
        rowHeight: 40,
        actionBegin: actionBegin,
        actionComplete: function (args) {
            if (args.requestType === 'save' && args.columnName === 'Doctor') {
                var doctorRoomMap = {
                    'Dr. Smitha': 'R1',
                    'Dr. Johnson': 'R2',
                    'Dr. Garcia': 'R6',
                    'Dr. Brianna': 'R4',
                    'Dr. Williams': 'R3',
                    'Dr. Martinez': 'R7',
                    'Dr. Davis': 'R8',
                    'Dr. Joanna': 'R5'
                };
                grid.updateCell(
                    args.rowIndex,
                    'Room',
                    doctorRoomMap[args.data.Doctor]
                );
            }
        },
        columns: [
            {
                field: 'ApptID',
                headerText: 'Appointment ID',
                width: 140,
                isPrimaryKey: true,
                visible: false
            },
            {
                field: 'Patient',
                headerText: 'Patient',
                width: 150,
                validationRules: { required: true }
            },
            {
                field: 'Doctor',
                headerText: 'Doctor',
                width: 160,
                template: '#doctorTemplate',
                editType: 'dropdownedit',
                validationRules: { required: true }
            },
            {
                field: 'AppointmentTime',
                headerText: 'Appointment Time',
                editType: 'datetimepickeredit',
                width: 200,
                format: { type: 'dateTime', format: 'M/d/y hh:mm a' },
                validationRules: {
                    required: true,
                    timeRule: [
                        validateAppointmentTime,
                        'Appointment allowed only between 9AM - 9PM',
                    ],
                },
            },
            {
                field: 'Type',
                headerText: 'Type',
                width: 150,
                template: '#typeTemplate',
                editType: 'dropdownedit',
                validationRules: { required: true }
            },
            {
                field: 'Status',
                headerText: 'Status',
                width: 130,
                template: '#statusTemplate',
                editType: 'dropdownedit',
                validationRules: { required: true }
            },
            {
                field: 'Room',
                headerText: 'Room No',
                width: 120,
                editType: 'dropdownedit'
            },
            {
                field: 'Fee',
                headerText: 'Fee',
                textAlign: 'Right',
                width: 90,
                format: 'C2',
                editType: 'numericedit',
                edit: { params: { showSpinButton: false } },
                validationRules: {
                    required: true,
                    min: 50,
                    max: 500
                }
            },
            {
                field: 'Notes',
                headerText: 'Notes',
                width: 260
            }
        ]
    });
    grid.appendTo('#CellEdit');

    function actionBegin(args) {
        if (args.requestType === 'save' && args.action === 'add') {
            args.data.ApptID = 'APT-' + (Date.now() % 100000);
        }
    }

    function validateAppointmentTime(args) {
        if (!args.value) return false;
        var hour = new Date(args.value).getHours();
        return hour >= 9 && hour <= 20;
    }

    function doctorTemplate(e) {
        var div = document.createElement('div');
        div.className = 'doctor-cell';
        var img = document.createElement('img');
        var doctors = [
            'Dr. Smitha', 'Dr. Johnson', 'Dr. Garcia',
            'Dr. Brianna', 'Dr. Williams', 'Dr. Martinez',
            'Dr. Davis', 'Dr. Joanna'
        ];
        var index = doctors.indexOf(e.Doctor) + 1;
        img.src = 'src/grid/images/' + index + '.png';
        img.alt = e.Doctor;
        img.className = 'doctor-img';
        var span = document.createElement('span');
        span.textContent = e.Doctor;
        div.appendChild(img);
        div.appendChild(span);
        return div.outerHTML;
    }

    function statusTemplate(e) {
        var div = document.createElement('div');
        var span = document.createElement('span');
        span.className = 'badge';
        if (e.Status === 'Booked') {
            span.className += ' booked';
        } else if (e.Status === 'Canceled') {
            span.className += ' canceled';
        } else if (e.Status === 'Completed') {
            span.className += ' completed';
        } else {
            span.className += ' waiting';
        }
        span.textContent = e.Status;
        div.appendChild(span);
        return div.outerHTML;
    }

    function typeTemplate(e) {
        var div = document.createElement('div');
        var span = document.createElement('span');
        span.classList.add('type');
        if (e.Type === 'Emergency') {
            span.classList.add('emergency');
            span.textContent = e.Type;
        } else if (e.Type === 'Lab Test') {
            span.classList.add('lab');
            span.textContent = e.Type;
        } else if (e.Type === 'Follow-up') {
            span.classList.add('follow');
            span.textContent = e.Type;
        } else if (e.Type === 'Routine Check') {
            span.classList.add('routine');
            span.textContent = e.Type;
        } else {
            span.classList.add('consult');
            span.textContent = e.Type;
        }
        div.appendChild(span);
        return div.outerHTML;
    }

    window.doctorTemplate = doctorTemplate;
    window.statusTemplate = statusTemplate;
    window.typeTemplate = typeTemplate;
};