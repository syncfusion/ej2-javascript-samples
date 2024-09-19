this.default = function () {
    var columnMenuOptions = [
        { id: 'Default', text: 'Default' },
        { id: 'Custom', text: 'Custom' },
    ];
      
    function columnMenuClick(args) {
        if (args.item.id === 'select_column') {
            grid.selectionModule.selectColumn(args.column.index);
            // custom function
        } else if (args.item.id === 'clear_column') {
            // custom function
            grid.selectionModule.clearColumnSelection();
        }
    }

    var grid = new ej.grids.Grid({
        dataSource: window.orderDatas,
        allowGrouping: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'CheckBox' },
        selectionSettings: { allowColumnSelection: true },
        allowPaging: true,
        groupSettings: { showGroupedColumn: true },
        showColumnMenu: true,
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        columns: [
            {
            field: 'OrderID',
            headerText: 'Order ID',
            width: 160,
            textAlign: 'Right',
            showInColumnChooser: false,
            isPrimaryKey: true,
            validationRules: { required: true, number: true },
            },
            {
            field: 'CustomerName',
            headerText: 'Customer Name',
            width: 200,
            validationRules: { required: true, minLength: 5 },
            },
            {
            field: 'Freight',
            format: 'C2',
            width: 160,
            textAlign: 'Right',
            editType: 'numericedit',
            validationRules: { required: true, min: 0 },
            },
            { field: 'ShipName', headerText: 'Ship Name', width: 200 },
            {
            field: 'ShipCountry',
            visible: false,
            headerText: 'Ship Country',
            editType: 'dropdownedit',
            },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 }
        ]
    });
      grid.appendTo('#Grid');
      
      var dropDownType = new ej.dropdowns.DropDownList({
        dataSource: columnMenuOptions,
        width: 120,
        fields: { text: 'text', value: 'id' },
        value: 'Default',
        change: function(e) {
            var gridMenuOption = e.value;
            if (gridMenuOption == 'Custom') {
                var columnMenuItems = [
                    'SortAscending',
                    'SortDescending',
                    'Group',
                    'Ungroup',
                    'Filter',
                    { text: 'Select Column', id: 'select_column' },
                    { text: 'Clear column selection', id: 'clear_column' },
                ];
                grid.columnMenuClick = columnMenuClick;
                grid.columnMenuItems = columnMenuItems;
            } else {
                grid.columnMenuClick = undefined;
                grid.columnMenuItems = undefined;
            }
        },
    });
    dropDownType.appendTo('#grid-menu');      
};
