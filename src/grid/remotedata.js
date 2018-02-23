this.default = function () {
    var data = new ej.data.DataManager({
        url: 'http://services.odata.org/V4/Northwind/Northwind.svc/Products',
        adaptor: new ej.data.ODataV4Adaptor(),
        crossDomain: true
    });
    var grid = new ej.grids.Grid({
        dataSource: data,
        allowPaging: true,
        columns: [
            { field: 'ProductID', headerText: 'Product ID', width: 130, textAlign: 'Right' },
            { field: 'ProductName', headerText: 'Product Name', width: 170 },
            { field: 'UnitPrice', headerText: 'Unit Price', width: 135, textAlign: 'Right', format: 'C2', },
            { field: 'UnitsInStock', headerText: 'Units In Stock', width: 160, textAlign: 'Right' },
            {
                field: 'Discontinued', headerText: 'Discontinued', width: 150, textAlign: 'Center', type: 'boolean',
                displayAsCheckBox: true
            },
        ],
        pageSettings: { pageCount: 5 }
    });
    grid.appendTo('#Grid');
};