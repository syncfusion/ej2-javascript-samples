/**
 * Sample for Donut chart
 */
this.default = function () {
    var GradientDonutData = [
        { Country: "Austria",         Share: 38.03, DataLabelMappingName: "Austria: 38.03%"         },
        { Country: "Belgium",         Share: 33.7,  DataLabelMappingName: "Belgium: 33.7%"          },
        { Country: "Germany",         Share: 31.27, DataLabelMappingName: "Germany: 31.27%"         },
        { Country: "The Netherlands", Share: 29.71, DataLabelMappingName: "The Netherlands: 29.71%" },
        { Country: "Lithuania",       Share: 27.72, DataLabelMappingName: "Lithuania: 27.72%"       },
        { Country: "Czechia",         Share: 27.37, DataLabelMappingName: "Czechia: 27.37%"         },
        { Country: "Poland",          Share: 22.1,  DataLabelMappingName: "Poland: 22.1%"           },
        { Country: "Ireland",         Share: 18.87, DataLabelMappingName: "Ireland: 18.87%"         },
        { Country: "Croatia",         Share: 14.88, DataLabelMappingName: "Croatia: 14.88%"         }
    ];
    var baseColors = ['#39B9E6', '#2E79CF', '#4960CF', '#5E47C6', '#8A44C9', '#C24F86', '#D8584E', '#E07245', '#F09A4A'];

    var pie = new ej.charts.AccumulationChart({
        // Initialize the chart series
        series: [{
            type: 'Pie',
            dataSource: GradientDonutData,
            xName: 'Country',
            yName: 'Share',
            innerRadius: '65%',
            radius: '70%',
            name: 'Share by country',
            dataLabel: {
                visible: true,
                name: 'DataLabelMappingName',
                position: 'Outside',
                connectorStyle: { length: '10px' },
                font: { size: '12px' }
            },
            legendShape: 'Rectangle'
        }],
        pointRender: function (args) {
            var idx = args.point.index;
            var base = baseColors[idx % baseColors.length];
            args.radialGradient = {
                cx: 0.5, cy: 0.5, fx: 0.5, fy: 0.5, r: 0.6,
                gradientColorStop: [
                    { offset: 0, color: base, opacity: 1, brighten: 0.2, lighten: 0 },
                    { offset: 45, color: base, opacity: 1, brighten: 0.1, lighten: 0 },
                    { offset: 70, color: base, opacity: 1, brighten: 0, lighten: 0 },
                    { offset: 85, color: base, opacity: 1, brighten: -0.1, lighten: 0 },
                    { offset: 100, color: base, opacity: 1, brighten: -0.2, lighten: 0 }
                ]
            };
        },
        legendSettings: {
            visible: true,
            position: 'Right',
        },
        legendRender: function (args) {
            var country = args.text;
            var dataPoint = null;
            for (var i = 0; i < GradientDonutData.length; i++) {
                if (GradientDonutData[i].Country === country) {
                    dataPoint = GradientDonutData[i];
                    break;
                }
            }
            if (dataPoint) {
                args.text = dataPoint.DataLabelMappingName;
            }
        },
        tooltip: { enable: true, header: '', format: '${point.x} : <b>${point.y}%</b>' },
        title: 'Share of E-commerce Orders by Country - 2025',
        subTitle: 'Source: Data provided by Eurostat European Statistics',
        titleStyle: {
            position: 'Custom',
            x: ej.base.Browser.isDevice ? 160 : 510,
            y: 15
        },
        enableSmartLabels: true,
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
        // custom code end
    });
    pie.appendTo('#container');
};