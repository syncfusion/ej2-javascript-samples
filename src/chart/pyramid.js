/**
 * Samples for Pyramid chart
 */
this.default = function () {
    var data = [{ x: 'Oils', y: 2, text: 'Oils: 2%' },
    { x: 'Protein', y: 10, text: 'Protein: 10%' },
    { x: 'Fruits', y: 15, text: 'Fruits: 15%' },
    { x: 'Dairy', y: 23, text: 'Dairy: 23%' },
    { x: 'Vegetables', y: 23, text: 'Vegetables: 23%' },
    { x: 'Grains', y: 27, text: 'Grains: 27%' }];
    var chart = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [{
                type: 'Pyramid', dataSource: data, xName: 'x', yName: 'y', width: '45%', height: '80%',
                neckWidth: '15%', gapRatio: 0.03, name: 'Food',
                dataLabel: {
                    name: 'text', visible: true, position: 'Outside', connectorStyle: {length: ej.base.Browser.isDevice ? '10px' : '20px'}, font: {
                    fontWeight: '600',  size: ej.base.Browser.isDevice ? '7px' : '12px'
                    }
                }, explode: false, emptyPointSettings: { mode: 'Drop', fill: 'red' },
           }],
        legendSettings: {
            visible: false
        },
        tooltip: {enable: true, enableHighlight: true, format: '${point.x} : <b>${point.y}% of Daily Intake</b>',header:''},
        textRender: function (args) {
            args.text = args.text;
        },
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
           // custom code end
        //Initializing Chart Title
        title: 'Food Consumption Pyramid',
        subTitle: 'Source: wikipedia.org'
    });
    chart.appendTo('#pyramid-container');
};
