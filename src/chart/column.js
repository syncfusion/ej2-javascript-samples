/**
 * Sample for Column Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
        },
        chartArea: { border: { width: 0 } },
        //Initializing Primary X Axis
        primaryYAxis: {
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Gold',
                dataSource: [{ x: 'USA', y: 46 }, { x: 'GBR', y: 27 }, { x: 'CHN', y: 26 }],
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color:'#ffffff' } } }
            },
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Silver',
                dataSource: [{ x: 'USA', y: 37 }, { x: 'GBR', y: 23 }, { x: 'CHN', y: 18 }],
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color:'#ffffff' } } }
            },
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Bronze',
                dataSource: [{ x: 'USA', y: 38 }, { x: 'GBR', y: 17 }, { x: 'CHN', y: 26 }],
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color:'#ffffff' } } }
            }
        ],
        //Initializing Chart Title
        title: 'Olympic Medal Counts - RIO', tooltip: { enable: true },
        width: ej.base.Browser.isDevice ? '100%' : '60%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            if (selectedTheme === 'highcontrast') {
                args.chart.series[0].marker.dataLabel.font.color = '#000000';
                args.chart.series[1].marker.dataLabel.font.color = '#000000';
                args.chart.series[2].marker.dataLabel.font.color = '#000000';
            }
        }
         // custom code end
    });
    chart.appendTo('#column-container');
};