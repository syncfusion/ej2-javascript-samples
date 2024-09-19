/**
 * Sample for Bullet chart in RTL mode.
 */
this.default = function () {
    var bullet = new ej.charts.BulletChart({
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        tooltip: { enable: true },
        dataSource: [{ value: 270, target: 250 }],
        valueField: 'value',
        targetField: 'target',
        animation: { enable: false },
        ranges: [{ end: 150 },
        { end: 250 },
        { end: 300 }
        ],
        minimum: 0, maximum: 300, interval: 50,
        title: 'Revenue YTD',
        subtitle: '$ in Thousands',
        labelFormat: '${value}K',
        enableRtl: true,
        titleStyle: { textAlignment: 'Center', },
        orientation: 'Horizontal',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.bulletChart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/light/i, 'Light').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    bullet.appendTo('#righttoleft');
};