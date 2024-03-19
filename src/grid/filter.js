this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.categoryData,
        allowPaging: true,
        allowSorting: true,
        allowFiltering: true,
        columns: [
            { field: 'CategoryName', headerText: 'Category Name', width: 150 },
            { field: 'ProductName', headerText: 'Product Name', width: 150 },
            { field: 'UnitsInStock', headerText: 'Units In Stock', width: 150, textAlign: 'Right' },
            {
                field: 'Discontinued', headerText: 'Discontinued', width: 150,
                textAlign: 'Center', displayAsCheckBox: true, type: 'boolean'
            }
        ],
        pageSettings: { pageCount: 5 }
    });
    grid.appendTo('#Grid');
    var filterBarOperator = new ej.buttons.CheckBox();
    filterBarOperator.appendTo('#filterBarOperator');

    document.getElementById('filterBarOperator').onclick = function() {
        if (filterBarOperator.checked) {
            grid.filterSettings.showFilterBarOperator = true;
        } else {
            grid.filterSettings.showFilterBarOperator = false;
        }
        grid.clearFiltering();
    };
};