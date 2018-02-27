/**
 * Sample for ADI Indicator
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            majorGridLines: { width: 0 },
            zoomFactor: 0.1,
            crosshairTooltip: { enable: true }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Price',
            labelFormat: '${value}',
            minimum: 50, maximum: 170,
            interval: 30, rowIndex: 1,
            plotOffset: 25, 
            opposedPosition: true, lineStyle: { width: 0 }
        },
        //Initializing Rows
        rows: [ { height: '40%' }, { height: '60%' } ],
        //Initializing Axes
        axes: [{
                name: 'secondary',
                opposedPosition: true, rowIndex: 0,
                majorGridLines: { width: 0 }, 
                minimum: -7000000000, 
                maximum: 5000000000,
                lineStyle: { width: 0 }, 
                interval: 6000000000, 
                majorTickLines: { width: 0 }, 
                title: 'Accumulation Distribution',
                stripLines: [
                    {
                        start: -7000000000, opacity: 0.1, zIndex: 'Behind',
                        end: 6000000000, text: '', color: '#6063ff', visible: true,
                    }
                ]
            }],
        //Initializing Chart Series
        series: [{
                dataSource: window.chartData, width: 2, name: 'Apple Inc', 
                xName: 'x', yName: 'y', 
                low: 'low', high: 'high', close: 'close', volume: 'volume', open: 'open',
                bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                type: 'Candle', animation: { enable: true }
            }],
        //Initializing Technical Indicator
        indicators: [{
                type: 'AccumulationDistribution', 
                field: 'Close', seriesName: 'Apple Inc', yAxisName: 'secondary', fill: '#6063ff',
                period: 3, animation: { enable: true }
            }],
        //Initializing User Interaction Zoom, Tooltip and Crosshair
        zoomSettings: {
            enableSelectionZooming: true,
            mode: 'X',
            enablePan: true
        },
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true, shared: true
        },
        axisLabelRender: function (args) {
            if (args.axis.name === 'secondary') {
                var value = Number(args.text) / 1000000000;
                args.text = String(value) + 'bn';
            }
        },
        chartArea: { border: { width: 0 } },
        //Initializing Chart Title
        title: 'AAPL 2012-2017',
        //Initializing User Interaction Crosshair
        crosshair: { enable: true, lineType: 'Vertical' },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        load: function (args) {
            var adiTheme = location.hash.split('/')[1];
            adiTheme = adiTheme ? adiTheme : 'Material';
            args.chart.theme = (adiTheme.charAt(0).toUpperCase() + adiTheme.slice(1));
        },
        legendSettings: { visible: false },
    });
    chart.appendTo('#adi-container');
};