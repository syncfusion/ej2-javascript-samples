/**
 * Row Height sample
 */
this.default = function () {
    var gridData = new ej.data.DataManager(window.data).executeLocal(new ej.data.Query().take(30));
    var grid = new ej.grids.Grid({
        dataSource: gridData,
        toolbar: [
            { prefixIcon: 'e-small-icon', id: 'big', align: 'right' },
            { prefixIcon: 'e-medium-icon', id: 'medium', align: 'right' },
            { prefixIcon: 'e-big-icon', id: 'small', align: 'right' }
        ],
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
            { field: 'ShippedDate', headerText: 'Shipped Date', width: 140, format: 'yMd', textAlign: 'Right' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
        ],
        height: 400,
        rowHeight: 20,
        toolbarClick: function (args) {
            if (args.item.id === 'small') {
                grid.rowHeight = 20;
            }
            if (args.item.id === 'medium') {
                grid.rowHeight = 40;
            }
            if (args.item.id === 'big') {
                grid.rowHeight = 60;
            }
        }
    });
    grid.appendTo('#Grid');
};