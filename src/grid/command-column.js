this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: orderData,
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, allowEditOnDblClick: false },
        allowPaging: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        pageSettings: {pageCount: 5},
        columns: [
            {
                field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right',
                validationRules: { required: true }, width: 120
            },
            {
                field: 'CustomerID', headerText: 'Customer ID',
                validationRules: { required: true }, width: 140
            },
            {
                field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit',
                width: 120, format: 'C2', validationRules: { required: true }
            },
            {
                field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit',
                format: 'yMd', width: 170
            },
            {
                field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150,
                edit: { params: { popupHeight: '300px' } }
            },
            { headerText: 'Manage Records', width: 160,
                commands: [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
                    { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
                    { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
                    { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }]
            }
        ]
    });
    grid.appendTo('#Grid');
};