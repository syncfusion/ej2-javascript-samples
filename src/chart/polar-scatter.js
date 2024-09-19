/**
 * Sample for Polar Series with DrawType Scatter
 */
this.default = function () {
    var data = [
        { text: 'Myanmar', x: 'MMR', y: 7.3, y1: 6.3, y2: 7.5 },
        { text: 'India', x: 'IND', y: 7.9, y1: 6.8, y2: 7.2 },
        { text: 'Bangladesh', x: 'BGD', y: 6.8, y1: 6.9, y2: 6.9 },
        { text: 'Cambodia', x: 'KHM', y: 7.0, y1: 7.0, y2: 6.9 },
        { text: 'China', x: 'CHN', y: 6.9, y1: 6.7, y2: 6.6 },
        { text: 'Bhutan', x: 'BTN', y: 6.1, y1: 6.2, y2: 5.9 },
        { text: 'Iceland', x: 'ISL', y: 4.1, y1: 7.2, y2: 5.7 },
        { text: 'Nepal', x: 'NPL', y: 2.7, y1: 0.6, y2: 5.5 },
        { text: 'Pakistan', x: 'PAK', y: 4.0, y1: 4.7, y2: 5.0 },
        { text: 'Poland', x: 'POL', y: 3.9, y1: 2.7, y2: 3.4 },
        { text: 'Australia', x: 'AUS', y: 2.4, y1: 2.5, y2: 3.1 },
        { text: 'Korea', x: 'KOR', y: 2.8, y1: 2.8, y2: 2.7 },
        { text: 'Singapore', x: 'SGP', y: 1.9, y1: 2.0, y2: 2 },
        { text: 'Canada', x: 'CAN', y: 0.9, y1: 1.4, y2: 1.9 },
        { text: 'Germany', x: 'DEU', y: 1.5, y1: 1.8, y2: 1.6 },
        { text: 'Denmark', x: 'DNK', y: 1.6, y1: 1.1, y2: 1.5 },
        { text: 'France', x: 'FRA', y: 1.3, y1: 1.3, y2: 1.4 },
        { text: 'Austria', x: 'AUT', y: 1.0, y1: 1.5, y2: 1.4 }
    ];
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            labelPlacement: 'OnTicks',
            interval: 1,
            coefficient: ej.base.Browser.isDevice ? 80 : 100
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 0, maximum: 8, interval: 2, labelFormat: '{value}%',
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Polar', drawType: 'Scatter', dataSource: data,
                animation: { enable: true },
                marker: { height: 7, width: 7, dataLabel: { name: 'text' } },
                xName: 'text', yName: 'y', name: '2015'
            },
            {
                type: 'Polar', drawType: 'Scatter', dataSource: data,
                animation: { enable: true },
                marker: { height: 7, width: 7, shape: 'Diamond', dataLabel: { name: 'text' } },
                xName: 'text', yName: 'y1', name: '2016'
            },
            {
                type: 'Polar', drawType: 'Scatter', dataSource: data,
                animation: { enable: true },
                marker: { height: 7, width: 7, shape: 'Triangle', dataLabel: { name: 'text' } },
                xName: 'text', yName: 'y2', name: '2017'
            },
        ],
        //Initializing Chart Title
        title: 'GDP by Countries',
        //Initializing Tooltip
        tooltip: {
            enable: true,
            format: '${point.text} : <b>${point.y}</b>'
        }, legendSettings: { enableHighlight: true },
           // custom code start
        load: function (args) {
            var polarScatterTheme = location.hash.split('/')[1];
            polarScatterTheme = polarScatterTheme ? polarScatterTheme : 'Fluent2';
            args.chart.theme = (polarScatterTheme.charAt(0).toUpperCase() + 
                polarScatterTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    chart.appendTo('#polar-scatter-container');
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
    polarType.appendTo('#SelectedType');
};
