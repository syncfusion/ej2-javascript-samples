/**
 * Sample for empty points
 */
var _this = this;
var startDate = new Date(2012, 4, 2);
var selectedTheme = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Material';
var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
var themes = ['Material', 'Fabric', 'Bootstrap', 'Highcontrast'];
var borderColor = ['#00bdae', '#4472c4', '#a16ee5', '#79ECE4'];
var regionColor = ['rgba(0, 189, 174, 0.3)', 'rgba(68, 114, 196, 0.3)',
    'rgba(161, 110, 229, 0.3)', 'rgba(121, 236, 228, 0.3)'];
this.renderEmptyPointChart = function (stockData) {
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'DateTime', crosshairTooltip: { enable: true },
            edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }
        },
        series: [{
            dataSource: stockData, xName: 'x', yName: 'open', type: 'Area', name: 'AAPL',
            fill: 'url(#' + theme.toLowerCase() + '-gradient-chart)',
            border: { width: 2, color: borderColor[themes.indexOf(theme)] }
        }],
        chartArea: { border: { width: 0 } },
        primaryYAxis: {
            labelFormat: '${value}', minimum: 40, maximum: 140, interval: 20,
            majorTickLines: { width: 0 }, lineStyle: { width: 0 }
        },
        tooltip: { enable: true, shared: true },
        height: '350', legendSettings: { visible: false },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        theme: theme
    });
    chart.appendTo('#chart');
    var range = new ej.charts.RangeNavigator({
        labelPosition: 'Outside',
        valueType: 'DateTime',
        majorTickLines: {
            width: 0
        },
        majorGridLines: {
            width: 0
        },
        tooltip: { enable: true, displayMode: 'Always' },
        value: [new Date('2013-12-27'), new Date('2015-03-23')],
        navigatorBorder: { width: 0 },
        series: [{
            dataSource: stockData, xName: 'x', yName: 'open', type: 'Area', width: 2, animation: { enable: false },
            fill: 'url(#' + theme.toLowerCase() + '-gradient-chart)',
            border: { width: 2, color: borderColor[themes.indexOf(theme)] }
        }],
        changed: function (args) {
            chart.primaryXAxis.zoomFactor = args.zoomFactor;
            chart.primaryXAxis.zoomPosition = args.zoomPosition;
            chart.dataBind();
        },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        theme: theme
    });
    range.appendTo('#container');
};
this.default = function () {
    var dataSrc;
    var stockData = [];
    var ajax = new ej.base.Ajax('./src/range-navigator/data-source/empty-data.json', 'GET', true);
    ajax.send().then();
    ajax.onSuccess = function (data) {
        dataSrc = JSON.parse(data);
        dataSrc.map(function (data) {
            data.x = new Date(data.x);
        });
        for (var i = 0; i <= 250; i++) {
            stockData.push(dataSrc[i]);
            if (i > 45 && 50 > i) {
                stockData[i].open = null;
            }
            else if (i > 95 && 100 > i) {
                stockData[i].open = null;
            }
            else if (i > 145 && 150 > i) {
                stockData[i].open = null;
            }
            else if (i > 195 && 200 > i) {
                stockData[i].open = null;
            }
            else if (i > 245 && 250 > i) {
                stockData[i].open = null;
            }
        }
        _this.renderEmptyPointChart(stockData);
    };
};