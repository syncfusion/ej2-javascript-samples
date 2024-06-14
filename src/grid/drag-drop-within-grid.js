this.default = function () {
    var alertDialogObj = new ej.popups.Dialog({
        header: 'Grouping',
        content: 'Grouping is disabled for this column',
        showCloseIcon: false,
        target: '.control-section',
        buttons: [{
            click: alertDlgBtnClick, buttonModel: { content: 'OK', isPrimary: true }
        }],
        width: '300px',
        visible: false,
        animationSettings: { effect: 'None' }
    });
    alertDialogObj.appendTo('#alertDialog');
    function alertDlgBtnClick() {
        alertDialogObj.hide();
    }
    var grid = new ej.grids.Grid({
        dataSource: window.orderDatas,
        allowRowDragAndDrop: true,
        allowGrouping: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        selectionSettings: { type: 'Multiple' },
        height: 400,
        columns: [
            { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right', width: 140, validationRules: { required: true, number: true }},
            { field: 'CustomerName', headerText: 'Customer Name', width: 150, validationRules: { required: true, minLength: 5 } },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit' },
            { field: 'Freight', width: 160, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 0 } },
            { field: 'ShipCity', headerText: 'Ship City', width: 130, textAlign: 'Left' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150, allowGrouping: false, editType: 'dropdownedit' }
        ],
        created:function() {
            grid.on("columnDragStart", columnDragStart, this);
        }
    });
    grid.appendTo('#Grid');
    function columnDragStart(args) {
        if(args.column.field === "ShipCountry"){
            alertDialogObj.show();
       }
    }
};
