/**
 * Sample for Indexed Category Axis
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            crosshairTooltip: { enable: true },
            isIndexed: true
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'GDP Growth Rate',
            labelFormat: '{value}%'
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: [
                    { x: 'Myanmar', y: 7.3 },
                    { x: 'India', y: 7.9 },
                    { x: 'Bangladesh', y: 6.8 },
                    { x: 'Cambodia', y: 7.0 },
                    { x: 'China', y: 6.9 }
                ],
                xName: 'x', width: 2, marker: { visible: false, height: 10, width: 10 },
                yName: 'y', name: '2015',
            },
            {
                type: 'Column',
                dataSource: [
                    { x: 'Poland', y: 2.7 },
                    { x: 'Australia', y: 2.5 },
                    { x: 'Singapore', y: 2.0 },
                    { x: 'Canada', y: 1.4 },
                    { x: 'Germany', y: 1.8 }
                ],
                xName: 'x', width: 2, marker: { visible: false, height: 10, width: 10 },
                yName: 'y', name: '2016',
            },
        ],
        //Initializing Tooltip
        tooltip: { enable: true, shared: true },
        //Initializing Crosshair
        crosshair: { enable: true, lineType: 'Vertical' },
        //Initializing Title
        title: 'Real GDP Growth',
         // custom code start
        load: function (args) {
            var indexedTheme = location.hash.split('/')[1];
            indexedTheme = indexedTheme ? indexedTheme : 'Material';
            args.chart.theme = (indexedTheme.charAt(0).toUpperCase() +
                indexedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
         // custom code end
    });
    chart.appendTo('#index-container');
    document.getElementById('isIndexed').onchange = function () {
        var element = (document.getElementById('isIndexed'));
        chart.primaryXAxis.isIndexed = element.checked;
        if (chart.primaryXAxis.isIndexed) {
            chart.series[0].type = 'Column';
            chart.series[1].type = 'Column';
            chart.series[0].marker.visible = false;
            chart.series[1].marker.visible = false;
            chart.primaryXAxis.labelRotation = 0;
            chart.crosshair.line.width = 1;
        }
        else {
            chart.series[0].type = 'Line';
            chart.series[1].type = 'Line';
            chart.series[0].marker.visible = true;
            chart.series[1].marker.visible = true;
            chart.primaryXAxis.labelRotation = 90;
            chart.crosshair.line.width = 0;
        }
        chart.refresh();
    };
};