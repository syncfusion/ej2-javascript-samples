/**
 * Sample for range navigator with numeric axis
 */
var _this = this;
var selectedTheme = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
var chartAnnotation = [];
chartAnnotation.push({ content: '<div id="exchangeRate"></div>', coordinateUnits: 'Pixel', region: 'Chart', x: '85%', y: '15%' });
var backgroundColor = theme === 'Highcontrast' ? 'black' : 'white';
var datasrc;
var sl;
var aus = [];
this.renderNumericChart = function (chartData) {
    var chart = new ej.charts.Chart({
        primaryXAxis: { title: 'Overs', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, labelFormat: 'n1' },
        primaryYAxis: { title: 'Runs', minimum: 0, majorTickLines: { width: 0 }, lineStyle: { width: 0 } },
        chartArea: { border: { width: 0 } },
        series: [
            { name: 'AUS', dataSource: aus, xName: 'x', yName: 'y', width: 2, animation: { enable: false }, type: 'Spline' },
            { name: 'SL', dataSource: sl, xName: 'x', yName: 'y', width: 2, animation: { enable: false }, type: 'Spline' }
        ],
        annotations: chartAnnotation,
        height: '350', legendSettings: { visible: false },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        theme: theme,
        axisLabelRender: function (args) {
            if (args.axis.orientation === 'Horizontal') {
                var value = Math.abs(Number(args.text));
                args.text = String(value);
            }
        },
        loaded: function (args) {
            var series1 = args.chart.visibleSeries[0].interior;
            var series2 = args.chart.visibleSeries[1].interior;
            var html = '<table>';
            html += '<tr><td><div style="width:10px; height: 10px; border: 2px solid ' +
                series1 + '; background: ' + series1 + ';"></div></td><td style="padding-left:10px;">' + ' Australia' + '</td>';
            html += '<tr><td><div style="width:10px; height: 10px; border: 2px solid ' +
                series2 + '; background: ' + series2 + ';"></div></td><td style="padding-left:10px;">' + ' Sri Lanka' + '</td>';
            html += '</table>';
            chart.setAnnotationValue(0, '<div id="exchangeRate" style="line-height: 18px;' +
                'font-size: 13px;background: #fff; opacity:0.9; color: #464e56; ' +
                ' box-shadow:0 0 8px 0 rgba(70,78,86,.25); padding: 7px 10px;' +
                'border-radius: 3px">' +
                html +
                '</div>');
        }
    });
    chart.appendTo('#chart');
    var range = new ej.charts.RangeNavigator({
        labelPosition: 'Outside',
        tooltip: { enable: true },
        value: [31, 50],
        series: [
            { dataSource: aus, xName: 'x', yName: 'y' },
            { dataSource: sl, xName: 'x', yName: 'y' }
        ],
        changed: function (args) {
            chart.primaryXAxis.zoomFactor = args.zoomFactor;
            chart.primaryXAxis.zoomPosition = args.zoomPosition;
            chart.dataBind();
        },
        tooltipRender: function (args) {
            args.text[0] = Math.round(parseInt(args.text[0], 10)).toString();
        },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        theme: theme
    });
    range.appendTo('#container');
};
this.default = function () {
    var datasrc;
    var fetchApi = new ej.base.Fetch('./src/range-navigator/data-source/double.json', 'GET', true);
    fetchApi.send().then();
    fetchApi.onSuccess = function (data) {
        datasrc = data;
        sl = datasrc.srilanka;
        aus = datasrc.aus;
        getAnnotaiton(aus, ej.charts.getSeriesColor(theme)[0]);
        getAnnotaiton(sl, ej.charts.getSeriesColor(theme)[1]);
        _this.renderNumericChart(datasrc);
    };
};
function getAnnotaiton(args, color) {
    for (var i = 0; i < args.length; i++) {
        if (args[i].isWicket) {
            chartAnnotation.push({
                content: '<div id= "wicket" style="width: 20px; height:20px; border-radius: 5px;' +
                'background: ' + backgroundColor + '; border: 2px solid ' + color + '; color:' + color + '">W</div>',
                x: args[i].x,
                y: args[i].y,
                coordinateUnits: 'Point'
            });
        }
    }
}