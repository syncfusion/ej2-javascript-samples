this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.stackedData,
        allowPaging: true,
        childMapping: 'subtasks',
        height: 350,
        treeColumnIndex: 1,
        pageSettings: { pageCount: 5 },
        columns: [
            {
                headerText: 'Order Details', textAlign: 'Center', columns: [
                    { field: 'orderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
                    { field: 'orderName', headerText: 'Order Name', textAlign: 'Left', width: 170 },
                    { field: 'orderDate', headerText: 'Order Date', textAlign: 'Right', width: 120, format: 'yMd' },
                ]
            },
            {
                headerText: 'Shipment Details', textAlign: 'Center', columns: [
                    { field: 'shipMentCategory', headerText: 'Shipment Category', textAlign: 'Left', width: 150 },
                    { field: 'shippedDate', headerText: 'Shipped Date', textAlign: 'Right', width: 120, format: 'yMd' },
                    { field: 'units', headerText: 'Units', textAlign: 'Left', width: 80 },
                ]
            },
            {
                headerText: 'Price Details', textAlign: 'Center', columns: [
                    { field: 'unitPrice', headerText: 'Price per unit', format: 'c0', type: 'number', width: 120, textAlign: 'Right' },
                    { field: 'price', headerText: 'Total Price', width: 115, format: 'c', type: 'number', textAlign: 'Right' }
                ]
            }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};