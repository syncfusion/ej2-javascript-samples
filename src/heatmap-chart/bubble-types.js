this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Female Participation Rate in Labor Force for the Countries',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },
        xAxis: {
            labels: ['Singapore', 'Spain', 'Australia', 'Germany', 'Belgium', 'USA', 'France', 'UK'],
            labelRotation: 45,
            labelIntersectAction: 'None',
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
            labels: ['1995', '2000', '2005', '2010', '2015'],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        dataSource:  [
            [40, 41, 52, 57, 61],
            [37, 40, 46, 52, 53],
            [54, 55, 57, 59, 60],
            [47, 49, 51, 53, 55],
            [41, 44, 46, 48, 48],
            [59, 60, 60, 59, 57],
            [48, 49, 50, 51, 52],
            [52, 54, 56, 56, 57],
        ],
        cellSettings: {
             border: {
                width: 1
            },
            showLabel: false,
            tileType: 'Bubble',
            bubbleType: 'Size',
            textStyle: {
                fontFamily: 'inherit'
            }
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
            // custom code start
            var bubbleTypeTheme = location.hash.split('/')[1];
            bubbleTypeTheme = bubbleTypeTheme ? bubbleTypeTheme : 'Material';
            args.heatmap.theme = (bubbleTypeTheme.charAt(0).toUpperCase() +
            bubbleTypeTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        },
        legendSettings: {
            visible: true,
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        }
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