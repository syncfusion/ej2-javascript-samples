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
            multiLevelTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
            multiLevelTheme = multiLevelTheme.toLowerCase();
            
            if(multiLevelTheme === 'highcontrast' || multiLevelTheme === 'bootstrap5-dark' || multiLevelTheme === 'material-dark' || multiLevelTheme === 'fabric-dark' || multiLevelTheme === 'bootstrap-dark' || multiLevelTheme === 'tailwind-dark' || multiLevelTheme === 'material3-dark' || multiLevelTheme === 'fluent-dark')
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
        dataSource: window.multiLevelLabelData
    });
    heatmap.appendTo('#container');
};