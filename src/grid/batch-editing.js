this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
        allowPaging: true,
        pageSettings: { pageCount: 5 },
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
        columns: [
            {
                field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right',
                validationRules: { required: true, number: true }, width: 120
            },
            {
                field: 'CustomerID', headerText: 'Customer ID',
                validationRules: { required: true, minLength: 5 }, width: 140
            },
            {
                field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit',
                width: 120, format: 'C2', validationRules: { required: true, min: 0, number: true }
            },
            {
                field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit', format: 'yMd',
                width: 170
            },
            {
                field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150,
                edit: { params: { popupHeight: '300px' } }
            }
        ],
    });
    grid.appendTo('#Grid');
};