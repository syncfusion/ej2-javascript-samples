/**
 * Sample for Cylindrical Column Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            majorGridLines: { width: 0 },
            labelIntersectAction: ej.base.Browser.isDevice ? 'None' : 'Trim',
            labelRotation: ej.base.Browser.isDevice ? -45 : 0,
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        chartArea: { border: { width: 0 } },
        primaryYAxis:
        {
            title: 'Total Renewable Power (TWh)',
            labelFormat: '{value}TWh',
            minimum: 150,
            maximum: 400,
            interval: 50,
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', columnFacet: 'Cylinder', name: 'India', xName: 'year', yName: 'energy', columnSpacing: 0.3,
                dataSource: [
                    { year: '2017 - 18', energy: 228.0 },
                    { year: '2018 - 19', energy: 261.8 },
                    { year: '2019 - 20', energy: 294.3 },
                    { year: '2020 - 21', energy: 297.5 },
                    { year: '2021 - 22', energy: 322.6 },
                    { year: '2022 - 23', energy: 365.59 }
                ]
            }
        ],
        //Initializing Chart title
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        title: 'Year-wise Renewable Energy Generation Trends in India',
        subTitle: 'Source: wikipedia.org',
        tooltip: {
            enable: true,
            header: '<b>${point.x}</b>',
            format: '${series.name}: <b>${point.y}</b>'
        },
        legendSettings: { visible: false },
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
        // custom code end
    });
    chart.appendTo('#cylinder-container');
};