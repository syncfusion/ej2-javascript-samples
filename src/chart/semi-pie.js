/**
 * Sample for semi Pie chart
 */
this.default = function () {
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                dataSource: [
                    { x: 'Chrome', y: 100, text: 'Chrome (100M)<br>40%', tooltipMappingName: '40%' },
                    { x: 'UC Browser', y: 40, text: 'UC Browser (40M)<br>16%', tooltipMappingName: '16%' },
                    { x: 'Opera', y: 30, text: 'Opera (30M)<br>12%', tooltipMappingName: '12%' },
                    { x: 'Safari', y: 30, text: 'Safari (30M)<br>12%', tooltipMappingName: '12%' },
                    { x: 'Firefox', y: 25, text: 'Firefox (25M)<br>10%', tooltipMappingName: '10%' },
                    { x: 'Others', y: 25, text: 'Others (25M)<br>10%', tooltipMappingName: '10%' }
                ],
                xName: 'x',
                yName: 'y',
                startAngle: 270,
                endAngle: 90,
                explode: false, radius : '100%', borderRadius: 3,
                innerRadius: '50%', border: { width: 1, color: '#ffffff' },
                dataLabel: {
                    visible: true, position: 'Inside',
                    connectorStyle: { length: '10%' }, name: 'text', enableRotation:true,
                    font: { fontWeight: '600', size: ej.base.Browser.isDevice ? '8px' : '11px'}
                },
            }
        ],
        enableAnimation: false,
        annotations: [{
            content: ej.base.Browser.isDevice ? "<div style='font-Weight:600; font-size:10px;'>Browser<br>Market<br>Shares</div>" :"<div style='font-Weight:600; font-size:14px;'>Browser<br>Market<br>Shares</div>" ,
            region:"Series",
            x: "50%",
            y: "85%"
        }],
        legendSettings: {
            visible: false,
        },
        enableBorderOnMouseMove:false,
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    pie.appendTo('#semi-container');
  
};