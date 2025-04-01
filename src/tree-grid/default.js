this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        height: 350,
        treeColumnIndex: 1,
        allowPaging: true,
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 80, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
            { field: 'startDate', headerText: 'Start Date', width: 110, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'endDate', headerText: 'End Date', width: 110, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'duration', headerText: 'Duration', width: 90, textAlign: 'Right' },
            { field: 'progress', headerText: 'Progress', width: 95, textAlign: 'Right' },
            { field: 'priority', headerText: 'Priority', width: 90 }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};