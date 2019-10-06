/**
 * Sample for range navigator with datetime axis
 */
var _this = this;
var selectedTheme = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Material';
var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
var themes = ['Material', 'Fabric', 'Bootstrap', 'Highcontrast'];
var borderColor = ['#00bdae', '#4472c4', '#a16ee5', '#79ECE4'];
var regionColor = ['rgba(0, 189, 174, 0.3)', 'rgba(68, 114, 196, 0.3)',
    'rgba(161, 110, 229, 0.3)', 'rgba(121, 236, 228, 0.3)'];
this.renderDateTimeChart = function (dataSource) {
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }
        },
        series: [{
            dataSource: dataSource, xName: 'x', yName: 'y', width: 2, name: 'Rate', type: 'Spline'
        }],
        chartArea: { border: { width: 0 } },
        tooltip: { enable: true, shared: true },
        primaryYAxis: {
            labelFormat: 'n1', minimum: 0.6,
            maximum: 1, interval: 0.1, majorTickLines: { width: 0 }, lineStyle: { width: 0 }
        },
        axisLabelRender: function (args) {
            if (args.axis.name === 'primaryYAxis') {
                args.text = '€' + args.text;
            }
        },
        height: '350', legendSettings: { visible: false },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        theme: theme
    });
    chart.appendTo('#chart');
    var range = new ej.charts.RangeNavigator({
        valueType: 'DateTime',
        majorTickLines: {
            width: 0
        },
        tooltip: { enable: true, format: 'yyyy/MM/dd', displayMode: 'Always' },
        value: [new Date('2011-01-01'), new Date('2013-12-31')],
        series: [
            {
                dataSource: dataSource, xName: 'x', yName: 'y', type: 'Area',
                width: 2, animation: { enable: false },
                fill: 'url(#' + theme.toLowerCase() + '-gradient-chart)',
                border: { width: 2, color: borderColor[themes.indexOf(theme)] }
            }
        ],
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
    var dataSource;
    var ajax = new ej.base.Ajax('./src/range-navigator/data-source/stock-data.json', 'GET', true);
    ajax.send().then();
    ajax.onSuccess = function (data) {
        dataSource = JSON.parse(data);
        dataSource.map(function (data) {
            data.x = new Date(data.x);
        });
        _this.renderDateTimeChart(dataSource);
    };
};