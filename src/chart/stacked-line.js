/**
 * Sample for StackingArea Series
 */
var chartData1 = [
    { x: 2015, y: 28.2 },
    { x: 2016, y: 28.6 },
    { x: 2017, y: 46.0 },
    { x: 2018, y: 52.7 },
    { x: 2019, y: 62.0 },
    { x: 2020, y: 64.6 },
    { x: 2021, y: 60.1 },
    { x: 2022, y: 68.6 },
    { x: 2023, y: 71.81 }
];
var chartData2 = [
    { x: 2015, y: 15.0 },
    { x: 2016, y: 16.7 },
    { x: 2017, y: 14.2 },
    { x: 2018, y: 15.3 },
    { x: 2019, y: 16.4 },
    { x: 2020, y: 13.9 },
    { x: 2021, y: 14.8 },
    { x: 2022, y: 16.1 },
    { x: 2023, y: 16.02 }
];
var chartData3 = [
    { x: 2015, y: 8.1 },
    { x: 2016, y: 8.4 },
    { x: 2017, y: 7.73 },
    { x: 2018, y: 5.1 },
    { x: 2019, y: 8.7 },
    { x: 2020, y: 9.4 },
    { x: 2021, y: 10.3 },
    { x: 2022, y: 10.4 },
    { x: 2023, y: 11.17 }
];
var chartData4 = [
    { x: 2015, y: 4.6 },
    { x: 2016, y: 7.5 },
    { x: 2017, y: 12.1 },
    { x: 2018, y: 25.9 },
    { x: 2019, y: 39.3 },
    { x: 2020, y: 50.1 },
    { x: 2021, y: 60.4 },
    { x: 2022, y: 73.5 },
    { x: 2023, y: 102.01 }
];
this.default = function () {
    
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            valueType: 'Double',
            labelRotation: ej.base.Browser.isDevice ? -45 : 0,
            labelIntersectAction: ej.base.Browser.isDevice ? 'None' : 'Trim'
        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },
            minorGridLines: { width: 1 },
            minorTickLines: { width: 0 },
            labelFormat: '{value}TWh',
            title: 'Energy Generation (TWh)'
        },
        chartArea: { border: { width: 0 }, margin: { bottom: 12 } },
        //Initializing Chart Series
        series: [
            {
                type: 'StackingLine', dataSource: chartData1, marker: { isFilled: true, visible: true, shape: 'Circle', width: 7, height: 7 },
                xName: 'x', width: 2, yName: 'y', name: 'Wind'
            },
            {
                type: 'StackingLine', dataSource: chartData2, marker: { isFilled: true, visible: true, shape: 'Diamond', width: 7, height: 7 },
                xName: 'x', width: 2, yName: 'y', name: 'Bio mass'
            },
            {
                type: 'StackingLine', dataSource: chartData3, marker: { isFilled: true, visible: true, shape: 'Rectangle', width: 5, height: 5 },
                xName: 'x', width: 2, yName: 'y', name: 'Small Hydro'
            },
            {
                type: 'StackingLine', dataSource: chartData4, marker: { isFilled: true, visible: true, shape: 'Triangle', width: 6, height: 6 },
                xName: 'x', width: 2, yName: 'y', name: 'Solar'
            }
        ],
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true,
            enableHighlight: true,
            showNearestTooltip: true,
            header: '<b>${series.name}</b>',
            format: '${point.x} : <b>${point.y}</b>'
        },
        title: 'Yearly Renewable Energy Generation in India (2015-2023)',
        subTitle: 'Source: wikipedia.org',
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        legendSettings: { enableHighlight: true },
        load: function (args) {
            var stackedTheme = location.hash.split('/')[1];
            stackedTheme = stackedTheme ? stackedTheme : 'Fluent2';
            args.chart.theme = (stackedTheme.charAt(0).toUpperCase() + 
            stackedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    chart.appendTo('#stacked-container');
};