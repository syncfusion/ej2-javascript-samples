this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.productData,
        allowPaging: true,
        allowSelection: false,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        enableHover: true,
        columns: [
            { field: 'ProductID', headerText: 'Product ID', width: 130, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true } },
            { field: 'ProductName', headerText: 'Product Name', width: 170, validationRules: { required: true, minLength: 5 } },
            { field: 'UnitPrice', headerText: 'Unit Price', width: 135, textAlign: 'Right', format: 'C2', editType: 'numericedit' },
            { field: 'UnitsInStock', headerText: 'Units In Stock', width: 160, textAlign: 'Right' },
            {
                field: 'Discontinued', headerText: 'Discontinued', width: 150, textAlign: 'Center',
                type: 'boolean', displayAsCheckBox: true
            },
        ],
        pageSettings: { pageCount: 5 }
    });
    grid.appendTo('#Grid');
};