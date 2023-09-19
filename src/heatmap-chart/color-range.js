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
        dataSource: window.palatteSampleData,
        xAxis: {
            labels: ['2005', '2006', '2007', '2008', '2009', '2010',
                '2011', '2012', '2013', '2014', '2015'],
            labelIntersectAction: 'None',
            labelRotation: 45,
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
            labels: ['Agriculture', 'Energy', 'Administration', 'Health', 'Interior',
                'Justice', 'NASA', 'Transportation'],
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
            colorRangeTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
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