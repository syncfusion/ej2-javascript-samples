/**
 * Sample for Area Series with empty points
 */
 this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        },
        //Initializing Primary Y Axis
        primaryYAxis: {         
            labelFormat: '${value}',interval: 2000, maximum: 8000, minimum: -4000,
            lineStyle: { width: 0},
            majorTickLines: { width: 0}
        },
        chartArea: {
            border: {
                width: 0
            }
        },//Initializing Chart Series
        series: [
            {
                type: 'Area',
                dataSource: [
                    { x: 'Onion', y: 3000 },
                    { x: 'Potato', y: 4000 },
                    { x: 'Tomato', y: -4000 },
                    { x: 'Corn', y: -2000 },
                    { x: 'Carrot', y: 5000 },
                ],
                xName: 'x',
                width: 2,
                yName: 'y',marker: { visible : true,isFilled : true , width : 7 , height : 7 , shape : "Circle"},
                name: 'Company A',
                opacity: 0.75,border: { width: 2 },
            },
            {
                type: 'Area',
                dataSource: [
                    { x: 'Onion', y: 2000 },
                    { x: 'Potato', y: 3000 },
                    { x: 'Tomato', y: 4000 },
                    { x: 'Corn', y: 2000 },
                    { x: 'Carrot', y: 3000 },
                ],
                xName: 'x',
                width: 2,
                yName: 'y',
                name: 'Company B',marker: {visible:true, isFilled : true , width : 7 , height : 7 , shape : "Diamond"},
                opacity: 0.75,border: { width: 2 },
            },
            {
                type: 'Area',
                dataSource: [
                    { x: 'Onion', y: 2000 },
                    { x: 'Potato', y: -1000 },
                    { x: 'Tomato', y: -3000 },
                    { x: 'Corn', y: 4000 },
                    { x: 'Carrot', y: 1000 },
                ],
                xName: 'x', 
                width: 2,
                yName: 'y',
                name: 'Company C',marker: {visible:true, isFilled : true , width : 5 , height : 5 , shape : "Rectangle"},
                opacity: 0.75,border: { width: 2 },
            },
        ],
        //Initializing Chart Title
        title: 'Profit and Loss',
        tooltip: {
            enable: true
        },
        width: ej.base.Browser.isDevice ? '100%' : '60%',
        margin : {left : ej.base.Browser.isDevice ? 2 : 10, right : ej.base.Browser.isDevice ? 2 : 10, top : ej.base.Browser.isDevice ? 2 : 10, bottom : ej.base.Browser.isDevice ? 2 : 10},
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
        // custom code end
    });
    chart.appendTo('#area-container');
};