/**
 * Sample for Polar Series with DrawType RangeColumn
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            title: 'Months',
            labelPlacement: 'OnTicks',
            startAngle: 90, interval: 1,
            coefficient: ej.base.Browser.isDevice ? 80 : 100
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            labelFormat: '{value}˚C',
            minimum: 0, maximum: 15, interval: 5
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Polar', drawType: 'RangeColumn', name: 'Germany', xName: 'x', high: 'high', low: 'low',
                dataSource: [
                    { x: 'Jan', low: 2, high: 7 }, { x: 'Feb', low: 3, high: 7 },
                    { x: 'Mar', low: 3, high: 7 }, { x: 'Apr', low: 4, high: 9 },
                    { x: 'May', low: 6, high: 11 }, { x: 'June', low: 8, high: 14 },
                ],
                border: { width: 3, color: 'white' },
                marker: {
                    dataLabel: { 
                        visible: true,
                        position: 'Top',
                        font: { color: '#ffffff', fontWeight: '600'},
                        enableRotation: true
                    }
                }
            },
        ],
        textRender: function (args) {
            args.text = args.text.replace('˚C', '');
        },
        legendSettings: { visible: false },
        //Initializing Chart Title
        title: 'Maximum and Minimum Temperature',
           // custom code start
        load: function (args) {
            var polarRangeTheme = location.hash.split('/')[1];
            polarRangeTheme = polarRangeTheme ? polarRangeTheme : 'Material';
            args.chart.theme = (polarRangeTheme.charAt(0).toUpperCase() + 
                polarRangeTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#polar-range-container');
    var polarType = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.series[0].type = polarType.value;
            chart.series[0].animation.enable = true;
            chart.refresh();
        }
    });
    polarType.appendTo('#SelectType');
};