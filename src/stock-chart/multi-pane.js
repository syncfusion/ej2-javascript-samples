this.default = function () {
        var stockChart = new ej.charts.StockChart({
            rows: [{ height: '30%' }, { height: '70%' }],
            chartArea: { border: { width: 0 } },
            primaryXAxis: { valueType: 'DateTime', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } },
            primaryYAxis: {
                lineStyle: { color: 'transparent' },
                majorTickLines: { color: 'transparent', height: 0 },
                
            },
            axes: [{
                    name: 'yAxis1', rowIndex: 1, opposedPosition: true, labelPosition: 'Inside',
                    tickPosition: 'Inside',
                    lineStyle: { color: 'transparent' },
                    majorTickLines: { color: 'transparent' }
                }],
            series: [
                {
                    dataSource: window.chartData, 
                    type: 'Candle', yAxisName: 'yAxis1', name: "Apple Inc",
                },
                {
                    dataSource: window.chartData, 
                    type: 'Column', yName: 'volume', enableTooltip: false, name: "Volume",
                }
            ],
            legendSettings: {
                visible: true,
              },
            tooltipRender: function (args) {
                if (args.text.split('<br/>')[4]) {
                    var target = parseFloat(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0]);
                    var value = (target / 100000000).toFixed(1) + 'B';
                    args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
                }
            },
            axisLabelRender : function (args ) {
                var text  = parseFloat(args.text);
                if (args.axis.name === 'primaryYAxis') {
                    args.text = text / 100000000 + 'B';
                }
            },
            crosshair: { enable: true },
            title: 'AAPL Historical',
            tooltip: { enable: true, format:'High : <b>${point.high}</b><br/>Low :<b>${point.low}</b><br/>Open : <b>${point.open}</b><br/>Close : <b>${point.close}</b><br/>Volume : <b>${point.volume}</b>' },
            // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
                args.stockChart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            }
            // custom code end
        });
        stockChart.appendTo('#container');
    };
 