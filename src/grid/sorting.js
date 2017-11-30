this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        allowPaging: true,
        pageSettings: { pageCount: 2 },
        allowSorting: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 170 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'right' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
        ],
        actionComplete: sort,
        sortSettings: { columns: [{ field: 'OrderDate', direction: 'ascending' }, { field: 'Freight', direction: 'descending' }] }
    });
    grid.appendTo('#Grid');
    var orderID = document.getElementById('OrderID');
    var customerName = document.getElementById('CustomerName');
    var orderDate = document.getElementById('OrderDate');
    var freight = document.getElementById('Freight');
    var shipCountry = document.getElementById('ShipCountry');
    orderID.onclick = function () {
        if (orderID.checked) {
            grid.sortColumn('OrderID', 'ascending', true);
        }
        else {
            grid.removeSortColumn('OrderID');
        }
    };
    customerName.onclick = function () {
        if (customerName.checked) {
            grid.sortColumn('CustomerName', 'ascending', true);
        }
        else {
            grid.removeSortColumn('CustomerName');
        }
    };
    orderDate.onclick = function () {
        if (orderDate.checked) {
            grid.sortColumn('OrderDate', 'ascending', true);
        }
        else {
            grid.removeSortColumn('OrderDate');
        }
    };
    freight.onclick = function () {
        if (freight.checked) {
            grid.sortColumn('Freight', 'ascending', true);
        }
        else {
            grid.removeSortColumn('Freight');
        }
    };
    shipCountry.onclick = function () {
        if (shipCountry.checked) {
            grid.sortColumn('ShipCountry', 'ascending', true);
        }
        else {
            grid.removeSortColumn('ShipCountry');
        }
    };
    function sort(args) {
        if (args.requestType === 'sorting') {
            for (var i = 0, a = grid.getColumns(); i < a.length; i++) {
                var columns = a[i];
                for (var j = 0, b = grid.sortSettings.columns; j < b.length; j++) {
                    var sortcolumns = b[j];
                    if (sortcolumns.field === columns.field) {
                        document.getElementById(sortcolumns.field).checked = true;
                        break;
                    }
                    else {
                        document.getElementById(columns.field).checked = false;
                    }
                }
            }
        }
    }
};