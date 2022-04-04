/**
 * Sample for Range Area series
 */
this.default = function () {
    var series1 = [];
    var value = 35;
    var point1;
    for (var i = 1; i < 360; i++) {
        if (Math.random() > 0.5) {
            value += Math.random();
        }
        else {
            value -= Math.random();
        }
        point1 = {
            x: new Date(2015, 0, i),
            high: value, low: value - 10
        };
        series1.push(point1);
    }
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            labelFormat: '{value}˚C',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        //Initializing Zooming
        zoomSettings: {
            enableSelectionZooming: true,
            mode: 'X'
        },
        //Initializing Chart Series
        series: [
            {
                type: 'RangeArea', marker: { visible : false },
                name: 'India',
                dataSource: series1,
                xName: 'x', high: 'high', low: 'low', opacity: 0.4,
                border: { width: 2 }
            }
        ],
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        //Initializing Chart Title
        title: 'Temperature Variation',
        seriesRender: function (args) {
            var theme = args.series.chart.theme;
            var color;
            if (theme === 'Material') {
                color = '#008E83';
            } else if (theme === 'Bootstrap') {
                color = '#7953AC';
            } else {
                color = '#335693';
            }
            args.series.border.color = color;
        },
        legendSettings: { visible: false },
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#range-container1');
};