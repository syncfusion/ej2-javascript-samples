this.default = function () {
    var lines = [
        { id: 'Default', type: 'Default' },
        { id: 'Both', type: 'Both' },
        { id: 'None', type: 'None' },
        { id: 'Horizontal', type: 'Horizontal' },
        { id: 'Vertical', type: 'Vertical' }
    ];
    var grid = new ej.grids.Grid({
        dataSource: window.employeeData,
        gridLines: 'Default',
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 125, isPrimaryKey: true, validationRules: { required: true, number: true } },
            { field: 'FirstName', headerText: 'Name', width: 125, validationRules: { required: true, minLength: 5 } },
            { field: 'Title', headerText: 'Title', width: 180 },
            {
                field: 'HireDate', headerText: 'Hire Date', textAlign: 'Right',
                width: 135, format: { skeleton: 'yMd', type: 'date' }, editType: 'datepickeredit'
            }
        ]
    });
    grid.appendTo('#Grid');

    var dropDownListObject = new ej.dropdowns.DropDownList({
        dataSource: lines,
        fields: { text: 'type', value: 'id' },
        value: 'Default',
        change: function (e) {
            grid.gridLines = e.value;
            grid.dataBind();
            grid.refresh();
        },
    });
    dropDownListObject.appendTo('#ddlelement');
};