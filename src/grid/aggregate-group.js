this.default = function () {
    var refresh;
    var grid = new ej.grids.Grid({
        dataSource: window.categoryData,
        allowPaging: true,
        pageSettings: { pageCount: 5 },
        allowGrouping: true,
        groupSettings: { showDropArea: false, columns: ['CategoryName'] },
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
        load: function() {
            refresh = grid.refreshing;
        },
        dataBound: function() {
            if (refresh) {
                grid.groupColumn('CategoryName');
                refresh = false;
            }
        },
        aggregates: [{
            columns: [{
                type: 'Sum',
                field: 'UnitsInStock',
                groupFooterTemplate: 'Total units: ${Sum}'
            },
            {
                type: 'TrueCount',
                field: 'Discontinued',
                groupFooterTemplate: 'Discontinued: ${TrueCount}'
            },
            {
                type: 'Max',
                field: 'UnitsInStock',
                groupCaptionTemplate: 'Maximum: ${Max}'
            }]
        }]
    });
    grid.appendTo('#Grid');
};