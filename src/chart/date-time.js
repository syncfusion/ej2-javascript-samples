/**
 * Saample for DateTime Axis
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'MMM d',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: -20,
            maximum: 30,
            interval: 10,
            edgeLabelPlacement: 'Shift',
            labelFormat: '{value}°C',
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
                    { x: new Date(2016, 3, 1), y: 6.3 },
                    { x: new Date(2016, 4, 1), y: 13.3 }, { x: new Date(2016, 5, 1), y: 18.0 },
                    { x: new Date(2016, 6, 1), y: 19.8 }, { x: new Date(2016, 7, 1), y: 18.1 },
                    { x: new Date(2016, 8, 1), y: 13.1 }, { x: new Date(2016, 9, 1), y: 4.1 }
                ],
                xName: 'x', width: 2,
                yName: 'y', name: 'Warmest',
                marker: {
                    visible: true,
                    height: 8, width: 8,
                    shape: 'Pentagon', isFilled: true,
                    dataLabel: { visible: true, position: 'Top' }
                }
            }, {
                type: 'Line',
                dataSource: [
                    { x: new Date(2016, 3, 1), y: -5.3 },
                    { x: new Date(2016, 4, 1), y: 1.0 }, { x: new Date(2016, 5, 1), y: 6.9 },
                    { x: new Date(2016, 6, 1), y: 9.4 }, { x: new Date(2016, 7, 1), y: 7.6 },
                    { x: new Date(2016, 8, 1), y: 2.6 }, { x: new Date(2016, 9, 1), y: -4.9 }
                ],
                xName: 'x', width: 2,
                yName: 'y', name: 'Coldest',
                marker: {
                    visible: true, height: 8, width: 8, shape: 'Diamond', isFilled: true,
                    dataLabel: { visible: true, position: 'Top' }
                }
            }
        ],
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        //Initializing Chart Title
        title: 'Alaska Weather Statistics - 2016',
        tooltip: {
            enable: true,
            showNearestTooltip: true
        },
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
         // custom code end
    });
    chart.appendTo('#datetime-container');
};