/**
 * Heatmap Inversed Axis sample
 */
this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Population Growth Rate of the most Populous Countries',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['China', 'India', 'USA', 'Indonesia', 'Brazil', 'Pakistan',
                'Nigeria', 'Bangladesh', 'Russia', 'Mexico'],
            labelRotation: 45,
            labelIntersectAction: 'None',
            isInversed: true
        },
        yAxis: {
            labels: ['1965-1970', '1970-1975', '1975-1980', '1980-1985', '1985-1990',
                '1990-1995', '1995-2000', '2000-2005', '2005-2010', '2010-2015'],
            isInversed: true
        },
        dataSource: window.inveredAxisData,
        cellSettings: {
            border: {
                width: 0
            },
            showLabel: false,
            format: '{value} %'
        },
        paletteSettings: {
            palette: [{ value: 0, color: '#4b7287' },
            { value: 0.5, color: '#b5b29f' },
            { value: 1, color: '#F0D6AD' },
            { value: 1.5, color: '#9da49a' },
            { value: 2, color: '#466f86' },
            { value: 2.5, color: '#d7c7a7' },
            { value: 3, color: '#6e888f' },
            ],
        },
        load: function (args) {
            var inversedAxisTheme = location.hash.split('/')[1];
            inversedAxisTheme = inversedAxisTheme ? inversedAxisTheme : 'Material';
            args.heatmap.theme = (inversedAxisTheme.charAt(0).toUpperCase() +
            inversedAxisTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
        },
        legendSettings: {
            visible: false
        },
    });
    heatmap.appendTo('#container');

    var xlistObj = new ej.buttons.CheckBox({ label: 'Reverse X-Axis Origin', checked: true, change: valueXChange });
    xlistObj.appendTo('#XOpposedPosition');

    function valueXChange() {
        heatmap.xAxis.isInversed = xlistObj.checked;
    }

    var ylistObj = new ej.buttons.CheckBox({ label: 'Reverse Y-Axis Origin', checked: true, change: valueYChange });
    ylistObj.appendTo('#YOpposedPosition');
    function valueYChange() {
        heatmap.yAxis.isInversed = ylistObj.checked;
    }
};