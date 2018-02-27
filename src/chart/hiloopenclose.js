/**
 * Sample for Hilo Open Close Series
 */
this.default = function () {
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
            majorGridLines: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Price',
            labelFormat: '${value}',
            minimum: 100, maximum: 180,
            interval: 20,
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
                type: 'HiloOpenClose',
                dataSource:  returnValue, animation: { enable: true },
                bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                xName: 'x', low: 'low', high: 'high', open: 'open', close: 'close', name: 'Apple Inc'
            }
        ],
        //Initializing Chart Title
        title: 'AAPL Historical',
        //Initializing Tooltip
        tooltip: {
            enable: true,
            shared: true
        },
        legendSettings: {
            visible: false
        },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        //Initializing Crosshair
        crosshair: { enable: true, lineType: 'Vertical',line: {
            width: 0 }
        },
        load: function (args) {
            var theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.chart.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
        }
    });
    chart.appendTo('#close-container');
};