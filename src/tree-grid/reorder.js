this.default = function () {
    var columnNames = [
        { id: 'taskID', name: 'Task ID' },
        { id: 'taskName', name: 'Task Name' },
        { id: 'startDate', name: 'Start Date' },
        { id: 'duration', name: 'Duration' },
        { id: 'progress', name: 'Progress' },

    ];
    var columnsIndex = [
        { id: '0', name: '1' },
        { id: '1', name: '2' },
        { id: '2', name: '3' },
        { id: '3', name: '4' },
		{ id: '4', name: '5' }
    ];
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        allowReordering: true,
        height: 350,
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 80 },
            { field: 'taskName', headerText: 'Task Name', width: 200 },
            {
                field: 'startDate', headerText: 'Start Date', textAlign: 'Right',
                width: 105, format: { skeleton: 'yMd', type: 'date' }
            },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
            { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' }
        ],
        actionComplete: function (args) {
            if (args.requestType === 'reorder') {
                var columnName = dropDownColumn.value;
                var index = treegrid.getColumnIndexByField(columnName);
                dropDownIndex.value = index.toString();
            }
        }
    });
    treegrid.appendTo('#Grid');
    var dropDownColumn = new ej.dropdowns.DropDownList({
        dataSource: columnNames,
        width: '140px',
        fields: { text: 'name', value: 'id' },
        value: 'taskID',
        change: function (e) {
            var columnName = e.value;
            var index = treegrid.getColumnIndexByField(columnName);
            dropDownIndex.value = index.toString();
        }
    });
    dropDownColumn.appendTo('#reorder-columns');
    var dropDownIndex = new ej.dropdowns.DropDownList({
        dataSource: columnsIndex,
        width: '140px',
        fields: { text: 'name', value: 'id' },
        value: '0',
        change: function (e) {
            var columnName = dropDownColumn.value;
            var toColumnIndex = e.value;
            treegrid.reorderColumns(columnName, treegrid.columns[toColumnIndex].field);
        }
    });
    dropDownIndex.appendTo('#columnIndex');
};
