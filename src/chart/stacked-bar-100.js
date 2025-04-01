/**
 * Sample for 100 percent StackingBar Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        },
        chartArea: {
            border: {
                width: 0
            },
            margin: {
                bottom: 12
            }
        },
        //Initializing Chart Series
        series: [
            {
                //Series type as 100% stacked bar
                type: 'StackingBar100',
                name: 'Wind',
                dataSource: [
                    { x: '2020', y: 466 },
                    { x: '2021', y: 656 },
                    { x: '2022', y: 763 },
                    { x: '2023', y: 886 }
                ],
                xName: 'x',
                yName: 'y',
                border: { width: 1, color: "white" },
                columnWidth: 0.6,
                legendShape: 'Rectangle'
            }, {
                type: 'StackingBar100', name: 'Solar',
                dataSource: [
                    { x: '2020', y: 261 },
                    { x: '2021', y: 327 },
                    { x: '2022', y: 427 },
                    { x: '2023', y: 584 }
                ],
                xName: 'x',
                yName: 'y',
                border: { width: 1, color: "white" },
                columnWidth: 0.6,
                legendShape: 'Rectangle'
            }, {
                type: 'StackingBar100',
                name: 'Hydro',
                dataSource: [
                    { x: '2020', y: 1355 },
                    { x: '2021', y: 1340 },
                    { x: '2022', y: 1352 },
                    { x: '2023', y: 1286 }
                ],
                xName: 'x',
                yName: 'y',
                border: { width: 1, color: "white" },
                columnWidth: 0.6,
                legendShape: 'Rectangle',
                cornerRadius: { bottomRight: 4, topRight: 4 }
            }
        ],
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        // custom code end
        //Initializing Chart Title
        title: 'Annual Renewable Energy Generation in China (2020–2023) by Source',
        subTitle: 'Source: wikipedia.org',
        legendSettings: {
            enableHighlight: true,
            shapeWidth: 9,
            shapeHeight: 9
        },
        //Initializing User Interaction Tootlip
        tooltip: {
            enable: true,
            enableHighlight: true,
            header: '<b>Renewable Energy Generation</b>'
        },
        legendClick: function (args) {
            if (args.series.index === 0) {
                if (args.chart.series[2].visible) {
                    args.chart.series[2].cornerRadius.bottomRight = 4;
                    args.chart.series[2].cornerRadius.topRight = 4;
                    args.chart.series[0].cornerRadius.bottomRight = 0;
                    args.chart.series[0].cornerRadius.topRight = 0;
                } else if (args.chart.series[1].visible) {
                    args.chart.series[1].cornerRadius.bottomRight = 4;
                    args.chart.series[1].cornerRadius.topRight = 4;
                    args.chart.series[0].cornerRadius.bottomRight = 0;
                    args.chart.series[0].cornerRadius.topRight = 0;
                } else {
                    args.chart.series[0].cornerRadius.bottomRight = 4;
                    args.chart.series[0].cornerRadius.topRight = 4;
                }
            }
            if (args.series.index === 1) {
                if (args.chart.series[2].visible) {
                    args.chart.series[2].cornerRadius.bottomRight = 4;
                    args.chart.series[2].cornerRadius.topRight = 4;
                    args.chart.series[1].cornerRadius.bottomRight = 0;
                    args.chart.series[1].cornerRadius.topRight = 0;
                } else if (args.series.visible && args.chart.series[0].visible) {
                    args.chart.series[0].cornerRadius.bottomRight = 4;
                    args.chart.series[0].cornerRadius.topRight = 4;
                    args.chart.series[1].cornerRadius.bottomRight = 0;
                    args.chart.series[1].cornerRadius.topRight = 0;
                } else {
                    args.chart.series[1].cornerRadius.bottomRight = 4;
                    args.chart.series[1].cornerRadius.topRight = 4;
                    args.chart.series[0].cornerRadius.bottomRight = 0;
                    args.chart.series[0].cornerRadius.topRight = 0;
                }
            }

            if (args.series.index === 2) {
                if (!args.series.visible) {
                    args.chart.series[2].cornerRadius.bottomRight = 4;
                    args.chart.series[2].cornerRadius.topRight = 4;
                    args.chart.series[1].cornerRadius.bottomRight = 0;
                    args.chart.series[1].cornerRadius.topRight = 0;
                    args.chart.series[0].cornerRadius.bottomRight = 0;
                    args.chart.series[0].cornerRadius.topRight = 0;
                } else if (args.chart.series[1].visible) {
                    args.chart.series[1].cornerRadius.bottomRight = 4;
                    args.chart.series[1].cornerRadius.topRight = 4;
                    args.chart.series[2].cornerRadius.bottomRight = 0;
                    args.chart.series[2].cornerRadius.topRight = 0;
                } else if (args.series.visible && args.chart.series[0].visible) {
                    args.chart.series[0].cornerRadius.bottomRight = 4;
                    args.chart.series[0].cornerRadius.topRight = 4;
                    args.chart.series[2].cornerRadius.bottomRight = 0;
                    args.chart.series[2].cornerRadius.topRight = 0;
                }
            }
        },
        tooltipRender: function (args) {
            if (args.text) {
                var value = args.point.y.toLocaleString('en-US');
                args.text = args.series.name + ": <b>" + value + "TWh (" + args.point.percentage + "%)</b>";
            }
        }
    });
    chart.appendTo('#bar100-container');
};