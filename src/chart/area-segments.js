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
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
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
                content: '#templateWrap',
                region: 'Series',
                x: '90%',
                y: '12%'
            }
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
        title: 'Organic Revenue in US - 2016',
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true
        },
        width: ej.base.Browser.isDevice ? '100%' : '60%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
         // custom code end
    });
    chart.appendTo('#container');
};