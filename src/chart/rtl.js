var labelRender = function (args) {
    if (args.axis.orientation === 'Horizontal') {
        args.cancel = args.value === 2015 || args.value === 2020;
    }
};
/**
 * Sample for Column Series
 */
 this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Double', majorGridLines: { width: 0 },
            minimum: 2015, maximum: 2020, interval: 1
        },
        chartArea: { border: { width: 0 } },
        //Initializing Primary X Axis
        primaryYAxis: {
            valueType: 'Double', minimum: 0, maximum: 1200, interval: 200,
            lineStyle: { width: 0 }, labelFormat: '{value}B'
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Sales',
                dataSource: [{ x: 2016, y: 1000 }, { x: 2017, y: 970}, { x: 2018, y: 1060 }, { x: 2019, y: 1030 }]
            },
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Expense',
                dataSource: [{ x: 2016, y: 400 }, { x: 2017, y: 360 }, { x: 2018, y: 920 }, { x: 2019, y: 540 }]
            },
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Profit',
                dataSource: [{ x: 2016, y: 600 }, { x: 2017, y: 610 }, { x: 2018, y: 140 }, { x: 2019, y: 490 }]
            }
        ],
        //Initializing Chart Title
        title: 'Company Performance', tooltip: { enable: true },
        enableRtl: true,
        width: ej.base.Browser.isDevice ? '100%' : '60%',
        axisLabelRender: labelRender,
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
         // custom code end
    });
    chart.appendTo('#container');
};