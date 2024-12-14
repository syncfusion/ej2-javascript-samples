/**
 * Sample for Pie with Various Radius
 */
this.default = function () {
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                dataSource: [
                    { x: 'Argentina', y: 505370, r: ej.base.Browser.isDevice ? '110' : '100', text: 'Argentina' },
                    { x: 'Belgium', y: 551500, r: ej.base.Browser.isDevice ? '120' : '118.7', text: 'Belgium' },
                    { x: 'Dominican Republic', y: 312685, r: '137.5', text: ej.base.Browser.isDevice ? 'Dominican <br> Republic' : 'Dominican Republic' },
                    { x: 'Cuba', y: 350000, r: '124.6', text: 'Cuba' },
                    { x: 'Egypt', y: 301000, r: '150.8', text: 'Egypt' },
                    { x: 'Kazakhstan', y: 300000, r: '155.5', text: 'Kazakhstan' },
                    { x: 'Somalia', y: 357022, r: '160.6', text: 'Somalia' }
                ],
                radius: 'r', xName: 'x',tooltipMappingName: 'text',
                yName: 'y', innerRadius: '20%',
                dataLabel: {
                    visible: true, position: ej.base.Browser.isDevice ? 'Inside' :  'Outside',
                    name: 'text',enableRotation: true,
                    font: { fontWeight: '600' } ,
                     connectorStyle:{length : '20px', type: 'Curve'}
                },
            }
        ],
        //Initializing Legend
        legendSettings: {
            visible: true,
            reverse: true
        },
        enableSmartLabels: true,
        enableBorderOnMouseMove:false,
        title:'Pie with different Radius',
        enableAnimation: true,
        tooltip: {enable: true, format:'<b>${point.x}</b><br/>Area in square km: <b>${point.y} </b> <br/> Population density per square km: <b>${point.tooltip}</b>', enableHighlight: true},
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            args.accumulation.legendSettings.position = ej.base.Browser.isDevice ? 'Bottom' : 'Right';
        }
        // custom code end
    });
    pie.appendTo('#pieradius-container');
};