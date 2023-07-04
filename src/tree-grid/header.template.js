this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.headerData,
        childMapping: 'subtasks',
        height: 350,
        treeColumnIndex: 0,
        allowPaging: true,
        columns: [
            { field: 'taskName', headerTemplate: '#projectName', width: 220 },
            { field: 'startDate', headerTemplate: '#dateTemplate', format: 'yMd', width: 120, textAlign: 'Center' },
            { field: 'resourceId', headerTemplate: '#resource', width: 120, textAlign: 'Center' },
            { field: 'duration', headerTemplate: '#durationTemplate', width: 110, textAlign: 'Center' },
            { field: 'progress', headerTemplate: '#progressTemplate', width: 150, textAlign: 'Center' }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};