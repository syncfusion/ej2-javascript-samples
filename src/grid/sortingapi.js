this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        allowPaging: true,
        allowSorting: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 160 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'right' }
        ],
        pageSettings: { pageCount: 2 }
    });
    grid.appendTo('#Grid');
    document.getElementById('sort').onclick = function () {
        var columnName = document.getElementById('columns').value;
        var sortType = document.getElementById('sortdirection').value;
        grid.sortColumn(columnName, sortType, false);
    };
    document.getElementById('clear').onclick = function () {
        grid.clearSorting();
    };
};