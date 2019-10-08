var labelRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = window.fabricColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material') {
        args.fill = window.materialColors[args.point.index % 10];
    }
    else if (selectedTheme === 'highcontrast') {
        args.fill = window.highcontrastColors[args.point.index % 10];
    }
    else {
        args.fill = window.bootstrapColors[args.point.index % 10];
    }
};
/**
 * Sample for Column series with rounded corners
 */
this.default = function () {
    var count = 0;
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 },
            tickPosition: 'Inside',
            labelPosition: 'Inside', labelStyle: { color: '#ffffff' }
        },
        chartArea: { border: { width: 0 } },
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 0, maximum: 300, interval: 50, majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y',
                dataSource: [
                    { x: 'Egg', y: 106, text: 'Bangaladesh' },
                    { x: 'Fish', y: 103, text: 'Bhutn' },
                    { x: 'Misc', y: 198, text: 'Nepal' },
                    { x: 'Tea', y: 189, text: 'Thiland' },
                    { x: 'Fruits', y: 250, text: 'Malaysia' }
                ], name: 'Tiger',
                cornerRadius: {
                    bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10
                },
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            }
        ],
        legendSettings: { visible: false },
        title: 'Trade in Food Groups', tooltip: { enable: false },
        pointRender: labelRender,
        width: ej.base.Browser.isDevice ? '100%' : '60%',
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
        loaded: function (args) {
            args.chart.loaded = null;
            var columninterval = setInterval(function () {
                if (document.getElementById('column-container')) {
                    if (count === 0) {
                        chart.series[0].dataSource = [
                            { x: 'Egg', y: 206, text: 'Bangaladesh' },
                            { x: 'Fish', y: 123, text: 'Bhutn' },
                            { x: 'Misc', y: 48, text: 'Nepal' },
                            { x: 'Tea', y: 240, text: 'Thiland' },
                            { x: 'Fruits', y: 170, text: 'Malaysia' }
                        ];
                        args.chart.animate();
                        count++;
                    }
                    else if (count === 1) {
                        chart.series[0].dataSource = [
                            { x: 'Egg', y: 86, text: 'Bangaladesh' },
                            { x: 'Fish', y: 173, text: 'Bhutn' },
                            { x: 'Misc', y: 188, text: 'Nepal' },
                            { x: 'Tea', y: 109, text: 'Thiland' },
                            { x: 'Fruits', y: 100, text: 'Malaysia' }
                        ];
                        args.chart.animate();
                        count++;
                    }
                    else if (count === 2) {
                        chart.series[0].dataSource = [
                            { x: 'Egg', y: 156, text: 'Bangaladesh' },
                            { x: 'Fish', y: 33, text: 'Bhutn' },
                            { x: 'Misc', y: 260, text: 'Nepal' },
                            { x: 'Tea', y: 200, text: 'Thiland' },
                            { x: 'Fruits', y: 30, text: 'Malaysia' }
                        ];
                        args.chart.animate();
                        count = 0;
                    }
                } else {
                    clearInterval(columninterval);
                }
            }, 2000);
        },
           // custom code end
    });
    chart.appendTo('#column-container');
};