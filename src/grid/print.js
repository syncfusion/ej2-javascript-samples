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
        allowSorting: true,
        hierarchyPrintMode: 'All',
        toolbar: [ 'Print'],
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 125 },
            { field: 'FirstName', headerText: 'Name', width: 125 },
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
                    { field: 'Phone', headerText: 'Phone', width: 100 },
                    { field: 'Address', headerText: 'Address', width: 120 },
                    { field: 'Country', headerText: 'Country', width: 100 }
                ]
            }
        }
    });
    grid.appendTo('#Grid');
};