this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.headerData,
        childMapping: 'subtasks',
        treeColumnIndex: 0,
        allowPaging: true,
        columns: [
            { field: 'taskName', headerTemplate: '#projectName', width: 220 },
            { field: 'startDate', headerTemplate: '#dateTemplate', format: 'yMd', textAlign: 'Right' },
            { field: 'resourceId', headerTemplate: '#resource', textAlign: 'Right' },
            { field: 'duration', headerTemplate: '#durationTemplate', textAlign: 'Right' },
            { field: 'progress', headerTemplate: '#progressTemplate', textAlign: 'Right' }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};