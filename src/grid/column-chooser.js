this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.OrderedData,
        showColumnChooser: true,
        allowPaging: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'CheckBox' },
        clipMode: 'EllipsisWithTooltip',
        columnChooserSettings: {
            mode: 'Immediate'
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true
        },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ColumnChooser'],
        columns: [
            {
                field: 'OrderID',
                headerText: 'Order ID',
                textAlign: 'Right',
                width: 120,
                isPrimaryKey: true,
                showInColumnChooser: false,
                validationRules: { required: true, number: true }
            },
            {
                field: 'CustomerName',
                headerText: 'Customer Name',
                showInColumnChooser: false,
                width: 150,
                validationRules: { required: true, minLength: 5 }
            },
            {
                field: 'OrderDate',
                headerText: 'Order Date',
                width: 130,
                format: 'yMd',
                textAlign: 'Right',
                editType: 'datepickeredit',
                validationRules: { required: true }
            },
            {
                field: 'Freight',
                width: 120,
                format: 'C2',
                textAlign: 'Right',
                editType: 'numericedit',
                validationRules: { required: true, min: 0 }
            },
            {
                field: 'ShippedDate',
                headerText: 'Shipped Date',
                width: 140,
                format: 'yMd',
                textAlign: 'Right',
                editType: 'datepickeredit',
                validationRules: { required: true }
            },
            {
                field: 'ShipCountry',
                headerText: 'Ship Country',
                width: 150,
                editType: 'dropdownedit'
            }
        ]
    });
    grid.appendTo('#Grid');

    var checkbox = new ej.buttons.CheckBox({
        label: 'Immediate Column Chooser Mode',
        labelPosition: 'After',
        checked: true,
        change: function (e) {
            var mode = e.checked ? 'Immediate' : 'Default';
            grid.columnChooserSettings.mode = mode;
        }
    });
    checkbox.appendTo('#columnChooserMode');
};