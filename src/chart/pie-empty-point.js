/**
 * Sample for Empty Points in Pie Chart
 */
this.default = function () {
    var chart = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                xName: 'x', yName: 'y',
                type: 'Pie',
                dataSource: [{ x: 'Rice', y: 80 }, { x: 'Wheat', y: null }, { x: 'Oil', y: 70 },
                    { x: 'Corn', y: 60 }, { x: 'Gram', y: null },
                    { x: 'Milk', y: 70 }, { x: 'Peas', y: 80 },
                    { x: 'Fruit', y: 60 }, { x: 'Butter', y: null }],
                dataLabel: {
                    visible: true, position: 'Inside', enableRotation: true, font: {
                        fontWeight: '600',          
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
        tooltip: {enable: true,header:"", format: '<b>${point.x}</b><br> Profit: <b>$${point.y}K</b>', enableHighlight: true  },
        enableBorderOnMouseMove:false,
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            if(selectedTheme === 'bootstrap5-dark'){
                args.chart.series[0].emptyPointSettings.fill = '#FF7F7F';
            }
        },
        textRender: function (args) {
            args.text = args.point.x + ": $" + args.point.y + "K";
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
            chart.series[0].animation.enable = false;
            chart.refresh();
        }
    });
    mode.appendTo('#emptypointmode');
};
