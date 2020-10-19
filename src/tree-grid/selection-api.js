this.default = function () {
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        height: 350,
        allowSelection: true,
        selectionSettings: { type: 'Multiple' },
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 80 },
            { field: 'taskName', headerText: 'Task Name', width: 200 },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 100, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
            { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 90 }
        ]
    });
    treegrid.appendTo('#TreeGrid');
    var start = new ej.inputs.NumericTextBox({
        format: '##',
        min: 0,
        max: 11
    });
    start.appendTo('#start');
    var to = new ej.inputs.NumericTextBox({
        min: 0,
        max: 11,
        format: '##'
    });
    to.appendTo('#to');
    var select = new ej.buttons.Button();
    select.appendTo('#select');
    var clear = new ej.buttons.Button();
    clear.appendTo('#clear');
    document.getElementById('select').onclick = function () {
        var startRow = start.value;
        var toRow = to.value;
        var rows = [];
        for (var i = startRow > toRow ? toRow : startRow; i <= (startRow > toRow ? startRow : toRow); i++) {
            rows.push(i);
        }
        treegrid.selectRows(rows);
    };
    document.getElementById('clear').onclick = function () {
        treegrid.clearSelection();
    };
};