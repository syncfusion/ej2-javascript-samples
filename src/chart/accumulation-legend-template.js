

var data = [
    { x: 'United States', y: 29.55, image: 'United States', text: ej.base.Browser.isDevice ? 'USA: 29.55%' : 'United States: 29.55%', description: '13.4M barrels per day', tooltip: '13.4M' },
    { x: 'Saudi Arabia',  y: 23.83, text: ej.base.Browser.isDevice ? 'SAU: 23.83%' : 'Saudi Arabia: 23.83%', image: 'Saudi Arabia', description: '10.8M barrels per day', tooltip: '10.8M' },
    { x: 'Russia', y: 23.69, text: ej.base.Browser.isDevice ? 'RUS: 23.69%' : 'Russia: 23.69%', image: 'Russia', description: '10.8M barrels per day', tooltip: '10.8M' },
    { x: 'Canada', y: 12.12, text: ej.base.Browser.isDevice ? 'CAN: 12.12%' : 'Canada: 12.12%', image: 'Canada', description: '5.5M barrels per day', tooltip: '5.5M' },
    { x: 'China', y: 10.83, text: ej.base.Browser.isDevice ? 'CHN: 10.83%' : 'China: 10.83%', image: 'China', description: '4.9M barrels per day', tooltip: '4.9M' }
];

this.default = function () {
    var chart = new ej.charts.AccumulationChart({
        title: 'Top 5 Oil Producing Countries (2023)',
        subTitle: 'Source: Wikipedia.org',
        titleStyle: {
            position: 'Custom',
            x: ej.base.Browser.isDevice ? 150 : 492,
            y: 22.75
        },
        series: [
            {
                type: 'Pie',
                dataSource: data,
                xName: 'x',
                yName: 'y',
                animation: {enable: false},
                tooltipMappingName: 'tooltip',
                border: { color: '#ffffff', width: 1 },
                radius: ej.base.Browser.isDevice ? '65%' : '70%',
                innerRadius: '0%',
                dataLabel: {
                    visible: true,
                    position: ej.base.Browser.isDevice ? 'Inside' : 'Outside',
                    name: ej.base.Browser.isDevice ? '' : 'text',
                    format: ej.base.Browser.isDevice ? '{value}%' : '',
                    enableRotation: ej.base.Browser.isDevice ? true : false,
                    font: { size: ej.base.Browser.isDevice ? '8px' : '12px', fontWeight: '600' },
                    connectorStyle: { type: 'Line' }
                }
            }
        ],
        tooltip: {
            enable: true,
            header: '<b>${point.x}</b>',
            format: 'Production: <b>${point.tooltip}</b> barrels/day'
        },
        enableBorderOnMouseMove: false,
        legendSettings: {
            visible: true,
            width: ej.base.Browser.isDevice ? '35%' : '20%',
            position: 'Right',
            itemPadding: 15,
            template:
                '<div class="legend-template" style="display:flex; align-items:flex-start; gap:' + (ej.base.Browser.isDevice ? '6px' : '8px') + '; opacity:1; max-width:' + (ej.base.Browser.isDevice ? '160px' : '280px') + '; box-sizing:border-box;">' +
                '<img class="e-legend-img" src="" width="' + (ej.base.Browser.isDevice ? '24' : '36') + '" height="' + (ej.base.Browser.isDevice ? '24' : '36') + '" style="flex:0 0 ' + (ej.base.Browser.isDevice ? '24px' : '36px') + '; margin-top:' + (ej.base.Browser.isDevice ? '0px' : '2px') + ';" />' +
                '<div style="display:flex; flex-direction:column; min-width:0; text-align:left;">' +
                '<span class="e-legend-label" style="font-weight:600; font-size:' + (ej.base.Browser.isDevice ? '10px' : '13px') + '; color:LABEL_COLOR; line-height:' + (ej.base.Browser.isDevice ? '12px' : '18px') + '; white-space:normal; overflow-wrap:break-word; word-break:break-word; max-width:' + (ej.base.Browser.isDevice ? '130px' : '220px') + ';"></span>' +
                '<span class="e-legend-desc" style="font-size:' + (ej.base.Browser.isDevice ? '10px' : '12px') + '; margin-top:' + (ej.base.Browser.isDevice ? '0px' : '2px') + '; line-height:' + (ej.base.Browser.isDevice ? '12px' : '15px') + '; white-space:normal; overflow-wrap:break-word; word-break:break-word; max-width:' + (ej.base.Browser.isDevice ? '130px' : '220px') + ';"></span>' +
                '</div>' +
                '</div>'
        },
        legendRender: function (args) {
            var desc = data.find(function (d) { return d.x === args.text; }).description;
            var matchedPoint = chart.series[0].points.find(function (p) { return p.x === args.text; });
            var opacity = matchedPoint && !matchedPoint.visible ? '0.5' : '1';
            args.template = args.template
                .replace('opacity:1;', 'opacity:' + opacity + ';')
                .replace('LABEL_COLOR', args.fill)
                .replace('src=""', 'src="src/chart/images/' + args.text + '.png"')
                .replace('></span>', '>' + args.text + '</span>')
                .replace(/<span class="e-legend-desc"([^>]*)><\/span>/, '<span class="e-legend-desc"$1>' + desc + '</span>');
        },
        load: function (args) {
             var selectedTheme = location.hash.split("/")[1];
             selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
             args.accumulation.theme = (
               selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
             )
               .replace(/-dark/i, "Dark")
               .replace(/contrast/i, "Contrast")
               .replace(/-highContrast/i, "HighContrast");
        }
    });

    chart.appendTo('#accumulation-container');
};