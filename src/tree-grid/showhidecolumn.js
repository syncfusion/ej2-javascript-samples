this.default = function () {
    var columnsName = [
        { id: 'taskID', name: 'Task ID' },
        { id: 'startDate', name: 'Start Date' },
        { id: 'duration', name: 'Duration' },
        { id: 'progress', name: 'Progress' }
    ];
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        childMapping: 'subtasks',
        height: 350,
        treeColumnIndex: 1,
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 80 },
            { field: 'taskName', headerText: 'Task Name', width: 200 },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 105, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 80 },
            { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 80 }
        ]
    });
    treegrid.appendTo('#TreeGrid');
    var dropDownListObject = new ej.dropdowns.DropDownList({
        dataSource: columnsName,
        fields: { text: 'name', value: 'id' },
        width: '85%',
        value: 'taskID',
        change: function (e) {
            var columnName = e.value;
            var column = treegrid.getColumnByField(columnName);
            if (column.visible === undefined || column.visible) {
                show.disabled = true;
                hide.disabled = false;
            }
            else {
                hide.disabled = true;
                show.disabled = false;
            }
        }
    });
    dropDownListObject.appendTo('#ddlelement');
    var show = new ej.buttons.Button({ disabled: true });
    show.appendTo('#show');
    var hide = new ej.buttons.Button();
    hide.appendTo('#hide');
    var hiddenColumns = document.getElementById('hiddencolumns');
    document.getElementById('show').addEventListener('click', function () {
        var columnName = dropDownListObject.value;
        var column = treegrid.getColumnByField(columnName);
        treegrid.showColumns(column.headerText, 'headerText');
        show.disabled = true;
        hide.disabled = false;
        hiddenColumns.value = hiddenColumns.value.replace(column.headerText + '\n', '');
    });
    document.getElementById('hide').addEventListener('click', function () {
        var columnName = dropDownListObject.value;
        var column = treegrid.getColumnByField(columnName);
        if (treegrid.getHeaderTable().querySelectorAll('th.e-hide').length === 3) {
            alert('Atleast one Column should be visible');
        }
        else {
            treegrid.hideColumns(column.headerText, 'headerText');
            hide.disabled = true;
            show.disabled = false;
            hiddenColumns.value = hiddenColumns.value + column.headerText + '\n';
        }
    });
};