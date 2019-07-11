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
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' }],
            dataSource: window.Pivot_Data,
            expandAll: false,
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }]
        },
        width: '100%',
        height: 450,
        showGroupingBar: true,
        showFieldList: true,
        gridSettings: { columnWidth: 140 }
    });
    pivotObj.appendTo('#PivotView');

    var filter = new ej.buttons.CheckBox({
        label: 'Show Filter Icon',
        checked: true,
        change: onChange
    });
    filter.appendTo('#filter');
    var sort = new ej.buttons.CheckBox({
        label: 'Show Sort Icon',
        checked: true,
        change: onChange
    });
    sort.appendTo('#sort');
    var remove = new ej.buttons.CheckBox({
        label: 'Show Remove Icon',
        checked: true,
        change: onChange
    });
    remove.appendTo('#remove');
    var summary = new ej.buttons.CheckBox({
        label: 'Show Value Type Icon',
        checked: true,
        change: onChange
    });
    summary.appendTo('#summary');
    
    function onChange(args) {
        if (args.event.target.id === 'filter') {
            pivotObj.groupingBarSettings.showFilterIcon = args.checked;
        }
        else if (args.event.target.id === 'sort') {
            pivotObj.groupingBarSettings.showSortIcon = args.checked;
        }
        else if (args.event.target.id === 'remove') {
            pivotObj.groupingBarSettings.showRemoveIcon = args.checked;
        } else {
            pivotObj.groupingBarSettings.showValueTypeIcon = args.checked;
        }
    }
};
