/**
 * Sample for Empty Point
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, labelIntersectAction: ej.base.Browser.isDevice ? 'None' : 'Rotate45', labelRotation : ej.base.Browser.isDevice ? -45 : 0, majorTickLines: {width : 0},
            minorTickLines: {width: 0}, title: 'Product'
        },  
        //Initializing Primary X Axis
        primaryYAxis: {
            minimum: 0, maximum: 100, interval: 20,
            labelFormat: '{value}%', title: 'Profit'
            
        },
        //Initializing Chart Series
        series: [
            {
                dataSource: [
                    { x: 'Rice', y: 80 }, { x: 'Wheat', y: null }, 
                    { x: 'Oil', y: 70 },{ x: 'Corn', y: 60 }, { x: 'Gram', y: null }, 
                    { x: 'Milk', y: 70 }, { x: 'Peas', y: 80 }, 
                    { x: 'Fruit', y: 60 }, { x: 'Butter', y: null }
                ],
                type: 'Column', xName: 'x', yName: 'y', width: 2, 
                emptyPointSettings: {
                    fill: '#e6e6e6',
                },
                marker: { visible: false, height: 7, width: 7 },
            },
        ],
        legendSettings: { visible: false },
        //Initializing Chart title
        title: 'Annual Product-Wise Profit Analysis',
        //Initializing Tooltip
        tooltip: { enable: true, enableMarker: false },
         // custom code start
        load: function (args) {
            var emptyPointTheme = location.hash.split('/')[1];
            emptyPointTheme = emptyPointTheme ? emptyPointTheme : 'Fluent2';
            args.chart.theme = (emptyPointTheme.charAt(0).toUpperCase() +
                emptyPointTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
         // custom code end
    });
    chart.appendTo('#empty-container');
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
    var edgeMode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.series[0].type = edgeMode.value;
            if(chart.series[0].type === 'Spline'){
                chart.series[0].marker.visible = true;
            }
            else {
                chart.series[0].marker.visible = false;
            }
            chart.refresh();
        }
    });
    edgeMode.appendTo('#SelectSeriesType');
};