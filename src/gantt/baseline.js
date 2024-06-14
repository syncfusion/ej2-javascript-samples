this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.baselineData,
        renderBaseline: true,
        taskFields: {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            baselineStartDate: 'BaselineStartDate',
            baselineEndDate: 'BaselineEndDate'
        },
        columns: [
            { field: 'TaskName', headerText: 'Service Name', width: '250', clipMode: 'EllipsisWithTooltip' },
            { field: 'BaselineStartDate', headerText: 'Planned start time' },
            { field: 'BaselineEndDate', headerText: 'Planned end time' },
            { field: 'StartDate', headerText: 'Start time' },
            { field: 'EndDate', headerText: 'End time' },
        ],
        treeColumnIndex: 1,
        allowSelection: true,
        includeWeekend: true,
        timelineSettings: {
            timelineUnitSize: 65,
            topTier: {
                unit: 'None',
            },
            bottomTier: {
                unit: 'Minutes',
                count: 15,
                format: 'hh:mm a'
            },
        },
        tooltipSettings: {
            taskbar: '#tooltip',
        },
        durationUnit: 'Minute',
        dateFormat: 'hh:mm a',
        height: '450px',
        dayWorkingTime: [{ from: 0, to: 24 }],
        projectStartDate: new Date('03/05/2024 09:30:00 AM'),
        projectEndDate: new Date('03/05/2024 07:00:00 PM')
    });
    ganttChart.appendTo('#Baseline');
};