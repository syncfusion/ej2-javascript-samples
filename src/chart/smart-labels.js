/**
 * Sample label for Smart labels in Pie chart
 */
this.default = function () {
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                dataSource: [
                    { x: 'USA', y: 40, text: ej.base.Browser.isDevice ? 'USA: 40' : 'United States of America: 40' },
                    { x: 'China', y: 40, text: 'China: 40' },
                    { x: 'Japan', y: 20, text: 'Japan: 20' },
                    { x: 'Australia', y: 18, text: ej.base.Browser.isDevice ? 'AU: 18' : 'Australia: 18' },
                    { x: 'France', y: 16, text: 'France: 16' },
                    { x: 'Netherlands', y: 15, text: ej.base.Browser.isDevice ? 'NL: 15' : 'Netherlands: 15' },
                    { x: 'Great Britain', y: 14, text: ej.base.Browser.isDevice ? 'GB: 14' : 'Great Britain: 14' },
                    { x: 'South Korea', y: 13, text: ej.base.Browser.isDevice ? 'SK: 13' : 'South Korea: 13' },
                    { x: 'Germany', y: 12, text: ej.base.Browser.isDevice ? 'GE: 12' : 'Germany: 12' },
                    { x: 'Italy', y: 12, text: 'Italy: 12' },
                    { x: 'NewZealand', y: 10, text: ej.base.Browser.isDevice ? 'NZ: 10' : 'New Zealand: 10' },
                    { x: 'Canada', y: 9, text: ej.base.Browser.isDevice ? 'CA: 9' : 'Canada: 9' },
                    { x: 'Uzbekistan', y: 8, text: ej.base.Browser.isDevice ? 'UZB: 8' : 'Uzbekistan: 8' },
                    { x: 'Hungary', y: 6, text: ej.base.Browser.isDevice ? 'HU: 6' : 'Hungary: 6' },
                    { x: 'Kenya', y: 4, text: ej.base.Browser.isDevice ? 'KE: 4' : 'Kenya: 4' },
                    { x: 'Georgia', y: 3, text: ej.base.Browser.isDevice ? 'GE: 3' : 'Georgia: 3' },
                    { x: 'North Korea', y: 2, text: ej.base.Browser.isDevice ? 'NK: 2' : 'North Korea: 2' },
                    { x: 'Hong Kong', y: 2, text: ej.base.Browser.isDevice ? 'HK: 2' : 'South Africa: 2' }
                ],
                xName: 'x',
                yName: 'y',
                name: 'RIO',
                startAngle: 60,              
                innerRadius: '0%', 
                dataLabel: {
                    visible: true, position: 'Outside', textWrap: ej.base.Browser.isDevice ? 'Wrap' : 'Normal',
                    connectorStyle: { type: 'Curve', length: ej.base.Browser.isDevice ? '2px' : '20px' }, name: 'text',
                    font:  {fontWeight: '600', size: ej.base.Browser.isDevice ? '7px' : '12px' }
                }, radius: ej.base.Browser.isDevice ? "40%" : "65%",
            }
        ],
        legendSettings: {
            visible: false
        },
        //Initializing Tooltip
        tooltip: { enable: true, format:'<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>', enableHighlight: true, header:''  },
        enableBorderOnMouseMove:false,
        enableSmartLabels: true,

        //Initializing Title
        title: 'Summer Olympics 2024 - Gold Medals',
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
    pie.appendTo('#container2');
};