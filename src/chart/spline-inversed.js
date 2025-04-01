/**
 * Sample for Inversed Spline Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            minorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            labelPlacement: 'OnTicks'
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        isTransposed: true,
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            labelFormat: '{value}%',
            title: 'Capitalization Ratio (% of GDP)',
            interval: 40,
            edgeLabelPlacement: 'Shift',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            majorGridLines: { width: 0 },
            labelRotation: ej.base.Browser.isDevice ? -45 : 0
        },

        //Initializing Chart Series
        series: [
            {
                type: 'Spline',
                dataSource: [
                    { country: 'United States', y: 194.55 },
                    { country: 'Japan', y: 146.2 },
                    { country: 'China', y: 65.1 },
                    { country: 'France', y: 84.9 },
                    { country: 'India', y: 140.1 },
                    { country: 'Canada', y: 160.7 },
                    { country: 'Brazil', y: 68.4 },
                    { country: 'United Kingdom', y: 100.2 },
                    { country: 'Sweden', y: 162 },
                    { country: 'Netherlands', y: 132.3 },
                    { country: 'Bangladesh', y: 27.7 }
                ],
                width: 2,
                marker: { visible: true, width: 7, height: 7, isFilled: true },
                xName: 'country',
                yName: 'y'
            },
        ],

        //Initializing Chart title
        title: 'Stock Market Capitalization as a Percentage of GDP by Country',
        subTitle: 'Source: wikipedia.org',
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true,
            showNearestTooltip: true,
            header: '<b>Stock Market Cap</b>',
            format: '${point.x}: <b>${point.y}</b>',
            enableHighlight: true
        },
        legendSettings: { visible: false },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
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