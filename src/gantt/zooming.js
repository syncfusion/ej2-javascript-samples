this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.zoomingData,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
        highlightWeekends: true,
        treeColumnIndex: 1,
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
            { field: 'TaskID', width: 80 },
            { field: 'TaskName', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' },
        ],
        toolbar: ['ZoomIn', 'ZoomOut', 'ZoomToFit'],
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 3
        },
        projectStartDate: new Date('03/26/2025'),
        projectEndDate: new Date('06/01/2025'),
    });
    ganttChart.appendTo('#Zooming');
};
