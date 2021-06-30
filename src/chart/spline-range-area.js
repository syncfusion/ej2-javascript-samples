/**
 * Sample for Range Area series
 */
this.default = function () {
    
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 },
            
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            labelFormat: '{value}˚C',
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 40,
            majorTickLines: { width: 0 }
        },
        
        //Initializing Chart Series
        series: [
            {
                type: 'SplineRangeArea',
                name: 'England',
                dataSource: [
                    { x: 'Jan', high: 14, low: 4 },
                    { x: 'Feb', high: 17, low: 7 },
                    { x: 'Mar', high: 20, low: 10 },
                    { x: 'Apr', high: 22, low: 12 },
                    { x: 'May', high: 20, low: 10 },
                    { x: 'Jun', high: 17, low: 7 },
                    { x: 'Jul', high: 15, low: 5 },
                    { x: 'Aug', high: 17, low: 7 },
                    { x: 'Sep', high: 20, low: 10 },
                    { x: 'Oct', high: 22, low: 12 },
                    { x: 'Nov', high: 20, low: 10 },
                    { x: 'Dec', high: 17, low: 7 }
                ],
                xName: 'x', high: 'high', low: 'low', opacity: 0.4,
            },
                {
                    type: 'SplineRangeArea',
                    name: 'India',
                    dataSource: [
                        { x: 'Jan', high: 29, low: 19 },
                        { x: 'Feb', high: 32, low: 22 },
                        { x: 'Mar', high: 35, low: 25 },
                        { x: 'Apr', high: 37, low: 27 },
                        { x: 'May', high: 35, low: 25 },
                        { x: 'Jun', high: 32, low: 22 },
                        { x: 'Jul', high: 30, low: 20 },
                        { x: 'Aug', high: 32, low: 22 },
                        { x: 'Sep', high: 35, low: 25 },
                        { x: 'Oct', high: 37, low: 27 },
                        { x: 'Nov', high: 35, low: 25 },
                        { x: 'Dec', high: 32, low: 22 }
                    ],
                    xName: 'x', high: 'high', low: 'low', opacity: 0.4,          
                }
        ],
        tooltip: {
            enable: true
        },
        //Initializing Chart Title
        title: 'Monthly Temperature Range',
        width: ej.base.Browser.isDevice ? '100%' : '60%',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
        }
    });
    chart.appendTo('#range-container1');
};