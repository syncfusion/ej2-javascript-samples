this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
        allowSelection: true,
        highlightWeekends: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentId'
        },
        timelineSettings: {
            topTier: {
                unit: 'Week',
                format: 'EEE MMM dd'
            },
            bottomTier: {
                unit: 'Day',
                format: ''
            }
        },
        treeColumnIndex: 1,
        columns: [
            { field: 'TaskID', width: 80 },
            { field: 'TaskName',headerText: 'Name', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' },
        ],
        eventMarkers: [
            {
                day: new Date('04/07/2025'),
                label: 'Research phase'               
            }, {
                day: new Date('04/17/2025'),
                label: 'Design phase'
            }, {
                day: new Date('05/23/2025'),
                label: 'Production phase'
            }, {
                day: new Date('06/27/2025'),
                label: 'Sales and marketing phase'
            }
        ],
        labelSettings: {
            leftLabel: 'TaskName'
        },
        projectStartDate: new Date('03/23/2025'),
        projectEndDate: new Date('07/20/2025')
     });
    ganttChart.appendTo('#EventMarkers');
};