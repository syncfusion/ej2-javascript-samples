/**
 * Sample for Empty Points in Pie Chart
 */
this.default = function () {
    var chart = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                xName: 'x', yName: 'y', radius: '80%', borderRadius: 3, border: { width: 1, color: 'white' },
                type: 'Pie',
                dataSource: [{ x: 'Action', y: 35,}, { x: 'Drama', y: 25 }, { x: 'Comedy', y: null },
                    { x: 'Romance', y: 20 }, { x: 'Horror', y: 10 }, { x: 'Sci-Fi', y: null }],
                dataLabel: {
                    visible: true, position: 'Inside', enableRotation: true, font: {
                        fontWeight: '600',  size: ej.base.Browser.isDevice ? '8px' : '12px',         
                    }
                },
                emptyPointSettings: {
                    fill: '#e6e6e6',
                }
            },
        ],
        //Initializing Title
        title: 'Movie Genre Revenue Share',
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
