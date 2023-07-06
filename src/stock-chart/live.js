    var series1 = [];
    var point1;
    var value = 80;
    var i;
    var day;
    for (i = 1; i < 500; i++) {
        if (Math.random() > 0.5) {
            value += Math.random();
        }
        else {
            value -= Math.random();
        }
        point1 = { date: new Date(2000, 1, 1, i), y: value.toFixed(1) };
        series1.push(point1);
    }
    var time;
    var stockChart = new ej.charts.StockChart({
        primaryXAxis: { valueType: 'DateTime', majorGridLines: { color: 'transparent' } },
        primaryYAxis: { lineStyle: { color: ' transparent' },
            majorTickLines: { color: 'transparent', height: 0 } },
        chartArea: { border: { width: 0 } },
        seriesType: [],
        indicatorType: [],
        exportType: [],
        series: [
            {
                dataSource: series1, yName: 'y',
                type: 'Line', name: 'series1', enableTooltip: false,
            },
        ],
        periods: [
            { text: '1H', interval: 1, intervalType: 'Hours', },
            { text: '12H', interval: 12, intervalType: 'Hours' },
            { text: '1D', interval: 1, intervalType: 'Days', selected: true },
            { text: 'All' }
        ],
        crosshair: { enable: false },
        tooltip: { enable: false }
    });
    stockChart.appendTo('#container');
    var setTimeoutValue = 1000;
    var intervalId;
    var count = 1;

