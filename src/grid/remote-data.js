this.default = function () {
    var hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
    var data = new ej.data.DataManager({
        url: hostUrl + 'api/Orders',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    });
    var grid = new ej.grids.Grid({
        dataSource: data,
        allowPaging: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 130, textAlign: 'Right' },
            { field: 'CustomerID', headerText: 'Customer ID', width: 170 },
            { field: 'EmployeeID', headerText: 'Employee ID', width: 135, textAlign: 'Right' },
            { field: 'Freight', headerText: 'Freight', width: 160, textAlign: 'Right', format: 'C2' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150, textAlign: 'Center' },
        ],
        pageSettings: { pageCount: 3 }
    });
    grid.appendTo('#Grid');
};