/**
 * Pivot Table HeatMap Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var colourScheme = ['range1', 'range2', 'range3', 'range4', 'range5', 'range6', 'range7', 'range8', 'range9',
    'range10', 'range11', 'range12', 'range13', 'range14'];
    var minValue = 0;
    var maxValue= 0;
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            enableSorting: false,
            columns: [{ name: 'ProductType' }, { name: 'Product' }],
            valueSortSettings: { headerDelimiter: ' - ' },
            values: [{ name: 'SoldAmount', caption: 'Sold Amount' }],
            dataSource: window.heatMap,
            rows: [{ name: 'Year' }],
            formatSettings: [{ name: 'SoldAmount', format: 'C0' }],
            groupSettings: [{
                    name: 'Year',
                    type: 'Number',
                    rangeInterval: 2
                }],
            expandAll: true,
            filters: [],
            showColumnSubTotals: false
        },
        width: '100%',
        height: 500,
        gridSettings: { rowHeight:35, columnWidth: 120 },
        cellTemplate: function (args) {
            if (args != null && args.cellInfo) {
                if (args.cellInfo.axis === 'value') {
                    if (args.cellInfo.axis === 'value' && !args.cellInfo.isGrandSum) {
                        args.targetCell.classList.add(cellColour(args.cellInfo.value));
                    }
                    args.targetCell.querySelector('.e-cellvalue').innerText = '$' + (args.cellInfo.value / 1000).toFixed(1) + 'K';
                }
            }
        },
        aggregateCellInfo: function (args) {
            if (args.rowCellType !== "grandTotal" && args.columnCellType !== "grandTotal") {
                minValue = (minValue < args.value && minValue !== 0) ? minValue : args.value;
                maxValue = maxValue > args.value ? maxValue : args.value;
            }
        },
        enginePopulated: function () {
            minValue = minValue - 1000;
            maxValue = maxValue + 1000;
        },
    });
    function cellColour(value) {
        var percentage = (maxValue - minValue) / colourScheme.length;
        var colourIndex = Math.round((value - minValue) / percentage);
        return colourScheme[colourIndex];
    }
    pivotObj.appendTo('#PivotView-Heatmap');
};
