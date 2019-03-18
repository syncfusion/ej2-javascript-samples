this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: customizedData,
        dateFormat: 'hh:mm a',
        taskFields: {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks',
            cssClass: 'cusClass',
        },
        columns: [
            { field: 'TaskId', headerText: 'Event Id' },
            { field: 'TaskName', headerText: 'Event Name', width: '250', clipMode: 'EllipsisWithTooltip' },
            { field: 'StartDate', headerText: 'Start Time' },
            { field: 'EndDate', headerText: 'End Time' },
            { field: 'Winner', headerText: 'Winner' },
            { field: 'Movie', headerText: 'Movie' },
            { field: 'column3', headerText: 'Moments / Performance Details' }
        ],
        treeColumnIndex: 1,
        rowHeight: 70,
        taskbarHeight: 65,
        dayWorkingTime: [{ from: 1, to: 24 }],
        durationUnit: 'Minute',
        timelineSettings: {
            timelineUnitSize: 60,
            topTier: {
                unit: 'Hour',
            },
            bottomTier: {
                unit: 'Minutes',
                count: 2,
                format: 'h:mm a'
            },
        },
        eventMarkers: [
            {
                day: new Date('03/05/2015 07:16:00 PM'),
                label: 'Performance'
            }, {
                day: new Date('03/05/2015 07:59:00 PM'),
                label: 'Moments'
            }, {
                day: new Date('03/05/2015 08:08:00 PM'),
                label: 'Performance'
            }, {
                day: new Date('03/05/2015 08:24:00 PM'),
                label: 'Moments'
            }, {
                day: new Date('03/05/2015 08:30:00 PM'),
                label: 'Moments'
            }, {
                day: new Date('03/05/2015 08:47:00 PM'),
                label: 'Performance'
            }, {
                day: new Date('03/05/2015 09:05:00 PM'),
                label: 'Moments'
            }
        ],
        height: '450px',
        taskbarTemplate: '#childtask',
        milestoneTemplate: '#milestone',
        labelSettings: {
            leftLabel: 'TaskName',
        },
        tooltipSettings: {
            taskbar: '#tooltip',
        },
        projectStartDate: new Date('03/05/2015 05:55 PM'),
        projectEndDate: new Date('03/06/2015'),
    });
    ganttChart.appendTo('#TaskbarTemplate');
};