this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        height: '410',
        autoCheckHierarchy: true,
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 60, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 150, textAlign: 'Left', showCheckbox: true },
            { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'endDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
            { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' },
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};