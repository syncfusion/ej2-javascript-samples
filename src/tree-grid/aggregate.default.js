this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.summaryRowData,
        childMapping: 'children',
        treeColumnIndex: 1,
        height: 400,
        columns: [
            { field: 'FreightID', headerText: 'Freight ID', width: 130 },
            { field: 'FreightName', width: 200, headerText: 'Freight Name' },
            { field: 'UnitWeight', headerText: 'Weight Per Unit', type: 'number', width: 140, textAlign: 'Right' },
            { field: 'TotalUnits', headerText: 'Total Units', type: 'number', width: 140, textAlign: 'Right' }
        ],
        aggregates: [{
            columns: [
                {
                    type: 'Max',
                    field: 'UnitWeight',
                    columnName: 'UnitWeight',
                    footerTemplate: 'Maximum: ${Max}'
                },
                {
                type: 'Min',
                field: 'TotalUnits',
                columnName: 'TotalUnits',
                footerTemplate: 'Minimum: ${Min}'
            }]
    }]
    });
    treeGridObj.appendTo('#TreeGrid');
    var checkBoxObj = new ej.buttons.CheckBox({ checked: true, change: onChange });
    checkBoxObj.appendTo('#checked');
    function onChange(args) {
        if (args.checked) {
            treeGridObj.aggregates[0].showChildSummary = true;
            treeGridObj.refresh();
        }
        else {
            treeGridObj.aggregates[0].showChildSummary = false;
            treeGridObj.refresh();
        }
    }
};