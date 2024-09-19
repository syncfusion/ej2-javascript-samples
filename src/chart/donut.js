/**
 * Sample for Doughnut chart
 */
this.default = function () {
    var seriesColor = ['#FFE066', "#FAB666", "#F68F6A", "#F3646A", "#CC555A", "#9C4649"];
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                dataSource: [
                    { x: 'Chrome', y: 61.3, text: ej.base.Browser.isDevice? 'Chrome: <br> 61.3%' : 'Chrome: 61.3%' },
                    { x: 'Safari', y: 24.6, text: ej.base.Browser.isDevice? 'Safari: <br> 24.6%' :'Safari: 24.6%' },
                    { x: 'Edge', y: 5.0, text: 'Edge: 5.0%' },
                    { x: 'Samsung Internet', y: 2.7, text: ej.base.Browser.isDevice? 'Samsung<br> Internet: 2.7%' : 'Samsung Internet: 2.7%' },
                    { x: 'Firefox', y: 2.6, text:ej.base.Browser.isDevice? 'Firefox:<br> 2.6%' : 'Firefox: 2.6%' },
                    { x: 'Others', y: 3.6, text: ej.base.Browser.isDevice? 'Others:<br> 3.6%' : 'Others: 3.6%' }
                ], border: { width: 1 },
                dataLabel: {
                    visible: true,
                    name: 'text',
                    position: 'Outside',
                    font: {
                        fontWeight: '600',
                    },
                    connectorStyle:{length : '20px', type: 'Curve'}
                },
                xName: 'x', radius: ej.base.Browser.isDevice ? '40%' : '70%',
                yName: 'y', startAngle: ej.base.Browser.isDevice ? 30 : 62,
                innerRadius: '65%', name: 'Project',
                explodeOffset: '10%'
            }
        ],
        enableSmartLabels: true,
        enableBorderOnMouseMove:false,
        legendSettings: {
            visible: false, position: 'Top'
        },
        centerLabel:{
            text : 'Mobile<br>Browsers<br>Statistics',
            hoverTextFormat: '${point.x} <br> Browser Share <br> ${point.y}%',
            textStyle: {
                fontWeight: '600',
                size: ej.base.Browser.isDevice ? '8px' : '15px'
            },
        },
        pointRender: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            if (selectedTheme === 'fluent') {
                args.fill = seriesColor[args.point.index % 10];
            }
            else if (selectedTheme === 'bootstrap5') {
                args.fill = seriesColor[args.point.index % 10];
            }
            if (selectedTheme.indexOf('dark') > -1) {
                if (selectedTheme.indexOf('material') > -1) {
                    args.border.color = '#303030';
                }
                else if (selectedTheme.indexOf('bootstrap5') > -1) {
                    args.border.color = '#212529';
                }
                else if (selectedTheme.indexOf('bootstrap') > -1) {
                    args.border.color = '#1A1A1A';
                }
                else if (selectedTheme.indexOf('fabric') > -1) {
                    args.border.color = '#201f1f';
                }
                else if (selectedTheme.indexOf('fluent') > -1) {
                    args.border.color = '#252423';
                }
                else if (selectedTheme.indexOf('bootstrap') > -1) {
                    args.border.color = '#1A1A1A';
                }
                else if (selectedTheme.indexOf('tailwind') > -1) {
                    args.border.color = '#1F2937';
                }
                else {
                    args.border.color = '#222222';
                }
            }
            else if (selectedTheme.indexOf('highcontrast') > -1) {
                args.border.color = '#000000';
            }
            else {
                args.border.color = '#FFFFFF';
            }
        },
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