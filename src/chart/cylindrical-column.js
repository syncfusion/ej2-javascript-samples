/**
 * Sample for Cylindrical Column Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, labelIntersectAction: ej.base.Browser.isDevice ? 'None' : 'Trim', labelRotation: ej.base.Browser.isDevice ? -45 : 0, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }
        },
        chartArea: { border: { width: 0 } },
        primaryYAxis:
        {
            title: 'Medal Count', majorTickLines: { width: 0 }, lineStyle: { width: 0 }, maximum: 50, interval: 10 
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', columnFacet: 'Cylinder', xName: 'x', width: 2, yName: 'y', columnSpacing: 0.1, tooltipMappingName: 'tooltipMappingName',
                dataSource: [{ x: 'China', y: 26, tooltipMappingName: 'China' }, { x: 'Australia', y: 8, tooltipMappingName: 'Australia' }, { x: 'Germany', y: 17, tooltipMappingName: 'Germany' }, { x: 'Spain', y: 7, tooltipMappingName: 'Spain' }, { x: 'Japan', y: 12, tooltipMappingName: 'Japan' }, { x: 'USA', y: 46, tooltipMappingName: 'United States' }]
            }
        ],
        //Initializing Chart title
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        title: 'Olympic Gold Medal Counts - RIO', tooltip: { enable: true, header: "<b>${point.tooltip}</b>", format: "Gold Medal: <b>${point.y}</b>" },
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
        // custom code end
    });
    chart.appendTo('#cylinder-container');
};