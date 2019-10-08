/**
 * Sample for Range Bar series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            labelFormat: '{value}˚F',
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
                type: 'RangeColumn', name: 'California', xName: 'x', high: 'high', low: 'low',
                dataSource: [
                    { x: 'Jul', low: 28, high: 72 },
                    { x: 'Aug', low: 18, high: 65 }, { x: 'Sep', low: 56, high: 87 },
                    { x: 'Oct', low: 40, high: 78 },
                    { x: 'Nov', low: 43, high: 64 }, { x: 'Dec', low: 28, high: 54 }
                ],
            }, {
                type: 'RangeColumn', name: 'Colorado', xName: 'x', high: 'high', low: 'low',
                dataSource: [
                    { x: 'Jul', low: 38, high: 78 },
                    { x: 'Aug', low: 27, high: 78 }, { x: 'Sep', low: 28, high: 79 },
                    { x: 'Oct', low: 37, high: 66 },
                    { x: 'Nov', low: 25, high: 52 }, { x: 'Dec', low: 20, high: 60 }
                ]
            }
        ],
        isTransposed: true,
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
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#container');
};