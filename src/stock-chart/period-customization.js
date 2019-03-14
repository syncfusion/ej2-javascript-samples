 window.default = function () {
        var series1 = [];
        var point1;
        var value = 80;
        var i;
        for (i = 1; i < 1440; i++) {
            if (Math.random() > 0.5) {
                value += Math.random();
            }
            else {
                value -= Math.random();
            }
            point1 = { x: new Date(2000, 1, 1, 0, i), y: value.toFixed(1) };
            series1.push(point1);
        }
        var stockChart = new ej.charts.StockChart({
            primaryXAxis: { 
                valueType: 'DateTime', 
                majorGridLines: { color: 'transparent' },
                crosshairTooltip: { enable: true } 
             },
            primaryYAxis: {
                lineStyle: { color: 'transparent' },
                majorTickLines: { color: 'transparent', width: 0 },
                crosshairTooltip: { enable: true } 
            },
            chartArea: { border: { width: 0 } },
            series: [
                {
                    dataSource: series1, xName: 'x', yName: 'y', type: 'Line'
                }
            ],
            crosshair: {
                enable: true,  
            },    
            seriesType: [],
            indicatorType: [],
            exportType: [],
            trendlineType : [],
            title: 'AAPL stock price by minutes',
            titleStyle: { fontWeight: '500', color: '#424242' },
            periods: [
                { intervalType: 'Minutes', interval: 1, text: '1m' },
                { intervalType: 'Minutes', interval: 30, text: '30m' },
                { intervalType: 'Hours', interval: 1, text: '1H' },
                { intervalType: 'Hours', interval: 12, text: '12H', selected: true },
                { text: '1D' }
            ],
            // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.stockChart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark');
            }
            // custom code end
        });
        stockChart.appendTo('#container');
    };
