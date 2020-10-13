this.default = function () {
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        height: 350,
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        allowResizing: true,
        treeColumnIndex: 1,
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
            { field: 'taskName', headerText: 'Task Name', width: 220, minWidth: 120, maxWidth: 300 },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 135, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'endDate', headerText: 'End Date', textAlign: 'Right', width: 135, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'duration', headerText: 'Duration', textAlign: 'Right', allowResizing: false, width: 90 },
            { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 95 },
            { field: 'priority', headerText: 'Priority', textAlign: 'Left', width: 120 },
        ]
    });
    treegrid.appendTo('#TreeGrid');
};