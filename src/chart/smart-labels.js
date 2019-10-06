/**
 * Sample label for Smart labels in Pie chart
 */
this.default = function () {
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                dataSource: [
                    { 'x':  'USA',  y:  46,  text:  'United States of America: 46'  },
                    { 'x': 'China', y: 26, text: 'China: 26' },
                    { 'x': 'Russia', y: 19, text: 'Russia: 19' },
                    { 'x': 'Germany', y: 17, text: 'Germany: 17' },
                    { 'x': 'Japan', y: 12, text: 'Japan: 12' },
                    { 'x': 'France', y: 10, text: 'France: 10' },
                    { 'x': 'South Korea', y: 9, text: 'South Korea: 9' },
                    { 'x': 'Great Britain', y: 27, text: 'Great Britain: 27' },
                    { 'x': 'Italy', y: 8, text: 'Italy: 8' },
                    { 'x': 'Australia', y: 8, text: 'Australia: 8' },
                    { 'x': 'Netherlands', y: 8, text: 'Netherlands: 8' },
                    { 'x': 'NewZealand', y: 4, text: 'New Zealand: 4' },
                    { 'x': 'Uzbekistan', y: 4, text: 'Uzbekistan: 4' },
                    { 'x': 'Kazakhstan', y: 3, text: 'Kazakhstan: 3' },
                    { 'x': 'Colombia', y: 3, text: 'Colombia: 3' },
                    { 'x': 'Switzerland', y: 3, text: 'Switzerland: 3' },
                    { 'x': 'Argentina', y: 3, text: 'Argentina: 3' },
                    { 'x': 'South Africa', y: 2, text: 'South Africa: 2' },
                    { 'x': 'North Korea', y: 2, text: 'North Korea: 2' }
                ],
                xName: 'x',
                yName: 'y',
                startAngle: 0,
                endAngle: 360,
                innerRadius: '0%', name: 'RIO',
                dataLabel: {
                    visible: true, position: 'Outside',
                    connectorStyle: { length: '10%' }, name: 'text',
                },
            }
        ],
        legendSettings: {
            visible: false
        },
        //Initializing Tooltip
        tooltip: { enable: true, format: '${point.x} : <b>${point.y}%</b>' },
        //Initializing Title
        title: 'RIO Olympics Gold',
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    pie.appendTo('#container2');
};