this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderDatas,
        height: 410,
        width: 'auto',
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true } },
            { field: 'CustomerName', headerText: 'Customer Name', width: 160, validationRules: { required: true, minLength: 5 } },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit' },
            { field: 'Freight', width: 120, format: 'C', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 0 } },
            { field: 'ShippedDate', headerText: 'Shipped Date', width: 140, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit' },
            { field: 'ShipName', headerText: 'Ship Name', width: '170' },
            { field: 'ShipAddress', headerText: 'Ship Address', width: '170' },
            { field: 'ShipCity', headerText: 'Ship City', width: '150' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType: 'dropdownedit' }
        ]
    });
    grid.appendTo('#Grid');
};