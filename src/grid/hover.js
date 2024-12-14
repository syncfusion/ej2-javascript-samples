this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.productData,
        allowPaging: true,
        allowSelection: false,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        enableHover: true,
        columns: [
            { field: 'ProductID', headerText: 'Product ID', width: 130, textAlign: 'Right', isPrimaryKey: true },
            { field: 'ProductName', headerText: 'Product Name', width: 170 },
            { field: 'UnitPrice', headerText: 'Unit Price', width: 135, textAlign: 'Right', format: 'C2' },
            { field: 'UnitsInStock', headerText: 'Units In Stock', width: 160, textAlign: 'Right' },
            {
                field: 'Discontinued', headerText: 'Discontinued', width: 150, textAlign: 'Center',
                type: 'boolean', displayAsCheckBox: true
            },
        ],
        pageSettings: { pageCount: 5 }
    });
    grid.appendTo('#Grid');
};