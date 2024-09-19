this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            textStyle: {
                fontWeight: '500',
                size: '15px',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            },
            text: 'U.S. Government Energy Consumption by Agency (Trillion Btu)',
        },
        dataSource: [
            [17.3, 24.6, 18.4, 9.6, 8.6, 18.8, 10.3, 5.0],
            [15.7, 29.9, 15.2, 31.3, 18.1, 5.5, 10.2, 14.6],
            [17.7, 25.5, 19.1, 12.9, 7.5, 30.7, 12.6, 5.6],
            [7.4, 20.1, 18.8, 20.3, 6.1, 9.0, 29.8, 7.7],
            [7.9, 30.5, 19.6, 10.8, 7.9, 15.5, 5.2, 14.3],
            [5.7, 31.7, 17.8, 10.4, 17.3, 15.7, 9.1, 7.7],
            [11.2, 29.1, 19.5, 11.5, 6.3, 12.9, 10.1, 6.7],
            [13.6, 31.3, 15.3, 6.2, 7.7, 16.1, 18.9, 12.6],
            [9.4, 29.9, 16.4, 14.5, 5.2, 12.3, 18.7, 7.3],
            [16.4, 27.4, 27.0, 5.5, 16.2, 12.6, 8.3, 15.2],
            [7.3, 20.1, 16.9, 9.0, 7.6, 16.2, 8.4, 29.0]
        ],
        xAxis: {
            labels: ['2006', '2007', '2008', '2009', '2010',
                '2011', '2012', '2013', '2014', '2015', '2016'],
            labelIntersectAction: 'None',
            labelRotation: 45,
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
            labels: ['Agriculture', 'Energy', 'Administration', 'Health', 'Interior',
                'Justice', 'Transportation', 'NASA'],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        paletteSettings: {
            palette: [{ startValue:5, endValue:10, minColor:"#F0C27B", maxColor:"#BE8D6C"},
            { startValue:10, endValue:15, minColor:"#A26E63", maxColor:"#4B1248"},
            { startValue:15, endValue:20, minColor:"#694b77", maxColor:"#d27d85"},
            { startValue:20, endValue:31.7, minColor:"#ed9485", maxColor:"#e44841"},
            ],
            type: 'Gradient'
        },
        legendSettings:{
            textStyle: {
                 fontFamily: 'inherit'
             }
         },
         tooltipSettings:{
             textStyle: {
                 fontFamily: 'inherit'
             }
         },
        cellSettings: {
            border: { width: 0 },
            showLabel: false,
        },
        load: function (args) {
            // custom code start
            var colorRangeTheme = location.hash.split('/')[1];
            colorRangeTheme = colorRangeTheme ? colorRangeTheme : 'Material';
            args.heatmap.theme = (colorRangeTheme.charAt(0).toUpperCase() +
            colorRangeTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
            var width = parseInt(((args.heatmap.width, args.heatmap.element.offsetWidth) || args.heatmap.element.offsetWidth || 600), 10);
            if (width < 500) {
                args.heatmap.xAxis.labelRotation = 0;
                args.heatmap.xAxis.labelIntersectAction = 'Trim';
            } else {
                args.heatmap.xAxis.labelRotation = 45;
                args.heatmap.xAxis.labelIntersectAction = 'None';
            }
        },
    });
    heatmap.appendTo('#container');

    var gradientradioButton = new ej.buttons.RadioButton({
        label: 'Gradient', name: 'paletteType',
        change: function (){ valueXChange(); }, value: 'Gradient', checked: true
    });
    gradientradioButton.appendTo('#gradient');

    var fixedRadioButton = new ej.buttons.RadioButton({
        label: 'Fixed', name: 'paletteType',
        change: function () { valueXChange(); }, value: 'Fixed'
    });
    fixedRadioButton.appendTo('#fixed');

    function valueXChange() {
        heatmap.paletteSettings.type = fixedRadioButton.checked ? 'Fixed' : 'Gradient';
    }
};