this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.virtualData,
        treeColumnIndex: 1,
        height: '450px',
        allowSelection: true,
        highlightWeekends: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'parentID'
        },
        enableVirtualization: true,
        columns: [
            { field: 'TaskID' },
            { field: 'TaskName' },
            { field: 'StartDate' },
            { field: 'Duration' },
            { field: 'Progress' }
        ],
        labelSettings: {
            taskLabel: 'Progress'
        },
        gridLines: 'Both',
        splitterSettings: {
            columnIndex: 2
        },
    });
    ganttChart.appendTo('#VirtualScroll');
};