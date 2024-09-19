this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Defective Count per 1000 Products from a Manufacturing Unit',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },
        xAxis: {
            labels: ['2007', '2008', '2009', '2010', '2011',
                '2012', '2013', '2014', '2015', '2016', '2017'],
            textStyle: {
                fontFamily: 'inherit'                
            }
        },
        yAxis: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May',
                'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            textStyle: {
                fontFamily: 'inherit'                
            }

        }, cellSettings: {
            border: {
                width: '0',
                color: 'white'
            },
            showLabel: true,
            textStyle: {
                fontFamily: 'inherit'                
            }
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        paletteSettings: {
            palette: [{ color: 'rgb(172, 213, 242)' },
            { color: 'rgb(127, 168, 201)' },
            { color: 'rgb(82, 123, 160)' },
            { color: 'rgb(37, 78, 119)' },
            ],
            type: 'Gradient'
        },
        legendSettings: {
            position: 'Bottom',
            width: '250px',
            showLabel: true,
            textStyle: {
                fontFamily: 'inherit'                
            }
        },
        tooltipRender: function (args)  {
            args.content = [args.yLabel + ' | ' + args.xLabel + ' : ' + args.value + ' defective units'];
        },
        load: function (args) {
            // custom code start
            var emptyPointTheme = location.hash.split('/')[1];
            emptyPointTheme = emptyPointTheme ? emptyPointTheme : 'Material';
            args.heatmap.theme =  (emptyPointTheme.charAt(0).toUpperCase() +
            emptyPointTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        },
        dataSource:  [
            [8, 5, 2, 6, 8, 2, 9, 3, 7, 8, 7, 6],
            [5, null, 4, 9, 10, null, 11, 7, 3, 7, 8, null],
            [8, 7, 2, null, 5, 3, null, 2, 1, 8, null, 4],
            [10, 2, null, 4, 5, null, 1, 10, 5, 2, 1, null],
            [1, 2, 9, 4, null, 5, 1, null, 12, 1, null, 4],
            [4, null, 3, 5, 2, null, null, null, 5, null, 1, 3],
            [null, null, 4, 10, null, 5, 11, 2, 8, 1, null, 1],
            [1, 4, null, 4, 5, null, 1, 3, null, 1, null, 3],
            [null, 2, 1, 4, null, 5, 1, null, 2, 1, null, 2],
            [1, null, 4, null, null, 2, null, 5, 1, 5, 2, 1],
            [1, null, 2, 1, 5, null, null, null, 5, 2, 1, null]
        ]
    });
    heatmap.appendTo('#container');
};
