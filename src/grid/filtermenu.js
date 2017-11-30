this.default = function () {
    var grid = new ej.grids.Grid({
         dataSource: window.orderData.slice(0, 200),
        allowPaging: true,
        allowFiltering: true,
		filterSettings: {type:'menu'},
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'right' }
        ],
        pageSettings: { pageCount: 5 }
    });
    grid.appendTo('#Grid');
    document.getElementById('ddl').onchange = function () {
        var ddl = document.getElementById('ddl');
        grid.filterSettings.type = ddl.value;
		grid.clearFiltering();
        grid.refresh();
    };
};