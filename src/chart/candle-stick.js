
/**
 * Sample for Candle Series
 */
    var _this = this;
    var pointColors = [];
    var getLabelText = function (value) {
        return (((value) / 1000000000)).toFixed(1) + 'bn';
    };
    this.renderChart2 = function (chartData) {
        var chart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'DateTime', crosshairTooltip: { enable: true }, majorGridLines: { width: 0 },
            },
            primaryYAxis: {
                title: 'Volume', valueType: 'Logarithmic', opposedPosition: true, majorGridLines: { width: 1 }, lineStyle: { width: 0 },
                stripLines: [
                    {
                        end: 1300000000, startFromAxis: true, text: '', color: 'black', visible: true,
                        opacity: 0.03, zIndex: 'Behind'
                    }
                ]
            },
            axes: [{
                    name: 'secondary', opposedPosition: true, rowIndex: 1, majorGridLines: { width: 1 },
                    labelFormat: 'n0', title: 'Price', plotOffset: 30, lineStyle: { width: 0 }, rangePadding: 'None'
                }],
            rows: [{ height: '30%' }, { height: '70%' }],
            series: [
                { type: 'Column', dataSource: chartData, animation: { enable: true }, xName: 'x', yName: 'volume', name: 'Volume' },
                {
                    type: 'Candle', yAxisName: 'secondary', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                    dataSource: chartData, animation: { enable: true }, volume: 'volume',
                    xName: 'x', low: 'low', high: 'high', open: 'open', close: 'close', name: 'Apple Inc',
                }
            ], tooltip: { enable: true, shared: true },
            tooltipRender: function (args) {
                if (!args.series.index) {
                    args.text = 'Volume : <b>' + getLabelText(args.text.split('<b>')[1].split('</b>')[0]) + '</b>';
                }
            },
            pointRender: function (args) {
                if (args.series.type === 'Candle') {
                    pointColors.push(args.fill);
                }
                else {
                    args.fill = pointColors[args.point.index];
                }
            },
            axisLabelRender: function (args) {
                if (args.axis.name === 'primaryYAxis') {
                    args.text = getLabelText(+args.text);
                }
                if (args.axis.name === 'secondary') {
                    args.text = '$' + args.text;
                }
            },
             // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            },
             // custom code end
            width: ej.base.Browser.isDevice ? '100%' : '80%', chartArea: { border: { width: 0 } },
            crosshair: { enable: true, lineType: 'Vertical' }
        });
        chart.appendTo('#container');
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
            _this.renderChart2(chartData);
        };
    };