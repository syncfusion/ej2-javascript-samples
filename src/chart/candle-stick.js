
/**
 * Sample for Candle Series
 */
    var _this = this;
    var pointColors = [];
    var getLabelText = function (value) {
        return (((value) / 10000000))+ 'M';
    };
    this.renderChart2 = function () {
        var chart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'DateTime', crosshairTooltip: { enable: false }, majorGridLines: { width: 0 },
            },
            primaryYAxis: {
                title: 'Volume', opposedPosition: true, majorGridLines: { width: 1 }, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, 
                stripLines: [
                    {
                        end: 1300000000, startFromAxis: true, text: '', color: 'black', visible: true,
                        opacity: 0.03, zIndex: 'Behind'
                    }
                ]
            },
            axes: [{
                    name: 'secondary', opposedPosition: true, rowIndex: 1, majorGridLines: { width: 1 },
                    labelFormat: 'n0', title: 'Price', plotOffset: 20, lineStyle: { width: 0 }, rangePadding: 'None', maximum: 150
                }],
            rows: [{ height: '30%' }, { height: '70%' }],
            series: [
                { type: 'Column', dataSource: chartValue,  enableTooltip: false, xName: 'period', yName: 'volume' },
                {
                    type: 'Candle', yAxisName: 'secondary', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                    dataSource: chartValue, volume: 'volume',
                    xName: 'period', low: 'low', high: 'high', open: 'open', close: 'close',
                }
            ], tooltip: { enable: true, shared: true, header:'', format: '<b>Apple Inc.(AAPL)</b> <br> High : <b>${point.high}</b> <br> Low : <b>${point.low}</b> <br> Open : <b>${point.open}</b> <br> Close : <b>${point.close}</b> <br> Volume : <b>${point.volume}</b>' },
            sharedTooltipRender: function (args) {
               if (!args.series[0].index) {
                    args.text[0] = 'Volume : <b>' + getLabelText(args.text[0].split('<b>')[1].split('</b>')[0]) + '</b>';
                }
            },
            axisLabelRender: function (args) {
                if (args.axis.name === 'primaryYAxis') {
                    args.text = getLabelText(+args.text);
                }
            },
             // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
                args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            },
             // custom code end
            width: ej.base.Browser.isDevice ? '100%' : '75%', chartArea: { border: { width: 0 } },
            title: 'AAPL Historical',
            crosshair: { enable: true, lineType: 'None' }
        });
        chart.appendTo('#container');
    };
    this.default = function () {
            _this.renderChart2();
        };
