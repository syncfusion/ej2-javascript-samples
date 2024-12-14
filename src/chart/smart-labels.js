/**
 * Sample label for Smart labels in Pie chart
 */
this.default = function () {
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                dataSource: [
                    { 'x': 'USA', y: 46, text: ej.base.Browser.isDevice ? 'USA: 46' : 'United States of America: 46' },
                    { 'x': 'China', y: 26, text: 'China: 26' },
                    { 'x': 'Russia', y: 19, text: 'Russia: 19' },
                    { 'x': 'Germany', y: 17, text: 'Germany: 17' },
                    { 'x': 'Kazakhstan', y: 3, text: ej.base.Browser.isDevice ? 'KZ: 3' : 'Kazakhstan: 3' },
                    { 'x': 'New Zealand', y: 4, text: ej.base.Browser.isDevice ? 'NZ: 4' : 'New Zealand: 4' },
                    { 'x': 'South Korea', y: 9, text: ej.base.Browser.isDevice ? 'KR: 9' : 'South Korea: 9' },
                    { 'x': 'Great Britain', y: 27, text: ej.base.Browser.isDevice ? 'GB: 27' : 'Great Britain: 27' },
                    { 'x': 'Switzerland', y: 3, text: ej.base.Browser.isDevice ? 'CH: 3' : 'Switzerland: 3' },
                    { 'x': 'Australia', y: 8, text: ej.base.Browser.isDevice ? 'ASTL: 8' : 'Australia: 8' },
                    { 'x': 'Netherlands', y: 8, text: ej.base.Browser.isDevice ? 'NL: 8' : 'Netherlands: 8' },
                    { 'x': 'Colombia', y: 3, text: 'Colombia: 3' },
                    { 'x': 'Uzbekistan', y: 4, text: ej.base.Browser.isDevice ? 'Uzbekistan: <br> 4' : 'Uzbekistan: 4' },
                    { 'x': 'Japan', y: 12, text: 'Japan: 12' },
                    { 'x': 'France', y: 10, text: 'France: 10' },
                    { 'x': 'Italy', y: 8, text: 'Italy: 8' },
                    { 'x': 'Argentina', y: 3, text: ej.base.Browser.isDevice ? 'AR: 3' : 'Argentina: 3' },
                    { 'x': 'South Africa', y: 2, text: ej.base.Browser.isDevice ? 'SA: 2' : 'South Africa: 2' },
                    { 'x': 'North Korea', y: 2, text: ej.base.Browser.isDevice ? 'KP: 2' : 'North Korea: 2' }
                ],
                xName: 'x',
                yName: 'y',
                startAngle: 60,              
                innerRadius: '0%', 
                dataLabel: {
                    visible: true, position: 'Outside',
                    connectorStyle: { type: 'Curve', length: '20px' }, name: 'text',
                    font:  {fontWeight: '600' }
                },radius: ej.base.Browser.isDevice ? '40%' : '70%',
            }
        ],
        legendSettings: {
            visible: false
        },
        //Initializing Tooltip
        tooltip: { enable: true, format:'<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>', enableHighlight: true  },
        enableBorderOnMouseMove:false,

        //Initializing Title
        title: 'Rio Olympics Gold',
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    pie.appendTo('#container2');
};