/**
 * Sample for Funnel Chart
 */
this.default = function () {
    var data = [{ x: "Hired", y: 50, text: "Hired: 50" },
    { x: "Personal Interview", y: 58, text: ej.base.Browser.isDevice ? "Personal <br> Interview: 58" : "Personal Interview: 58" },
    { x: "Telephonic Interview", y: 85, text: "Telephonic <br> Interview: 85" },
    { x: "Screening", y: 105, text: "Screening: 105" },
    { x: "Initial Validation", y: 145, text: ej.base.Browser.isDevice ? "Initial <br> Validation: 145" :   "Initial Validation: 145" },
    { x: "Candidates Applied", y: 250, text: "Candidates Applied: 250" },];
    var chart = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [{
            type: 'Funnel', dataSource: data, xName: 'x', yName: 'y',
            neckWidth: '15%',
            neckHeight: '18%',
            gapRatio:0.03,
            width:'45%',
            height:'80%',
            name: '2017 Population',
            dataLabel: {
                visible: true, position: 'Inside',
               name: 'text',font:{fontWeight:'600'},connectorStyle: {length:'20px'}
            },
            explode: false,
            }],
            legendSettings: { visible: false },
        //Initializing Tooltip
        tooltip: {enable: false, format: '${point.x} : <b>${point.y}</b>' },
        enableAnimation: false,
         // custom code start
        load: function (args) {
            var funnelTheme = location.hash.split('/')[1];
            funnelTheme = funnelTheme ? funnelTheme : 'Material';
            args.accumulation.theme = (funnelTheme.charAt(0).toUpperCase() +
                funnelTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
        //Initializing Title
        title: 'Recruitment Process',
    });
    chart.appendTo('#funnel-container');
    

};