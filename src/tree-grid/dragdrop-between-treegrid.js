this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.dragData1,
        treeColumnIndex: 1,
        allowPaging: true,
        pageSettings: { pageCount: 2 },
        childMapping: 'subtasks',
        allowRowDragAndDrop: true,
        rowDropSettings: { targetID: 'destTree' },
        selectionSettings: { type: 'Multiple' },
        columns: [
                { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 190 },
                {
                    field: 'startDate', headerText: 'Start Date', width: 100, textAlign: 'Right', type: 'date',format: 'yMd'
                },
                { field: 'duration', headerText: 'Duration', width: 95, textAlign: 'Right' }
        ]
    });
    
    treeGridObj.appendTo('#TreeGrid');
    
    var destTree = new ej.treegrid.TreeGrid({
        dataSource: [],
        treeColumnIndex: 1,
        allowPaging: true,
        pageSettings: { pageCount: 2 },
        childMapping: 'subtasks',
        allowRowDragAndDrop: true,
        rowDropSettings: { targetID: 'TreeGrid' },
        selectionSettings: { type: 'Multiple' },
        columns: [
                { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 190 },
                {
                    field: 'startDate', headerText: 'Start Date', width: 100, textAlign: 'Right', type: 'date',format: 'yMd'
                },
                { field: 'duration', headerText: 'Duration', width: 95, textAlign: 'Right' }
        ]
    });
    destTree.appendTo('#destTree');
};
