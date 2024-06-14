/**
 * Sample for Column series series with Side by Side Placement
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 },majorTickLines: {width : 0},
            minorTickLines: {width: 0},
        },
        chartArea: { border: { width: 0 } },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Fruits Count',
            majorTickLines: { width: 0 }, lineStyle: { width: 0 }
        },
        //Initializing Side by Side Placement
        enableSideBySidePlacement: false,
        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Total',
                dataSource: [{ x: 'Jamesh', y: 10, text: 'Total 10' },
                { x: 'Michael', y: 9, text: 'Total 9' }, { x: 'John', y: 11, text: 'Total 11' }, { x: 'Jack', y: 8, text: 'Total 8' }, { x: 'Lucas', y: 10, text: 'Total 10' }],
                columnWidth: 0.5,
                marker: { offSet: {x:-10 ,y:-10} , dataLabel: {  visible: true, name: 'text', position:  ej.base.Browser.isDevice ? 'Outer' : 'Top', font:  { fontWeight: '600', color:  ej.base.Browser.isDevice ? '' : '#ffffff'  } } }
            },
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Apple',
                dataSource: [{ x: 'Jamesh', y: 5 }, { x: 'Michael', y: 4 }, { x: 'John', y: 5 }, { x: 'Jack', y: 5 }, { x: 'Lucas', y: 6 }],
                columnWidth: 0.4,
                marker: { dataLabel: { visible: true, name: 'text', position: 'Top', font: (ej.base.Browser.isDevice) ? {size: '8px', fontWeight: '600'} : { fontWeight: '600', color: '#ffffff' } } }
            }, {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Orange',
                dataSource: [{ x: 'Jamesh', y: 4 }, { x: 'Michael', y: 3 }, { x: 'John', y: 4 }, { x: 'Jack', y: 2 }, { x: 'Lucas', y: 3 }],
                columnWidth: 0.3,
                marker: { dataLabel: { visible: true, name: 'text', position: 'Top', font: (ej.base.Browser.isDevice) ? {size: '8px', fontWeight: '600'} : { fontWeight: '600', color: '#ffffff' } } }
            },
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Grapes',
                dataSource: [{ x: 'Jamesh', y: 1 }, { x: 'Michael', y: 2 }, { x: 'John', y: 2 }, { x: 'Jack', y: 1 }, { x: 'Lucas', y: 1 }],
                columnWidth: 0.2,
                marker: { dataLabel: { visible: true, name: 'text', position: 'Top', font: (ej.base.Browser.isDevice) ? {size: '8px', fontWeight: '600'} : { fontWeight: '600', color: '#ffffff' } } }
            }
        ],
        //Initializing Chart Title
        title: 'Fruit Consumption', tooltip: { enable: true, shared: true },
        legendSettings:{visible:true},
        width: ej.base.Browser.isDevice ? '100%' : '75%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
         // custom code end
    });
    chart.appendTo('#container');
};