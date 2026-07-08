this.default = function () {
    var genarateData = new ej.buttons.Button({}, '#genarate');
    var data = [];

    genarateData.element.onclick = function () {
        if (!data.length) {
            createSalesDataSource();
            grid.dataSource = data = salesDataSource;
            genarateData.disabled = true;
        }
    };

    var grid = new ej.grids.Grid({
        dataSource: [],
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'CheckBox', enableInfiniteScrolling: true },
        enableInfiniteScrolling: true,
        enableColumnVirtualization: true,
        pageSettings: { pageSize: 50 },
        clipMode: 'EllipsisWithTooltip',
        height: 400,
        rowHeight: 40,
        footerRowHeight: 40,
        load: function (args) {
            if (args) {
                args.enableSeamlessScrolling = true;
            }
        },
        columns: [
            { field: 'ProductId', headerText: 'Product ID', width: 130, textAlign: 'Right', isPrimaryKey: true },
            { field: 'ProductName', headerText: 'Product Name', width: 210 },
            { field: 'GrossAmount', headerText: 'Gross Amount', width: 180, textAlign: 'Right', format: 'C2' },
            { field: 'NetAmount', headerText: 'Net Amount', width: 180, textAlign: 'Right', format: 'C2' },
            { field: 'ProfitMargin', headerText: 'Profit (%)', width: 180 },
            { field: 'AchievementPercent', headerText: 'Achievement (%)', width: 190 },
            { field: 'SalesQty', headerText: 'Sales Quantity', width: 150, textAlign: 'Right' },
            { field: 'UnitPrice', headerText: 'Unit Price', width: 120, textAlign: 'Right', format: 'C2' },
            { field: 'Month', headerText: 'Month', width: 120 },
            { field: 'Category', headerText: 'Category', width: 130 },
            { field: 'SubCategory', headerText: 'Sub Category', width: 150, visible: false },
            { field: 'Brand', headerText: 'Brand', width: 120 },
            { field: 'City', headerText: 'City', width: 130 },
            { field: 'State', headerText: 'State', width: 120 },
            { field: 'Country', headerText: 'Country', width: 160 },
            { field: 'Region', headerText: 'Region', width: 130 },
            { field: 'Discount', headerText: 'Discount (%)', width: 140, textAlign: 'Right', format: 'N0' },
            { field: 'Tax', headerText: 'Tax (%)', width: 130, textAlign: 'Right', format: 'N2' },
            { field: 'ShippingCost', headerText: 'Shipping Cost', width: 160, textAlign: 'Right', format: 'C2' },
            { field: 'Profit', headerText: 'Profit', width: 160, textAlign: 'Right', format: 'C2' },
            { field: 'Target', headerText: 'Target', width: 120, textAlign: 'Right', format: 'C2' },
            { field: 'Forecast', headerText: 'Forecast', width: 150, textAlign: 'Right', format: 'C2' },
            { field: 'SalesRep', headerText: 'Sales Reporter', width: 150 },
            { field: 'Manager', headerText: 'Manager', width: 140 },
            { field: 'Channel', headerText: 'Channel', width: 120},
            { field: 'Quarter', headerText: 'Quarter', width: 120, textAlign: 'Center' },
            { field: 'Year', headerText: 'Year', width: 100, textAlign: 'Right' },
            { field: 'ReturnQty', headerText: 'Return Quantity', width: 160, textAlign: 'Right' },
            { field: 'ReturnAmount', headerText: 'Return Amount', width: 160, textAlign: 'Right', format: 'C2' },
            { field: 'Remarks', headerText: 'Remarks', width: 220}
        ],
        aggregates: [{
            columns: [
                { field: 'SalesQty', type: 'Sum', format: 'N0', footerTemplate: '${Sum}' },
                { field: 'GrossAmount', type: 'Sum', format: 'C0', footerTemplate: '${Sum}' },
                { field: 'NetAmount', type: 'Sum', format: 'C0', footerTemplate: '${Sum}' },
                { field: 'ShippingCost', type: 'Sum', format: 'C0', footerTemplate: '${Sum}' },
                { field: 'Profit', type: 'Sum', format: 'C0', footerTemplate: '${Sum}' },
                { field: 'Forecast', type: 'Sum', format: 'C0', footerTemplate: '${Sum}' },
                { field: 'ReturnQty', type: 'Sum', format: 'N0', footerTemplate: '${Sum}' },
                { field: 'ReturnAmount', type: 'Sum', format: 'C0', footerTemplate: '${Sum}' }
            ]
        }]
    }); 
    grid.appendTo('#InfiniteScroll');

    function formatCurrencyShort(value) {
        if (value >= 1e9) return '$' + (value / 1e9).toFixed(2) + 'B';
        if (value >= 1e6) return '$' + (value / 1e6).toFixed(2) + 'M';
        if (value >= 1e3) return '$' + (value / 1e3).toFixed(2) + 'K';
        return '$' + value.toFixed(2);
    }

    function formatNumberShort(value) {
        if (value >= 1e9) return (value / 1e9).toFixed(2) + 'B';
        if (value >= 1e6) return (value / 1e6).toFixed(2) + 'M';
        if (value >= 1e3) return (value / 1e3).toFixed(2) + 'K';
        return value.toFixed(0);
    }
};