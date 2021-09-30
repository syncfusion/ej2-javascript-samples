this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Hourly Weather Forecast',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['London', 'Berlin', 'Madrid', 'Paris', 'Rome', 'Lisbon', 'Dublin']
        },
        yAxis: {
            labels: ['12AM', '2AM', '4AM', '6AM', '8AM', '10AM', '12PM',
                '2PM', '4PM', '6PM', '8PM', '10PM']
        },
        cellSettings: {
            showLabel: false,
             format: '{value} C'
        },
        dataSource: window.legentSampleData,
        paletteSettings: {
            palette: [{ value: 0, color: '#6EB5D0' },
            { value: 10, color: '#7EDCA2' },
            { value: 19, color: '#DCD57E' },
            { value: 22, color: '#DCD57E' },   
        ]
        },
        tooltipRender: function (args)  {
            args.content = [args.xLabel + ' | ' + args.yLabel + ' : ' + args.value + '\xB0 C'];
        },
        load: function (args) {
            var legendTheme = location.hash.split('/')[1];
            legendTheme = legendTheme ? legendTheme : 'Material';
            args.heatmap.theme = (legendTheme.charAt(0).toUpperCase() + legendTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
        },
        legendSettings: {
            position: 'Bottom',
            labelFormat: '{value}\xB0 C',
            title: {
              text :'Celsius'
            }
        },
    });
    heatmap.appendTo('#container');

    var legentListObj = new ej.dropdowns.DropDownList({
        index: 3,
        popupHeight: '200px',
        change: function () { valueXChange(); }
    });
    legentListObj.appendTo('#LegendPosition');

    function valueXChange() {
        heatmap.legendSettings.position = legentListObj.value.toString() === 'Right' ?
            'Right' : legentListObj.value.toString() === 'Bottom' ?
                'Bottom' : legentListObj.value.toString() === 'Left' ?
                    'Left' : legentListObj.value.toString() === 'Top' ? 'Top' : null;
    }
};