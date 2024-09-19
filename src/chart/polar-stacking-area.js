/**
 * Sample for Polar Series with DrawType StackingArea
 */
this.default = function () {
    var data = [
        { x: 'JPN', text: 'Japan', y: 5156, y1: 4849, y2: 4382, y3: 4939 },
        { x: 'DEU', text: 'Germany', y: 3754, y1: 3885, y2: 3365, y3: 3467 },
        { x: 'FRA', text: 'France', y: 2809, y1: 2844, y2: 2420, y3: 2463 },
        { x: 'GBR', text: ej.base.Browser.isDevice ? 'United<br> Kingdom' : 'United Kingdom', y: 2721, y1: 3002, y2: 2863, y3: 2629 },
        { x: 'BRA', text: 'Brazil', y: 2472, y1: 2456, y2: 1801, y3: 1799 },
        { x: 'RUS', text: 'Russia', y: 2231, y1: 2064, y2: 1366, y3: 1281 },
        { x: 'ITA', text: 'Italy', y: 2131, y1: 2155, y2: 1826, y3: 1851 },
        { x: 'IND', text: 'India', y: 1857, y1: 2034, y2: 2088, y3: 2256 },
        { x: 'CAN', text: 'Canada', y: 1843, y1: 1793, y2: 1553, y3: 1529 }
    ];
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            labelPlacement: 'OnTicks',
            interval: 1,
            coefficient: ej.base.Browser.isDevice ? 80 : 100
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Polar', drawType: 'StackingArea', dataSource: data,
                animation: { enable: true },
                xName: 'text', yName: 'y', name: '2013'
            },
            {
                type: 'Polar', drawType: 'StackingArea', dataSource: data,
                animation: { enable: true },
                xName: 'text', yName: 'y1', name: '2014'
            },
            {
                type: 'Polar', drawType: 'StackingArea', dataSource: data,
                animation: { enable: true },
                xName: 'text', yName: 'y2', name: '2015'
            },
            {
                type: 'Polar', drawType: 'StackingArea', dataSource: data,
                animation: { enable: true },
                xName: 'text', yName: 'y3', name: '2016'
            },
        ],
        //Initializing Chart Title
        title: 'GDP in Current Prices (USD Billion)',
        legendSettings: {
            visible: true, enableHighlight: true
        },
        //Initializing Tooltip
        tooltip: {
            enable: true
        }, 
           // custom code start
        load: function (args) {
            var polarStackedTheme = location.hash.split('/')[1];
            polarStackedTheme = polarStackedTheme ? polarStackedTheme : 'Fluent2';
            args.chart.theme = (polarStackedTheme.charAt(0).toUpperCase() + 
                polarStackedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    chart.appendTo('#polarStack-container');
    var polarType = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.series[0].type = polarType.value;
            chart.series[1].type = polarType.value;
            chart.series[2].type = polarType.value;
            chart.series[3].type = polarType.value;
            chart.series[0].animation.enable = false;
            chart.series[1].animation.enable = false;
            chart.series[2].animation.enable = false;
            chart.series[3].animation.enable = false;
            chart.refresh();
        }
    });
    polarType.appendTo('#seriesType');
};