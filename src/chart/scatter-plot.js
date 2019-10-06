/**
 * Sample for Scatter Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            minimum: 100,
            maximum: 220,
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift',
            title: 'Height in Inches'

        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary X Axis
        primaryYAxis:
        {
            majorTickLines: {
                width: 0
            },
            lineStyle: {
                width: 0
            },
            minimum: 50,
            maximum: 80,
            title: 'Weight in Pounds',
            rangePadding: 'None'
        },

        //Initializing Chart Series
        series: [
            {
                type: 'Scatter',
                dataSource: window.mendData,
                xName: 'x', width: 2, marker: {
                    visible: false,
                    width: 12,
                    height: 12,
                    shape: 'Circle'
                },
                yName: 'y', name: 'Male', opacity: 0.6
            },
            {
                type: 'Scatter',
                dataSource: window.womenData,
                xName: 'x', width: 2, marker: {
                    visible: false,
                    width: 12,
                    height: 12,
                    shape: 'Diamond'
                },
                yName: 'y', name: 'Female', opacity: 0.6
            },

        ],
        //Initializing Chart Title
        title: 'Height vs Weight',
        //Initializing Tooltip
        tooltip: {
            enable: true,
            format: 'Weight: <b>${point.x} lbs</b> <br/> Height: <b>${point.y}"</b>'
        },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
           // custom code start
        load: function (args) {
            var scatterTheme = location.hash.split('/')[1];
            scatterTheme = scatterTheme ? scatterTheme : 'Material';
            args.chart.theme = (scatterTheme.charAt(0).toUpperCase() + 
                scatterTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#scatter-container');
};