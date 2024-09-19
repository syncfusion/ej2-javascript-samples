/**
 * Sample for Polar Series with DrawType Line
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            title: 'Months',
            valueType: 'Category',
            labelPlacement: 'OnTicks',
            interval: 1, coefficient: ej.base.Browser.isDevice ? 80 : 100
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Temperature (Celsius)',
            minimum: -25,
            maximum: 25,
            interval: 10,
            edgeLabelPlacement: 'Shift',
            labelFormat: '{value}°C'
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Polar',
                dataSource: [
                    { x: 'Jan', y: -7.1 }, { x: 'Feb', y: -3.7 },
                    { x: 'Mar', y: 0.8 }, { x: 'Apr', y: 6.3 },
                    { x: 'May', y: 13.3 }, { x: 'Jun', y: 18.0 },
                    { x: 'Jul', y: 19.8 }, { x: 'Aug', y: 18.1 },
                    { x: 'Sep', y: 13.1 }, { x: 'Oct', y: 4.1 },
                    { x: 'Nov', y: -3.8 }, { x: 'Dec', y: -6.8 },
                ],
                xName: 'x', width: 2,
                yName: 'y', name: 'Germany', opacity: 1,
                marker: {
                    visible: true,
                    height: 7, width: 7,
                    shape: 'Pentagon',
                    isFilled: true
                }
            }, {
                type: 'Polar',
                dataSource: [
                    { x: 'Jan', y: -17.4 }, { x: 'Feb', y: -15.6 },
                    { x: 'Mar', y: -12.3 }, { x: 'Apr', y: -5.3 },
                    { x: 'May', y: 1.0 }, { x: 'Jun', y: 6.9 },
                    { x: 'Jul', y: 9.4 }, { x: 'Aug', y: 7.6 },
                    { x: 'Sep', y: 2.6 }, { x: 'Oct', y: -4.9 },
                    { x: 'Nov', y: -13.4 }, { x: 'Dec', y: -16.4 },
                ],
                xName: 'x', width: 2,
                yName: 'y', name: 'England',
                marker: {
                    visible: true, height: 7, width: 7, shape: 'Diamond', isFilled: true
                }
            }
        ],
        //Initializing Chart Title
        title: 'Alaska Weather Statistics - 2016',
        //Initializing Tooltip
        tooltip: {
            enable: true
        }, legendSettings: { enableHighlight: true },
           // custom code start
        load: function (args) {
            var polarLineTheme = location.hash.split('/')[1];
            polarLineTheme = polarLineTheme ? polarLineTheme : 'Fluent2';
            args.chart.theme = (polarLineTheme.charAt(0).toUpperCase() + 
                polarLineTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    chart.appendTo('#polar-line-container');
    document.getElementById('isClosed').onchange = function () {
        var element = (document.getElementById('isClosed'));
        chart.series[0].isClosed = element.checked;
        chart.series[1].isClosed = element.checked;
        chart.series[0].animation.enable = false;
        chart.series[1].animation.enable = false;
        chart.refresh();
    };
    var polarType = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.series[0].type = polarType.value;
            chart.series[1].type = polarType.value;
            chart.series[0].animation.enable = false;
            chart.series[1].animation.enable = false;
            chart.refresh();
        }
    });
    polarType.appendTo('#SelectSeriesType');
    document.getElementById('startangle').onpointermove = document.getElementById('startangle').ontouchmove =
        document.getElementById('startangle').onchange = function () {
            var element = (document.getElementById('startangle'));
            chart.primaryXAxis.startAngle = parseInt(element.value, 10);
            document.getElementById('startAngleValue').innerHTML = parseInt(element.value, 10) + '';
            chart.series[0].animation.enable = false;
            chart.series[1].animation.enable = false;
            chart.refresh();
        };
    document.getElementById('isinversed').onchange = function () {
        var element = (document.getElementById('isinversed'));
        chart.primaryXAxis.isInversed = element.checked;
        chart.primaryYAxis.isInversed = element.checked;
        chart.dataBind();
    };
};