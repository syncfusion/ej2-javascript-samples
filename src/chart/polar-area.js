/**
 * Sample for Polar Series with DrawType Area 
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            labelPlacement: 'OnTicks',
            interval: 1,
            coefficient: ej.base.Browser.isDevice ? 80 : 100
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Revenue in Millions',
            labelFormat: '{value}M'
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Polar', drawType: 'Area',
                dataSource: [{ x: '2000', y: 4 }, { x: '2001', y: 3.0 },
                    { x: '2002', y: 3.8 }, { x: '2003', y: 3.4 },
                    { x: '2004', y: 3.2 }, { x: '2005', y: 3.9 }],
                xName: 'x', width: 2,
                yName: 'y', name: 'Product A',
                border: { color: 'transparent' },
                opacity: 0.5,
            },
            {
                type: 'Polar', drawType: 'Area',
                dataSource: [{ x: '2000', y: 2.6 }, { x: '2001', y: 2.8 },
                    { x: '2002', y: 2.6 }, { x: '2003', y: 3 },
                    { x: '2004', y: 3.6 }, { x: '2005', y: 3 }],
                xName: 'x', width: 2,
                yName: 'y', name: 'Product B',
                opacity: 0.5,
                border: { color: 'transparent' },
            },
            {
                type: 'Polar', drawType: 'Area',
                dataSource: [{ x: '2000', y: 2.8 }, { x: '2001', y: 2.5 },
                    { x: '2002', y: 2.8 }, { x: '2003', y: 3.2 },
                    { x: '2004', y: 2.9 }, { x: '2005', y: 2 }],
                xName: 'x', width: 2,
                yName: 'y', name: 'Product C',
                opacity: 0.5,
                border: { color: 'transparent' },
            }
        ],
        //Initializing Chart Title
        title: 'Average Sales Comparison',
        tooltip: { enable: true },
        legendSettings: { enableHighlight: true },
           // custom code start
        load: function (args) {
            var polarAreaTheme = location.hash.split('/')[1];
            polarAreaTheme = polarAreaTheme ? polarAreaTheme : 'Fluent2';
            args.chart.theme = (polarAreaTheme.charAt(0).toUpperCase() + 
                polarAreaTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    chart.appendTo('#polar-area-container');
    var polarType = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.series[0].type = polarType.value;
            chart.series[1].type = polarType.value;
            chart.series[2].type = polarType.value;
            chart.series[0].animation.enable = false;
            chart.series[1].animation.enable = false;
            chart.series[2].animation.enable = false;
            chart.refresh();
        }
    });
    polarType.appendTo('#SelectSeriesType');
};