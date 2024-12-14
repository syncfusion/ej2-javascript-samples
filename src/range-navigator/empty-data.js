/**
 * Sample for empty points
 */
var _this = this;
var startDate = new Date(2012, 4, 2);
var selectedTheme = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
var themes = ['Material', 'Fabric', 'Bootstrap', 'HighContrast', 'Bootstrap5', 'Tailwind', 'MaterialDark', 'FabricDark', 'BootstrapDark', 'TailwindDark', 'Fluent', 'FluentDark', 'Material3', 'Material3Dark', 'Bootstrap5Dark', 'Fluent2', 'Fluent2HighContrast', 'Fluent2Dark', 'tailwind3', 'tailwind3dark'];
var borderColor = ['#00bdae', '#4472c4', '#a16ee5', '#79ECE4', '#FD7E14', '#5A61F6', '#00bdae', '#4472c4', '#a16ee5', '#8B5CF6', '#1AC9E6', '#1AC9E6', '#6355C7', '#4EAAFF', '#FD7E14', '#6200EE', '#9BB449', '#9BB449', '#2F4074', '#8029F1'];
var regionColor = ['rgba(0, 189, 174, 0.3)', 'rgba(68, 114, 196, 0.3)',
    'rgba(161, 110, 229, 0.3)', 'rgba(121, 236, 228, 0.3)', 'rgba(99, 85, 199, 0.3)', 'rgba(79, 70, 229, 0.3)',
    'rgba(0, 189, 174, 0.3)', 'rgba(68, 114, 196, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(26, 201, 230, 0.3)', 'rgba(26, 201, 230, 0.3)','rgba(99, 85, 199, 0.3)', 'rgba(78, 170, 255, 0.3)', 'rgba(143, 128, 244, 0.3)', 'rgba(98, 0, 238, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(47, 64, 116, 0.3)', 'rgba(128, 41, 241, 0.3)'];
this.renderEmptyPointChart = function (stockData) {
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'DateTime', crosshairTooltip: { enable: true },
            edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }
        },
        series: [{
            dataSource: stockData, xName: 'x', yName: 'open', type: 'Area', name: 'AAPL',
            fill: 'url(#' + selectedTheme + '-gradient-chart)',
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
            fill: 'url(#' + selectedTheme + '-gradient-chart)',
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
    var fetchApi = new ej.base.Fetch('./src/range-navigator/data-source/empty-data.json', 'GET', true);
    fetchApi.send().then();
    fetchApi.onSuccess = function (data) {
        dataSrc = data;
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