this.default = function () {
    var type = [
        { id: 'Single', type: 'Single' },
        { id: 'Multiple', type: 'Multiple' }
    ];
    var mode = [
        { id: 'Row', mode: 'Row' },
        { id: 'Cell', mode: 'Cell' },
    ];
    var cellmode = [
        { id: 'Flow', mode: 'Flow' },
        { id: 'Box', mode: 'Box' }
    ];
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        allowSelection: true,
        selectionSettings: { type: 'Multiple' },
        childMapping: 'subtasks',
        height: 350,
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
    var dropDownType = new ej.dropdowns.DropDownList({
        dataSource: type,
        fields: { text: 'type', value: 'id' },
        width: '115px',
        value: 'Multiple',
        change: function (e) {
            var type = e.value;
            var mode = dropDownMode.value;
            treegrid.selectionSettings.type = type;
            if (type === 'Multiple' && mode === 'Cell') {
                document.getElementById('cellselection').style.display = 'table-row';
            }
            else {
                document.getElementById('cellselection').style.display = 'none';
            }
        }
    });
    dropDownType.appendTo('#type');
    var dropDownMode = new ej.dropdowns.DropDownList({
        dataSource: mode,
        fields: { text: 'mode', value: 'id' },
        width: '115px',
        value: 'Row',
        change: function (e) {
            var mode = e.value;
            var type = dropDownType.value;
            treegrid.selectionSettings.mode = mode;
            if (type === 'Multiple' && mode === 'Cell') {
                document.getElementById('cellselection').style.display = 'table-row';
            }
            else {
                document.getElementById('cellselection').style.display = 'none';
            }
        }
    });
    dropDownMode.appendTo('#mode');
    var dropDownCellMode = new ej.dropdowns.DropDownList({
        dataSource: cellmode,
        width: '115px',
        fields: { text: 'mode', value: 'id' },
        value: 'Flow',
        change: function (e) {
            var cellmode = e.value;
            treegrid.selectionSettings.cellSelectionMode = cellmode;
        }
    });
    dropDownCellMode.appendTo('#cellmode');
};