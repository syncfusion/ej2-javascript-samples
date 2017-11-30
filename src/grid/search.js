this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.categoryData,
        allowPaging: true,
        toolbar: ['search'],
        columns: [
            { field: 'CategoryName', headerText: 'Category Name', width: 160 },
            { field: 'ProductName', headerText: 'Product Name', width: 170 },
            { field: 'QuantityPerUnit', headerText: 'Quantity Per Unit', width: 170, textAlign: 'right' },
            { field: 'UnitsInStock', headerText: 'Units In Stock', width: 170, textAlign: 'right' },
            {
                field: 'Discontinued', headerText: 'Discontinued', width: 150,
                textAlign: 'center', displayAsCheckBox: true, type: 'boolean'
            }
        ],
        pageSettings: { pageCount: 5 }
    });
    grid.appendTo('#Grid');
};