this.default = function () {

    var calendarSettings = {
        projectCalendar: {
            workingTime: [
                { from: 8, to: 12 },
                { from: 13, to: 17 }
            ],
            holidays: [
                {
                    from: '07/06/2026',
                    to: '07/06/2026',
                    label: 'Company Foundation Day'
                }
            ],
            exceptions: [
                {
                    from: '07/05/2026',
                    to: '07/05/2026',
                    label: 'Extended Work Day'
                }
            ]
        },
        taskCalendars: [
            {
                calendarId: 'Steering-committee',
                holidays: [
                    {
                        from: '07/07/2026',
                        to: '07/07/2026',
                        label: 'SC Strategy Day'
                    },
                    {
                        from: '07/22/2026',
                        to: '07/22/2026',
                        label: 'Board Offsite'
                    }
                ],
                exceptions: [
                    {
                        from: '07/05/2026',
                        to: '07/05/2026',
                        label: 'Compensatory Working'
                    },
                    {
                        from: '07/19/2026',
                        to: '07/19/2026',
                        label: 'Compensatory Working'
                    }
                ]
            },
            {
                calendarId: 'Tech-review',
                holidays: [
                    {
                        from: '07/16/2026',
                        to: '07/17/2026',
                        label: 'Architecture Review Freeze'
                    }
                ],
                exceptions: [
                    {
                        from: '07/26/2026',
                        to: '07/26/2026',
                        label: 'Extra Review Slot'
                    }
                ]
            },
            {
                calendarId: 'Compliance-audit',
                holidays: [
                    {
                        from: '07/09/2026',
                        to: '07/10/2026',
                        label: 'Compliance Blackout'
                    }
                ],
                exceptions: [
                    {
                        from: '07/25/2026',
                        to: '07/25/2026',
                        label: 'Mandatory Audit Working Day'
                    }
                ]
            }
        ]
    };

    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.ploMeetingsData,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks',
            calendarId: 'calendar'
        },
        height: '550px',
        rowHeight: 46,
        taskbarHeight: 25,
        allowSorting: true,
        allowSelection: true,
        highlightWeekends: true,
        gridLines: 'Both',
        showColumnMenu: false,
        treeColumnIndex: 1,
        projectStartDate: new Date('07/01/2026'),
        projectEndDate: new Date('08/31/2026'),
        calendarSettings: calendarSettings,
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search', 'PrevTimeSpan', 'NextTimeSpan'],
        splitterSettings: {
            columnIndex: 3
        },
        labelSettings: {
            rightLabel: 'TaskName',
            taskLabel: 'Progress'
        },
        timelineSettings: {
            topTier: {
                unit: 'Week',
                format: 'MM/dd/yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            }
        },
        columns: [
            {
                field: 'TaskID',
                visible: false,
                width: 90
            },
            {
                field: 'TaskName',
                headerText: 'Task Name',
                width: 200
            },
            {
                field: 'calendar',
                headerText: 'Calendar Profile',
                width: 150
            },
            {
                field: 'Duration',
                width: 90
            },
            {
                field: 'Predecessor',
                headerText: 'Dependency',
                width: 120
            },
            {
                field: 'StartDate',
                headerText: 'Start Date',
                width: 100
            },
            {
                field: 'Progress',
                width: 90
            }
        ],
        created: function () {
            if (document.querySelector('.e-bigger')) {
                this.rowHeight = 48;
                this.taskbarHeight = 28;
            }
        }
    });
    ganttChart.appendTo('#TaskCalendarGantt');

    var warningElement = document.getElementById('hoursWarning');

    function validateHours(value) {
        value = Number(value);
        if (isNaN(value) || value < 1 || value > 24) {
            warningElement.innerHTML =
                'Hours per day value must be greater than 1 and less than 24.';
            return false;
        }
        warningElement.innerHTML = '';
        return true;
    }

    var hoursInput = new ej.inputs.NumericTextBox({
        value: 8,
        format: 'n',
        width: '120px',
        change: function (args) {
            validateHours(args.value);
        }
    });
    hoursInput.appendTo('#hoursInput');
    hoursInput.element.addEventListener('input', function () {
        validateHours(hoursInput.value);
    });

    var updateButton = new ej.buttons.Button({
        cssClass: 'e-primary'
    });
    updateButton.appendTo('#updateHoursBtn');

    document.getElementById('updateHoursBtn').addEventListener('click', function () {
        var value = Number(hoursInput.value);
        if (!validateHours(value)) {
            return;
        }
        ganttChart.hoursPerDay = value;
    });
};