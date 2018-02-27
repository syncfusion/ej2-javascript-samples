/**
 * Sample for grouping in Pie chart
 */
this.default = function () {
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                dataSource: [{ 'x': 'China', text: 'China: 26', y: 26 },
                { 'x': 'Russia', text: 'Russia: 19', y: 19 },
                { 'x': 'Germany', text: 'Germany: 17', y: 17 },
                { 'x': 'Japan', text: 'Japan: 12', y: 12 },
                { 'x': 'France', text: 'France: 10', y: 10 },
                { 'x': 'South Korea', text: 'South Korea: 9', y: 9 },
                { 'x': 'Great Britain', text: 'Great Britain: 27', y: 27 },
                { 'x': 'Italy', y: 8, text: 'Italy: 8' },
                { 'x': 'Australia', text: 'Australia: 8', y: 8 },
                { 'x': 'Netherlands', text: 'Netherlands: 8', y: 8 },
                { 'x': 'Hungary', text: 'Hungary: 8', y: 8 },
                { 'x': 'Brazil', text: 'Brazil: 7', y: 7 },
                { 'x': 'Spain', text: 'Spain: 7', y: 7 },
                { 'x': 'Kenya', text: 'Kenya: 6', y: 6 },
                ],
                animation: { enable: true },
                dataLabel: {
                    visible: true,
                    position: 'Outside',
                    connectorStyle: { type: 'Line', length: '5%' },
                    font: {
                        size: '14px'
                    }
                },
                radius: '70%', name: 'RIO',
                xName: 'x',
                yName: 'y',
                groupTo: '10',
                startAngle: 0,
                endAngle: 360,
                innerRadius: '0%',
            }
        ],
        pointRender: function (args) {
            if (args.point.x.indexOf('Others') > -1) {
                args.fill = '#D3D3D3';
            }
        },
        enableSmartLabels: true,
        legendSettings: {
            visible: false,
        },
        textRender: function (args) {
            args.text = args.point.x + ' ' + args.point.y;
        },
        //Initializing Tooltip
        tooltip: { enable: true, header: 'RIO', format: '${point.x} <b> ${point.y} Medals</b>' },
        //Initializing Title
        title: 'RIO Olympics Gold',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        }
    });
    pie.appendTo('#grouping-container');
    function clubchange(value) {
        pie.series[0].groupTo = value.toString();
        pie.series[0].animation.enable = false;
        document.getElementById('clubvalue').innerHTML = value.toString();
        pie.removeSvg();
        pie.refreshSeries();
        pie.refreshChart();
    }
    document.getElementById('clubpoint').onpointermove = document.getElementById('clubpoint').ontouchmove =
        document.getElementById('clubpoint').onchange = function (e) {
            clubchange(+document.getElementById('clubpoint').value);
        };
};