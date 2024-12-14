this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        allowGrouping: true,
        allowFiltering: true,
        allowSorting: true,
        allowPaging: true,
        allowSelection: true,
        selectionSettings: { type: 'Multiple' },
        filterSettings: { type:'Menu' },
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode:'Normal' },
        pageSettings: { pageCount: 5 },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        columns: [
            {
                field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right',
                validationRules: { required: true, number:true }, width: 140
            },
            {
                field: 'CustomerID', headerText: 'Customer ID',textAlign: 'Right',
                validationRules: { required: true }, width: 150
            },
            {
                field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit',
                width: 140, format: 'C2', validationRules: { required: true }
            },
            {
                field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit', format: 'yMd',
                width: 150, textAlign: 'Right', allowGrouping: false
            },
            {
                field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 160,textAlign: 'Right',
                edit: { params: { popupHeight: '300px' } }
            }
        ],
    });
    grid.appendTo('#Grid');
};