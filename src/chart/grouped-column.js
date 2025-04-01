/**
 * Sample for Column Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }
        },
        chartArea: { border: { width: 0 }, margin: { bottom: 12 } },
        primaryYAxis:
        {
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            title: 'Number of Medals Won',
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', yName: 'y', name: 'USA Total Medals', groupName: 'USA', columnWidth: 0.7,
                dataSource: [{ x: '2016', y: 104 }, { x: '2020', y: 121 }, { x: '2024', y: 113 }], columnSpacing: 0.1,
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },
                cornerRadius: { topLeft: 4, topRight: 4 }, legendShape: 'Rectangle'
            },
            {
                type: 'Column', xName: 'x', yName: 'y', name: 'USA Gold Medals', groupName: 'USA', columnWidth: 0.5,
                dataSource: [{ x: '2016', y: 46 }, { x: '2020', y: 46 }, { x: '2024', y: 39 }], columnSpacing: 0.1,
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },
                cornerRadius: { topLeft: 4, topRight: 4 }, legendShape: 'Rectangle'
            },
            {
                type: 'Column', xName: 'x', yName: 'y', name: 'UK Total Medals', groupName: 'UK', columnWidth: 0.7,
                dataSource: [{ x: '2016', y: 65 }, { x: '2020', y: 67 }, { x: '2024', y: 65 }], columnSpacing: 0.1,
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },
                cornerRadius: { topLeft: 4, topRight: 4 }, legendShape: 'Rectangle'
            },
            {
                type: 'Column', xName: 'x', yName: 'y', name: 'UK Gold Medals', groupName: 'UK', columnWidth: 0.5,
                dataSource: [{ x: '2016', y: 29 }, { x: '2020', y: 27 }, { x: '2024', y: 22 }], columnSpacing: 0.1,
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },
                cornerRadius: { topLeft: 4, topRight: 4 }, legendShape: 'Rectangle'
            },
            {
                type: 'Column', xName: 'x', yName: 'y', name: 'China Total Medals', groupName: 'China', columnWidth: 0.7,
                dataSource: [{ x: '2016', y: 91 }, { x: '2020', y: 70 }, { x: '2024', y: 88 }], columnSpacing: 0.1,
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },
                cornerRadius: { topLeft: 4, topRight: 4 }, legendShape: 'Rectangle'
            },
            {
                type: 'Column', xName: 'x', yName: 'y', name: 'China Gold Medals', groupName: 'China', columnWidth: 0.5,
                dataSource: [{ x: '2016', y: 38 }, { x: '2020', y: 26 }, { x: '2024', y: 38 }], columnSpacing: 0.1,
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },
                cornerRadius: { topLeft: 4, topRight: 4 }, legendShape: 'Rectangle'
            },
        ],
        //Initializing Chart title
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        title: 'Olympic Medal Trends by Country and Year',
        subTitle: 'A Historical Overview of Medal Counts Across Nations',
        tooltip: { enable: true, enableHighlight: true, header: '<b>${point.x}</b>', format: '${series.groupName} : <b>${point.y} Gold</b>' },
        legendSettings: { visible: true, shapeWidth: 9, shapeHeight: 9 },
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        // custom code end
        tooltipRender: function (args) {
            var seriesName = args.series.name;
            var groupName = args.series.groupName || '';
            var value = args.point.y;
            args.text = seriesName.indexOf('Gold') !== -1 ? groupName + ": <b>" + value + " Gold</b>"  : groupName + ": <b>" + value + " Total</b>";
        }
    });
    chart.appendTo('#container');
};