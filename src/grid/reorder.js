this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.employeeData,
        allowReordering: true,
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'right', width: 125 },
            { field: 'FirstName', headerText: 'Name', width: 125 },
            { field: 'Title', headerText: 'Title', width: 190 },
            {
                field: 'HireDate', headerText: 'Hire Date', textAlign: 'right',
                width: 135, format: { skeleton: 'yMd', type: 'date' }
            }
        ],
        actionComplete: function (args) {
            if (args.requestType === 'reorder') {
                var columnName = document.getElementById('columns').value;
                var index = grid.getColumnIndexByField(columnName);
                document.getElementById('columnIndex').value = index.toString();
            }
        }
    });
    grid.appendTo('#Grid');
    document.getElementById('columns').onchange = function () {
        var columnName = document.getElementById('columns').value;
        var index = grid.getColumnIndexByField(columnName);
        document.getElementById('columnIndex').value = index.toString();
    };
    document.getElementById('columnIndex').onchange = function () {
        var columnName = document.getElementById('columns').value;
        var toColumnIndex = parseInt(document.getElementById('columnIndex').value, 10);
        grid.reorderColumns(columnName, grid.columns[toColumnIndex].field);
    };
};