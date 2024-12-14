this.default = function () {
    var columnsName = [
        { id: 'taskID', name: 'Task ID' },
        { id: 'taskName', name: 'Task Name' },
        { id: 'progress', name: 'Progress' },
        { id: 'duration', name: 'Duration' },    ];
    var direction = [
        { id: 'Ascending', name: 'Ascending' },
        { id: 'Descending', name: 'Descending' }
    ];
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        height: 410,
        allowSorting: true,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 170 },
            { field: 'progress', headerText: 'Progress', width: 90, textAlign: 'Right' },
            { field: 'duration', headerText: 'Duration', width: 90, textAlign: 'Right' }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
    var dropDownColumns = new ej.dropdowns.DropDownList({
        dataSource: columnsName,
        width: '135px',
        fields: { text: 'name', value: 'id' },
        value: 'taskID'
    });
    dropDownColumns.appendTo('#columns');
    var dropDownDirection = new ej.dropdowns.DropDownList({
        dataSource: direction,
        width: '135px',
        fields: { text: 'name', value: 'id' },
        value: 'Ascending'
    });
    dropDownDirection.appendTo('#direction');
    var sort = new ej.buttons.Button();
    sort.appendTo('#sort');
    var clear = new ej.buttons.Button();
    clear.appendTo('#clear');
    document.getElementById('sort').onclick = function () {
        var columnName = dropDownColumns.value;
        var sortType = dropDownDirection.value;
        treeGridObj.sortByColumn(columnName, sortType, false);
    };
    document.getElementById('clear').onclick = function () {
        treeGridObj.clearSorting();
    };
};