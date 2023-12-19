/**
 * Pivot Table Server-Side Aggregation Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            url: 'https://services.syncfusion.com/js/production/api/pivot/post',
            mode: 'Server',
            expandAll: false,
            enableSorting: true,
            columns: [ { name: 'Year', caption: 'Production Year' },
            ],
            values: [
                { name: 'Sold', caption: 'Units Sold' },
                { name: 'Price', caption: 'Sold Amount' }
            ],
            rows: [{ name: 'ProductID', caption: 'Product ID' }],
            formatSettings: [{ name: 'Price', format: 'C0' }, { name: 'Sold', format: 'N0' }],
            filters: []
        },
        width: '100%',
        height: 450,
        showFieldList: true,
        showGroupingBar: true,
        enableVirtualization: true,
        allowDataCompression: true,
        dataBound: function () {
            if (ej.base.Browser.isDevice && pivotObj && pivotObj.enableRtl) {
                document.querySelector('.control-section').classList.add('e-rtl');
            }
        },
    });
    pivotObj.appendTo('#PivotView');
};