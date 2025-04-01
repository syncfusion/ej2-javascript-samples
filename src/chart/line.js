/**
 * Sample for Line Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Double',
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            title: 'Volume in million metric tons',
            labelFormat: '{value}',
            rangePadding: 'None',
            minimum: 0,
            maximum: 25,
            interval: 5,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
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
                type: 'Line',
                dataSource: [
                    { x: 2016, y: 7.8 },
                    { x: 2017, y: 10.3 },
                    { x: 2018, y: 15.5 },
                    { x: 2019, y: 17.5 },
                    { x: 2020, y: 19.5 },
                    { x: 2021, y: 23.0 },
                    { x: 2022, y: 20.0 },
                    { x: 2023, y: 19.0 },
                    { x: 2024, y: 22.1 }
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 7,
                    height: 7,
                    shape: 'Circle',
                    isFilled: true
                },
                yName: 'y', name: 'Vietnam',
            },
            {
                type: 'Line',
                dataSource: [
                    { x: 2016, y: 4.8 },
                    { x: 2017, y: 5.2 },
                    { x: 2018, y: 6.2 },
                    { x: 2019, y: 7.8 },
                    { x: 2020, y: 9.3 },
                    { x: 2021, y: 14.3 },
                    { x: 2022, y: 15.6 },
                    { x: 2023, y: 16.0 },
                    { x: 2024, y: 17.0 }
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 6,
                    height: 6,
                    shape: 'Triangle',
                    isFilled: true
                },
                yName: 'y', name: 'Indonesia',
            },
            {
                type: 'Line',
                dataSource: [
                    { x: 2016, y: 14.6 },
                    { x: 2017, y: 15.5 },
                    { x: 2018, y: 15.4 },
                    { x: 2019, y: 14.4 },
                    { x: 2020, y: 11.6 },
                    { x: 2021, y: 13.9 },
                    { x: 2022, y: 12.1 },
                    { x: 2023, y: 10.0 },
                    { x: 2024, y: 10.8 }
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 7,
                    height: 7,
                    shape: 'Diamond',
                    isFilled: true
                },
                yName: 'y', name: 'France',
            },
            {
                type: 'Line',
                dataSource: [
                    { x: 2016, y: 8.9 },
                    { x: 2017, y: 10.3 },
                    { x: 2018, y: 10.8 },
                    { x: 2019, y: 9.0 },
                    { x: 2020, y: 7.9 },
                    { x: 2021, y: 8.5 },
                    { x: 2022, y: 7.4 },
                    { x: 2023, y: 6.4 },
                    { x: 2024, y: 7.1 }
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 5,
                    height: 5,
                    shape: 'Rectangle',
                    isFilled: true
                },
                yName: 'y', name: 'Poland',
            },
            {
                type: 'Line',
                dataSource: [
                    { x: 2016, y: 19.0 },
                    { x: 2017, y: 20.0 },
                    { x: 2018, y: 20.2 },
                    { x: 2019, y: 18.4 },
                    { x: 2020, y: 16.8 },
                    { x: 2021, y: 18.5 },
                    { x: 2022, y: 18.4 },
                    { x: 2023, y: 16.3 },
                    { x: 2024, y: 13.7 }
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 7,
                    height: 7,
                    shape: 'Pentagon',
                    isFilled: true
                },
                yName: 'y', name: 'Mexico',
            }
        ],
        //Initializing Chart title
        title: 'Annual Crude Steel Production by Country (2016–2024)', 
        subTitle: 'Source: wikipedia.org',
        //Initializing User Interaction Tooltip
        legendSettings: { visible: true, enableHighlight: true },
        tooltip: {
            enable: true,
            enableHighlight: true,
            showNearestTooltip: true,
            header: '<b>${series.name}</b>', 
            format: '${point.x} : <b>${point.y}M</b>'
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        load: function (args) {
            var lineTheme = location.hash.split('/')[1];
            lineTheme = lineTheme ? lineTheme: 'Fluent2';
            args.chart.theme = (lineTheme.charAt(0).toUpperCase() + 
                lineTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    chart.appendTo('#line-container');
};