/**
 * Sample for Data Label Template
 */
this.default = function () {
    var theme;
    var chart = new ej.charts.Chart({
        //Initializing Chart Title
        title: 'Athletes in Popular School',
        subTitleStyle: {
            textAlignment: 'Far'
        },
        titleStyle: {
            fontStyle: 'medium', size: '14px'
        },
        chartArea: { border: { width: 0 } },
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 0,
            maximum: 70,
            lineStyle:{width:0},
            majorGridLines:{ color:'#eaeaea', width:1}
        },
        //Initializing Chart Title
        series: [
            {
                name: 'Boys',type:'Column',
                dataSource: [
                    { sports : "Tennis", boys : 50, girls : 38 },
                    { sports : "Badminton", boys : 30, girls : 40 },
                    { sports : "Cycling", boys : 37, girls : 20 },
                    { sports : "Football", boys : 60, girls : 21 },
                    { sports : "Hockey", boys : 15, girls : 8 }
                ], xName: 'sports',yName: 'boys',columnSpacing:0.5 , columnWidth:0.75,
                marker: {
                    visible: false,
                    shape: 'Circle',
                    dataLabel: {
                        visible: true,
                        position: 'Outer',
                        margin: { top: 70 },
                        template: '#Boys-Material'
                    }
                }, width: 2
            }, {
                name: 'Girls',type:'Column',
                dataSource: [
                    { sports : "Tennis", boys : 50, girls : 38 },
                    { sports : "Badminton", boys : 30, girls : 40 },
                    { sports : "Cycling", boys : 37, girls : 20 },
                    { sports : "Football", boys : 60, girls : 21 },
                    { sports : "Hockey", boys : 15, girls : 8 },
                ],  xName: 'sports', yName: 'girls',columnSpacing:0.5 , columnWidth:0.75,
                marker: {
                    visible: false,
                    shape: 'Rectangle',
                    dataLabel: {
                        visible: true,
                        position: 'Outer',
                        margin: { top: 70 },
                        template: '#Girls-Material'
                    }
                }, width: 2
            }
        ],
        textRender: function (args) {
            args.template = '#' + args.series.name + '-' + theme;
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            theme = args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            args.chart.theme = theme;
        },
         // custom code end
        legendSettings: {
            visible: true,
        }
    });
    chart.appendTo('#temp-container');
};