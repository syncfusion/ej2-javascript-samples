this.default = function () {
    var alertDialogObj = new ej.popups.Dialog({
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
        allowPaging: true,
        allowSorting: true,
        toolbar: [{ text: 'Copy', tooltipText: 'Copy', prefixIcon: 'e-copy', id: 'copy' },
        { text: 'Copy With Header', tooltipText: 'Copy With Header', prefixIcon: 'e-copy', id: 'copyHeader' }],
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 140},
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 160, format: 'C2', textAlign: 'Right' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 140 }
        ],
        pageSettings: { pageCount: 5 },
        allowSelection: true,
        selectionSettings: { type: 'Multiple' },
        toolbarClick: function (args) {
            if(grid.getSelectedRecords().length>0) {
                var withHeader = args.item.id === 'copyHeader' ? true : false;
                grid.copy(withHeader);
            } else {
                alertDialogObj.content = args.item.id === 'copyHeader' ? 'Atleast one row should be selected to copy with header' : 'Atleast one row should be selected to copy';
                alertDialogObj.header = args.item.id === 'copyHeader' ? 'Copy with Header' : 'Copy';
                alertDialogObj.show();
            }
        }
    });
    grid.appendTo('#Grid');
};