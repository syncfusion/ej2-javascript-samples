this.default = function () {
    var newRowPosition = [
        { id: 'Top', newRowPosition: 'Top' },
        { id: 'Bottom', newRowPosition: 'Bottom' }
    ];
    var grid = new ej.grids.Grid({
        dataSource: window.orderDataSource,
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', showAddNewRow: true, newRowPosition:'Top' },
        allowPaging: true,
        pageSettings: { pageCount: 5 },
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        actionBegin: actionBegin,
        columns: [
            {
                field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right',
                validationRules: { required: true, number: true }, width: 140
            },
            {
                field: 'CustomerID', headerText: 'Customer ID',
                validationRules: { required: true, minLength: 5 }, width: 140
            },
            {
                field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit',
                width: 140, format: 'C2', validationRules: { required: true, min: 0 }
            },
            {
                field: 'OrderDate', headerText: 'Order Date', editType: 'datetimepickeredit', format: { type: 'dateTime', format: 'M/d/y hh:mm a' },
                width: 160
            },
            {
                field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150,
                edit: { params: { popupHeight: '300px' } }
            }
        ],
    });
    grid.appendTo('#Grid');

    function actionBegin(args) {
        if (args.requestType === 'save') {
            if (grid.pageSettings.currentPage !== 1 && grid.editSettings.newRowPosition === 'Top') {
                args.index = (grid.pageSettings.currentPage * grid.pageSettings.pageSize) - grid.pageSettings.pageSize;
            } else if (grid.editSettings.newRowPosition === 'Bottom') {
                args.index = (grid.pageSettings.currentPage * grid.pageSettings.pageSize) - 1;
            }
        }
    }

    var dropDownType = new ej.dropdowns.DropDownList({
        dataSource: newRowPosition,
        fields: { text: 'newRowPosition', value: 'id' },
        value: 'Top',
        change: function (e) {
            var newRowPosition = e.value;
            grid.editSettings.newRowPosition = newRowPosition;
            grid.refresh();
        }
    });
    dropDownType.appendTo('#newRowPosition');
};