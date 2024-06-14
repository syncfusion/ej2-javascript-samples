this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.categoryData,
        allowPaging: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Search'],
        columns: [
            { field: 'CategoryName', headerText: 'Category Name', width: 160 },
            { field: 'ProductName', headerText: 'Product Name', width: 170 },
            { field: 'QuantityPerUnit', headerText: 'Quantity Per Unit', width: 170, textAlign: 'Right' },
            { field: 'UnitsInStock', headerText: 'Units In Stock', width: 170, textAlign: 'Right' },
            {
                field: 'Discontinued', headerText: 'Discontinued', width: 150,
                textAlign: 'Center', displayAsCheckBox: true, type: 'boolean'
            }
        ],
        pageSettings: { pageCount: 5 }
    });
    grid.appendTo('#Grid');
};