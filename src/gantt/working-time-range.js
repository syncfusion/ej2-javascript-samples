this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: workTimeRange,
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
        projectStartDate: new Date('04/02/2019'),
        projectEndDate: new Date('04/28/2019')
    });
    ganttChart.appendTo('#WorkTimeRange');

    var workStartTime = new ej.inputs.NumericTextBox({
        min: 0,
        max: 24,
        value: 8,
        change: updateTime,
        showSpinButton: true,
        step: 0.5
    });
    workStartTime.appendTo('#WorkStartTime');

    var workEndTime = new ej.inputs.NumericTextBox({
        min: 0,
        max: 24,
        value: 17,
        change: updateTime,
        showSpinButton: true,
        step: 0.5
    });
    workEndTime.appendTo('#WorkEndTime');


    var isTimeUpdated = false;
    function updateTime() {
        var defaultDate = "08/08/2016", startDate = new Date(defaultDate), endDate = new Date(defaultDate);
        var decPlace =  workStartTime.value - Math.floor(workStartTime.value);
        startDate.setHours(workStartTime.value);
        startDate.setMinutes(decPlace * 60);
        decPlace = workEndTime.value - Math.floor(workEndTime.value);
        endDate.setHours(workEndTime.value);
        endDate.setMinutes(decPlace * 60);
       
        /*Validate time value and update the time range*/
        if (startDate.getTime() < endDate.getTime() && isTimeUpdated == false) {
            var workingTime = [{ from: workStartTime.value, to: workEndTime.value }];
            ganttChart.dayWorkingTime = workingTime;
            isTimeUpdated = false;
        }
        else {
            isTimeUpdated = true;
            workStartTime.value = ganttChart.dayWorkingTime[0].from;
            workEndTime.value = ganttChart.dayWorkingTime[ganttChart.dayWorkingTime.length - 1].to;
        }
        isTimeUpdated = false;
    }
};