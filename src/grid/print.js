this.default = function () {
    var hierarchyPrintModes = ['Expanded', 'All', 'None'];
    var dropdown = new ej.dropdowns.DropDownList({
        dataSource: hierarchyPrintModes,
        value: 'All',
        change: function(e) {
            grid.hierarchyPrintMode = grid.childGrid.hierarchyPrintMode = e.value;
        }
    });    
    dropdown.appendTo("#dropdown");

    var grid = new ej.grids.Grid({
        dataSource: window.employeeData,
        cssClass: document.querySelector('.fluent2-highcontrast') ? 'e-print-fluent2-highcontrast' : '',
        allowSorting: true,
        hierarchyPrintMode: 'All',
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Print'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 125, isPrimaryKey: true, validationRules: { required: true, number: true } },
            { field: 'FirstName', headerText: 'Name', width: 125, validationRules: { required: true, minLength: 5 } },
            { field: 'Title', headerText: 'Title', width: 180 },
            { field: 'City', headerText: 'City', width: 110 }
        ],
        childGrid: {
            dataSource: window.hierarchyOrderdata,
            queryString: 'EmployeeID',
            hierarchyPrintMode: 'All',
            columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
                { field: 'ShipCity', headerText: 'Ship City', width: 120 },
                { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2'},
                { field: 'ShipName', headerText: 'Ship Name', width: 150 }
            ],
            childGrid: {
                dataSource: customerData,
                queryString: 'CustomerID',
                columns: [
                    { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Right', width: 75 },
                    { field: 'ContactName', headerText: 'Contact Name', width: 100 },
                    { field: 'Address', headerText: 'Address', width: 120 },
                    { field: 'Country', headerText: 'Country', width: 100 }
                ]
            }
        }
    });
    grid.appendTo('#Grid');
};