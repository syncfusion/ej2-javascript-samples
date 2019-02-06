/**
 * PivotView Sample with Chart integration.
 */
this.default = function () {
    var onInit = true;
    var measure = 'In Stock';
    var engineModule;
    var chart;
    ej.base.enableRipple(false);
    var pivotGridObj = new ej.pivotview.PivotView({
        dataSource: {
            enableSorting: true,
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            valueSortSettings: { headerDelimiter: ' - ' },
            data: window.Pivot_Data,
            expandAll: false,
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' }],
            filters: []
        },
        width: '100%',
        height: 300,
        gridSettings: { columnWidth: 120 },
        dataBound: function (args) {
            if (onInit) {
                onChartLoad();
            }
        }
    });
    pivotGridObj.appendTo('#PivotView');    
    var measuresddl = new ej.dropdowns.DropDownList({
        change: function (args) {
            measure = args.value.toString();
            onChartLoad();
        }
    });
    measuresddl.appendTo('#measures');
    /* tslint:disable */
    function onChartLoad() {
        if (ej.base.Browser.isDevice) {
            ej.base.addClass([document.getElementById('ddldiv')], 'e-device');
        }
        if (onInit) {
            onInit = false;
            engineModule = ej.base.extend({}, pivotGridObj.engineModule, null, true);
        }
        if (engineModule) {
            var valuesContent = engineModule.valueContent;
            var data = [];
            for (var cCnt = 0; cCnt < valuesContent.length; cCnt++) {
                if (!valuesContent[cCnt][0].type) {
                    data[cCnt] = valuesContent[cCnt];
                }
            }
            var chartSeries = void 0;
            for (cCnt = 0; cCnt < 1; cCnt++) {
                if (data[cCnt]) {
                    for (var rCnt = measure === 'In Stock' ? 1 : 2; rCnt < Object.keys(data[cCnt]).length; rCnt++) {
                        if (data[cCnt][rCnt] && !engineModule.pivotValues[0][rCnt].type && !data[cCnt][rCnt].type && rCnt > 0) {
                            var colText = engineModule.pivotValues[0][rCnt].formattedText;
                            if (!chartSeries) {
                                chartSeries = [{
                                    dataSource: data,
                                    xName: cCnt + '.valueSort.levelName',
                                    yName: rCnt + '.value',
                                    type: 'Column',
                                    name: colText
                                }];
                            }
                            else {
                                chartSeries.push({
                                    dataSource: data,
                                    xName: cCnt + '.valueSort.levelName',
                                    yName: rCnt + '.value',
                                    type: 'Column',
                                    name: colText
                                });
                            }
                            rCnt++;
                        }
                    }
                }
            }
            if (chart && chart.element) {
                chart.primaryYAxis = {
                    title: measure
                };
                chart.primaryXAxis = {
                    valueType: 'Category',
                    title: 'Country',
                    labelIntersectAction: 'Rotate45'
                };
                chart.series = chartSeries;
                chart.refresh();
            }
            else {                
                chart = new ej.charts.Chart({
                    title: 'Sales Analysis',
                    legendSettings: {
                        visible: true
                    },
                    tooltip: {
                        enable: true
                    },
                    primaryYAxis: {
                        title: measure,
                    },
                    primaryXAxis: {
                        valueType: 'Category',
                        title: 'Country',
                        labelIntersectAction: 'Rotate45'
                    },
                    series: chartSeries,
                    load: function (args) {
                        var selectedTheme = location.hash.split('/')[1];
                        selectedTheme = selectedTheme ? selectedTheme : 'Material';
                        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
                    }
                }, '#chart');
            }
        }
    }
};
