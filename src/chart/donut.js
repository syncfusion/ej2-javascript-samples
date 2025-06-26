/**
 * Sample for Doughnut chart
 */
this.default = function () {
    var seriesColor = ['#FFE066', "#FAB666", "#F68F6A", "#F3646A", "#CC555A", "#9C4649"];
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                dataSource: [{ x: 'Chrome', y: 63.5, text: 'Chrome: 63.5%' },
                { x: 'Safari', y: 25.0, text: 'Safari: 25.0%' },
                { x: 'Samsung Internet', y: 6.0, text: 'Samsung Internet: 6.0%' },
                { x: 'UC Browser', y: 2.5, text: 'UC Browser: 2.5%' },
                { x: 'Opera', y: 1.5, text: 'Opera: 1.5%' },
                { x: 'Others', y: 1.5, text: 'Others: 1.5%' }
                ], border: { width: 1, color: '#ffffff' },
                dataLabel: {
                    visible: true,
                    name: 'text',
                    position: 'Outside',
                    font: {
                        fontWeight: '600', size: ej.base.Browser.isDevice ? '8px' : '12px'
                    },
                    connectorStyle:{length: ej.base.Browser.isDevice ? '10px' : '20px', type: 'Curve'}
                },
                xName: 'x', yName: 'y', startAngle: ej.base.Browser.isDevice ? 70 : 60, radius: ej.base.Browser.isDevice ? '40%' : '75%',
                innerRadius: '65%', name: 'Project', explode: false, borderRadius: 3,
            }
        ],
        enableSmartLabels: true,
        enableBorderOnMouseMove:false,
        legendSettings: {
            visible: false, position: 'Top'
        },
        tooltip: { enable: true,
            enableHighlight: true,
            format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>',
            header:''},
        centerLabel:{
            text : 'Mobile<br>Browser<br>Statistics<br>2024',
            hoverTextFormat: '${point.x} <br> Browser Share <br> ${point.y}%',
            textStyle: {
                fontWeight: '600',
                size: ej.base.Browser.isDevice ? '8px' : '15px'
            },
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