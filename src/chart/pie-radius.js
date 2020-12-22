/**
 * Sample for Pie with Various Radius
 */
this.default = function () {
    var pie = new ej.charts.AccumulationChart({
        enableSmartLabels: true,
        //Initializing Series
        series: [
            {
                dataSource: [
                    { x: 'Argentina', y: 505370, r: '50%' },
                    { x: 'Belgium', y: 551500, r: '70%' },
                    { x: 'Cuba', y: 312685, r: '84%' },
                    { x: 'Dominican Republic', y: 350000, r: '97%' },
                    { x: 'Egypt', y: 301000, r: '84%' },
                    { x: 'Kazakhstan', y: 300000, r: '70%' },
                    { x: 'Somalia', y: 357022, r: '90%' }
                ],
                xName: 'x',
                yName: 'y',
                radius: 'r',
                innerRadius: '20%',
                dataLabel: {
                    visible: true, position: 'Outside', name: 'x'
                },
            }
        ],
        //Initializing Legend
        legendSettings: {
            visible: true
        },
        enableAnimation: true,
        tooltip: { enable: true, format: '${point.x} : <b>${point.y}</b>' },
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            args.accumulation.legendSettings.position = ej.base.Browser.isDevice ? 'Bottom' : 'Right';
        }
        // custom code end
    });
    pie.appendTo('#pieradius-container');
};