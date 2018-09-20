/**
 * Sample for Line series
 */
this.default = function () {
    var dataValues = [];
    [
        380, 410, 310, 540, 510, 330, 490, 470, 472, 460, 550, 420, 380, 430, 385, 520, 580, 420, 350, 505,
        535, 410, 204, 400, 415, 408, 415, 350, 375, 500, 390, 450, 440, 350, 400, 365, 490, 400, 520, 510,
        395, 380, 404, 400, 500, 390, 610, 380, 390, 420, 440, 570, 600, 380, 410, 405, 480, 320, 420, 440,
        320, 280, 320, 400, 390, 460, 470, 490, 420, 480, 410, 420, 580, 410, 380, 480, 360, 650, 680, 720,
        580, 480, 520, 440, 420, 430, 380, 520, 410, 540, 400, 390, 460, 470, 490, 420, 480, 470, 490, 330,
        520, 480, 580, 590, 600, 310, 480, 500, 400, 508, 480, 460, 700, 705, 480, 410, 480,
    ].map(function (value, index) {
        dataValues.push({ XValue: new Date(1900 + index, 0, 1), YValue: value });
    });
    var chart = new ej.charts.Chart({

        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'y',
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        },

        //Initializing Primary Y Axis
        primaryYAxis:
            {
                labelFormat: '{value}mm',
                rangePadding: 'None',
                minimum: 200,
                maximum: 800,
                interval: 100,
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
                width: 2, segmentAxis: 'Y',
                segments: [{
                        value: 450,
                        color: 'red'
                    }, {
                        value: 500,
                        color: 'green'
                    }, {
                        color: 'blue'
                    }],
                name: 'Australia', xName: 'XValue', yName: 'YValue', type: 'MultiColoredLine'
            }
        ],

        //Initializing Chart title
        title: 'Annual Mean Rainfall for Australia',
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true, shared: true, enableAnimation : false
        },
        width: ej.base.Browser.isDevice ? '100%' : '60%',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
             if (selectedTheme === 'highcontrast') {
               args.chart.series[0].segments[0].color = '#FF4741';
               args.chart.series[0].segments[1].color = '#00B400';
               args.chart.series[0].segments[2].color = '#3F9BFF';
            }
        }
    });
    chart.appendTo('#container');
};