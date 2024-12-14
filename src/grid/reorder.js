this.default = function () {
    var columnsName = [
        { id: 'EmployeeID', name: 'Employee ID' },
        { id: 'FirstName', name: 'Name' },
        { id: 'Title', name: 'Title' },
        { id: 'HireDate', name: 'Hire Date' }
    ];
    var columnsIndex = [
        { id: '0', name: '1' },
        { id: '1', name: '2' },
        { id: '2', name: '3' },
        { id: '3', name: '4' }
    ];
    var grid = new ej.grids.Grid({
        dataSource: window.employeeData,
        allowReordering: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 150, isPrimaryKey: true, validationRules: { required: true, number: true } },
            { field: 'FirstName', headerText: 'Name', width: 125, validationRules: { required: true, minLength: 5 } },
            { field: 'Title', headerText: 'Title', width: 190 },
            {
                field: 'HireDate', headerText: 'Hire Date', textAlign: 'Right',
                width: 135, format: { skeleton: 'yMd', type: 'date' }, editType: 'datepickeredit', type:'date'
            }
        ],
        actionComplete: function (args) {
            if (args.requestType === 'reorder') {
                var columnName = dropDownColumn.value;
                var index = grid.getColumnIndexByField(columnName);
                dropDownIndex.value = index.toString();
            }
        }
    });
    grid.appendTo('#Grid');
    var dropDownColumn = new ej.dropdowns.DropDownList({
        dataSource: columnsName,
        fields: { text: 'name', value: 'id' },
        value: 'EmployeeID',
        change: function (e) {
            var columnName = e.value;
            var index = grid.getColumnIndexByField(columnName);
            dropDownIndex.value = index.toString();

        }
    });
    dropDownColumn.appendTo('#columns');

    var dropDownIndex = new ej.dropdowns.DropDownList({
        dataSource: columnsIndex,
        fields: { text: 'name', value: 'id' },
        value: '0',
        change: function (e) {
            var columnName = dropDownColumn.value;
            var toColumnIndex = e.value;
            grid.reorderColumns(columnName, (grid.columns[toColumnIndex]).field);
        }
    });
    dropDownIndex.appendTo('#columnIndex');
};