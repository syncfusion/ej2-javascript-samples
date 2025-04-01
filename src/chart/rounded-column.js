
/**
 * Sample for Column series with rounded corners
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelPosition: 'Outside',
            labelIntersectAction: ej.base.Browser.isDevice ? 'None' : 'Rotate45'
        },
        chartArea: { border: { width: 0 } },
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 0,
            maximum: 50,
            title: 'Sector-wise Growth (%)',
            labelFormat: '{value}%',
            interval: 10,
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            opposedPosition: true
        },

        //Initializing Chart Series
        series: [
            {
                type: 'Bar', xName: 'x', yName: 'y',
                dataSource: [
                    { x: 'Healthcare', y: 0.9, text: '0.9%' },
                    { x: 'Real Estate', y: 1.3, text: '1.3%' },
                    { x: 'Energy', y: 2.3, text: '2.3%' },
                    { x: ej.base.Browser.isDevice ? 'Consumer <br> Staples' : 'Consumer Staples', y: 12.0, text: '12.0%' },
                    { x: 'Industrials', y: 15.6, text: '15.6%' },
                    { x: 'Utilities', y: 19.6, text: '19.6%' },
                    { x: ej.base.Browser.isDevice ? 'S&P <br> 500 Average' : 'S&P 500 Average', y: 23.3, text: '23.3%' },
                    { x: 'Financials', y: 28.4, text: '28.4%' },
                    { x: ej.base.Browser.isDevice ? 'Consumer <br> Discretionary' : 'Consumer Discretionary', y: 29.1, text: '29.1%' },
                    { x: ej.base.Browser.isDevice ? 'Information <br> Technology' : 'Information Technology', y: 35.7, text: '35.7%' },
                    { x: ej.base.Browser.isDevice ? 'Communication <br> Services' : 'Communication Services', y: 38.9, text: '38.9%' }
                ],
                cornerRadius: { bottomLeft: ej.base.Browser.isDevice ? 8 : 10, bottomRight: ej.base.Browser.isDevice ? 8 : 10, topLeft: ej.base.Browser.isDevice ? 8 : 10, topRight: ej.base.Browser.isDevice ? 8 : 10 }, columnWidth: 0.5,
                marker: { dataLabel: { visible: true, name: 'text', enableRotation: false, angle: -90, font: { fontWeight: '600' } } }
            }
        ],
        legendSettings: { visible: false },
        //Initializing Chart title
        title: 'Top Performing Market Sectors by Growth Rate (2024)',
        subTitle: 'Source: visualcapitalist.com',
        titleStyle: { position: 'Bottom' },
        tooltip: { enable: true, header: "<b>${point.x}</b>", format: "Growth Rate : <b>${point.text}</b>" },
        width: ej.base.Browser.isDevice ? '100%' : '77%',
        height: '500px',
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
        // custom code end
    });
    chart.appendTo('#column-container');
};