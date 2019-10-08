var chart;
var loaded;
var dt1;
var dt2;
/**
 * Sample for Chart Performance
 */
this.default = function () {
    chart = new ej.charts.Chart({
        enableCanvas: true,
        //Initializing Primary X Axis
        primaryXAxis: {
            majorGridLines: { color: 'transparent' }
        },
        //Initializing Chart Series
        series: [
            {
                name: 'Series1',
                type: 'Line', marker: { visible: false },
                animation: { enable: false }
            }
        ],
        legendSettings: { visible: false },
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
         // custom code end
    });
    chart.appendTo('#performance-container');
    var button = new ej.buttons.Button({ cssClass: 'e-info', isPrimary: true });
    button.appendTo('#load');
    document.getElementById('load').onclick = function () {
        var series1 = [];
        var point1;
        var value = 0;
        var i;
        for (i = 0; i < 100000; i++) {
            value += (Math.random() * 10 - 5);
            point1 = { x: i, y: value };
            series1.push(point1);
        }
        dt1 = new Date().getTime();
        chart.series[0].dataSource = series1;
        chart.series[0].xName = 'x';
        chart.series[0].yName = 'y';
        chart.legendSettings.visible = false;
        chart.loaded = loaded;
        chart.refresh();
    };
    loaded = function (args) {
        dt2 = new Date().getTime();
        document.getElementById('performanceTime').innerHTML = (dt2 - dt1) + 'ms';
    };
};