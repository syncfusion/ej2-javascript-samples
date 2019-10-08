this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,  
        height: 410,
        allowSelection: false,
        allowSorting: true,
        frozenColumns: 2,
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 100, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 260, textAlign: 'Left' },
            { field: 'startDate', headerText: 'Start Date', width: 230, textAlign: 'Right', type: 'date', format: { type: 'dateTime', format: 'dd/MM/yyyy' } },
            { field: 'endDate', headerText: 'End Date', width: 230, textAlign: 'Right', type: 'date', format: { type: 'dateTime', format: 'dd/MM/yyyy' } },
            { field: 'duration', headerText: 'Duration', width: 210, textAlign: 'Right' },
            { field: 'progress', headerText: 'Progress', width: 210, textAlign: 'Right' },
            { field: 'priority', headerText: 'Priority', width: 230 },
            { field: 'approved', headerText: 'Approved', width: 230, textAlign: 'Left' }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};
