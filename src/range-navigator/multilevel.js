/**
 * Sample for multi level labels without series
 */
var logData = [];
    var value = 0;
    var point = {};
    for (var j = 1; j < 1090; j++) {
        value += (Math.random() * 10 - 5);
        value = value < 0 ? Math.abs(value) : value;
        point = { x: new Date(2000, 0, j), y: value, z: value + 10 };
        logData.push(point);
    }
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
    var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    this.default = function () {
        var range = new ej.charts.RangeNavigator({
            labelPosition: 'Outside',
            tooltip: { enable: true, displayMode: 'Always' },
            valueType: 'DateTime',
            intervalType: 'Quarter',
            enableGrouping: true,
            groupBy: 'Years',
            value: [new Date('2001-01-01'), new Date('2002-01-01')],
            dataSource: logData, xName: 'x', yName: 'y',
            width: ej.base.Browser.isDevice ? '100%' : '80%',
            theme: theme
        });
        range.appendTo('#container');
};