/**
 * Sample for Line series
 */
this.default = function () {    
    var dataValues = [];
        [150, 71.5, 106.4, 100.25, 70.0, 106.0, 85.6, 78.5, 76.4, 86.1, 155.6, 160.4].map(function (value, index) {
            dataValues.push({ XValue: new Date(2016, index, 1), YValue: value });
        });
    var chart = new ej.charts.Chart({

        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'MMM',
            intervalType: 'Months',
            interval: 1, majorTickLines: {width : 0},minorTickLines: {width : 0},
            majorGridLines: { width: 0 },
            labelRotation: ej.base.Browser.isDevice ? -45 : 0,
            labelIntersectAction: ej.base.Browser.isDevice ? 'None' : 'Trim' 
        },

        //Initializing Primary Y Axis
        primaryYAxis:
            {
                labelFormat: '${value}K',
                rangePadding: 'None',
                minimum: 0,
                maximum: 200,
                interval: 50,
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 }
            },
        chartArea: {
            border: {
                width: 0
            }
        },
        annotations: [
            {
                content: "<div style='color:#4ca1af; font-weight:bold; font-size: 14px;'>Winter</div>",
                region: 'Series',
                x: '18%',
                y: '43%'
            },
            {
                content: "<div style='color:#ffa751; font-weight:bold; font-size: 14px;'>Summer</div>",
                region: 'Series',
                x: '46%',
                y: '43%'
            },
            {
                content: "<div style='color:#1d976c; font-weight:bold; font-size: 14px;'>Spring</div>",
                region: 'Series',
                x: '90%',
                y: '18%'
            },
            
        ],
        legendSettings: { visible: false },
        //Initializing Chart Series
        series: [
            {
                dataSource: dataValues,
                segmentAxis: 'X',
                segments: [{
                    value: new Date(2016, 4, 1),
                    color: 'url(#winter)'
                }, {
                    value: new Date(2016, 8, 1),
                    color: 'url(#summer)'
                }, {
                    color: 'url(#spring)'
                }],
                name: 'US', xName: 'XValue', yName: 'YValue', type: 'MultiColoredArea'
            }
        ],
        //Initializing Chart title
        title: 'US Season Retail Sales Growth',
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true, shared: true, header: '<b>Revenue</b>', format: '${point.x} : <b>${point.y}</b>'
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
         // custom code end
    });
    chart.appendTo('#container');
};