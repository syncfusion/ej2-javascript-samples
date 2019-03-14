/**
 * Sample for RangeColumn series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 }
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            labelFormat: '{value}˚C',
            maximum: 20,
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
                type: 'RangeColumn', name: 'India', xName: 'x', high: 'high', low: 'low',
                dataSource: [
                    { x: 'Sun', low: 3.1, high: 10.8 },
                    { x: 'Mon', low: 5.7, high: 14.4 }, { x: 'Tue', low: 8.4, high: 16.9 },
                    { x: 'Wed', low: 10.6, high: 19.2 },
                    { x: 'Thu', low: 8.5, high: 16.1 }, { x: 'Fri', low: 6.0, high: 12.5 },
                    { x: 'Sat', low: 1.5, high: 6.9 }
                ],
            }, {
                type: 'RangeColumn', name: 'Germany', xName: 'x', high: 'high', low: 'low',
                dataSource: [
                    { x: 'Sun', low: 2.5, high: 9.8 },
                    { x: 'Mon', low: 4.7, high: 11.4 }, { x: 'Tue', low: 6.4, high: 14.4 },
                    { x: 'Wed', low: 9.6, high: 17.2 },
                    { x: 'Thu', low: 7.5, high: 15.1 }, { x: 'Fri', low: 3.0, high: 10.5 },
                    { x: 'Sat', low: 1.2, high: 7.9 }
                ]
            }
        ],
        //Initializing Tooltip
        tooltip: {
            enable: true
        },
        width: ej.base.Browser.isDevice ? '100%' : '60%',
        //Initializing Chart Title
        title: 'Temperature Variation',
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark');
        }
           // custom code end
    });
    chart.appendTo('#range-container');
};