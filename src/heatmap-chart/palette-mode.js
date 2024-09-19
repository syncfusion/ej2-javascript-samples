this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'U.S. Government Energy Consumption by Agency (Trillion Btu)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },
        xAxis: {
            labels: ['2005', '2006', '2007', '2008', '2009', '2010',
                '2011', '2012', '2013', '2014', '2015'],
            labelRotation: 45,
            labelIntersectAction: 'None',
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
        dataSource: [
            [17.2, 24.6, 18.4, 9.6, 8.6, 18.8, 10.3, 5.0],
            [15.8, 29.9, 15.2, 31.3, 18.1, 5.5, 10.2, 14.6],
            [17.8, 25.5, 19.1, 12.9, 7.5, 30.7, 12.6, 5.6],
            [7.3, 20.1, 18.8, 20.3, 6.1, 9.0, 29.8, 7.7],
            [7.8, 30.5, 19.6, 10.8, 7.9, 15.5, 5.2, 14.3],
            [5.8, 31.7, 17.8, 10.4, 17.3, 15.7, 9.1, 7.7],
            [11.3, 29.1, 19.5, 11.5, 6.3, 12.9, 10.1, 6.7],
            [13.7, 31.3, 15.3, 6.2, 7.7, 16.1, 18.9, 12.6],
            [9.3, 29.9, 16.4, 14.5, 5.2, 12.3, 18.7, 7.3],
            [16.3, 27.4, 27.0, 5.5, 16.2, 12.6, 8.3, 15.2],
            [7.2, 20.1, 16.9, 9.0, 7.6, 16.2, 8.4, 29.0]
        ],
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
            // custom code start
            var paletteTheme = location.hash.split('/')[1];
            paletteTheme = paletteTheme ? paletteTheme : 'Material';
            args.heatmap.theme = (paletteTheme.charAt(0).toUpperCase() +
            paletteTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        },
        cellSettings: {
            border: { width: 0 },
            showLabel: false,
        },
        legendSettings: {
            position: 'Bottom',
            width: '400px',
            enableSmartLegend: true,
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