this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        height: 350,
        treeColumnIndex: 1,
        allowPaging: true,
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
            { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'endDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
            { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' },
            { field: 'priority', headerText: 'Priority', width: 90 }
        ],
        pageSettings: { pageSize: 10, pageCount: 2, pageSizes: true }
    });
    treeGridObj.appendTo('#TreeGrid');
};