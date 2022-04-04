/**
 * Pivot Table Grouping bar Sample
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            enableSorting: true,
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            values: [{ name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' }],
            dataSource: window.Pivot_Data,
            expandAll: false,
            filters: []
        },
        width: '100%',
        height: 450,
        showGroupingBar: true,
        showValuesButton: true,
        groupingBarSettings: { showFieldsPanel: true },
        gridSettings: { columnWidth: 140 }
    });
    pivotObj.appendTo('#PivotView');

    var filter = new ej.buttons.CheckBox({
        label: 'Show Filter Icon',
        checked: true,
        change: onFilter
    });
    filter.appendTo('#filter');
    var sort = new ej.buttons.CheckBox({
        label: 'Show Sort Icon',
        checked: true,
        change: onSort
    });
    sort.appendTo('#sort');
    var remove = new ej.buttons.CheckBox({
        label: 'Show Remove Icon',
        checked: true,
        change: onRemove
    });
    remove.appendTo('#remove');
    var summary = new ej.buttons.CheckBox({
        label: 'Show Value Type Icon',
        checked: true,
        change: onValueType
    });
    summary.appendTo('#summary');
    
    function onFilter(args) {
        pivotObj.groupingBarSettings.showFilterIcon = args.checked;
    }
    function onSort(args) {
        pivotObj.groupingBarSettings.showSortIcon = args.checked;
    }
    function onValueType(args) {
        pivotObj.groupingBarSettings.showValueTypeIcon = args.checked;
    }
    function onRemove(args) {
        pivotObj.groupingBarSettings.showRemoveIcon = args.checked;
    }
};
