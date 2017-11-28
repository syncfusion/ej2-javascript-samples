this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'dialog' },
        allowPaging: true,
        pageSettings: { pageCount: 5 },
        toolbar: ['add', 'edit', 'delete', 'update', 'cancel'],
        columns: [
            {
                field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'right',
                validationRules: { required: true }, width: 120
            },
            {
                field: 'CustomerID', headerText: 'Customer ID',
                validationRules: { required: true }, width: 140
            },
            {
                field: 'Freight', headerText: 'Freight', textAlign: 'right', editType: 'numericedit',
                width: 120, format: 'C2', validationRules: { required: true }
            },
            { field: 'ShipCity', headerText: 'Ship City', width: 170 },
            {
                field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150,
                edit: { params: { popupHeight: '300px' } }
            }
        ],
    });
    grid.appendTo('#Grid');
};