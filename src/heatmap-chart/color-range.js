this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            textStyle: {
                fontWeight: '500',
                size: '15px',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            },
            text: 'U.S. Government Energy Consumption by Agency (Trillion Btu)',
        },
        dataSource: window.palatteSampleData,
        xAxis: {
            labels: ['2005', '2006', '2007', '2008', '2009', '2010',
                '2011', '2012', '2013', '2014', '2015'],
            labelIntersectAction: 'None',
            labelRotation: 45,
        },
        yAxis: {
            labels: ['Agriculture', 'Energy', 'Administration', 'Health', 'Interior',
                'Justice', 'NASA', 'Transportation']
        },
        paletteSettings: {
            palette: [{ startValue: 5, endValue:15, minColor: '#FFFFDA', maxColor:'#EDF8B6' },
            { startValue: 15, endValue:20, minColor: '#CAE8B4', maxColor:'#78D1BD' },
            { startValue: 20, endValue:31.7, minColor: '#36BCC6', maxColor:'#208FC6' },
            ],
            type: 'Gradient'
        },
        cellSettings: {
            border: { width: 0 },
            showLabel: false,
        },
        load: function (args) {
            var colorRangeTheme = location.hash.split('/')[1];
            colorRangeTheme = colorRangeTheme ? colorRangeTheme : 'Material';
            args.heatmap.theme = (colorRangeTheme.charAt(0).toUpperCase() +
            colorRangeTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
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