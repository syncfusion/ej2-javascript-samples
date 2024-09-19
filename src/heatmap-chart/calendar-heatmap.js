this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Annual Summary of User Activities in GitLab',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },
        height: '300px',
        xAxis: {
            opposedPosition: true,
            valueType: 'DateTime',
            minimum: new Date(2017, 6, 23),
            maximum: new Date(2018, 6, 30),
            intervalType: 'Days',
            showLabelOn: 'Months',
            labelFormat: 'MMM',
            increment: 7,
            labelIntersectAction: 'Rotate45',
            textStyle: {
                fontFamily: 'inherit'
            }            
        },
        yAxis: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            isInversed: true,
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        cellSettings: {
            showLabel: false,
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        paletteSettings: {
            palette: [
                { value: 0, color: 'rgb(238,238,238)', label: 'no contributions' },
                { value: 1, color: 'rgb(172, 213, 242)', label: '1-15 contributions' },
                { value: 16, color: 'rgb(127, 168, 201)', label: '16-31 contributions' },
                { value: 32, color: 'rgb(82, 123, 160)', label: '31-49 contributions' },
                { value: 50, color: 'rgb(37, 78, 119)', label: '50+ contributions' },
            ],
            type: 'Fixed',
            emptyPointColor: 'white'
        },
        legendSettings: {
            position: 'Bottom',
            width: '20%',
            alignment: 'Near',
            showLabel: true,
            labelDisplayType: 'None',
            enableSmartLegend: true,
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        tooltipRender: function (args) {
            var intl = new ej.base.Internationalization();
            var format = intl.getDateFormat({ format: 'EEE MMM dd, yyyy' });
            var newDate = args.xValue;
            var date = new Date(newDate.getTime());
            var axisLabel = args.heatmap.axisCollections[1].axisLabels;
            var index = axisLabel.indexOf(args.yLabel);
            (date).setDate((date).getDate() + index);
            var value = format(date);
            args.content = [(args.value === 0 ? 'No' : args.value) + ' ' + 'contributions' + '<br>' + value];
        },
        load: function (args) {
            // custom code start
            var calendarHeatmapTheme = location.hash.split('/')[1];
            calendarHeatmapTheme = calendarHeatmapTheme ? calendarHeatmapTheme : 'Material';
            args.heatmap.theme = (calendarHeatmapTheme.charAt(0).toUpperCase() +
            calendarHeatmapTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            args.heatmap.cellSettings.border.color = calendarHeatmapTheme.indexOf('dark') > -1 || calendarHeatmapTheme.indexOf('highcontrast') > -1 ? '#000' : '#fff';
            // custom code end
            
        },

        dataSource: [
            [null, null, null, null, 16, 48, 0],
            [0, 15, 0, 24, 0, 39, 0],
            [0, 18, 37, 0, 0, 50, 0],
            [0, 10, 0, 0, 44, 5, 0],
            [0, 36, 0, 45, 20, 18, 0],
            [0, 28, 1, 42, 0, 10, 0],
            [0, 16, 32, 0, 1, 25, 0],
            [0, 31, 2, 9, 24, 0, 0],
            [0, 8, 47, 0, 0, 35, 0],
            [0, 31, 0, 0, 0, 40, 0],
            [0, 8, 0, 27, 0, 35, 0],
            [0, 12, 9, 45, 0, 8, 0],
            [0, 0, 13, 0, 22, 10, 0],
            [0, 16, 32, 0, 1, 25, 0],
            [0, 31, 2, 9, 24, 0, 0],
            [0, 8, 47, 27, 0, 35, 0],
            [0, 28, 14, 10, 0, 0, 0],
            [0, 36, 0, 45, 20, 18, 0],
            [0, 28, 1, 42, 0, 10, 0],
            [0, 31, 0, 24, 0, 40, 0],
            [0, 8, 47, 27, 0, 35, 0],
            [0, 36, 0, 45, 20, 18, 0],
            [0, 28, 1, 42, 0, 10, 0],
            [0, 31, 0, 24, 0, 40, 0],
            [0, 16, 32, 0, 1, 25, 0],
            [0, 31, 2, 9, 24, 0, 0],
            [0, 8, 47, 27, 0, 35, 0],
            [0, 10, 0, 36, 23, 19, 0],
            [0, 18, 37, 23, 0, 50, 0],
            [0, 28, 14, 10, 0, 0, 0],
            [0, 18, 37, 23, 0, 50, 0],
            [0, 18, 37, 23, 0, 50, 0],
            [0, 28, 14, 10, 0, 0, 0],
            [0, 31, 2, 9, 24, 0, 0],
            [0, 8, 47, 27, 0, 35, 0],
            [0, 10, 2, 0, 44, 5, 0],
            [0, 36, 0, 45, 20, 18, 0],
            [0, 28, 1, 42, 0, 10, 0],
            [0, 31, 0, 24, 0, 40, 1],
            [0, 16, 32, 0, 1, 25, 0],
            [0, 31, 2, 9, 24, 0, 0],
            [0, 8, 47, 27, 0, 35, 0],
            [0, 10, 2, 0, 44, 5, 0],
            [0, 12, 9, 45, 0, 8, 0],
            [0, 0, 13, 35, 22, 10, 0],
            [0, 28, 14, 10, 0, 0, 0],
            [0, 36, 0, 45, 20, 18, 2],
            [0, 28, 1, 42, 0, 10, 0],
            [0, 31, 0, 24, 0, 40, 1],
            [0, 8, 47, 27, 0, 35, 0],
            [0, 10, 2, 0, 44, 5, 0],
            [0, 31, 2, 9, 24, 0, 1],
            [0, 8, 47, 27, 0, 35, 40],
            [0, 10, 2, 0, 44, 5, null],
        ]
    });
    heatmap.appendTo('#container');
};
