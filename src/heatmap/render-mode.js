this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Net Migration Rate of Northern Europe From 1965 to 2015',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Channel Isl', 'Denmark', 'Estonia', 'Finland',
                'Iceland', 'Ireland', 'Latvia', 'Lithuania', 'Norway', 'Sweden', 'UK'],
            labelRotation: -90,
            labelIntersectAction: 'None',
        },
        yAxis: {
            labels: ['1965-1970', '1970-1975', '1975-1980', '1980-1985', '1985-1990',
                '1990-1995', '1995-2000', '2000-2005', '2005-2010', '2010-2015']
        },
        dataSource: window.renderModeData,
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
        legendSettings: {
            position: 'Bottom',
            width: '200px'
        },
        load: function (args) {
            var renderModeTheme = location.hash.split('/')[1];
            renderModeTheme = renderModeTheme ? renderModeTheme : 'Material';
            args.heatmap.theme = (renderModeTheme.charAt(0).toUpperCase() + renderModeTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
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