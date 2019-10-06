/**
 * Sample for Data Label Template
 */
this.default = function () {
    var theme;
    var chart = new ej.charts.Chart({
        //Initializing Chart Title
        title: 'Population of India Statistics',
        subTitle: '(2010 - 2016)',
        subTitleStyle: {
            textAlignment: 'Far'
        },
        titleStyle: {
            fontFamily: 'Roboto',
            fontStyle: 'medium', size: '14px'
        },
        chartArea: { border: { width: 0 } },
        //Initializing Primary X Axis
        primaryXAxis: {
            minimum: 2010, maximum: 2016,
            interval: 1,
            edgeLabelPlacement: 'Shift',
            labelStyle: {
                fontFamily: 'Roboto',
                fontStyle: 'medium',
                size: '14px'
            },
            majorGridLines: { width: 0 },
            lineStyle: { color: '#eaeaea', width: 1 }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 900, maximum: 1300,
            interval: 80,
            labelFormat: '{value}M',
            labelStyle: {
                fontFamily: 'Roboto',
                fontStyle: 'medium',
                size: '14px'
            },
            majorGridLines: {
                color: '#eaeaea',
                width: 1
            },
            lineStyle: {
                color: '#eaeaea',
                width: 1
            }
        },
        //Initializing Chart Title
        series: [
            {
                name: 'Male',
                dataSource: [
                    { x: 2010, y: 1014 }, { x: 2011, y: 1040 },
                    { x: 2012, y: 1065 }, { x: 2013, y: 1110 },
                    { x: 2014, y: 1130 }, { x: 2015, y: 1153 },
                    { x: 2016, y: 1175 }
                ], xName: 'x', yName: 'y',
                marker: {
                    visible: true,
                    shape: 'Circle',
                    dataLabel: {
                        visible: true,
                        position: 'Top',
                        margin: { right: 30 },
                        template: '#Male-Material'
                    }
                }, width: 2
            }, {
                name: 'Female',
                dataSource: [
                    { x: 2010, y: 990 }, { x: 2011, y: 1010 },
                    { x: 2012, y: 1030 }, { x: 2013, y: 1070 },
                    { x: 2014, y: 1105 }, { x: 2015, y: 1138 },
                    { x: 2016, y: 1155 }
                ], xName: 'x', yName: 'y',
                marker: {
                    visible: true,
                    shape: 'Rectangle',
                    dataLabel: {
                        visible: true,
                        position: 'Bottom',
                        margin: { right: 15 },
                        template: '#Female-Material'
                    }
                }, width: 2
            }
        ],
        textRender: function (args) {
            args.template = '#' + args.series.name + '-' + theme;
        },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            theme = args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            args.chart.theme = theme;
        },
         // custom code end
        legendSettings: {
            visible: true,
        }
    });
    chart.appendTo('#temp-container');
};