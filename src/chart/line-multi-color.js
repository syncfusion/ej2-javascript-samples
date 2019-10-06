/**
 * Sample for Line series
 */
this.default = function () {
    var dataValues = [];
    var colors = ['red', 'green', '#ff0097', 'crimson', 'blue', 'darkorange', 'deepskyblue',
        'mediumvioletred', 'violet', 'peru', 'gray', 'deeppink', 'navy'];
        (window.rainFallData).map(function (value, index) {
            dataValues.push({
                XValue: new Date(2017, -index, 1), YValue: value.toFixed(2),
                color: colors[Math.floor(index / 16)]
            });
         });
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'y',
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        },

        //Initializing Primary Y Axis
        primaryYAxis:
            {
                rangePadding: 'None',
                minimum: 4,
                maximum: 10,
                title: 'Particulate Matter(PM)',
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
                dataSource: dataValues,
                width: 1.5,
                name: 'Rainfall', xName: 'XValue', yName: 'YValue', pointColorMapping: 'color',
                type: 'MultiColoredLine'
            }
        ],
        legendSettings: { visible: false },

        //Initializing Chart title
        title: 'Particulate Levels in Rainfall',
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true, shared: true,enableAnimation : false
        },
        width: ej.base.Browser.isDevice ? '100%' : '60%',
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