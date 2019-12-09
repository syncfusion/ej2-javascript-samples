/**
 * Sample for bullet chart with Orientation.
 */
this.default = function () {
    var chart = new ej.charts.BulletChart({
        width: '25%',
        tooltip: { enable: true },
        dataSource: [{ value: 23, target: 27, name: 'Product' }],
        valueField: 'value',
        targetField: 'target',
        categoryField: 'name',
        animation: { enable: false },
        margin: { left: ej.base.Browser.isDevice ? 10 : 18 },
        ranges: [{ end: 20 },
        { end: 25 },
        { end: 30 }
        ],
        minimum: 0, maximum: 30, interval: 5,
        labelFormat: '{value}%',
        title: 'Profit in Percent',
        subtitle: '%',
        titlePosition: 'Left',
        orientation: 'Vertical',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.bulletChart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/dark/i, 'Dark').replace(/light/i, 'Light').replace(/contrast/i, 'Contrast');
        }
    });
    chart.appendTo('#orientation');

    var changeOrientation = new ej.dropdowns.DropDownList({
        dataSource: ['Vertical', 'Horizontal'],
        value : 'Vertical',
        change : function(args) {
            if (args.value === 'Horizontal') {
                chart.width = '80%';
                chart.height = '120px';
                chart.titlePosition = 'Top';
              } else {
                chart.width = '25%';
                chart.height = '400px';
                chart.titlePosition = 'Left';
            }
            chart.orientation = args.value;
            chart.refresh();
        }
    });
    changeOrientation.appendTo('#orientationSelect');
};