/**
 * Sample for Crosshair in chart
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            majorGridLines: { width: 0 },
            valueType: 'DateTime',
            crosshairTooltip: { enable: true },
            labelFormat: 'MMM'
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 83, maximum: 87, interval: 1,
            title: 'Million in USD',
            labelFormat: '{value}M',
            rowIndex: 0,
            crosshairTooltip: {
                enable: true
            }
        },
        //Initializing Axes
        axes: [
            {
                majorGridLines: { width: 0 },
                rowIndex: 0,
                opposedPosition: true,
                minimum: 82, maximum: 88, interval: 2,
                name: 'yAxis',
                title: 'Million in USD (Stock)',
                crosshairTooltip: { enable: true }
            }
        ],
        //Initializing Chart Series
        series: [
            {
                type: 'Line',
                dataSource: window.axesData,
                border: { width: 1.5 },
                xName: 'xDate', width: 2,
                yName: 'High',
                marker: {
                    visible: true
                }
            },
            {
                type: 'HiloOpenClose',
                dataSource: window.axesData,
                yAxisName: 'yAxis',
                border: { width: 1.5 },
                bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                xName: 'xDate', width: 2,
                high: 'High', low: 'Low', open: 'Open', close: 'Close'
            }
        ],
        //Initializing Crosshair
        crosshair: { enable: true },
        legendSettings: { visible: false },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        //Initializing Chart Title
        title: 'Conns,Inc Stock Details',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
         // custom code end
    });
    chart.appendTo('#crosshair-container');
};