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

    var csvReport = {
        url: 'https://bi.syncfusion.com/productservice/api/sales',
        type: 'CSV',
        enableSorting: true,
        expandAll: false,
        rows: [{
                name: 'Region'
            },
            {
                name: 'Country'
            }
        ],
        values: [{
                name: 'Total Cost'
            },
            {
                name: 'Total Revenue'
            },
            {
                name: 'Total Profit'
            }
        ],
        columns: [{
                name: 'Item Type'
            },
            {
                name: 'Sales Channel'
            }
        ],
        formatSettings: [{
            name: 'Total Cost',
            format: 'C0'
        }, {
            name: 'Total Revenue',
            format: 'C0'
        }, {
            name: 'Total Profit',
            format: 'C0'
        }],
        drilledMembers: [{
            name: 'Item Type',
            items: ['Baby Food']
        }],
        filters: []
    };

    var jsonReport = {
        dataSource: remoteData,
        type: 'JSON',
        expandAll: true,
        formatSettings: [{
            name: 'UnitPrice',
            format: 'C0'
        }],
        columns: [{
            name: 'ProductName',
            caption: 'Product Name'
        }],
        filters: [],
        rows: [{
            name: 'ShipCountry',
            caption: 'Ship Country'
        }, {
            name: 'ShipCity',
            caption: 'Ship City'
        }],
        values: [{
            name: 'Quantity'
        }, {
            name: 'UnitPrice',
            caption: 'Unit Price'
        }]
    };

    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: jsonReport,
        height: 300,
        width: '100%',
        gridSettings: {
            columnWidth: 120
        }
    });
    pivotObj.appendTo('#PivotView');

    var contentDropDown = new ej.dropdowns.DropDownList({
        change: function (args) {
            if (args.value === 'CSV') {
                pivotObj.dataSourceSettings = csvReport;
            } else if (args.value === 'JSON') {
                pivotObj.dataSourceSettings = jsonReport;
            }
        },
        placeholder: 'Content Type'
    });
    contentDropDown.appendTo('#contenttype');
};