/**
 * Sample for Empty Points in Pie Chart
 */
this.default = function () {
    var chart = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                xName: 'x', yName: 'y', name: 'Profit',
                type: 'Pie',
                dataSource: [{ x: 'Rice', y: 80 }, { x: 'Wheat', y: null }, { x: 'Oil', y: 70 },
                    { x: 'Corn', y: 60 }, { x: 'Gram', y: null },
                    { x: 'Milk', y: 70 }, { x: 'Peas', y: 80 },
                    { x: 'Fruit', y: 60 }, { x: 'Butter', y: null }],
                dataLabel: {
                    visible: true, position: 'Inside', font: {
                        fontWeight: '600',
                        color: '#ffffff'
                    }
                },
                emptyPointSettings: {
                    fill: '#e6e6e6',
                }
            },
        ],
        //Initializing Title
        title: 'Annual Product-Wise Profit Analysis',
        legendSettings: { visible: false },
        //Initializing Tooltip
        tooltip: { enable: true, header: 'Profit', format: '${point.x} : <b>${point.y}</b>' },
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#pie-empty-container');
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.series[0].emptyPointSettings.mode = mode.value;
            chart.refresh();
        }
    });
    mode.appendTo('#emptypointmode');
};