/**
 * Sample for Hilo Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            skeleton: 'yMd', zoomFactor: 0.2, zoomPosition: 0.6,
            crosshairTooltip: { enable: true },
            majorGridLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Price',
            minimum: 50,
            maximum: 170,
            interval: 30,
            labelFormat: '${value}',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        legendSettings: { visible: false },
        //Initializing Chart Series
        series: [
            {
                type: 'Hilo',
                dataSource: window.chartData, animation: { enable: true },
                xName: 'x', low: 'low', high: 'high', name: 'Apple Inc'
            }
        ],
        //Initializing Tooltip
        zoomSettings: {
            enableMouseWheelZooming: true,
            enablePinchZooming: true,
            enableSelectionZooming: true,
            mode: 'X'
        },
        //Initializing Chart Title
        title: 'AAPL Historical',
        //Initializing Tooltip
        tooltip: {
            enable: true, shared :true
        },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        //Initializing Crosshair
        crosshair: { 
            enable: true, lineType: 'Vertical', line: {
            width: 0 },
        },
        load: function (args) {
            var hiloTheme = location.hash.split('/')[1];
            hiloTheme = hiloTheme ? hiloTheme : 'Material';
            args.chart.theme = (hiloTheme.charAt(0).toUpperCase() + hiloTheme.slice(1));
        }
    });
    chart.appendTo('#hilo-container');
};