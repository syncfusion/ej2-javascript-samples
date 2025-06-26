/**
 * Sample for Pie Chart
 */
this.default = function () {
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                dataSource: 
                    [
                        { 'x': 'Coal', y: 34.4, text: 'Coal: 34.4%' },
                        { 'x': 'Natural Gas', y: 22.1, text: 'Natural Gas: 22.1%' },
                        { 'x': 'Hydro', y: 14.4, text: 'Hydro: 14.4%' },
                        { 'x': 'Nuclear', y: 9.0, text: 'Nuclear: 9.0%' },
                        { 'x': 'Wind', y: 8.1, text: 'Wind: 8.1%' },
                        { 'x': 'Others', y: 12.0, text: 'Others: 12.0%' }
                    ],
                dataLabel: {
                    visible: true, position: 'Outside', name: 'text', font: { size: ej.base.Browser.isDevice ? '8px' : '12px', fontWeight: '600' }, connectorStyle:{length: ej.base.Browser.isDevice ? '10px' : '20px', type: 'Curve'}
                },
                border: { color: 'white', width: 1 },
                 xName: 'x', yName: 'y', startAngle: ej.base.Browser.isDevice ? 70 : 30,  innerRadius: '0%',radius: ej.base.Browser.isDevice ? '40%' : '60%',
                    explode: true, explodeOffset: '10%', explodeIndex: 0, name: 'Browser', borderRadius: 3
            }
        ],
        center: {x: '50%', y: '50%'},
        enableSmartLabels: true,
        enableBorderOnMouseMove:false,
        enableAnimation: true ,
        legendSettings: {
            visible: false,
        },
        //Initializing Tooltip
        tooltip: {enable: true, format: '<b>${point.x}</b><br>Percentage: <b>${point.y}%</b>', header: "", enableHighlight: true },
        title: 'Global Electricity Generation by Source - 2024',
        subTitle: 'Source: wikipedia.org',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
         // custom code end
    });
    pie.appendTo('#pie-container');
  
};