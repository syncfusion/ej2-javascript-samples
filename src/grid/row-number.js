this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.groceryProducts,
        allowExcelExport: true,
        allowPdfExport: true,
        allowSorting: true,
        allowFiltering: true,
        enableVirtualization: true,
        pageSettings: { pageSize: 50 },
        filterSettings: { type: 'CheckBox' },
        toolbar: ['Delete', 'Update', 'Cancel', 'ExcelExport', 'PdfExport'],
        editSettings: { allowEditing: true, allowDeleting: true, mode: 'Cell' },
        height: 365,
        rowHeight: 45,
        load: function (args) {
            if (args) {
                args.enableSeamlessScrolling = true;
            }
        },
        actionBegin: actionBegin,
        columns: [
            { type: 'RowNumber', textAlign: 'Center' },
            { field: 'ProductID', headerText: 'Product ID', width: 120, visible: false, textAlign: 'Right', isPrimaryKey: true, type: 'number' },
            { field: 'ProductName', headerText: 'Products', width: 160, validationRules: { required: true },allowEditing: false },
            { field: 'Category', headerText: 'Category', width: 140,allowEditing: false, validationRules: { required: true } },
            { field: 'SellingPrice', headerText: 'Price', width: 130, format: 'C', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 0 }, filter: { type: 'Menu' }, edit: { params: { showSpinButton: false } } },
            { field: 'AvailableStock', headerText: 'In-Stock', width: 150, textAlign: 'Right', template: '#availableStockTemplate', editType: 'numericedit', validationRules: { required: true, min: 0 }, filter: { type: 'Menu' }, edit: { params: { showSpinButton: false } } },
            { field: 'SoldStock', headerText: 'Sold', width: 150, textAlign: 'Right', template: '#soldStockTemplate', editType: 'numericedit', validationRules: { required: true, min: 0 }, filter: { type: 'Menu' }, edit: { params: { showSpinButton: false } } }
        ]
    });
    grid.toolbarClick = function (args) {
        if (args.item.id === 'Grid_excelexport') {
            grid.excelExport();
        }
        if (args.item.id === 'Grid_pdfexport') {
            grid.pdfExport();
        }
    };
    function actionBegin(args) {
        if (args.requestType === 'save' && args.action === 'add') {

            if (args.data.Category === 'Beverages' ||
                args.data.Category === 'Dairy Products') {
                args.data.Unit = 'Litre';
            }
            else if (
                args.data.Category === 'Fruits' ||
                args.data.Category === 'Vegetables' ||
                args.data.Category === 'Nuts' ||
                args.data.Category === 'Rices'
            ) {
                args.data.Unit = 'Kg';
            }
            else {
                args.data.Unit = 'Pack';
            }
        }
    }
    grid.appendTo('#Grid');
};
