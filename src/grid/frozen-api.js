/**
 * Grid frozen rows and columns sample
 */
this.default = function () {
    var alertDialogObj = new ej.popups.Dialog({
        header: 'Frozen',
        content: 'Atleast one Column should be in movable',
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

    var data = new ej.data.DataManager(window.data).executeLocal(new ej.data.Query().take(50));
    var grid = new ej.grids.Grid({
        dataSource: data,
        height: 410,
        enableHover: false,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        frozenRows: 2,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', freeze: 'Left', isPrimaryKey: true, validationRules: { required: true, number: true } },
            { field: 'Freight', width: 125, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 0 } },
            { field: 'CustomerID', headerText: 'Customer ID', width: 130, freeze: 'Right', validationRules: { required: true, minLength: 5 } },
            { field: 'OrderDate', headerText: 'Order Date', width: 150, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit' },
            { field: 'ShipName', headerText: 'Ship Name', width: 300 },
            { field: 'ShipAddress', headerText: 'Ship Address', width: 270, freeze: 'Fixed' },
            { field: 'ShipCity', headerText: 'Ship City', width: 250 },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 250, editType: 'dropdownedit' }
        ]
    });
    grid.appendTo('#Grid');

    var columnNames = [
        { id: 'OrderID', name: 'Order ID' },
        { id: 'Freight', name: 'Freight' },
        { id: 'CustomerID', name: 'Customer ID' },
        { id: 'OrderDate', name: 'Order Date' },
        { id: 'ShipName', name: 'Ship Name' },
        { id: 'ShipAddress', name: 'Ship Address' },
        { id: 'ShipCity', name: 'Ship City' },
        { id: 'ShipCountry', name: 'Ship Country' }
    ];
    var directions = [
        { id: 'Left', name: 'Left' },
        { id: 'Right', name: 'Right' },
        { id: 'Center', name: 'Center' },
        { id: 'Fixed', name: 'Fixed' }
    ];

    var refresh = true;
    var columnDropDown = new ej.dropdowns.DropDownList({
        dataSource: columnNames,
        fields: { text: 'name', value: 'id' },
        value: 'OrderID',
        change: function(e) {
            var columnName = e.value;
            var column = grid.getColumnByField(columnName);
            var value = column.freeze === undefined ? 'Center' : column.freeze;
            refresh = directionDropDown.value === value;
            directionDropDown.value = value;
        }
    });
    columnDropDown.appendTo('#column');

    var directionDropDown = new ej.dropdowns.DropDownList({
        dataSource: directions,
        fields: { text: 'name', value: 'id' },
        value: 'Left',
        change: function(e) {
            if (refresh) {
                var columnName = document.getElementById("column").ej2_instances[0].value;
                var mvblColumns = grid.getMovableColumns();
                if (mvblColumns.length === 1 && columnName === mvblColumns[0].field && e.value !== mvblColumns[0].freeze) {
                    alertDialogObj.show(); refresh = false; directionDropDown.value = "Center"; directionDropDown.refresh();
                } else {
                    grid.getColumnByField(columnName).freeze = e.value === 'Center' ? undefined : e.value;
                    grid.refreshColumns();
                }
            }
            refresh = true;
        }
    });
    directionDropDown.appendTo('#FreezeDirection');
};