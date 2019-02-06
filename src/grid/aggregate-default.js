this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        allowPaging: true,
        pageSettings: { pageCount: 5 },
        columns: [
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
            { field: 'Freight', width: 160, format: 'C2', textAlign: 'Right' },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 140 }
        ],
        aggregates: [{
            columns: [{
                type: 'Sum',
                field: 'Freight',
                format: 'C2',
                footerTemplate: 'Sum: ${Sum}'
            }]
        },
        {
            columns: [{
                type: 'Average',
                field: 'Freight',
                format: 'C2',
                footerTemplate: 'Average: ${Average}'
            }]
        }]
    });
    grid.appendTo('#Grid');
};