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
        dataSource: [
            [10, 8, 7, 7, 10, 14, 17, 18, 18, 17, 16, 15],
            [10, 8, 7, 6, 8, 13, 15, 17, 17, 17, 15, 12],
            [12, 10, 8, 7, 7, 10, 15, 18, 20, 21, 20, 17],
            [11, 9, 8, 7, 7, 12, 16, 18, 19, 19, 17, 15],
            [15, 15, 15, 15, 16, 20, 22, 21, 21, 21, 19, 18],
            [13, 13, 12, 12, 12, 15, 18, 21, 22, 21, 19, 16],
            [11, 10, 9, 9, 10, 12, 14, 16, 17, 17, 16, 14]        
        ],
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
            legendTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            if (legendTheme.indexOf("fluent2") > -1) {
                args.heatmap.cellSettings.border.color = args.heatmap.theme === 'Fluent2' ? '#fff' : '#000';
            }
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