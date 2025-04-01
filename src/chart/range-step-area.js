/**
 * Sample for Stochastic Indicator
 */
var renderChartSto =function () {
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'dd MMM',
            edgeLabelPlacement: (ej.base.Browser.isDevice) ? 'Shift' : 'Hide',
            majorGridLines: { width: 0 } 
        },
        chartArea: {
            border: {
              width: 0,
            },
          },
        primaryYAxis: {
            labelFormat: '{value}˚C',
            lineStyle: { width: 0 },
            minimum: -10,
            maximum: 25,
            interval: 5,
            majorTickLines: { width: 0 }
        },
     
        series: [  {
            type: 'RangeStepArea',
            dataSource: window.chartDatas,
            xName: 'x', high: 'high', low: 'low', opacity: 0.5,
            border: { width:2 },
            marker: {
                visible: false,
            }
        }],
        tooltip: {
            enable: true,
            format: 'Temperature : <b>${point.low} - ${point.high}</b>',
            shared: false,
            header: '<b>${point.x}</b>'
        },
        title: "Temperature Variation by Month",
        width: ej.base.Browser.isDevice ? '100%' : '70%',
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            switch (selectedTheme) {
                case 'bootstrap5':
                    {
                        chart.series[0].fill = '#BDD9F5';
                        chart.series[0].border.color = '#539DE3';
                    }
                    break;
                case 'fluent':
                    {
                        chart.series[0].fill = '#C3A6DB';
                        chart.series[0].border.color = '#9E71C2';
                    }
                    break;
            }
        },
           // custom code start
        legendSettings: { visible: false }
    });
    chart.appendTo('#range-step-area-container');
};
this.default = function () {
        renderChartSto();
    };
