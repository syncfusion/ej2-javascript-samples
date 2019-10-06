/**
 * Samples for Pyramid chart
 */
this.default = function () {
    var data = [{ x: 'Sweet Treats', y: 120, text: '120 cal' },
        { x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal' },
        { x: 'Vegetables', y: 470, text: '470 cal' },
        { x: 'Meat, Poultry, Fish', y: 475, text: '475 cal' },
        { x: 'Fruits', y: 520, text: '520 cal' },
        { x: 'Bread, Rice, Pasta', y: 930, text: '930 cal' }];
    var chart = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [{
                type: 'Pyramid', dataSource: data, xName: 'x', yName: 'y', width: '45%', height: '80%',
                neckWidth: '15%', gapRatio: 0.03,
                dataLabel: {
                    name: 'text', visible: true, position: 'Inside', font: {
                        fontWeight: '600'
                    }
                }, explode: true, emptyPointSettings: { mode: 'Drop', fill: 'red' }, name: 'Food'
            }],
        legendSettings: {
            visible: false
        },
        tooltip: { enable: true, header: 'Food', format: '${point.x} : <b>${point.y} cal</b>' },
        textRender: function (args) {
            args.text = args.text;
        },
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            args.accumulation.theme = selectedTheme && (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            if (args.accumulation.availableSize.width < args.accumulation.availableSize.height) {
                args.accumulation.series[0].width = '80%';
                args.accumulation.series[0].height = '60%';
            }
        },
           // custom code end
        resized: function (args) {
            var bounds = document.getElementById('pyramid-container').getBoundingClientRect();
            if (bounds.width < bounds.height) {
                args.accumulation.series[0].width = '80%';
                args.accumulation.series[0].height = '60%';
            }
            else {
                args.accumulation.series[0].width = '45%';
                args.accumulation.series[0].height = '80%';
            }
        },
        //Initializing Chart Title
        title: 'Food Comparison Chart',
    });
    chart.appendTo('#pyramid-container');
};