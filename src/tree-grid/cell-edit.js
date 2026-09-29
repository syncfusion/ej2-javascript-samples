this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.retailInventoryData,
        height: 500,
        idMapping: 'productId',
        parentIdMapping: 'parentId',
        treeColumnIndex: 1,
        allowPaging: true,
        toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
        editSettings: {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            mode: 'Cell',
        },
        columns: [
            {
                field: 'productId',
                headerText: 'Product ID',
                isPrimaryKey: true,
                textAlign: 'Right',
                width: 100,
                validationRules: { required: true }
            },
            { field: 'productName', headerText: 'Product Name', width: 120, validationRules: { required: true } },
            { field: 'supplier', headerText: 'Supplier', width: 120, validationRules: { required: true } },
            {
                field: 'stockQty',
                headerText: 'Stock Quantity',
                textAlign: 'Right',
                width: 70,
                validationRules: { number: true }
            },

            {
                field: 'unitPrice',
                headerText: 'Unit Price (₹)',
                textAlign: 'Right',
                width: 70,
                validationRules: { number: true }
            },
            {
                field: 'status',
                headerText: 'Status',
                width: 120,
                template: '#statusTemplate',
                editType: 'dropdownedit',
                validationRules: { required: true }
            },
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};
