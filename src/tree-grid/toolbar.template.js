this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        toolbar: ['ExpandAll', 'CollapseAll', {text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'toolbarfilter'}],
        toolbarClick: function (args) {
            if (args.item.id === 'toolbarfilter') {
                treeGridObj.filterByColumn('taskName', 'startswith', 'Testing');
            }
        },
        allowFiltering: true,
        childMapping: 'subtasks',
        height: 400,
        treeColumnIndex: 1,
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
            { field: 'taskName', headerText: 'Task Name', width: 150 },
            { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', format: 'yMd' },
            { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
            { field: 'priority', headerText: 'Priority', width: 90 }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};