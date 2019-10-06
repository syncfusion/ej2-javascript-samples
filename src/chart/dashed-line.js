/**
 * Sample for line series with dashed line
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'y',
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            labelFormat: '{value}%',
            rangePadding: 'None',
            minimum: 0,
            maximum: 40,
            interval: 10,
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
                    { x: new Date(2005, 0, 1), y: 12 }, { x: new Date(2006, 0, 1), y: 10.6 },
                    { x: new Date(2007, 0, 1), y: 15.6 }, { x: new Date(2008, 0, 1), y: 38.6 },
                    { x: new Date(2009, 0, 1), y: 27.4 }, { x: new Date(2010, 0, 1), y: 23.5 },
                    { x: new Date(2011, 0, 1), y: 16.6 }
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },
                dashArray: '5',
                yName: 'y', name: 'Banana',
            },
            {
                type: 'Line',
                dataSource: [
                    { x: new Date(2005, 0, 1), y: 9.5 }, { x: new Date(2006, 0, 1), y: 19.9 },
                    { x: new Date(2007, 0, 1), y: 25.2 }, { x: new Date(2008, 0, 1), y: 36 },
                    { x: new Date(2009, 0, 1), y: 16.6 }, { x: new Date(2010, 0, 1), y: 14.2 }, { x: new Date(2011, 0, 1), y: 10.3 }
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 10,
                    height: 10,
                    shape: 'Diamond'
                },
                dashArray: '10',
                yName: 'y', name: 'Apple',
            }
        ],
        //Initializing Chart Title
        title: 'Fruits Production Statistics',
        //Initializing Tootlip
        tooltip: {
            enable: true,
            shared: true
        },
        //Initializing Crosshair
        crosshair: {
            enable: true,
            line: {
                color: 'rgba(204,214,235,0.25)',
                width: ej.base.Browser.isDevice ? 50 : 20,
            },
            lineType: 'Vertical'
        },
        width: ej.base.Browser.isDevice ? '100%' : '60%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
         // custom code end
    });
    chart.appendTo('#container');
};