/**
 * Sample for Step Area Series
 */
 this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Double', majorGridLines: { width: 0 }, edgeLabelPlacement: 'Shift',
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Production (Billion as kWh)',
            valueType: 'Double',
            labelFormat: '{value}B',
            lineStyle: { width: 0},
            majorTickLines: { width: 0}
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'StepArea',
                dataSource: [{ x: 2000, y: 416 }, { x: 2001, y: 490 }, { x: 2002, y: 470 }, { x: 2003, y: 500 },
                    { x: 2004, y: 449 }, { x: 2005, y: 470 }, { x: 2006, y: 437 }, { x: 2007, y: 458 },
                    { x: 2008, y: 500 }, { x: 2009, y: 473 }, { x: 2010, y: 520 }, { x: 2011, y: 520 }],
                name: 'Renewable', opacity: 0.6, border: { width: 2 },
                xName: 'x', width: 2,
                yName: 'y',
            },
            {
                type: 'StepArea',
                dataSource: [{ x: 2000, y: 180 }, { x: 2001, y: 240 }, { x: 2002, y: 370 }, { x: 2003, y: 200 },
                    { x: 2004, y: 229 }, { x: 2005, y: 210 }, { x: 2006, y: 337 }, { x: 2007, y: 258 },
                    { x: 2008, y: 300 }, { x: 2009, y: 173 }, { x: 2010, y: 220 }, { x: 2011, y: 220 }],
                name: 'Non-Renewable', opacity: 0.6, border: { width: 2 },
                xName: 'x', width: 2,
                yName: 'y',
            },
        ],
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        //Initializing Chart Title
        title: 'Electricity- Production',
        tooltip: { enable: true, enableHighlight: true, showNearestTooltip: true },
        legendSettings:{enableHighlight:true},
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    chart.appendTo('#step-container');
};
