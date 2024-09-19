/**
 * Sample for vertical chart
 */
this.default = function () {
    var chartData = [
        { x:"2016", y:13600, y1:0.5},
        { x:"2017", y:12900, y1:1.5},
        { x:"2018", y:12500, y1:3.5},
        { x:"2019", y:14500, y1:1.5},
        { x:"2020", y:14500, y1:3},
        { x:"2021", y:12000, y1:2.5},
    ];
    var interval;
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {  valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: { width: 0 }  },
        //Initializing Primary Y Axis
        primaryYAxis: { title: 'Sales in Billion', majorGridLines: { width: 0 }, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minimum: 11000, maximum: 15000, interval: 500 },
        axes: [
            {
                minimum: 0, maximum: 4, interval: 0.5, opposedPosition: true, name: 'yAxis2', title: 'Profit(In Percentage)',
                labelFormat: '{value}%', edgeLabelPlacement: 'Shift', lineStyle: { width: 0 }, majorGridLines: { width: 0 }, majorTickLines: { width: 0 }
            }
        ],
        series: [
            {
                type: 'Column', xName: 'x', yName: 'y', dataSource: chartData,
                width: 2, name: 'Sales'
            },
            {
                dataSource: chartData, type: 'Line', yAxisName: 'yAxis2', xName: 'x', yName: 'y1', width: 2,
                marker: { isFilled: true, visible: true, width: 7, height: 7 }, name: 'Profit Margin'
            }
        ],
        chartArea: {
            border: {
                width: 0
            }
        },
        isTransposed: true,
        //Initializing Chart Title
        title: 'Sales Vs Profit Margins',
        //Initializing Tooltip
        tooltip: { enable: true },
        legendSettings: { visible: false },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
           // custom code end
    });
    chart.appendTo('#vertical-container');
};