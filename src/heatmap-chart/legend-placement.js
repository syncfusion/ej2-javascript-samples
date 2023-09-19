this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Hourly Weather Forecast (in Celsius)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },
        xAxis: {
            labels: ['London', 'Berlin', 'Madrid', 'Paris', 'Rome', 'Lisbon', 'Dublin'],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
            labels: ['12AM', '2AM', '4AM', '6AM', '8AM', '10AM', '12PM',
                '2PM', '4PM', '6PM', '8PM', '10PM'],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        cellSettings: {
            showLabel: false,
             format: '{value} C'
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
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
            // custom code start
            var legendTheme = location.hash.split('/')[1];
            legendTheme = legendTheme ? legendTheme : 'Material';
            args.heatmap.theme = (legendTheme.charAt(0).toUpperCase() +
            legendTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
            // custom code end
        },
        legendSettings: {
            position: 'Bottom',
            labelFormat: '{value}\xB0 C',
            title: {
              text :'Celsius',
              textStyle: {
                fontFamily: 'inherit'
            }
            },
            textStyle: {
                fontFamily: 'inherit'
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