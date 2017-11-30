this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        allowPaging: true,
        pageSettings: { pageCount: 5 },
        columns: [
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
            { field: 'Freight', width: 160, format: 'C2', textAlign: 'right' },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'right' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 140 }
        ],
        aggregates: [{
            columns: [{
                type: 'sum',
                field: 'Freight',
                format: 'C2',
                footerTemplate: 'Sum: ${sum}'
            }]
        },
        {
            columns: [{
                type: 'average',
                field: 'Freight',
                format: 'C2',
                footerTemplate: 'Average: ${average}'
            }]
        }]
    });
    grid.appendTo('#Grid');
};