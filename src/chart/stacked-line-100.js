/**
 * Sample for StackingArea Series
 */
var chartData1 = [
    { x: 'O+ve', y: 39.0 },
    { x: 'A+ve', y: 36.0 },
    { x: 'B+ve', y: 7.6 },
    { x: 'AB+ve', y: 2.5 },
    { x: 'O-ve', y: 7.0 },
    { x: 'A-ve', y: 6.0 },
    { x: 'B-ve', y: 1.4 },
    { x: 'AB-ve', y: 0.5 }
];
var chartData2 = [
    { x: 'O+ve', y: 40.0 },
    { x: 'A+ve', y: 30.0 },
    { x: 'B+ve', y: 15.0 },
    { x: 'AB+ve', y: 4.25 },
    { x: 'O-ve', y: 6.6 },
    { x: 'A-ve', y: 2.3 },
    { x: 'B-ve', y: 1.1 },
    { x: 'AB-ve', y: 0.75 }
];
var chartData3 = [
    { x: 'O+ve', y: 47.0 },
    { x: 'A+ve', y: 26.0 },
    { x: 'B+ve', y: 9.0 },
    { x: 'AB+ve', y: 2.0 },
    { x: 'O-ve', y: 8.0 },
    { x: 'A-ve', y: 5.0 },
    { x: 'B-ve', y: 2.0 },
    { x: 'AB-ve', y: 1.0 }
];
var chartData4 = [
    { x: 'O+ve', y: 29.0 },
    { x: 'A+ve', y: 46.3 },
    { x: 'B+ve', y: 12.0 },
    { x: 'AB+ve', y: 5.6 },
    { x: 'O-ve', y: 2.0 },
    { x: 'A-ve', y: 3.7 },
    { x: 'B-ve', y: 1.0 },
    { x: 'AB-ve', y: 0.4 }
];
this.default = function () {

    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            majorGridLines: { width: 0 },
            lineStyle: { width: 0 },
            valueType: 'Category',
            labelRotation: ej.base.Browser.isDevice ? -45 : 0,
            labelIntersectAction: ej.base.Browser.isDevice ? 'None' : 'Trim'
        },
        primaryYAxis:
        {
            title: 'Population Share (%)',
            lineStyle: { width: 0 },
            interval: 20,
            minorTickLines: { width: 0 },
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },
            minorGridLines: { width: 1 }
        },
        chartArea: { border: { width: 0 }, margin: { bottom: 12 } },
        series: [
            {
                type: 'StackingLine100', dataSource: chartData1, marker: { visible: true, isFilled: true, shape: 'Circle', width: 7, height: 7 },
                xName: 'x', width: 2, yName: 'y', name: 'Canada'
            },
            {
                type: 'StackingLine100', dataSource: chartData2, marker: { visible: true, isFilled: true, shape: 'Diamond', width: 7, height: 7 },
                xName: 'x', width: 2, yName: 'y', name: 'Algeria'
            },
            {
                type: 'StackingLine100', dataSource: chartData3, marker: { visible: true, isFilled: true, shape: 'Rectangle', width: 5, height: 5 },
                xName: 'x', width: 2, yName: 'y', name: 'Ireland'

            },
            {
                type: 'StackingLine100', dataSource: chartData4, marker: { isFilled: true, visible: true, shape: 'Triangle', width: 6, height: 6 },
                xName: 'x', width: 3, yName: 'y', name: 'Armenia'

            }
        ],
        tooltip: {
            enable: true,
            format: '${point.x} : <b>${point.y}% (${point.percentage}%)</b>',
            enableHighlight: true,
            showNearestTooltip: true
        },
        title: 'Blood Type Distribution by Country',
        subTitle: 'Source: wikipedia.org',
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        legendSettings: { enableHighlight: true },
        load: function (args) {
            var stackedTheme = location.hash.split('/')[1];
            stackedTheme = stackedTheme ? stackedTheme : 'Fluent2';
            args.chart.theme = (stackedTheme.charAt(0).toUpperCase() +
                stackedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        legendClick: function (args) {
            if (args.series.index === 0) {
                if (args.chart.series[3].visible) {
                    args.chart.series[3].width = 3;
                    args.chart.series[0].width = 2;
                } else if (args.chart.series[2].visible) {
                    args.chart.series[2].width = 3;
                    args.chart.series[0].width = 2;
                } else if (args.chart.series[1].visible) {
                    args.chart.series[1].width = 3;
                    args.chart.series[0].width = 2;
                } else {
                    args.chart.series[0].width = 3;
                }
            }

            if (args.series.index === 1) {
                if (args.chart.series[3].visible) {
                    args.chart.series[3].width = 3;
                    args.chart.series[1].width = 2;
                } else if (args.chart.series[2].visible) {
                    args.chart.series[2].width = 3;
                    args.chart.series[1].width = 2;
                } else if (args.series.visible && args.chart.series[0].visible) {
                    args.chart.series[0].width = 3;
                    args.chart.series[1].width = 2;
                } else {
                    args.chart.series[1].width = 3;
                    args.chart.series[0].width = 2;
                }
            }

            if (args.series.index === 2) {
                if (args.chart.series[3].visible) {
                    args.chart.series[3].width = 3;
                    args.chart.series[2].width = 2;
                } else if (!args.series.visible) {
                    args.chart.series[2].width = 3;
                    args.chart.series[1].width = 2;
                    args.chart.series[0].width = 2;
                } else if (args.chart.series[1].visible) {
                    args.chart.series[1].width = 3;
                    args.chart.series[2].width = 2;
                } else if (args.series.visible && args.chart.series[0].visible) {
                    args.chart.series[0].width = 3;
                    args.chart.series[2].width = 2;
                }
            }

            if (args.series.index === 3) {
                if (!args.series.visible) {
                    args.chart.series[3].width = 3;
                    args.chart.series[2].width = 2;
                    args.chart.series[1].width = 2;
                    args.chart.series[0].width = 2;
                } else if (args.chart.series[2].visible) {
                    args.chart.series[2].width = 3;
                    args.chart.series[3].width = 2;
                } else if (args.chart.series[1].visible) {
                    args.chart.series[1].width = 3;
                    args.chart.series[3].width = 2;
                } else if (args.series.visible && args.chart.series[0].visible) {
                    args.chart.series[0].width = 3;
                    args.chart.series[3].width = 2;
                }
            }
        }
    });
    chart.appendTo('#stacked-container-100');
};
