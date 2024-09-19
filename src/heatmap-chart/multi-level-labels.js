this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Product wise Monthly sales revenue for a e-commerce website',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },
        xAxis : {
            labels: ['Laptop', 'Mobile', 'Gaming', 'Cosmetics', 'Fragrance', 'Watches', 'Handbags', 'Apparel',
                'Kitchenware', 'Furniture', 'Home Decor'],
        border: {
            width: 1,
            type: 'Rectangle',
            color: '#a19d9d'
        },
        textStyle: {
            color: 'black',
            fontFamily: 'inherit'
    
        },
        multiLevelLabels: [
            {
                border: { type: 'Rectangle', color: '#a19d9d' },
                textStyle: {
                    color: 'black',
                    fontWeight: 'Bold',
                    fontFamily: 'inherit'
                },
                categories: [
                    { start: 0, end: 2, text: 'Electronics', },
                    { start: 3, end: 4, text: 'Beauty and personal care', },
                    { start: 5, end: 7, text: 'Fashion', },
                    { start: 8, end: 10, text: 'Household', },
                ]
            },
        ]
        },
        yAxis : {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            border: {
                width: 0
            },
            textStyle: {
                color: 'black',
                fontFamily: 'inherit'
            },
            isInversed: true,
            multiLevelLabels: [
                {
                    border: { type: 'Brace', color: '#a19d9d' },
                    textStyle: {
                        color: 'black',
                        fontWeight: 'Bold',
                        fontFamily: 'inherit'
                    },
                    categories: [
                        { start: 0, end: 2, text: 'Q1' },
                        { start: 3, end: 5, text: 'Q2' },
                        { start: 6, end: 8, text: 'Q3' },
                        { start: 9, end: 11, text: 'Q4' }
                    ]
                },
            ]
        },
        paletteSettings: {
            palette: [{ color: '#F0ADCE' },
        { color: '#19307B' }
        ],
        },
        legendSettings: {
            visible: false
        },       
        cellRender: function (args) {
            args.displayText = '$ ' + (args.value / 10) + 'K';
        },

        tooltipRender: function (args) {
            args.content = [args.xLabel + ' | ' + args.yLabel + ' : $ ' + (args.value/ 10) + 'K'];
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        cellSettings: {
            border: {
                width: 0,
            },
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        load: function (args) {
            // custom code start
            var multiLevelTheme = location.hash.split('/')[1];
            multiLevelTheme  = multiLevelTheme  ? multiLevelTheme  : 'Material';
            args.heatmap.theme =  (multiLevelTheme.charAt(0).toUpperCase() +
            multiLevelTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            multiLevelTheme = multiLevelTheme.toLowerCase();
            if(multiLevelTheme.indexOf('dark') > -1 || multiLevelTheme.indexOf('highcontrast') > -1)
            {
                args.heatmap.xAxis.textStyle.color = 'White';
                args.heatmap.yAxis.textStyle.color = 'White';
                args.heatmap.xAxis.multiLevelLabels[0].textStyle.color = 'White';
                args.heatmap.yAxis.multiLevelLabels[0].textStyle.color = 'White';
            }
            else
            {
                args.heatmap.xAxis.textStyle.color = 'Black';
                args.heatmap.yAxis.textStyle.color = 'Black';
                args.heatmap.xAxis.multiLevelLabels[0].textStyle.color = 'Black';
                args.heatmap.yAxis.multiLevelLabels[0].textStyle.color = 'Black';
            }
            // custom code end
        },
        dataSource: [
            [52, 65, 67, 45, 37, 52,32, 76, 60, 64, 82, 91],
            [68, 52, 63, 51, 30, 51,51, 81, 70, 60, 88, 80],
            [60, 50, 42, 53, 66, 70,41, 69, 76, 74, 86, 97],
            [66, 64, 46, 40, 47, 41, 45, 76, 83, 69, 92,84],
            [65, 42, 58, 32, 36, 44,49, 79, 83, 69, 83, 93],
            [54, 46, 61, 46, 40, 39,41, 69, 61, 84, 84, 87],
            [48, 46, 61, 47, 49, 41,41, 67, 78, 83, 98, 87],
            [69, 52, 41, 44, 41, 52,46, 71, 63, 84, 83, 91],
            [50, 59, 44, 43, 27, 42,26, 64, 76, 65, 81, 86],
            [47, 49, 66, 53, 50, 34,31, 79, 78, 79, 89, 95],
            [61, 40, 62, 26, 34, 54,56, 74, 83, 78, 95, 98],
        ]
    });
    heatmap.appendTo('#container');
};