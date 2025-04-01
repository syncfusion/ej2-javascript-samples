this.default = function () {
    var columnNames = [
        { id: 'taskID', name: 'Task ID' },
        { id: 'startDate', name: 'Start Date' },
        { id: 'duration', name: 'Duration' },
        { id: 'progress', name: 'Progress' }

    ];
    var alignment = [
        { id: 'Right', name: 'Right' },
        { id: 'Left', name: 'Left' },
        { id: 'Center', name: 'Center' },
        { id: 'Justify', name: 'Justify' }
    ];
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        height: 350,
        allowPaging: true,
        pageSettings: { pageSize: 10 },
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
    treeGridObj.appendTo('#TreeGrid');
    var dropDownColumn = new ej.dropdowns.DropDownList({
        dataSource: columnNames,
        width: '130px',
        fields: { text: 'name', value: 'id' },
        value: 'taskID',
        change: function (e) {
            var columnName = e.value;
            var alignment = treeGridObj.getColumnByField(columnName).textAlign;
            dropDownAlign.value = alignment;
        }
    });
    dropDownColumn.appendTo('#cellalignment-columns');
    var dropDownAlign = new ej.dropdowns.DropDownList({
        dataSource: alignment,
        width: '130px',
        fields: { text: 'name', value: 'id' },
        value: 'Right',
        change: function (e) {
            var alignment = e.value;
            var columnName = dropDownColumn.value;
            treeGridObj.getColumnByField(columnName).textAlign = alignment;
            treeGridObj.refreshColumns();
        }
    });
    dropDownAlign.appendTo('#alignment');
};
