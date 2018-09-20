/**
 * PivotView Sample with Drill Options.
 */ 
this.default = function () {
    ej.base.enableRipple(false);
    var pivotGridObj = new ej.pivotview.PivotView({
        dataSource: {
            enableSorting: true,
            columns: [{ name: 'Year' }, { name: 'Quarter' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Product_Categories', caption: 'Product Categories' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            data: window.Pivot_Data,
            expandAll: false,
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' }],
            filters: []
        },
        width: '100%',
        height: 300,
        gridSettings: { columnWidth: 140 }
    });
    pivotGridObj.appendTo('#PivotView');
    var radioButton = new ej.buttons.RadioButton({
        label: 'Collapse All',
        name: 'DrillOperation',
        checked: true,
        change: onRadioChange
    });
    radioButton.appendTo('#collapse');
    radioButton = new ej.buttons.RadioButton({
        label: 'Expand All',
        name: 'DrillOperation',
        checked: false,
        change: onRadioChange
    });
    radioButton.appendTo('#expand');
    radioButton = new ej.buttons.RadioButton({
        label: 'FY 2015',
        name: 'DrillOperation',
        checked: false,
        change: onRadioChange
    });
    radioButton.appendTo('#fy15');
    radioButton = new ej.buttons.RadioButton({
        label: 'FY 2015 >> Q1',
        name: 'DrillOperation',
        checked: false,
        change: onRadioChange
    });
    radioButton.appendTo('#fy15_q1');
    radioButton = new ej.buttons.RadioButton({
        label: 'United States',
        name: 'DrillOperation',
        checked: false,
        change: onRadioChange
    });
    radioButton.appendTo('#us');
    radioButton = new ej.buttons.RadioButton({
        label: 'United States >> Clothing',
        name: 'DrillOperation',
        checked: false,
        change: onRadioChange
    });
    radioButton.appendTo('#us_clothing');
    function onRadioChange(args) {
        var id = args.event.target.id;
        if (id !== 'collapse') {
            /** To restrict multiple times grid rendering on property change. */
            pivotGridObj.setProperties({ dataSource: { expandAll: false, drilledMembers: [] } }, true);
        }
        else {
            pivotGridObj.dataSource.drilledMembers = [];
        }
        if (id === 'collapse') {
            pivotGridObj.dataSource.expandAll = false;
        }
        else if (id === 'expand') {
            pivotGridObj.dataSource.expandAll = true;
        }
        else if (id === 'fy15') {
            pivotGridObj.dataSource.drilledMembers = [{ name: 'Year', items: ['FY 2015'] }];
        }
        else if (id === 'fy15_q1') {
            pivotGridObj.dataSource.drilledMembers = [{ name: 'Year', items: ['FY 2015'] },
                { name: 'Quarter', items: ['Q1'] }];
        }
        else if (id === 'us') {
            pivotGridObj.dataSource.drilledMembers = [{ name: 'Country', items: ['United States'] }];
        }
        else {
            pivotGridObj.dataSource.drilledMembers = [{ name: 'Country', items: ['United States'] },
                { name: 'Product_Categories', items: ['Clothing'] }];
        }
    }
};
