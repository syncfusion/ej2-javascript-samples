/**
 * Sample for Bar Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'Category',
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },
            lineStyle: { width: 0 },
            edgeLabelPlacement: 'Shift',
            enableWrap: true,
            maximumLabelWidth: 100
        },

        primaryYAxis: {
            visible: false,
        },

        //Initializing Chart Series
        series: [
            {
                type: 'Bar',
                dataSource: [
                    { Company: 'Tata Motors',                         Revenue: 52.9  },
                    { Company: 'State Bank of India',                 Revenue: 71.8  },
                    { Company: 'Oil and Natural Gas Corporation',     Revenue: 77.5  },
                    { Company: 'Indian Oil Corporation',              Revenue: 93.8  },
                    { Company: 'Life Insurance Corporation of India', Revenue: 98.0  },
                    { Company: 'Reliance Industries',                 Revenue: 108.8 }
                ],
                xName: 'Company',
                yName: 'Revenue',
                columnWidth: 0.75,
                columnSpacing: 0.25,
                cornerRadius: {
                    topLeft: 10,
                    topRight: 10,
                    bottomLeft: 10,
                    bottomRight: 10
                },
                // Initializing the Gradient colors
                linearGradient: {
                    x1: 0, y1: 0,
                    x2: 1, y2: 0,
                    gradientColorStop: [
                        { color: '#1a9fd4', offset: 0,   opacity: 1 },
                        { color: '#9b4dca', offset: 50,  opacity: 1 },
                        { color: '#f95d8f', offset: 100, opacity: 1 }
                    ]
                },
                marker: {
                    dataLabel: {
                        visible: true,
                        position: 'Outer',
                        format: '{value} B'
                    }
                }
            }
        ],

        // Initializing the tooltip
        tooltip: {
            enable: true,
            format: '${point.x}: <b>${point.y} B</b>'
        },

        //Initializing Chart title
        title: 'Leading Revenue Drivers in India: 2024 Rankings',
        subTitle: 'Source: Wikipedia (Forbes 2024) | Revenue in USD Billions',
        legendSettings: {
            visible: false
        },

        width: ej.base.Browser.isDevice ? '100%' : '90%',
        chartArea: {
            border: {
                width: 0
            }
        },
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
        // custom code end
    });
    chart.appendTo('#bar-gradient-container');
};