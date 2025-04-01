/**
 * Sample for Range Area series
 */
this.default = function () {
    
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'dd MMM',
            edgeLabelPlacement: ej.base.Browser.isDevice ? 'Shift' : 'Hide',
            majorGridLines: { width: 0 },
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            labelFormat: '{value}˚C',
            lineStyle: { width: 0 },
            minimum: -10,
            maximum: 25,
            interval: 5,
            majorTickLines: { width: 0 }, minorTickLine: { width: 0 }
        },
        
        //Initializing Chart Series
        series: [
            {
                type: 'SplineRangeArea',
                dataSource: window.chartDatas,
                xName: 'x', high: 'high', low: 'low', opacity: 0.7, border: { width: 2 }
            },
        ],
        tooltip: {
            enable: true, showNearestTooltip: true,
            format: 'Temperature : <b>${point.low} - ${point.high}</b>',header :'<b>${point.x}</b>' ,
            shared: false
        },
        //Initializing Chart Title
        title: 'Temperature Variation by Month',
        legendSettings: { enableHighlight: true },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    chart.appendTo('#range-container1');
};
