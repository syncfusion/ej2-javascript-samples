/**
 * Sample for default bullet chart.
 */
this.default = function () {
    var bullet1 = new ej.charts.BulletChart({
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        tooltip: { enable: true },
        dataSource: [{ value: 270, target: 250 }],
        valueField: 'value',
        targetField: 'target',
        animation: { enable: false },
        margin: { left: ej.base.Browser.isDevice ? 10 : 60 },
        ranges: [{ end: 150 },
        { end: 250 },
        { end: 300 }
        ],
        minimum: 0, maximum: 300, interval: 50,
        title: 'Revenue',
        labelFormat: '${value}K',
        subtitle: 'U.S. $',
        titlePosition: ej.base.Browser.isDevice ? 'Top' : 'Left',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.bulletChart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/light/i, 'Light').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    bullet1.appendTo('#container1');

    var bullet2 = new ej.charts.BulletChart({
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        tooltip: { enable: true },
        dataSource: [{ value: 23, target: 27 }],
        valueField: 'value',
        targetField: 'target',
        animation: { enable: false },
        margin: { left: ej.base.Browser.isDevice ? 10 : 80 },
        ranges: [{ end: 20 },
        { end: 25 },
        { end: 30 }
        ],
        minimum: 0, maximum: 30, interval: 5,
        labelFormat: '{value}%',
        title: 'Profit',
        subtitle: '%',
        titlePosition: ej.base.Browser.isDevice ? 'Top' : 'Left',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.bulletChart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/light/i, 'Light').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    bullet2.appendTo('#container2');

    var bullet3 = new ej.charts.BulletChart({
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        tooltip: { enable: true },
        dataSource: [{ value: 350, target: 550 }],
        valueField: 'value',
        targetField: 'target',
        animation: { enable: false },
        margin: { left: ej.base.Browser.isDevice ? 10 : 21.5 },
        ranges: [{ end: 350 },
        { end: 500 },
        { end: 600 }
        ],
        minimum: 0, maximum: 600, interval: 100,
        title: 'Avg Order Size',
        subtitle: 'U.S. $',
        labelFormat: '${value}',
        titlePosition: ej.base.Browser.isDevice ? 'Top' : 'Left',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.bulletChart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/light/i, 'Light').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    bullet3.appendTo('#container3');

    var bullet4 = new ej.charts.BulletChart({
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        tooltip: { enable: true },
        dataSource: [{ value: 1600, target: 2100 }],
        valueField: 'value',
        targetField: 'target',
        animation: { enable: false },
        margin: { left: ej.base.Browser.isDevice ? 10 : 18 },
        ranges: [{ end: 1700 },
        { end: 2000 },
        { end: 2500 }
        ],
        enableGroupSeparator: true,
        minimum: 0, maximum: 2500, interval: 500,
        title: 'New Customers',
        subtitle: 'Count',
        titlePosition: ej.base.Browser.isDevice ? 'Top' : 'Left',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.bulletChart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/light/i, 'Light').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    bullet4.appendTo('#container4');

    var bullet5 = new ej.charts.BulletChart({
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        tooltip: { enable: true },
        dataSource: [{ value: 4.9, target: 4 }],
        valueField: 'value',
        targetField: 'target',
        animation: { enable: false },
        margin: { left: ej.base.Browser.isDevice ? 10 : 7 },
        ranges: [{ end: 3.7 },
        { end: 4.2 },
        { end: 5 }
        ],
        minimum: 0, maximum: 5, interval: 1,
        title: 'Cust Satisfication',
        subtitle: 'Top Rating of 5',
        titlePosition: ej.base.Browser.isDevice ? 'Top' : 'Left',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.bulletChart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/light/i, 'Light').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    bullet5.appendTo('#container5');
};