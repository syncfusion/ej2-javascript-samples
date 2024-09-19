this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource:  window.orderDatas,
        allowResizing: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        height: 400,
        width: 850,
        autoFit: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', minWidth: 100, textAlign: 'Right', maxWidth: 200, width: 140, isPrimaryKey: true, validationRules: { required: true, number: true }},
            { field: 'CustomerName', headerText: 'Customer Name', minWidth: 115, width: 150, validationRules: { required: true, minLength: 5 } },
            { field: 'Freight', width: 160, minWidth: 100, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 0 } },
            {
                field: 'ShippedDate', headerText: 'Shipped Date',
                width: 150, format: 'yMd', textAlign: 'Right', allowResizing: false, editType: 'datepickeredit'
            },
            { field: 'ShipCountry', headerText: 'Ship Country', minWidth: 115, width: 150, editType: 'dropdownedit' }
        ]
    });
    grid.appendTo('#Grid');
};