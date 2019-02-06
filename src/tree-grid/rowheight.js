this.default = function () {
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        toolbar: [
            { prefixIcon: 'e-big-icon', id: 'small', align: 'Left', tooltipText: 'Small' },
            { prefixIcon: 'e-medium-icon', id: 'medium', align: 'Left', tooltipText: 'Medium' },
            { prefixIcon: 'e-small-icon', id: 'big', align: 'Left', tooltipText: 'Large' }
        ],
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
            { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'endDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
            { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' },
            { field: 'priority', headerText: 'Priority', width: 90 }
        ],
        height: 350,
        rowHeight: 20,
        toolbarClick: function (args) {
            if (args.item.id === 'small') {
                treegrid.rowHeight = 20;
            }
            if (args.item.id === 'medium') {
                treegrid.rowHeight = 40;
            }
            if (args.item.id === 'big') {
                treegrid.rowHeight = 60;
            }
        }
    });
    treegrid.appendTo('#TreeGrid');
};