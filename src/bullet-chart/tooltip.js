
 /* tslint:disable */

this.default = function () {
    var bullet = new ej.charts.BulletChart({
        width: ej.base.Browser.isDevice ? '100%' : '70%',
        height: '110px',
        tooltip: { enable: true, template : '#Tooltip' },
        dataSource: [{ value: 70, target: 50 }],
        valueField: 'value',
        targetField: 'target',
        animation: { enable: false },
        ranges: [{ end: 30, color: '#599C20' },
        { end: 60, color: '#EFC820' },
        { end: 100, color: '#CA4218' }
        ],
        minimum: 0, maximum: 100, interval: 10,
        title: 'Revenue YTD',
        labelFormat: '${value}K',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.bulletChart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/dark/i, 'Dark').replace(/light/i, 'Light').replace(/contrast/i, 'Contrast');
        }
    });
    bullet.appendTo('#tooltip');
};