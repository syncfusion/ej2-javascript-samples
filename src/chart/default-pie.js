/**
 * Sample for Pie Chart
 */
this.default = function () {
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                dataSource: [
                    { 'x': 'Chrome', y: 37, text: '37%' }, { 'x': 'UC Browser', y: 17, text: '17%' },
                    { 'x': 'iPhone', y: 19, text: '19%' },
                    { 'x': 'Others', y: 4, text: '4%' }, { 'x': 'Opera', y: 11, text: '11%' },
                    { 'x': 'Android', y: 12, text: '12%' }
                ],
                dataLabel: {
                    visible: true,
                    position: 'Inside', name: 'text',
                    font: {
                        fontWeight: '600'
                    }
                },
                radius: '70%', xName: 'x',
                yName: 'y', startAngle: 0,
                endAngle: 0, innerRadius: '0%',
                explode: true, explodeOffset: '10%', explodeIndex: 0, name: 'Browser'
            }
        ],
        center: {x: '50%', y: '50%'},
        enableSmartLabels: true,
        enableAnimation: false,
        legendSettings: {
            visible: false,
        },
        //Initializing Tooltip
        tooltip: { enable: true, header: 'Browser', format: '${point.x}:<b> ${point.y}%<b>' },
        //Initializing Title
        title: 'Mobile Browser Statistics',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
         // custom code end
    });
    pie.appendTo('#pie-container');
    function anglechange(value) {
        pie.series[0].startAngle = +value;
        pie.series[0].endAngle = +value;
		pie.series[0].animation.enable = false;
        document.getElementById('anglevalue').innerHTML = value.toString();
        pie.removeSvg();
        pie.refreshSeries();
        pie.refreshChart();
    }
    document.getElementById('pieangle').onpointermove = document.getElementById('pieangle').ontouchmove =
        document.getElementById('pieangle').onchange = function (e) {
            anglechange(+document.getElementById('pieangle').value);
        };
    function radiuschange(value) {
        pie.series[0].radius = value + '%';
		pie.series[0].animation.enable = false;
        document.getElementById('radius').innerHTML = (value / 100).toFixed(2);
        pie.removeSvg();
        pie.refreshSeries();
        pie.refreshChart();
    }
    document.getElementById('pieradius').onpointermove = document.getElementById('pieradius').ontouchmove =
        document.getElementById('pieradius').onchange = function (e) {
            radiuschange(+document.getElementById('pieradius').value);
        };
    function exploderadius(value) {
        pie.visibleSeries[0].explodeOffset = value + '%';
        document.getElementById('exploderadius').innerHTML = (value / 100).toFixed(2);
        pie.removeSvg();
        pie.refreshSeries();
        pie.refreshChart();
    }
    document.getElementById('pieexploderadius').onpointermove = document.getElementById('pieexploderadius').ontouchmove =
        document.getElementById('pieexploderadius').onchange = function (e) {
            exploderadius(+document.getElementById('pieexploderadius').value);
        };
    function explodeIndex(value) {
        pie.visibleSeries[0].explodeIndex = +value;
		pie.series[0].animation.enable = false;
        document.getElementById('explodeindex').innerHTML = value.toString();
        pie.removeSvg();
        pie.refreshSeries();
        pie.refreshChart();
    }
    document.getElementById('pieexplodeindex').onpointermove = document.getElementById('pieexplodeindex').ontouchmove =
        document.getElementById('pieexplodeindex').onchange = function (e) {
            explodeIndex(+document.getElementById('pieexplodeindex').value);
        };
    function piecenterx(value) {
        pie.center.x = value + '%';
		pie.series[0].animation.enable = false;
        document.getElementById('xvalue').innerHTML = value + '%';
        pie.removeSvg();
        pie.refreshSeries();
        pie.refreshChart();
    }
    document.getElementById('x').onpointermove = document.getElementById('x').ontouchmove =
        document.getElementById('x').onchange = function (e) {
            piecenterx(+document.getElementById('x').value);
        };
    function piecentery(value) {
        pie.center.y = value + '%';
		pie.series[0].animation.enable = false;
        document.getElementById('yvalue').innerHTML = value + '%';
        pie.removeSvg();
        pie.refreshSeries();
        pie.refreshChart();
    }
    document.getElementById('y').onpointermove = document.getElementById('y').ontouchmove =
        document.getElementById('y').onchange = function (e) {
            piecentery(+document.getElementById('y').value);
        };
};