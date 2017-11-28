/**
 * Sample for Scatter Series
 */
this.default = function () {
    var series1 = [];
    var series2 = [];
    var point1;
    var value = 80;
    var value1 = 70;
    var i;
    for (i = 1; i < 120; i++) {
        if (Math.random() > 0.5) {
            value += Math.random();
        } else {
            value -= Math.random();
        }
        value = value < 60 ? 60 : value > 90 ? 90 : value;
        point1 = { x: (145 + (i / 3)).toFixed(1), y: value.toFixed(1) };
        series1.push(point1);
    }
    for (i = 1; i < 120; i++) {
        if (Math.random() > 0.5) {
            value1 += Math.random();
        } else {
            value1 -= Math.random();
        }
        value1 = value1 < 60 ? 60 : value1 > 90 ? 90 : value1;
        point1 = { x: (145 + (i / 3)).toFixed(1), y: value1.toFixed(1) };
        series2.push(point1);
    }
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            title: 'Height (cm)',
            minimum: 145,
            maximum: 185,
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift',
            labelFormat: '{value}cm'
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            title: 'Weight (kg)',
            minimum: 60,
            maximum: 90,
            labelFormat: '{value}kg',
            rangePadding: 'None'
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Scatter',
                dataSource: series1,
                xName: 'x', width: 2, marker: {
                    visible: false,
                    width: 8,
                    height: 8
                },
                yName: 'y', name: 'Male', opacity: 0.7
            },
            {
                type: 'Scatter',
                dataSource: series2,
                xName: 'x', width: 2, marker: {
                    visible: false,
                    width: 8,
                    height: 8
                },
                yName: 'y', name: 'Female', opacity: 0.7
            },
        ],
        //Initializing Chart Title
        title: 'Height vs Weight',
        //Initializing Tooltip
        tooltip: {
            enable: true
        },
        width: ej.base.Browser.isDevice ? '100%' : '60%',
        load: function (args) {
            var scatterTheme = location.hash.split('/')[1];
            scatterTheme = scatterTheme ? scatterTheme : 'Material';
            args.chart.theme = (scatterTheme.charAt(0).toUpperCase() + scatterTheme.slice(1));
        }
    });
    chart.appendTo('#scatter-container');
};