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
             valueType: 'DateTime', minimum : new Date(1910, 0, 1), maximum : new Date(2010, 0, 1), majorGridLines: {width : 0},
            edgeLabelPlacement: 'Shift', 
        },

        //Initializing Primary Y Axis
        primaryYAxis:
            {
                labelFormat: '{value}mm', rangePadding: 'None', minimum: 200, maximum: 800, interval: 100, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }
            },
        chartArea: {
            border: {
                width: 0
            }
        },
        annotations: [
            {
                content: "<div style='color:green; font-weight:bold; font-size:14px'>Medium</div>",
                region: 'Series',
                x: ej.base.Browser.isDevice ? '21%' : '19%',
                y: ej.base.Browser.isDevice ? '43%' : '47%'
            },
            {
                content:  "<div style='color:blue; font-weight:bold;font-size:14px'>High</div>",
                region: 'Series',
                x: '69%',
                y: '10%'
            },
            {
                content: "<div style='color:red; font-weight:bold; font-size:14px'>Low</div>",
                region: 'Series',
                x: '95%',
                y: '84%'
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
        title: 'Annual Mean Rainfall in Australia',
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true, shared: true, enableAnimation: false, header:'<b>Rainfall</b>', format: '${point.x} : <b>${point.y}</b>'
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
         // custom code end
    });
    chart.appendTo('#container');
};