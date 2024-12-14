/**
 * Sample for Line Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',labelFormat: 'y',
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            title: 'Million Metric Tons',
            labelFormat: '{value}',
            rangePadding: 'None',
            minimum: 0,
            maximum: 20,
            interval: 4,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Line',
                dataSource: [
                    { x: new Date(2012, 6, 11), y: 5.3 },{ x: new Date(2013, 6, 11), y: 5.6 },{ x: new Date(2014, 6, 11), y: 5.9 },{ x: new Date(2015, 6, 11), y: 5.7 },{ x: new Date(2016, 6, 11), y: 7.8 },{ x: new Date(2017, 6, 11), y: 10.3 }, { x: new Date(2018, 6, 11), y: 15.5 }, { x: new Date(2019, 6, 11), y: 17.5 }, { x: new Date(2020, 6, 11), y: 19.5 }
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
                    { x: new Date(2012, 6, 11), y: 13.5 }, { x: new Date(2013, 6, 11), y: 12.4 }, { x: new Date(2014, 6, 11), y: 12.7 }, { x: new Date(2015, 6, 11), y: 12.5 }, { x: new Date(2016, 6, 11), y: 12.7 }, { x: new Date(2017, 6, 11), y: 13.7 }, { x: new Date(2018, 6, 11), y: 13.4 }, { x: new Date(2019, 6, 11), y: 12.9 }, { x: new Date(2020, 6, 11), y: 11.0 }
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 6,
                    height: 6,
                    shape: 'Triangle',
                    isFilled: true
                },
                yName: 'y', name: 'Canada',
            },
            {
                type: 'Line',
                dataSource: [
                    { x: new Date(2012, 6, 11), y: 5.6 }, { x: new Date(2013, 6, 11), y: 4.7 }, { x: new Date(2014, 6, 11), y: 4.3 }, { x: new Date(2015, 6, 11), y: 3.8 }, { x: new Date(2016, 6, 11), y: 2.8 }, { x: new Date(2017, 6, 11), y: 2.8 }, { x: new Date(2018, 6, 11), y: 4.1 }, { x: new Date(2019, 6, 11), y: 6.8 }, { x: new Date(2020, 6, 11), y: 7.1 },
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 7,
                    height: 7,
                    shape: 'Diamond',
                    isFilled: true
                },
                yName: 'y', name: 'Malaysia',
            },
            {
                type: 'Line',
                dataSource: [
                    { x: new Date(2012, 6, 11), y: 6.6 }, { x: new Date(2013, 6, 11), y: 6.8 }, { x: new Date(2014, 6, 11), y: 6.5 }, { x: new Date(2015, 6, 11), y: 5.5 }, { x: new Date(2016, 6, 11), y: 5.0 }, { x: new Date(2017, 6, 11), y: 6.8 }, { x: new Date(2018, 6, 11), y: 7.8 }, { x: new Date(2019, 6, 11), y: 7.3 }, { x: new Date(2020, 6, 11), y: 8.2 },
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 5,
                    height: 5,
                    shape: 'Rectangle',
                    isFilled: true
                },
                yName: 'y', name: 'Egypt',
            },
            {
                type: 'Line',
                dataSource: [
                    { x: new Date(2012, 6, 11), y: 2.3 }, { x: new Date(2013, 6, 11), y: 2.6 }, { x: new Date(2014, 6, 11), y: 4.4 }, { x: new Date(2015, 6, 11), y: 4.9 }, { x: new Date(2016, 6, 11), y: 4.8 }, { x: new Date(2017, 6, 11), y: 5.3 }, { x: new Date(2018, 6, 11), y: 6.2 }, { x: new Date(2019, 6, 11), y: 7.8 }, { x: new Date(2020, 6, 11), y: 9.3 }
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 7,
                    height: 7,
                    shape: 'Pentagon',
                    isFilled: true
                },
                yName: 'y', name: 'Indonesia',
            }
        ],
        //Initializing Chart Title
        title: 'Crude Steel Production Annual Growth',
        legendSettings: { visible: true, enableHighlight: true },
        //Initializing Tooltip
        tooltip: {
            enable: true,
            enableHighlight: true
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
         // custom code start
        load: function (args) {
            var lineTheme = location.hash.split('/')[1];
            lineTheme = lineTheme ? lineTheme: 'Fluent2';
            args.chart.theme = (lineTheme.charAt(0).toUpperCase() + 
                lineTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        } ,
    });
    chart.appendTo('#line-container');
};