/**
 * Sample for Annotation in chart
 */
function getValue(series, pointIndex, y) {
    var totalValue = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var ser = series_1[_i];
        totalValue += ser.points[pointIndex].y;
    }
    return (Math.round((y / totalValue) * 100)) + '%';
}
this.default = function () {
    var pie;
    var isRender = false;
    var dataSource = [
        { x: '2014', y0: 51, y1: 77, y2: 66, y3: 34 }, { x: '2015', y0: 67, y1: 49, y2: 19, y3: 38 },
        { x: '2016', y0: 143, y1: 121, y2: 91, y3: 44 }, { x: '2017', y0: 19, y1: 28, y2: 65, y3: 51 },
        { x: '2018', y0: 30, y1: 66, y2: 32, y3: 61 }, { x: '2019', y0: 189, y1: 128, y2: 122, y3: 76 },
        { x: '2020', y0: 72, y1: 97, y2: 65, y3: 82 }
    ];
    var pieDataSource = [
        { x: 'UK', y: 51, text: '22%' }, { x: 'Germany', y: 77, text: '34%' },
        { x: 'France', y: 66, text: '29%' }, { x: 'Italy', y: 34, text: '15%' }
    ];
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            title: 'Years', valueType: 'Category', majorGridLines: { width: 0 }, minorGridLines: { width: 1 },
            minorTickLines: { width: 1 }, interval: 1, labelIntersectAction: 'Rotate45',
        },
        primaryYAxis: {
            title: 'Sales', lineStyle: { width: 0 }, minimum: 0, maximum: 700, interval: 100,
            majorGridLines: { width: 1 }, minorGridLines: { width: 1 },
            minorTickLines: { width: 0 }, labelFormat: '{value}B', majorTickLines: { width: 0 }
        },
        series: [
            { type: 'StackingColumn', xName: 'x', width: 2, yName: 'y0', name: 'UK', dataSource: dataSource },
            { type: 'StackingColumn', xName: 'x', width: 2, yName: 'y1', name: 'Germany', dataSource: dataSource },
            { type: 'StackingColumn', xName: 'x', width: 2, yName: 'y2', name: 'France', dataSource: dataSource },
            { type: 'StackingColumn', xName: 'x', width: 2, yName: 'y3', name: 'Italy', dataSource: dataSource }
        ],
        chartArea: { border: { width: 0 } }, title: 'Mobile Game Market by Country',
        selectionMode: 'Cluster', selectedDataIndexes: [{ series: 0, point: 0 }],
        width: ej.base.Browser.isDevice ? '100%' : '80%',
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
           // custom code end
        legendSettings: { visible: true, toggleVisibility: false },
        annotations: [{
            content: '<div id="chart_annotation" style="width: 200px; height: 200px"></div>',
            x: '20%', y: '25%', coordinateUnits: 'Pixel', region: 'Series'
        }],
        chartMouseUp: function (args) {
            if (args.target.indexOf('Point') > -1 && args.target.indexOf('annotation') === -1) {
                var pointIndex = parseInt(args.target[args.target.length - 1], 10);
                pieDataSource = [];
                for (var _i = 0, _a = chart.visibleSeries; _i < _a.length; _i++) {
                    var series = _a[_i];
                    var value = series.points[pointIndex].y;
                    pieDataSource.push({
                        'x': series.name, 'y': value, 'text': getValue(chart.visibleSeries, pointIndex, value)
                    });
                }
                pie.series[0].dataSource = pieDataSource;
                pie.series[0].xName = 'x';
                pie.series[0].yName = 'y';
                pie.refresh();
            }
        },
        resized: function (args) {
            location.reload();
        },
        loaded: function (args) {
            if (isRender) {
                pie.destroy();
                pie = new ej.charts.AccumulationChart({
                    background: 'transparent',
                    series: [{
                        radius: '65%', animation: { enable: false },
                        dataSource: pieDataSource, border: { color: 'transparent'},
                        xName: 'x', yName: 'y', dataLabel: { visible: true, position: 'Inside', font: { color: 'white' }, name: 'text' },
                    }],
                    load: function (args) {
                        var selectedTheme = location.hash.split('/')[1];
                        selectedTheme = selectedTheme ? selectedTheme : 'Material';
                        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
                    },
                    legendSettings: { visible: false },
                });
                pie.appendTo('#chart_annotation');
            }
        },
        animationComplete: function (args) {
            isRender = true;
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            pie = new ej.charts.AccumulationChart({
                background: 'transparent',
                series: [{
                    radius: '65%', animation: { enable: false },
                    dataSource: pieDataSource, border: { color: 'transparent'},
                    xName: 'x', yName: 'y', dataLabel: { visible: true, position: 'Inside', name: 'text' },
                }],
                theme: (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)),
                legendSettings: { visible: false }
            });
            pie.appendTo('#chart_annotation');
        }
    });
    chart.appendTo('#container');
};