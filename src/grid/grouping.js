this.default = function () {
    var refresh;
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
        dataSource: window.orderDataSource,
        editSettings: { allowEditing: true },
        toolbar: ['Edit', 'Update', 'Cancel'],
        allowPaging: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        allowGrouping: true,
        groupSettings: { columns: ['ShipCountry'] },
        height: 400,
        columns: [
            {
                field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right',
                validationRules: { required: true, number: true }, width: 140
            },
            {
                field: 'CustomerID', headerText: 'Customer ID',
                validationRules: { required: true }, width: 140
            },
            {
                field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit',
                width: 140, format: 'C2', validationRules: { required: true }
            },
            {
                field: 'OrderDate', headerText: 'Order Date', editType: 'datetimepickeredit', format: { type: 'dateTime', format: 'M/d/y hh:mm a' },
                width: 160, allowGrouping: false
            },
            {
                field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150,
                edit: { params: { popupHeight: '300px' } }
            }
        ],
        pageSettings: { pageCount: 5 },
        load: function() {
            refresh = grid.refreshing;
        },
        dataBound: function() {
            if (refresh) {
                grid.groupColumn('ShipCountry');
                refresh = false;
            }
        },
        created:function() {
            grid.on("columnDragStart", columnDragStart, this);
        }
    });
    grid.appendTo('#Grid');
    function columnDragStart(args) {
        if(args.column.field === "OrderDate"){
            alertDialogObj.show();
       }
    }
};