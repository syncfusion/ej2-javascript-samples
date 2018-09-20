/**
 * PivotView sample for Remote data source.
 */
this.default = function () {
    var remoteData;
    ej.base.enableRipple(false);
    new ej.data.DataManager({
        url: 'https://bi.syncfusion.com/northwindservice/api/orders',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    }).executeQuery(new ej.data.Query().take(8)).then(function (e) {
        remoteData = e.result;
        var pivotGridObj = new ej.pivotview.PivotView({
            dataSource: {
                data: remoteData,
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
        pivotGridObj.appendTo('#PivotView');
    });
};