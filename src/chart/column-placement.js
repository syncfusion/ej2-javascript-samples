/**
 * Sample for Column series series with Side by Side Placement
 */
var totalData = [
    { country: 'India', population: 1450935791 },
    { country: 'China', population: 1419321278 },
    { country: 'USA', population: 345426571 },
    { country: 'Indonesia', population: 283487931 },
    { country: 'Pakistan', population: 251269164 }
];

var maleData = [
    { country: 'India', male: 748323427 },
    { country: 'China', male: 723023723 },
    { country: 'USA', male: 173551527 },
    { country: 'Indonesia', male: 142407931 },
    { country: 'Pakistan', male: 127433405 }
];

var femaleData = [
    { country: 'India', female: 702612364 },
    { country: 'China', female: 696297555 },
    { country: 'USA', female: 171875044 },
    { country: 'Indonesia', female: 141080014 },
    { country: 'Pakistan', female: 123835758 }
];

this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'Category',
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            interval: 1,
            majorGridLines: { width: 0 },
            labelRotation: ej.base.Browser.isDevice ? -45 : 0
        },
        chartArea: { border: { width: 0 }, margin: { bottom: 12 } },
        primaryYAxis:
        {
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            title: 'Inhabitants (Millions)',
            interval: 300000000
        },
        enableSideBySidePlacement: false,
        // Initialize the chart series
        series: [
            {
                type: 'Column', xName: 'country', yName: 'population', name: 'Total',
                dataSource: totalData, columnWidth: 0.5, cornerRadius: { topLeft: 4, topRight: 4 }, legendShape: 'Rectangle'
            },
            {
                type: 'Column', xName: 'country', yName: 'male', name: 'Male',
                dataSource: maleData, columnWidth: 0.3, cornerRadius: { topLeft: 4, topRight: 4 }, legendShape: 'Rectangle'
            }, {
                type: 'Column', xName: 'country', yName: 'female', name: 'Female',
                dataSource: femaleData, columnWidth: 0.2, cornerRadius: { topLeft: 4, topRight: 4 }, legendShape: 'Rectangle'
            }
        ],
        // Initialize the chart title
        title: 'Population Distribution of the Top 5 Most Populous Countries (2024)',
        subTitle: 'Source: statisticstimes.com',
        tooltip: { enable: true, shared: true },
        legendSettings: { visible: true, shapeWidth: 9, shapeHeight: 9, maximumColumns: 1, position: 'Custom', location: { x: 750, y: 80 } },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            if (selectedTheme.indexOf('Dark') !== -1 || selectedTheme.indexOf('HighContrast') !== -1) {
                args.chart.legendSettings.border = { width: 2, color: '#FFFFFF' };
            } else {
                args.chart.legendSettings.border = { width: 2, color: '#000000' };
            }
        },
        // custom code end
        axisLabelRender: function (args) {
            var value = parseInt(args.text.replace(/,/g, ''), 10);
            if (value >= 1000000) {
                args.text = (value / 1000000).toFixed(0) + 'M';
            }
        },
        sharedTooltipRender: function (args) {
            if (args.text && args.point && args.series) {
                for (var i = 0; i < args.point.length; i++) {
                    if (args.point[i] && args.point[i].y !== undefined) {
                        var formattedValue = args.point[i].y.toLocaleString('en-US');
                        var seriesName = args.series[i] ? args.series[i].name : "Series " + (i + 1);
                        args.text[i] = seriesName + ": <b>" + formattedValue + "</b>";
                    }
                }
            }
        },
        resized: function (args) {
            var maxWidth = args.chart.availableSize.width;
            args.chart.legendSettings.location.x = maxWidth - 115;
        }
    });
    chart.appendTo('#container');
};