this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        allowPaging: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        height: 365,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true } },
            { field: 'CustomerName', headerText: 'Customer Name', width: 150, validationRules: { required: true, minLength: 5 } },
            { field: 'OrderDate', headerText: 'Order Date', width: 135, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit' },
            { field: 'Freight', width: 120, format: 'C', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 0 } },
            { field: 'ShippedDate', headerText: 'Shipped Date', width: 140, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType: 'dropdownedit' }
        ],
        pageSettings: { pageCount: 4, pageSizes: true }
    });
    grid.appendTo('#Grid');
};