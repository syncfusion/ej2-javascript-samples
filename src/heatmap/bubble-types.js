/**
 * Heatmap Inversed Axis sample
 */
this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Female Participation Rate in Labor Force for the Countries',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Singapore', 'Spain', 'Australia', 'Germany', 'Belgium', 'USA', 'France', 'UK'],
            labelRotation: 45,
            labelIntersectAction: 'None'
        },
        yAxis: {
            labels: ['1995', '2000', '2005', '2010', '2015']
        },
        dataSource: window.tableBubbleData,
        cellSettings: {
             border: {
                width: 1
            },
            showLabel: false,
            tileType: 'Bubble',
            bubbleType: 'Size'
        },
        tooltipRender: function (args) {
            args.content = [args.yLabel + ' | ' + args.xLabel + ' : ' + args.value + ' %'];
        },
        paletteSettings: {
            palette: [{ value: 35, color: '#50A3B1' },
            { value: 45, color: '#78D1BD' },
            { value: 55, color: '#CAE8B4' },
            { value: 65, color: '#EDF8B6' },
            { value: 78, color: '#FFFFDA' }
            ],
        },
        load: function (args) {
            var inversedAxisTheme = location.hash.split('/')[1];
            inversedAxisTheme = inversedAxisTheme ? inversedAxisTheme : 'Material';
            args.heatmap.theme = (inversedAxisTheme.charAt(0).toUpperCase() +
            inversedAxisTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
        },
        legendSettings: {
            visible: true
        },
    });
    heatmap.appendTo('#container');

    var bubbleTypeObj = new ej.dropdowns.DropDownList({
        index: 0,
        popupHeight: '200px',
        change: function (){ bubbleTypeChange(); }
    });
    bubbleTypeObj.appendTo('#bubbleType');

    function bubbleTypeChange() {
        heatmap.cellSettings.bubbleType = bubbleTypeObj.value.toString() === 'Size' ?
            'Size' : bubbleTypeObj.value.toString() === 'Color' ?
                'Color' : bubbleTypeObj.value.toString() === 'Sector' ?
                    'Sector' : null;
    }
};