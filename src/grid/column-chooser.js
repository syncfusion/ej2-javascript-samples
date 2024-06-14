this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource:  window.orderDatas,
        showColumnChooser: true,
        allowPaging: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ColumnChooser'],
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 140, isPrimaryKey: true, validationRules: { required: true, number: true }},
            { field: 'CustomerName', headerText: 'Customer Name', width: 150, validationRules: { required: true, minLength: 5 } },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit' },
            { field: 'Freight', width: 160, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 0 } },
            { field: 'ShippedDate', headerText: 'Shipped Date', width: 140, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 140, editType: 'dropdownedit' },
            { field: 'ShipCity', visible: false, headerText: 'Ship City', width: 150 }
        ]
    });
    grid.appendTo('#Grid');
};