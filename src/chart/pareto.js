/**
 * Sample for Pareto chart
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            title: 'Defects',
            interval: 1,
            valueType: 'Category',
            majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
            lineStyle: { width: 0 },
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            title: 'Frequency',
            minimum: 0,
            maximum: 150,
            interval: 30,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
            minorGridLines: { width: 1 }, minorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Pareto',
                dataSource: [
                    { x: 'Traffic', y: 56 }, { x: 'Child Care', y: 44.8 },
                    { x: 'Transport', y: 27.2 }, { x: 'Weather', y: 19.6 },
                    { x: 'Emergency', y: 6.6 }
                ], marker: { visible: true, width: 10, height: 10 },
                xName: 'x', yName: 'y', name: 'Defect', width: 2
            }
        ],
        width: ej.base.Browser.isDevice ? '100%' : '60%',
        //Initializing Chart Title
        title: 'Defect vs Frequency',
        legendSettings: { visible: false },
        //Initializing Tooltip
        tooltip: {
            enable: true,
            shared: true
        },
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#container');
};