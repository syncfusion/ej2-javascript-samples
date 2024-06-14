/**
 * Sample for Step Line Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift',
            minimum : new Date(1971,6,11),
            maximum : new Date(2012,6,11),
            majorGridLines: { width: 0 },
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            lineStyle: { width: 0 }, interval: 10,
            majorTickLines: { width: 0 },
            labelFormat: '{value}%',
            minimum:0,
          
            maximum:80,
            title:'Production (In Percentage)',
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'StepLine',
                dataSource: [
                    { x: new Date(1975, 6, 11),y: 35 }, { x: new Date(1978, 6, 11), y: 45 }, { x: new Date(1981, 6, 11), y: 55 },
                    { x: new Date(1984, 6, 11), y: 20 }, { x: new Date(1987, 6, 11), y: 10 }, { x: new Date(1990, 6, 11), y: 42 },
                    { x: new Date(1993, 6, 11), y: 35 }, { x: new Date(1996, 6, 11), y: 22 }, { x: new Date(2000, 6, 11), y: 65 },
                    { x: new Date(2005, 6, 11), y: 65 }, { x: new Date(2010, 6, 11), y: 58 },],
                xName: 'x', width: 5,
                yName: 'y', name: 'China',
                marker: {
                     visible: true, width: 7, height: 7 
                },
            },
        ],
        //Initializing Chart Title
        title: 'Fruit Production Statistics',
        //Initializing Tooltip
        tooltip: {  enable: true ,
            shared:true , header:"<b>Fruit Production</b>" , format:"${point.x} : <b>${point.y}</b>" },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        legendSettings:{visible : false },
           // custom code start
        load: function (args) {
            var stepTheme = location.hash.split('/')[1];
            stepTheme = stepTheme ? stepTheme : 'Material';
            args.chart.theme = (stepTheme.charAt(0).toUpperCase() + 
                stepTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#sLine-container');
};