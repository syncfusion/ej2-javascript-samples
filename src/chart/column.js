/**
 * Sample for Column Series
 */
var columnData = [
    { country: 'Chile', walnuts: 175000, almonds: 11300 },
    { country: 'European Union', walnuts: 140000, almonds: 135000 },
    { country: 'Turkey', walnuts: 67000, almonds: 24000 },
    { country: 'India', walnuts: 33000, almonds: 4200 },
    { country: 'Australia', walnuts: 12000, almonds: 154000 }
];

this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            labelIntersectAction: ej.base.Browser.isDevice ? 'None' : 'Trim',
            labelRotation: ej.base.Browser.isDevice ? -45 : 0,
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }
        },
        chartArea: { border: { width: 0 }, margin: { bottom: 12 } },
        primaryYAxis:
        {
            title: 'Metric Tons',
            interval: 40000,
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'country', yName: 'walnuts', name: 'Walnuts', columnSpacing: 0.4, legendShape: 'Rectangle',
                dataSource: columnData, cornerRadius: { topLeft: 4, topRight: 4 }
            },
            {
                type: 'Column', xName: 'country', yName: 'almonds', name: 'Almonds', columnSpacing: 0.4, legendShape: 'Rectangle',
                dataSource: columnData, cornerRadius: { topLeft: 4, topRight: 4 }
            }
        ],
        //Initializing Chart title
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        title: 'Walnuts and Almonds Estimated Production for 2023',
        subTitle: 'Source: fas.usda.gov',
        tooltip: { enable: true, header: '<b>${point.x}</b>', format: '${series.name}: <b>${point.y}</b>', enableHighlight: true },
        legendSettings: { visible: true, enableHighlight: true, shapeWidth: 9, shapeHeight: 9 },
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        // custom code end
        axisLabelRender: function (args) {
            var value = parseInt(args.text.replace(/,/g, ''), 10);
            if (value >= 1000) {
                args.text = value / 1000 + 'K';
            }
        },
        tooltipRender: function (args) {
            if (args.text) {
                var value = args.point.y.toLocaleString('en-US');
                args.text = args.series.name + ": <b>" + value + "</b>";
            }
        }
    });
    chart.appendTo('#column-container');
};