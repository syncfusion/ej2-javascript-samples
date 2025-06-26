/**
 * Sample for Pie with Various Radius
 */
this.default = function () {
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                dataSource: [
                    { x: 'Cuba', y: 103800, r: '106', text: 'CUB'},
                    { x: 'Syria', y: 185178, r: '133', text: 'SYR'},
                    { x: 'Benin', y: 112760, r: '128', text: 'BEN'},
                    { x: 'Portugal', y: 91606, r: '114', text: 'POR'},
                    { x: 'Austria', y: 82520, r: '111', text: 'AUS'},
                    { x: 'Honduras', y: 111890, r: '97',text: 'HON'},
                    { x: 'Azerbaijan', y: 82650, r: '125' , text: 'AZE'}
                ],
                radius: 'r', xName: 'x',tooltipMappingName: 'r',
                yName: 'y', innerRadius: '20%', border: { width: 1, color: 'white' },
                dataLabel: {
                    visible: true, position: ej.base.Browser.isDevice ? 'Inside' :  'Outside',
                    name: ej.base.Browser.isDevice ? 'text' : 'x', textWrap: ej.base.Browser.isDevice ? 'Wrap' : 'Normal',
                    font: { size: ej.base.Browser.isDevice ? '7px' : '12px', fontWeight: '600' } ,
                    connectorStyle:{type: 'Curve', length: ej.base.Browser.isDevice ? '10px' : '20px'}
                },
            }
        ],
        //Initializing Legend
        legendSettings: {
            visible: false
        },
        enableSmartLabels: true,
        enableBorderOnMouseMove:false,
        title:'Global Distribution of Population and Land Area by Country - 2025',
        subTitle: 'Source: wikipedia.org',
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