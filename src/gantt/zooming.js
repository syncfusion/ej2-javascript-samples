this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.zoomingData,
        height: '450px',
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
            position: "35%"
        }
    });
    ganttChart.appendTo('#Zooming');
};
