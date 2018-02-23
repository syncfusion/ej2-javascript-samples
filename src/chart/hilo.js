/**
 * Sample for Hilo Series
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
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Price',
            minimum: 100,
            maximum: 180,
            interval: 20,
            labelFormat: '${value}',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        legendSettings: { visible: false },
        //Initializing Chart Series
        series: [
            {
                type: 'Hilo',
                dataSource:  returnValue, animation: { enable: true },
                xName: 'x', low: 'low', high: 'high', name: 'Apple Inc'
            }
        ],
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