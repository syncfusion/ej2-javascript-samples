/**
 * Sample for legend of bullet chart.
 */
this.default = function () {
    var chart = new ej.charts.BulletChart({
        width: ej.base.Browser.isDevice ? '100%' : '70%',
        tooltip: { enable: true },
        dataSource: [{ value: 25, target: [20, 26, 28] }],
        valueField: 'value',
        targetField: 'target',
        animation: { enable: false },
        ranges: [{ end: 8, color: '#CA4218', name: 'Poor' },
            { end: 18, color: '#EFC820', name: 'Avg' },
            { end: 30, color: '#599C20', name: 'Good' }
        ],
        height: '160',
        labelFormat: '{value}K',
        minimum: 0, maximum: 30, interval: 5,
        title: 'Package Downloads',
        subtitle: 'in Thousands',
        legendSettings: { visible: true },
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.bulletChart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/light/i, 'Light').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        legendRender: function (args) {
            if (args.text === 'Target_0') {
                args.text = 'Previous Target';
            }
            if (args.text === 'Target_1') {
                args.text = 'Current Target';
            }
            if (args.text === 'Target_2') {
                args.text = 'Future Target';
            }
        }
    });
    chart.appendTo('#container');
};