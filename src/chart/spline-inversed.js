/**
 * Sample for Inversed Spline Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            interval: 4, minimum: 2000, maximum: 2016, labelIntersectAction: 'Rotate90', minorTickLines: { width: 0 }, title:'Years'
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        isTransposed: true,
        //Initializing Primary Y Axis
        primaryYAxis: {
            labelFormat: '{value}M', minimum: 0, title: 'Sales (In Millions)', maximum: 25, interval: 5,edgeLabelPlacement: 'Shift',
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Spline',
                dataSource: [
                    { Month: 2000, LDN_Temperature: -1, FR_Temperature: 10 },{ Month: 2002, LDN_Temperature: -1, FR_Temperature: 7 },{ Month: 2004, LDN_Temperature: 25, FR_Temperature: 13 },
                    { Month: 2005, LDN_Temperature: 31, FR_Temperature: 16 },{ Month: 2007, LDN_Temperature: 14, FR_Temperature: 11 },{ Month: 2010, LDN_Temperature: 8, FR_Temperature: 10 },
                    { Month: 2011, LDN_Temperature: 8, FR_Temperature: 15 },{ Month: 2013, LDN_Temperature: 8, FR_Temperature: 20 },{ Month: 2014, LDN_Temperature: 8, FR_Temperature: 17 },
                    { Month: 2015, LDN_Temperature: 8, FR_Temperature: 5 }
                ],
                width:2,
                marker:{ visible: true, width: 7, height: 7, isFilled: true },
                xName: 'Month',
                yName: 'FR_Temperature',
                name: 'Rate'
            }
        ],
        //Initializing Chart Title
        title: 'Music Album Sales',
        //Initializing Tooltip
        tooltip: {
            enable: true , shared:true, header:'<b>Album Sale</b>', format:'${point.x}: <b>${point.y}</b>'
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        legendSettings:{visible:false},
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