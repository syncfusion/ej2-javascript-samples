this.default = function () {
    var lines = [
        { id: 'Horizontal', type: 'Horizontal' },
        { id: 'Vertical', type: 'Vertical' },
        { id: 'Both', type: 'Both' },
        { id: 'None', type: 'None' }
    ];
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        allowPaging: true,
        gridLines: 'Vertical',
        pageSettings: { pageSize: 10 },
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
    var dropDownListObject = new ej.dropdowns.DropDownList({
        dataSource: lines,
        width: '135px',
        fields: { text: 'type', value: 'id' },
        value: 'Vertical',
        change: function (e) {
            var lines = e.value;
            treegrid.gridLines = lines;
            treegrid.refresh();
        },
    });
    dropDownListObject.appendTo('#ddlelement');
};
