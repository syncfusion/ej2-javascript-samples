/**
 * Sample for Candle Series
 */
this.default = function () {
    var getLabelText = function(value) {
        return (((value) / 1000000000)).toFixed(1) + 'bn';
    };
    var date1 = new Date('2017-01-01');
    var returnValue = chartData.filter(filterValue);
    function filterValue(value) {         
        return value.x >= date1;
    }
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            minimum: new Date('2016-12-31'),
            maximum: new Date('2017-09-31'),
            crosshairTooltip: { enable: true },
            majorGridLines: { width: 0 },
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            title: 'Volume',
            labelFormat: '{value}',
            valueType: 'Logarithmic',
            minimum: 500000000, maximum: 130000000, opposedPosition: true,
            majorGridLines: { width: 1 },
            lineStyle: { width: 0 },
            stripLines: [
                {
                    end: 1300000000, startFromAxis: true, text: '', color: 'black', visible: true,
                    opacity: 0.03, zIndex: 'Behind'
                }
            ]
        },
        //Initializing Rows
        rows: [
            {
                height: '30%'
            }, {
                height: '70%'
            }
        ],
        //Initializing Axes
        axes: [{
                name: 'secondary', minimum: 100, maximum: 180, interval: 20, opposedPosition: true, rowIndex: 1, majorGridLines: { width: 1 },
                labelFormat: '${value}', title: 'Price', plotOffset: 30, lineStyle: { width: 0 }
            }],
        //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: returnValue, animation: { enable: true }, xName: 'x', yName: 'volume',
                name: 'Volume'
            },
            {
                type: 'Candle', yAxisName: 'secondary', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                dataSource: returnValue, animation: { enable: true },
                xName: 'x', low: 'low', high: 'high', open: 'open', close: 'close', name: 'Apple Inc',
                volume: 'volume'
            }
        ],
        //Initializing Chart Title
        title: 'AAPL Historical',
        //Initializing Tooltip
        tooltip: {
            enable: true, shared: true
        },
        tooltipRender: function(args) {
            if (!args.series.index) {
                args.text = 'Volume : <b>' +
                    getLabelText(args.text.split('<b>')[1].split('</b>')[0]) + '</b>';
            }
        },
        axisLabelRender: function (args) {
            if (args.axis.name === 'primaryYAxis') {
                args.text = getLabelText(+args.text);
            }
        },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        chartArea: { border: { width: 0 } },
        //Initializing Crosshair
        crosshair: { enable: true, lineType: 'Vertical' },
        load: function (args) {
            var candleTheme = location.hash.split('/')[1];
            candleTheme = candleTheme ? candleTheme : 'Material';
            args.chart.theme = (candleTheme.charAt(0).toUpperCase() + candleTheme.slice(1));
        }
    });
    chart.appendTo('#candle-container');
};