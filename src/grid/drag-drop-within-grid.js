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
        selectionSettings: { type: 'Multiple' },
        height: 400,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, width: 80, textAlign: 'Right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 130, textAlign: 'Left' },
            { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', headerText: 'Freight', width: 130, format: 'C2', textAlign: 'Right' },
            { field: 'ShipCity', headerText: 'Ship City', width: 130, textAlign: 'Left' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150, allowGrouping: false }
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
