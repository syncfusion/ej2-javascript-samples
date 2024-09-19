this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.textWrapData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        allowPaging: true,
        allowTextWrap: true,
	height: 350,
        pageSettings: { pageSize : 8},
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'TaskName', width: 94 },
            { field: 'startDate', headerText: 'Start Date', format: 'yMd', textAlign: 'Right', width: 90},
            { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
            { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 90 },
            { field: 'priority', headerText: 'Priority', width: 90 },
        ],
    });
    treeGridObj.appendTo('#TreeGrid');
};
