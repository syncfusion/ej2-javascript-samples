this.default = function () {
    var alertDialogObj = new ej.popups.Dialog({
        header: 'Copy with Header',
        content: 'Atleast one row should be selected to copy with header',
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
        toolbar: [{ text: 'Copy', tooltipText: 'Copy', prefixIcon: 'e-copy', id: 'copy' },
        { text: 'Copy With Header', tooltipText: 'Copy With Header', prefixIcon: 'e-copy', id: 'copyHeader' }],
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
        ],
        pageSettings: { pageCount: 5 },
        allowSelection: true,
        selectionSettings: { type: 'Multiple' },
        toolbarClick: function (args) {
            if(grid.getSelectedRecords().length>0) {
                var withHeader = false;
                if (args.item.id === 'copyHeader') {
                    withHeader = true;
                }
                grid.copy(withHeader);
            } else {
                alertDialogObj.show();
            }
        }
    });
    grid.appendTo('#Grid');
};