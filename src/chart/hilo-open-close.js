/**
 * Sample for Hilo Open Close Series
 */
var _this = this;
this.renderChart = function (chartData) {
        var chart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'DateTime',
                crosshairTooltip: { enable: true },
                majorGridLines: { width: 0 }
            },
            primaryYAxis: {
                title: 'Price',
                labelFormat: 'n0',
                lineStyle: { width: 0 }, rangePadding: 'None',
                majorTickLines: { width: 0 }
            },
            chartArea: { border: { width: 0 } },
            series: [
                {
                    type: 'HiloOpenClose',
                    dataSource: chartData, animation: { enable: true },
                    bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                    xName: 'x', low: 'low', high: 'high', open: 'open', close: 'close', name: 'Apple Inc'
                }
            ],
            tooltip: { enable: true, shared: true },
            crosshair: {
                enable: true, lineType: 'Vertical', line: { width: 0 }
            },
            legendSettings: { visible: false }, width: ej.base.Browser.isDevice ? '100%' : '80%',
            axisLabelRender: function (args) {
                if (args.axis.title === 'Price') {
                    args.text = '$' + args.text;
                }
            },
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
            }
        });
        chart.appendTo('#container');
        var range = new ej.charts.RangeNavigator({
            dataSource: chartData, xName: 'x', yName: 'close',
            disableRangeSelector: true,
            width: ej.base.Browser.isDevice ? '100%' : '80%',
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.rangeNavigator.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
            },
            loaded: function (args) {
                var element = document.getElementById('selector_Secondary_Element');
                if (!ej.base.Browser.isDevice && element) {
                    element.style.transform = 'translate(14%)';
                }
            },
            changed: function (args) {
                var filterData = chartData.filter(function (data) {
                    return (data.x.getTime() >= (args.start) && data.x.getTime() <= (args.end));
                });
                chart.series[0].animation.enable = false;
                chart.series[0].dataSource = filterData;
                chart.refresh();
            },
            periodSelectorSettings: {
                position: 'Top',
                periods: [
                    { text: '1M', interval: 1, intervalType: 'Months' },
                    { text: '3M', interval: 2, intervalType: 'Months' },
                    { text: '2Q', interval: 2, intervalType: 'Quarter' },
                    { text: '1Y', interval: 1, intervalType: 'Years' },
                    { text: '2Y', interval: 2, intervalType: 'Years', selected: true },
                    { text: 'YTD' },
                    { text: 'All' }
                ]
            }
        });
        range.appendTo('#selector');
    };
    this.default = function () {
        var chartData;
        var ajax = new ej.base.Ajax('./src/chart/data-source/financial-data.json', 'GET', true);
        ajax.send().then();
        ajax.onSuccess = function (data) {
            chartData = JSON.parse(data);
            chartData.map(function (data) {
                data.x = new Date(data.x);
            });
            _this.renderChart(chartData);
        };
    };