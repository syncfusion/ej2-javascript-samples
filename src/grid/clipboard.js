this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderDatas,
        allowPaging: true,
        toolbar: [{ text: 'Copy', tooltipText: 'Copy', prefixIcon: 'e-copy', id: 'copy' },
        { text: 'Copy With Header', tooltipText: 'Copy With Header', prefixIcon: 'e-copy', id: 'copyHeader' }],
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
        ],
        pageSettings: { pageCount: 5 },
        allowSelection: true,
        selectionSettings: { type: 'Multiple' },
        toolbarClick: function (args) {
            var withHeader = false;
            if (args.item.id === 'copyHeader') {
                withHeader = true;
            }
            grid.copy(withHeader);
        }
    });
    grid.appendTo('#Grid');
};