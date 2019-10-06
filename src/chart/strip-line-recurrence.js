/**
 * Sample for StripLine
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'DateTime', interval: 5, intervalType: 'Years', majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift',
            minimum: new Date(1965, 1, 1), maximum: new Date(2010, 1, 1),
            stripLines: [{
                startFromAxis: true, size: 5, sizeType: 'Years', isRepeat: true, repeatEvery: 10, visible: true,
                color: 'rgba(167,169,171, 0.1)'
            }]
        },
        chartArea: { border: { width: 0 } },
        primaryYAxis:
        {
            minimum: 0, maximum: 18000, interval: 2000, majorGridLines: { color: 'rgba(167,169,171, 0.3)' },
            majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' },
            stripLines: [{
                startFromAxis: true, size: 2000, isRepeat: true, repeatEvery: 4000, visible: true,
                color: 'rgba(167,169,171, 0.1)'
            }]
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'All sources',
                dataSource: [{ x: new Date(1970, 1, 1), y: 16500 }, { x: new Date(1975, 1, 1), y: 16000 },
                { x: new Date(1980, 1, 1), y: 15400 }, { x: new Date(1985, 1, 1), y: 15800 },
                { x: new Date(1990, 1, 1), y: 14000 }, { x: new Date(1995, 1, 1), y: 10500 },
                { x: new Date(2000, 1, 1), y: 13300 }, { x: new Date(2005, 1, 1), y: 12800 }]
            },
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Autos & Light Trucks',
                dataSource: [{ x: new Date(1970, 1, 1), y: 8000 }, { x: new Date(1975, 1, 1), y: 7600 },
                { x: new Date(1980, 1, 1), y: 6400 }, { x: new Date(1985, 1, 1), y: 3700 },
                { x: new Date(1990, 1, 1), y: 7200 }, { x: new Date(1995, 1, 1), y: 2300 },
                { x: new Date(2000, 1, 1), y: 4000 }, { x: new Date(2005, 1, 1), y: 4800 }]
            }
        ],
        //Initializing Chart title
        title: 'World Pollution Report', tooltip: { enable: true, format: ' Year: ${point.x}<br> Tons Per Day: ${point.y}' },
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
    chart.animateSeries = false;
    document.getElementById('xIndex').onchange = function() {
        chart.primaryXAxis.stripLines[0].visible = (document.getElementById('xIndex')).checked;
    };
    document.getElementById('yIndex').onchange = function() {
        chart.primaryYAxis.stripLines[0].visible = (document.getElementById('yIndex')).checked;
    };
};