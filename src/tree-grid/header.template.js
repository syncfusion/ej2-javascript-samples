this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.headerData,
        childMapping: 'subtasks',
        height: 350,
        treeColumnIndex: 0,
        allowPaging: true,
        columns: [
            { field: 'taskName', headerTemplate: '#projectName', width: 220 },
            { field: 'startDate', headerTemplate: '#dateTemplate', format: 'yMd', textAlign: 'Center' },
            { field: 'resourceId', headerTemplate: '#resource', textAlign: 'Center' },
            { field: 'duration', headerTemplate: '#durationTemplate', textAlign: 'Center' },
            { field: 'progress', headerTemplate: '#progressTemplate', textAlign: 'Center' }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};