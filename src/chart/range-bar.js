/**
 * Sample for Range Bar series
 */
var rangeBarData = [
    { country: 'Solomon Islands', low: 44, high: 134 },
    { country: 'Tonga', low: 52, high: 131 },
    { country: 'Trinidad and Tobago', low: 36, high: 151 },
    { country: 'Samoa', low: 49, high: 131 },
    { country: 'Saint Lucia', low: 39, high: 148 },
    { country: 'Georgia', low: 68, high: 122 },
    { country: 'Peru', low: 56, high: 141 },
    { country: 'Grenada', low: 41, high: 147 },
    { country: 'Dominica', low: 46, high: 143 },
    { country: 'Ukraine', low: 64, high: 148 },
    { country: 'Colombia', low: 64, high: 134 }
];
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 }
        },

        //Initializing Primary Y Axis
        primaryYAxis: {
            labelFormat: '{value}',
            minimum: 0,
            maximum: 200,
            interval: 20,
            edgeLabelPlacement: 'Shift',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            title: 'Growth in Visa-Free Destinations',
            labelRotation: ej.base.Browser.isDevice ? -45 : 0
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'RangeColumn', xName: 'country', high: 'high', low: 'low', columnSpacing: 0.4,
                marker: { dataLabel: { visible: true, position: 'Outer' } },
                dataSource: rangeBarData, cornerRadius: { topLeft: 4, topRight: 4, bottomLeft: 4, bottomRight: 4 }
            }
        ],
        isTransposed: true,
        tooltip: {
            enable: true,
            format: '${point.x}: <b>${point.low} - ${point.high}</b>'
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        legendSettings: { visible: false },
        //Initializing Chart Title
        title: 'Global Passport Rankings: Growth in Visa-Free Access (2006–2024)',
        subTitle: 'Source: wikipedia.org',
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