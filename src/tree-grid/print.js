this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        height: 410,
        toolbar: ['Print'],
        load: function () {
            this.grid.cssClass = document.querySelector('.fluent2-highcontrast') ? 'e-print-fluent2-highcontrast' : '';
        },
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 100, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
            { field: 'startDate', headerText: 'Start Date', width: 125, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'endDate', headerText: 'End Date', width: 125, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'duration', headerText: 'Duration', width: 125, textAlign: 'Right' },
            { field: 'progress', headerText: 'Progress', width: 130, textAlign: 'Right' },
            { field: 'priority', headerText: 'Priority', width: 150 }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};