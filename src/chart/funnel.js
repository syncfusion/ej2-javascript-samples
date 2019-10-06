/**
 * Sample for Funnel Chart
 */
this.default = function () {
    var data = [{ 'x': 'China', y: 1409517397, text: 'China' },
    { 'x': 'India', y: 1339180127, text: 'India' },
    { 'x': 'United States', y: 324459463, text: 'United States' },
    { 'x': 'Indonesia', y: 263991379, text: 'Indonesia' },
    { 'x': 'Brazil', y: 209288278, text: 'Brazil' },
    { 'x': 'Pakistan', y: 197015955, text: 'Pakistan' },
    { 'x': 'Nigeria', y: 190886311, text: 'Nigeria' },
    { 'x': 'Bangladesh', y: 164669751, text: 'Bangladesh' },
    { 'x': 'Russia', y: 143989754, text: 'Russia' },
    { 'x': 'Mexico', y: 129163276, text: 'Mexico' },
    { 'x': 'Japan', y: 127484450, text: ' Japan' },
    { 'x': 'Ethiopia', y: 104957438, text: 'Ethiopia' },
    { 'x': 'Philippines', y: 104918090, text: 'Philippines' },
    { 'x': 'Egypt', y: 97553151, text: 'Egypt' },
    { 'x': 'Vietnam', y: 95540800, text: 'Vietnam' },
    { 'x': 'Germany', y: 82114224, text: 'Germany' }];
    var chart = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [{
            type: 'Funnel', dataSource: data, xName: 'x', yName: 'y',
            neckWidth: '15%', neckHeight: '18%',
                dataLabel: {
                    visible: true, position: 'Outside',
                    connectorStyle: { length: '6%' }, name: 'text'
                }, explode: false,
            }],
            legendSettings: { visible: false },
        //Initializing Tooltip
        tooltip: { enable: true, format: '${point.x} : <b>${point.y}</b>' },
        enableAnimation: false,
         // custom code start
        load: function (args) {
            var funnelTheme = location.hash.split('/')[1];
            funnelTheme = funnelTheme ? funnelTheme : 'Material';
            args.accumulation.theme = (funnelTheme.charAt(0).toUpperCase() +
                funnelTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            if (args.accumulation.availableSize.width < args.accumulation.availableSize.height) {
                args.accumulation.series[0].height = '70%';
                args.accumulation.series[0].width = '80%';
            }
        },
         // custom code end
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
        title: 'Top population countries in the world 2017',
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