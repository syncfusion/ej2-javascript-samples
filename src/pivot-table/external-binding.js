/**
 * Pivot Table Sample with Selection feature with HeatMap integration.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var onInit = true;
    var selectedCells;
    var heatmap;
    var measureList = {};
    var xLabels = [];
    var yLabels = [];
    var jsonDataSource = [];
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            dataSource: window.Pivot_Data,
            expandAll: true,
            values: [{ name: 'Sold', caption: 'Units Sold' }],
            filters: [],
            enableSorting: true,
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            valueSortSettings: { headerDelimiter: ' - ' },
            formatSettings: [{ name: 'Sold', format: 'N0' }],
        },
        showTooltip: false,
        width: '100%',
        height: 300,
        dataBound: function () {
            if (onInit && pivotObj.grid.getRows().length > 1) {
                pivotObj.grid.selectionModule.selectCellsByRange({ cellIndex: 1, rowIndex: 1 }, { cellIndex: 3, rowIndex: 4 });
            }
        },
        cellSelected: function (args) {
            selectedCells = args.selectedCellsInfo;
            if (selectedCells && selectedCells.length > 0) {
                frameSeries();
                heatmapUpdate();
            }
        },
        gridSettings: {
            columnWidth: 120,
            allowSelection: true,
            selectionSettings: { mode: 'Cell', type: 'Multiple', cellSelectionMode: 'Box' }
        }
    });
    pivotObj.appendTo('#PivotView');


    /* tslint:disable */
    function frameSeries() {
        xLabels = [];
        yLabels = [];
        jsonDataSource = [];
        var columnGroupObject = {};
        var cellCount = 0;
        while (cellCount < selectedCells.length) {
            var sCell = selectedCells[cellCount];
            var sColumnSeries = (pivotObj.dataSourceSettings.values.length > 1 && measureList[sCell.measure]) ?
                (sCell.columnHeaders.toString() + ' ~ ' + measureList[sCell.measure]) : sCell.columnHeaders.toString();
            sColumnSeries = sColumnSeries == '' && sCell.measure != '' ? 'Grand Total' : sColumnSeries;
            var rHeaders = sCell.rowHeaders == '' && sCell.currentCell.axis != 'column' ? 'Grand Total' : sCell.rowHeaders;
            if (rHeaders != '' && sColumnSeries) {
                if (columnGroupObject[sColumnSeries]) {
                    columnGroupObject[sColumnSeries].push({ x: rHeaders.toString(), y: Number(sCell.value) });
                } else {
                    columnGroupObject[sColumnSeries] = [{ x: rHeaders.toString(), y: Number(sCell.value) }];
                    yLabels.push(sColumnSeries);
                }
                if (xLabels.indexOf(rHeaders.toString()) == -1) {
                    xLabels.push(rHeaders.toString());
                }
            }
            cellCount++;
        }
        for (var xcnt = 0; xcnt < xLabels.length; xcnt++) {
            var xName = xLabels[xcnt];
            var row = { 'xMember': xName };
            for (var ycnt = 0; ycnt < yLabels.length; ycnt++) {
                var YName = yLabels[ycnt];
                row[YName] = '';
                for (var hCount = 0; hCount < columnGroupObject[YName].length; hCount++) {
                    if (columnGroupObject[YName][hCount].x === xName) {
                        row[YName] = columnGroupObject[YName][hCount].y;
                    }
                }
            }
            jsonDataSource.push(row);
        }
    }

    function heatmapUpdate() {
        if (onInit) {
            onInit = false;
            heatmap = new ej.heatmap.HeatMap({
                titleSettings: {
                    text: 'Sales Analysis'
                },
                legendSettings: {
                    visible: false,
                    position: 'Top'
                },
                xAxis: {
                    title: { text: pivotObj.dataSourceSettings.rows.map(function (args) { return args.caption || args.name; }).join(' ~ ') },
                    labels: xLabels,
                    labelIntersectAction: "Trim" 
                },
                yAxis: {
                    title: { text: pivotObj.dataSourceSettings.values.map(function (args) { return args.caption || args.name; }).join(' ~ ') },
                    labels: yLabels
                },
                dataSource: jsonDataSource,
                dataSourceSettings: {
                    isJsonData: true,
                    adaptorType: 'Table',
                    xDataMapping: 'xMember'
                },
                load: function (args) {
                    var selectedTheme = location.hash.split('/')[1];
                    selectedTheme = selectedTheme ? selectedTheme : 'Material';
                    args.heatmap.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
                },
            }, '#heatmap');
        } else {
            heatmap.dataSource = jsonDataSource;
            heatmap.xAxis = {
                title: { text: pivotObj.dataSourceSettings.rows.map(function (args) { return args.caption || args.name; }).join(' ~ ') },
                labels: xLabels,
                labelIntersectAction: "Trim"
            };
            heatmap.yAxis = {
                title: { text: pivotObj.dataSourceSettings.values.map(function (args) { return args.caption || args.name; }).join(' ~ ') },
                labels: yLabels
            };
            heatmap.refresh();
        }
    }
};
