/**
 * Pivot Table sample with Grid Configurations.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            enableSorting: true,
            columns: [{ name: 'Year' }, { name: 'Quarter' }],
            valueSortSettings: { headerDelimiter: ' - ' },
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            dataSource: window.defaultData,
            expandAll: false,
            filters: []
        },
        width: '100%',
        height: 300,
        showFieldList: true,
        gridSettings: {
            allowReordering: true,
            allowResizing: true,
            columnWidth: 140
        }
    });
    pivotObj.appendTo('#PivotView');
    var reorder = new ej.buttons.CheckBox({ label: 'Allow Reordering', checked: true, change: onChange });
    reorder.appendTo('#reorder');
    var resize = new ej.buttons.CheckBox({ label: 'Allow Resizing', checked: true, change: onChange });
    resize.appendTo('#resize');
    var autowrap = new ej.buttons.CheckBox({ label: 'Allow Text Wrap', checked: false, change: onChange });
    autowrap.appendTo('#autowrap');
    var lines = [
        { id: 'Default', type: 'Default' },
        { id: 'Both', type: 'Both' },
        { id: 'None', type: 'None' },
        { id: 'Horizontal', type: 'Horizontal' },
        { id: 'Vertical', type: 'Vertical' }
    ];
    var gridlines = new ej.dropdowns.DropDownList({
        placeholder: 'GridLines',
        floatLabelType: 'Auto',
        dataSource: lines,
        fields: { text: 'type', value: 'id' },
        value: 'Both',
        change: function (e) {
            pivotObj.gridSettings.gridLines = e.value;
        },
    });
    gridlines.appendTo('#gridlines');
    function onChange(args) {
        if (args.event.target.id === 'reorder') {
            pivotObj.gridSettings.allowReordering = args.checked;
        }
        else if (args.event.target.id === 'resize') {
            pivotObj.gridSettings.allowResizing = args.checked;
        }
        else {
            pivotObj.gridSettings.allowTextWrap = args.checked;
        }
    }
};
