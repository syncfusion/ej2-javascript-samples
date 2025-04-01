this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        height: 350,
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        allowFiltering: true,
        filterSettings: { type: 'Menu' },
        allowSorting: true,
        showColumnMenu: true,
        treeColumnIndex: 1,
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 110, },
            { field: 'taskName', headerText: 'Task Name', width: 190 },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 135, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'approved', headerText: 'Approved', textAlign: 'Center', width: 140, type: 'boolean', displayAsCheckBox: true },
            { field: 'priority', headerText: 'Priority', textAlign: 'Left', width: 140 }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};
