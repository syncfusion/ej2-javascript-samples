this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        allowPaging: true,
        allowResizing: true,
        pageSettings: { pageCount: 5 },
        allowSorting: true,
        allowMultiSorting:true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 130, minWidth: 10, isPrimaryKey: true, validationRules: { required: true, number: true }, },
            {
                headerText: 'Order Details', textAlign: 'Center', columns: [
                    { field: 'CustomerID', headerText: 'Customer Name', width: 160, minWidth:30},
                    { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, minWidth:50, format: 'yMd', editType: 'datepickeredit', },
                ],
            },
            {
                headerText: 'Ship Details', textAlign: 'Center', columns: [
                    { field: 'ShippedDate', headerText: 'Shipped Date', textAlign: 'Right', width: 160, minWidth:40, format: 'yMd', editType: 'datepickeredit', },
                    { field: 'ShipCountry', headerText: 'Ship Country', width: 140, minWidth: 60, editType: 'dropdownedit', },
                    { field: 'Freight', headerText: 'Freight Charges($)', textAlign: 'Right', width: 200, format: 'C2', minWidth: 40, editType: 'numericedit', validationRules: { required: true, min: 0 }, },
                ],
            },
        ]
    });
    grid.appendTo('#Grid');
};
