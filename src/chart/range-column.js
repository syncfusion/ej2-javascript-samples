/**
 * Sample for RangeColumn series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            title:'Temperature (In Celsius)',
            labelFormat: '{value}˚C',
            maximum: 20,
            interval: 5,
            edgeLabelPlacement: 'Shift',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'RangeColumn', xName: 'x', high: 'high', low: 'low', columnSpacing: 0.1,
                marker: {
                    dataLabel: {
                        visible: true,
                        position: 'Outer',
                    }
                },
                dataSource: [
                    { x: 'Sun', low: 3.1, high: 10.8 },
                    { x: 'Mon', low: 5.7, high: 14.4 }, { x: 'Tue', low: 8.4, high: 16.9 },
                    { x: 'Wed', low: 9.6, high: 18.2 },
                    { x: 'Thu', low: 8.5, high: 16.1 }, { x: 'Fri', low: 6.0, high: 12.5 },
                    { x: 'Sat', low: 1.5, high: 6.9 }
                ],
            }
        ],
        //Initializing Tooltip
        tooltip: {
            enable: true,
            header: "<b>${point.x}</b>",
            format: "Temperature : <b>${point.low} - ${point.high}</b>"
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',  //legendSettings: { visible: false},
        //Initializing Chart Title
        title: 'Temperature Variation by Week',
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#range-container');
};