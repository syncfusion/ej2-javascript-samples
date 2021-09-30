this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Monthly Flight Traffic at JFK Airport',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['2007', '2008', '2009', '2010', '2011',
                '2012', '2013', '2014', '2015', '2016', '2017'],
            opposedPosition: true,
            labelRotation: 45,
            labelIntersectAction: 'None',
        },
        yAxis: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May',
                'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            opposedPosition: true
        },
        legendSettings: {
            visible: false,
        },
        cellSettings: {
            showLabel: false,
            border: {
                width: 0,
            },
            format: '{value} flights'
        },
        dataSource: window.opposedAxisData,
        load: function (args) {
            var opposedAxisTheme = location.hash.split('/')[1];
            opposedAxisTheme = opposedAxisTheme ? opposedAxisTheme : 'Material';
            args.heatmap.theme = (opposedAxisTheme.charAt(0).toUpperCase() + opposedAxisTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
        },
    });
    heatmap.appendTo('#container');

    var xlistObj = new ej.buttons.CheckBox({ label: 'Change X-Axis Position', checked: true, change: valueXChange });
    xlistObj.appendTo('#XOpposedPosition');

    function valueXChange() {
        heatmap.xAxis.opposedPosition = xlistObj.checked;
    }

    var ylistObj = new ej.buttons.CheckBox({ label: 'Change Y-Axis Position', checked: true, change: valueYChange });
    ylistObj.appendTo('#YOpposedPosition');

    function valueYChange() {
        heatmap.yAxis.opposedPosition = ylistObj.checked;
    }
};