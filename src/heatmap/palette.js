this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'U.S. Government Energy Consumption by Agency (Trillion Btu)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['2005', '2006', '2007', '2008', '2009', '2010',
                '2011', '2012', '2013', '2014', '2015'],
            labelRotation: 45,
            labelIntersectAction: 'None',
        },
        yAxis: {
            labels: ['Agriculture', 'Energy', 'Administration', 'Health', 'Interior',
                'Justice', 'NASA', 'Transportation']
        },
        dataSource: window.palatteSampleData,
        paletteSettings: {
            palette: [{ value: 4.3, color: '#FFFFDA' },
            { value: 7, color: '#EDF8B6' },
            { value: 9, color: '#CAE8B4' },
            { value: 15, color: '#78D1BD' },
            { value: 18, color: '#36BCC6' },
            { value: 25, color: '#208FC6' },
            { value: 30, color: '#253494' },
            { value: 32, color: '#081D58' }
            ],
            type: 'Fixed'
        },
        load: function (args) {
            var paletteTheme = location.hash.split('/')[1];
            paletteTheme = paletteTheme ? paletteTheme : 'Material';
            args.heatmap.theme = (paletteTheme.charAt(0).toUpperCase() + paletteTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
        },
        cellSettings: {
            border: { width: 0 },
            showLabel: false,
        },
        legendSettings: {
            position: 'Bottom',
            width: '400px',
            enableSmartLegend: true
        },
    });
    heatmap.appendTo('#container');

    var fixedRadioButton = new ej.buttons.RadioButton({
        label: 'Fixed', name: 'paletteType',
        change: function () { valueXChange(); }, value: 'Fixed', checked: true
    });
    fixedRadioButton.appendTo('#fixed');

    var gradientradioButton = new ej.buttons.RadioButton({
        label: 'Gradient', name: 'paletteType',
        change: function (){ valueXChange(); }, value: 'Gradient'
    });
    gradientradioButton.appendTo('#gradient');

    var smartLegend = new ej.buttons.CheckBox({
        name: 'enableSmartLegend',
        change: function (){ valueChange(); }, checked: true
    });
    smartLegend.appendTo('#smartLegend');

    function valueXChange() {
        smartLegend.disabled = fixedRadioButton.checked ? false : true;
        heatmap.paletteSettings.type = fixedRadioButton.checked ? 'Fixed' : 'Gradient';
    }
    function valueChange() {
        heatmap.legendSettings.enableSmartLegend = smartLegend.checked;
    }
};