/**
 * Sample for Polar Series with DrawType Column
 */
this.default = function () {
    var data = [
        { text: 'Japan', x: 'JPN', y: 137.9, y1: 127.6, y2: 108.8 },
        { text: 'Indonesia', x: 'IDN', y: 85.0, y1: 246.9, y2: 45.5 },
        { text: 'Russia', x: 'RUS', y: 237.1, y1: 143.5, y2: 41.2 },
        { text: 'Vietnam', x: 'VNM', y: 127.7, y1: 88.8, y2: 18.0 },
        { text: 'Pakistan', x: 'PAK', y: 126.1, y1: 179.2, y2: null },
        { text: 'Nigeria', x: 'NGA', y: 175.0, y1: 168.8, y2: 12.7 },
        { text: 'Germany', x: 'DEU', y: 113.6, y1: 81.9, y2: 46.0 },
        { text: 'Bangladesh', x: 'BGS', y: 116.0, y1: 154.7, y2: 34.6 },
        { text: 'Philippines', x: 'PHL', y: 109.5, y1: 96.7, y2: 16.6 },
        { text: 'Mexico', x: 'MEX', y: 102.7, y1: 120.8, y2: 19.8 }
    ];
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            labelPlacement: 'OnTicks', interval: 1,
            coefficient: ej.base.Browser.isDevice ? 80 : 100
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            labelFormat: '{value}M'
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Polar', drawType: 'Column', dataSource: data,
                animation: { enable: true }, border: { width: 1, color: 'white' },
                xName: 'text', yName: 'y', name: 'Mobile Subscriptions',
                marker: { dataLabel: { name: 'text' } }
            },
            {
                type: 'Polar', drawType: 'Column', dataSource: data,
                animation: { enable: true }, border: { width: 1, color: 'white' },
                xName: 'text', yName: 'y1', name: 'Population in Millions',
                marker: { dataLabel: { name: 'text' } }
            },
            {
                type: 'Polar', drawType: 'Column', dataSource: data,
                animation: { enable: true }, border: { width: 1, color: 'white' },
                xName: 'text', yName: 'y2', name: '3G/4G Subscriptions',
                marker: { dataLabel: { name: 'text' } }
            },
        ],
        //Initializing Chart Title
        title: 'Top 10 Mobile Markets by Number of Subscriptions',
        //Initializing Tooltip
        tooltip: {
            enable: true, header: '',
            format: '<b>${point.text}</b> <br> ${series.name} : <b>${point.y}</b>'
        }, legendSettings: { enableHighlight: true },
           // custom code start
        load: function (args) {
            var polarColumnTheme = location.hash.split('/')[1];
            polarColumnTheme = polarColumnTheme ? polarColumnTheme : 'Fluent2';
            args.chart.theme = (polarColumnTheme.charAt(0).toUpperCase() + 
                polarColumnTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    chart.appendTo('#polar-column-container');
    var polarType = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.series[0].type = polarType.value;
            chart.series[1].type = polarType.value;
            chart.series[2].type = polarType.value;
            chart.series[0].animation.enable = false;
            chart.series[1].animation.enable = false;
            chart.series[2].animation.enable = false;
            chart.refresh();
        }
    });
    polarType.appendTo('#SeriesType');
};