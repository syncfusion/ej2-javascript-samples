this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Population Growth Rate of the most Populous Countries',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },
        xAxis: {
            labels: ['China', 'India', 'USA', 'Indonesia', 'Brazil', 'Pakistan',
                'Nigeria', 'Bangladesh', 'Russia', 'Mexico'],
            labelRotation: 45,
            labelIntersectAction: 'None',
            isInversed: true,
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
            labels: ['1965-1970', '1970-1975', '1975-1980', '1980-1985', '1985-1990',
                '1990-1995', '1995-2000', '2000-2005', '2005-2010', '2010-2015'],
            isInversed: true,
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        dataSource: [
            [2.65, 2.21, 1.52, 1.49, 1.81, 1.12, 0.69, 0.59, 0.57, 0.54],
            [2.13, 2.31, 2.29, 2.30, 2.14, 1.98, 1.84, 1.66, 1.46, 1.23],
            [0.96, 0.90, 0.94, 0.94, 0.95, 1.01, 1.19, 0.91, 0.90, 0.72],
            [2.71, 2.59, 2.41, 2.25, 1.90, 1.64, 1.43, 1.39, 1.35, 1.25],
            [2.65, 2.42, 2.37, 2.26, 1.92, 1.66, 1.54, 1.29, 1.03, 0.91],
            [2.66, 2.79, 3.12, 3.33, 3.10, 2.63, 2.41, 2.11, 2.05, 2.09],
            [2.21, 2.48, 2.95, 2.59, 2.61, 2.51, 2.49, 2.54, 2.64, 2.67],
            [3.06, 1.84, 2.67, 2.69, 2.61, 2.23, 2.06, 1.73, 1.18, 1.16],
            [0.57, 0.56, 0.63, 0.70, 0.63, 0.10, -0.26, -0.38, -0.07, 0.10],
            [3.07, 3.14, 2.61, 2.18, 1.97, 1.94, 1.57, 1.29, 1.57, 1.41],
        ],
        cellSettings: {
            border: {
                width: 0
            },
            showLabel: false,
            format: '{value} %'
        },
         tooltipSettings:{
             textStyle: {
                 fontFamily: 'inherit'
             }
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
            // custom code start
            var inversedAxisTheme = location.hash.split('/')[1];
            inversedAxisTheme = inversedAxisTheme ? inversedAxisTheme : 'Material';
            args.heatmap.theme =  (inversedAxisTheme.charAt(0).toUpperCase() +
            inversedAxisTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
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