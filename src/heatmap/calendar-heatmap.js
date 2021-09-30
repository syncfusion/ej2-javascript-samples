this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Annual Summary of User Activities in GitLab',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
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
        },
        yAxis: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            isInversed: true,
        },
        cellSettings: {
            showLabel: false,
            border: {
                color: 'white'
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
            enableSmartLegend: true
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
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.heatmap.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
        },
        dataSource: window.calendarDataSource
    });
    heatmap.appendTo('#container');
};
