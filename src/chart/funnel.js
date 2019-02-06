/**
 * Sample for Funnel Chart
 */
this.default = function () {
    var data = [{ x: 'Renewed', y: 18.20, text: '18.20%' },
        { x: 'Subscribed', y: 27.3, text: '27.3%' },
        { x: 'Support', y: 55.9, text: '55.9%' },
        { x: 'Downloaded', y: 76.8, text: '76.8%' },
        { x: 'Visited', y: 100, text: '100%' }];
    var chart = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [{
                type: 'Funnel', dataSource: data, xName: 'x', yName: 'y', width: '60%', height: '80%',
                neckWidth: '15%', gapRatio: 0.03, neckHeight: '18%',
                dataLabel: {
                    name: 'text', visible: true, position: 'Inside', font: {
                        fontWeight: '600'
                    }
                }, explode: true,
            }],
        //Initializing Tooltip
        tooltip: { enable: true, format: '${point.x} : <b>${point.y} %</b>' },
        legendSettings: { toggleVisibility: false },
        enableAnimation: false,
        load: function (args) {
            var funnelTheme = location.hash.split('/')[1];
            funnelTheme = funnelTheme ? funnelTheme : 'Material';
            args.accumulation.theme = (funnelTheme.charAt(0).toUpperCase() +
                funnelTheme.slice(1)).replace(/-dark/i, 'Dark');
            if (args.accumulation.availableSize.width < args.accumulation.availableSize.height) {
                args.accumulation.series[0].height = '70%';
                args.accumulation.series[0].width = '80%';
            }
        },
        resized: function (args) {
            var bounds = document.getElementById('funnel-container').getBoundingClientRect();
            if (bounds.width < bounds.height) {
                args.accumulation.series[0].width = '80%';
                args.accumulation.series[0].height = '70%';
            }
            else {
                args.accumulation.series[0].width = '60%';
                args.accumulation.series[0].height = '80%';
            }
        },
        //Initializing Title
        title: 'Website Visitors',
    });
    chart.appendTo('#funnel-container');
    function neckWidth(value) {
        chart.series[0].neckWidth = value + '%';
        document.getElementById('neckWidth').innerHTML = value + '%';
        chart.removeSvg();
        chart.refreshSeries();
        chart.refreshChart();
    }
    document.getElementById('chartneckwidth').onpointermove = document.getElementById('chartneckwidth').ontouchmove =
        document.getElementById('chartneckwidth').onchange = function (e) {
            neckWidth(+document.getElementById('chartneckwidth').value);
        };
    function neckHeight(value) {
        chart.series[0].neckHeight = value + '%';
        document.getElementById('neckHeight').innerHTML = value + '%';
        chart.removeSvg();
        chart.refreshSeries();
        chart.refreshChart();
    }
    document.getElementById('chartneckheight').onpointermove = document.getElementById('chartneckheight').ontouchmove =
        document.getElementById('chartneckheight').onchange = function (e) {
            neckHeight(+document.getElementById('chartneckheight').value);
        };

};