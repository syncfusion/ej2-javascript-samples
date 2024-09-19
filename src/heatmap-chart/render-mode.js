this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Net Migration Rate of Northern Europe From 1965 to 2015',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },
        xAxis: {
            labels: ['Channel Isl', 'Denmark', 'Estonia', 'Finland',
                'Iceland', 'Ireland', 'Latvia', 'Lithuania', 'Norway', 'Sweden', 'UK'],
            labelRotation: -90,
            labelIntersectAction: 'None',
            textStyle: {
                fontFamily: 'inherit'                
            }
        },
        yAxis: {
            labels: ['1965-1970', '1970-1975', '1975-1980', '1980-1985', '1985-1990',
                '1990-1995', '1995-2000', '2000-2005', '2005-2010', '2010-2015'],
            textStyle: {
                fontFamily: 'inherit'                
            }
        },
        dataSource: [
            [7.6, 5.9, -3.7, 2.2, 8.9, 6.0, 14.2, 6.1, -3.2, 4.2],
            [3.9, 1.9, 2.6, 14.2, 2.3, 3.5, -2.8, 2.7, 4.2, 3.9],
            [9.2, 3.4, 5.2, 14.5, 1.0, -5.9, -0.2, -1.7, -3.3, 4.6],
            [-2.3, 7.2, -3.2, 15.1, 2.7, 2.9, 3.9, -1.2, 8.2, 6.0],
            [-1.8, 5.0, -3.5, 3.2, 2.5, -1.8, 14.7, 3.0, 8.8, -3.3],
            [-2.5, 3.4, 4.2, -1.9, 7.5, 4.6, 2.4, 10.9, 8.0, -3.0],
            [7.1, 2.5, 7.9, 7.4, 15.2, 7.0, 5.8, -2.3, -3.9, -4.1],
            [4.7, 3.3, 14.3, 5.5, 3.0, -3.5, -5.3, -6.8, -2.3, 5.7],
            [2.2, 13.8, 3.0, -2.2, 3.8, 14.2, 3.7, 4.0, -4.9, 7.8],
            [4.3, 15.3, 3.1, 1.7, 4.2, -3.6, 2.3, -3.2, 10.7, 2.3],
            [-2.3, 3.4, 6.1, -1.3, 13.3, 3.7, -1.7, 8.2, 7.6, 4.1]
        ],
        paletteSettings: {
            palette: [{ color: '#C06C84' },
            { color: '#355C7D' }
            ],
        },
        renderingMode: 'SVG',
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
        legendSettings: {
            position: 'Bottom',
            width: '200px',
            textStyle: {
                fontFamily: 'inherit'                
            }
        },
        load: function (args) {
            // custom code start
            var renderModeTheme = location.hash.split('/')[1];
            renderModeTheme = renderModeTheme ? renderModeTheme : 'Material';
            args.heatmap.theme = (renderModeTheme.charAt(0).toUpperCase() +
            renderModeTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        },
    });
    heatmap.appendTo('#container');

    var svgRadioButton = new ej.buttons.RadioButton({
        label: 'SVG', name: 'renderingmode',
        change: function () { valueXChange(); }, value: 'SVG', checked: true
    });
    svgRadioButton.appendTo('#svg');

    var canvasradioButton = new ej.buttons.RadioButton({
        label: 'Canvas', name: 'renderingmode',
        change: function () { valueXChange(); }, value: 'Canvas'
    });
    canvasradioButton.appendTo('#canvas');

    function valueXChange() {
        heatmap.renderingMode = svgRadioButton.checked ? 'SVG' : 'Canvas';
    }
};