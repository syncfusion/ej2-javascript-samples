this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.workTimeRange,
        height: '450px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        },
        columns: [
            { field: 'TaskName',headerText: 'Name', width: 270 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' },
        ],
        timelineSettings: {
            topTier: {
                unit: 'Day',
            },
            bottomTier: {
                unit: 'Hour',
            }
        },
        durationUnit: 'hour',
        labelSettings: {
            leftLabel: 'TaskName'
        },
        projectStartDate: new Date('04/02/2024'),
        projectEndDate: new Date('04/28/2024')
    });
    ganttChart.appendTo('#WorkTimeRange');
    var workDays = [
        { id: 'Monday', day: 'Monday' },
        { id: 'Tuesday', day: 'Tuesday' },
        { id: 'Wednesday', day: 'Wednesday' },
        { id: 'Thursday', day: 'Thursday' },
        { id: 'Friday', day: 'Friday' },
    ];
    var workStartTime = new ej.inputs.NumericTextBox({
        min: 0,
        max: 24,
        value: 8,
        showSpinButton: true,
        change: function (args) {
            var startTime = document.getElementById('WorkStartTime').ej2_instances[0].value;
            var endTime = document.getElementById('WorkEndTime').ej2_instances[0].value;
            if (startTime >= endTime) {
                if (startTime < 24) {
                    document.getElementById('WorkEndTime').ej2_instances[0].value = startTime + 1.00;
                }
                else {
                    document.getElementById('WorkEndTime').ej2_instances[0].value = 0.00;
                }
            }
        },
        step: 0.5
    });
    workStartTime.appendTo('#WorkStartTime');

    var workEndTime = new ej.inputs.NumericTextBox({
        min: 0,
        max: 24,
        value: 17,
        showSpinButton: true,
        change: function (args) {
            var startTime = document.getElementById('WorkStartTime').ej2_instances[0].value;
            var endTime = document.getElementById('WorkEndTime').ej2_instances[0].value;
            if (startTime >= endTime) {
                if (startTime < 24) {
                   document.getElementById('WorkEndTime').ej2_instances[0].value = startTime + 1.00;
                }
                else {
                    document.getElementById('WorkEndTime').ej2_instances[0].value = 0.00;
                }
            }
        },
        step: 0.5
    });
    workEndTime.appendTo('#WorkEndTime');

    var checkList1 = new ej.dropdowns.DropDownList ({
        dataSource: workDays,
        value: 'Monday',
        width:'100%',
        select: function (args) {
            var startTime = 8;
            var endTime = 17;
            for(var i=0;i<ganttChart.weekWorkingTime.length;i++) {
                if(ganttChart.weekWorkingTime[i].dayOfWeek === args.item.innerText) {
                    startTime = ganttChart.weekWorkingTime[i].timeRange[0].from;
                    endTime = ganttChart.weekWorkingTime[i].timeRange[0].to;
                    break;
                }
            }
            document.getElementById('WorkStart').ej2_instances[0].value = startTime;
            document.getElementById('WorkEnd').ej2_instances[0].value = endTime;
        },
        fields: { text: 'day', value: 'id' },
        popupHeight: '300px'
    });
    checkList1.appendTo('#Days');
    var workStartTime1 = new ej.inputs.NumericTextBox({
        min: 0,
        max: 24,
        value: 8,
        showSpinButton: true,
        change: function (args) {
            var startTime = document.getElementById('WorkStart').ej2_instances[0].value;
            var endTime = document.getElementById('WorkEnd').ej2_instances[0].value;
            if (startTime >= endTime) {
                if (startTime < 24) {
                   document.getElementById('WorkEnd').ej2_instances[0].value = startTime + 1.00;
                }
                else {
                    document.getElementById('WorkEnd').ej2_instances[0].value = 0.00;
                }
            }
        },
        step: 0.5
    });
    workStartTime1.appendTo('#WorkStart');

    var workEndTime1  = new ej.inputs.NumericTextBox({
        min: 0,
        max: 24,
        value: 17,
        showSpinButton: true,
        change: function (args) {
            var startTime = document.getElementById('WorkStart').ej2_instances[0].value;
            var endTime = document.getElementById('WorkEnd').ej2_instances[0].value;
            if (startTime >= endTime) {
                if (startTime < 24) {
                  document.getElementById('WorkEnd').ej2_instances[0].value = startTime + 1.00;
                }
                else {
                    document.getElementById('WorkEnd').ej2_instances[0].value = 0.00;
                }
            }
        },
        step: 0.5
    });
    workEndTime1.appendTo('#WorkEnd');
    var perform = new ej.buttons.Button();
    perform.appendTo('#perform');

    document.getElementById('perform').onclick = function () {
        var selectedDay = document.getElementById('Days').ej2_instances[0].value;
        var startTime = document.getElementById('WorkStart').ej2_instances[0].value;
        var endTime = document.getElementById('WorkEnd').ej2_instances[0].value;
        var workingTime = [];
        var weekWorkingTime = ganttChart.weekWorkingTime;
        var isUpdated = false;
        for (var j = 0; j < weekWorkingTime.length; j++) {
            workingTime.push({ dayOfWeek: weekWorkingTime[j].dayOfWeek, timeRange: weekWorkingTime[j].timeRange });
        }
        for (var i = 0; i < workingTime.length; i++) {
            if (workingTime[i].dayOfWeek === selectedDay) {
                workingTime[i].dayOfWeek = workingTime[i].dayOfWeek;
                workingTime[i].timeRange = [{ from: startTime, to: endTime }];
                isUpdated = true;
                break;
            }
        }
        if (!isUpdated) {
            workingTime.push({ dayOfWeek: selectedDay, timeRange: [{ from: startTime, to: endTime }] });
        }
        ganttChart.weekWorkingTime = workingTime;
    };
    var update = new ej.buttons.Button();
    update.appendTo('#update');

    document.getElementById('update').onclick = function () {
        var startTime = document.getElementById('WorkStartTime').ej2_instances[0].value;
        var endTime = document.getElementById('WorkEndTime').ej2_instances[0].value;
        var workingTime = [{ from: startTime, to: endTime }];
        ganttChart.dayWorkingTime = workingTime;
    };
};
