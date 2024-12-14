var pointRender = function (args) {
    var inverseTheme = location.hash.split('/')[1];
    inverseTheme = inverseTheme ? inverseTheme : 'Fluent2';
    var fluent2Colors = ["#6200EE", "#09AF74", "#0076E5", "#CB3587", "#E7910F", "#0364DE", "#66CD15", "#F3A93C", "#107C10",
        "#C19C00"];
    var fluent2HighContrastColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266",
        "#0B6A0B", "#C19C00"];
    var pointTailwindColors = ["#5A61F6", "#65A30D", "#334155", "#14B8A6", "#8B5CF6", "#0369A1", "#F97316", "#9333EA", "#F59E0B", "#15803D"];
    var pointTailwindDarkColors = ["#8B5CF6", "#22D3EE", "#F87171", "#4ADE80", "#E879F9", "#FCD34D", "#F97316", "#2DD4BF", "#F472B6", "#10B981"];
    var pointTailwind3Colors = ['#2F4074', '#03B4B4', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#2F4074', '#03B4B4'];
    var pointTailwind3DarkColors = ['#8029F1', '#1ABC9C', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#8029F1', '#1ABC9C'];
    if (inverseTheme && inverseTheme.indexOf('fabric') > -1) {
        args.fill = window.fabricColors[args.point.index % 10];
    } else if (inverseTheme === 'material') {
        args.fill = window.materialColors[args.point.index % 10];
    } else if (inverseTheme === 'highcontrast') {
        args.fill = window.highcontrastColors[args.point.index % 10];
    } else if (inverseTheme === 'fluent') {
        args.fill = window.fluentColors[args.point.index % 10];
    } else if (inverseTheme === 'fluent-dark') {
        args.fill = window.fluentDarkColors[args.point.index % 10];
    } else if (inverseTheme === 'fluent2') {
        args.fill = fluent2Colors[args.point.index % 10];
    } else if (inverseTheme === 'fluent2-highcontrast' || inverseTheme === 'fluent2-dark') {
        args.fill = fluent2HighContrastColors[args.point.index % 10];
    } else if (inverseTheme === 'tailwind') {
        args.fill = pointTailwindColors[args.point.index % 10];
    } else if (inverseTheme === 'tailwind-dark') {
        args.fill = pointTailwindDarkColors[args.point.index % 10];
    }else if (inverseTheme === 'tailwind3') {
        args.fill = pointTailwind3Colors[args.point.index % 10];
    } else if (inverseTheme === 'tailwind3-dark') {
        args.fill = pointTailwind3DarkColors[args.point.index % 10];
    } else {
        args.fill = window.bootstrapColors[args.point.index % 10];
    }
};

/**
 * Sample for Inversed Axis
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            opposedPosition: true,
            isInversed: true,
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            edgeLabelPlacement: 'Shift',
            labelIntersectAction: 'Rotate45',
            isInversed: true,
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: {
                color: 'transparent'
            }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        pointRender: pointRender,
        //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: [
                    { x: '2008', y: 1.5 }, { x: '2009', y: 7.6 }, { x: '2010', y: 11 },
                    { x: '2011', y: 16.2 }, { x: '2012', y: 18 }, { x: '2013', y: 21.4 },
                    { x: '2014', y: 16 }, { x: '2015', y: 17.1 }
                ],
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color:'#ffffff' } } },
                xName: 'x',
                yName: 'y',
                width: 2,
                name: 'Rate'
            },
        ],
        //Initializing Tooltip
        tooltip: {
            enable: true
        },
        legendSettings: { visible: false },
        //Initializing Chart Titel
        title: 'Exchange Rate (INR per USD)',
        width: ej.base.Browser.isDevice ? '100%' : '75%',
         // custom code start
        load: function (args) {
            var inversedTheme = location.hash.split('/')[1];
            inversedTheme = inversedTheme ? inversedTheme : 'Fluent2';
            args.chart.theme = (inversedTheme.charAt(0).toUpperCase() +
                inversedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
         // custom code end
    });
    chart.appendTo('#inverse-container');
};