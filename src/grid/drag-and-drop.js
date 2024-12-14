this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderDatas,
        allowPaging: true,
        allowRowDragAndDrop: true,
        selectionSettings: { type: 'Multiple' },
        rowDropSettings: { targetID: 'DestGrid' },
        pageSettings: { pageCount: 2 },
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        width: '49%',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 140, isPrimaryKey: true, validationRules: { required: true, number: true }, type:'number'},
            { field: 'CustomerName', headerText: 'Customer Name', width: 150, validationRules: { required: true, minLength: 5 }, type:'string' },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit', type:'date' },
        ],
        rowDragStart: function (args) {
            if (destGrid.isEdit) {
                if (destGrid.editModule.formObj.validate()) {
                    destGrid.endEdit();
                } else {
                    destGrid.closeEdit();
                }
            }
        },
    });
    grid.appendTo('#Grid');
    var destGrid = new ej.grids.Grid({
        dataSource: [],
        allowPaging: true,
        allowRowDragAndDrop: true,
        selectionSettings: { type: 'Multiple' },
        rowDropSettings: { targetID: 'Grid' },
        pageSettings: { pageCount: 2 },
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        width: '49%',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 140, isPrimaryKey: true, validationRules: { required: true, number: true }, type:'number'},
            { field: 'CustomerName', headerText: 'Customer Name', width: 150, validationRules: { required: true, minLength: 5 }, type:'string' },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit', type:'date' },
        ]
    });
    destGrid.appendTo('#DestGrid');
};
