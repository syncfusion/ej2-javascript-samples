/**
 * Pivot Table sample for Remote data source.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var remoteData = new ej.data.DataManager({
        url: 'https://bi.syncfusion.com/northwindservice/api/orders',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    });
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            dataSource: remoteData,
            expandAll: true,
            filters: [],
            columns: [{ name: 'ProductName', caption: 'Product Name' }],
            rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
            formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
            values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }]
        },
        height: 300,
        width: '100%',
        gridSettings: { columnWidth: 120 }
    });
    pivotObj.appendTo('#PivotView');
};