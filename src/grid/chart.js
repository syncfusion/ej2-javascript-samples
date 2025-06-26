/**
 * Integrate Chart in Grid Sample
 */
this.default = function () {
    var gridChart;
    var grid = new ej.grids.Grid(
        {
            dataSource: window.salesData,
            height: 500,
            allowFiltering: true,
            filterSettings: { type: 'Menu' },
            allowSorting: true,
            allowMultiSorting: true,
            allowSelection: true,
            selectionSettings: { type: 'Multiple' },
            contextMenuItems: [
                'Bar', 'StackingBar', 'StackingBar100',
                'Pie',
                'Column', 'StackingColumn', 'StackingColumn100',
                'Line', 'StackingLine', 'StackingLine100',
                'Area', 'StackingArea', 'StackingArea100',
                'Scatter'
            ],
            gridLines: 'Both',
            columns: [
                { type: 'checkbox', width: 50, freeze: 'Left', textAlign: 'Center', customAttributes: { class: 'grid-chart-checkbox-css' } },
                { field: 'Product', headerText: 'Products', template: '#producttemplate', width: 200, freeze: 'Left' },
                { field: 'Category', headerText: 'Categories', template: '#categorytemplate', width: 160 },
                { field: 'Year', headerText: 'Year', textAlign: 'Right', width: 140 },
                { field: 'Online', headerText: 'Online', format: 'C2', textAlign: 'Right', width: 160 },
                { field: 'Retail', headerText: 'Retail', format: 'C2', textAlign: 'Right', width: 160 },
                { field: 'ProfitLoss', headerText: 'Profit/Loss', format: 'C2', textAlign: 'Right', width: 200 },
                { field: 'UnitsSold', headerText: 'Units Sold', textAlign: 'Right', width: 160 },
                { field: 'Revenue', headerText: 'Revenue', format: 'C2', textAlign: 'Right', freeze: 'Right', width: 160 },
            ],
            queryCellInfo: function (args) {
                if (args.column.field === 'ProfitLoss') {
                    args.cell.classList.add(args.data.ProfitLoss < 0 ? 'e-gridchart-sales-loss' : 'e-gridchart-sales-profit');
                }
            },
            created: function () {
                gridChart = new ej.gridchart.GridChart({
                    enablePropertyPanel: true,
                    allowExport: true,
                    enableRtl: grid.enableRtl,
                    locale: grid.locale,
                    updateChartSettings: updateChartSettings
                });
            },
            contextMenuClick: function (args) {
                if (args.chartType) {
                    var chartArgs = {
                        gridInstance: args.gridInstance,
                        chartType: args.chartType,
                        records: args.records
                    };
                    var chartModel = {
                        primaryXAxis: {
                            valueType: 'Category',
                            labelRotation: 315
                        },
                        primaryYAxis: {
                            title: 'Sales in amount',
                            titleStyle: { size: '11px' }
                        },
                        load: function(args) {
                            window.loadChartTheme(args);
                        }
                    };
                    var accumulationChartModel = {
                        load: function(args) {
                            window.loadAccumulationChartTheme(args);
                        }
                    };
                    chartModel.margin = accumulationChartModel.margin = { top: 20, bottom: 20, right: 20, left: 20 };
                    var model = { chart: chartModel, accumulationChart: accumulationChartModel };
                    var categorySeries = {
                        category: ['Product', 'Year'],
                        series: ['Online', 'Retail', 'Revenue']
                    };
                    gridChart.render(chartArgs, model, categorySeries);
                }
            }
        });
    grid.appendTo('#GridChart');

    function updateChartSettings(args) {
        var chartMargin = args.changes.chart.margin;
        if (!ej.base.isNullOrUndefined(chartMargin)) {
            var accumulationChartMargin = args.changes.accumulationChart.margin;
            if (!ej.base.isNullOrUndefined(chartMargin.top)) {
                accumulationChartMargin.top = chartMargin.top = chartMargin.top < 20 ? 20 : chartMargin.top > 100 ? 100 : chartMargin.top;
            } else if (!ej.base.isNullOrUndefined(chartMargin.bottom)) {
                accumulationChartMargin.bottom = chartMargin.bottom = chartMargin.bottom < 20 ? 20 : chartMargin.bottom > 100 ? 100 : chartMargin.bottom;
            } else if (!ej.base.isNullOrUndefined(chartMargin.left)) {
                accumulationChartMargin.left = chartMargin.left = chartMargin.left < 20 ? 20 : chartMargin.left > 100 ? 100 : chartMargin.left;
            } else if (!ej.base.isNullOrUndefined(chartMargin.right)) {
                accumulationChartMargin.right = chartMargin.right = chartMargin.right < 20 ? 20 : chartMargin.right > 100 ? 100 : chartMargin.right;
            }
        }
    }

    window.productTemplate = function (e) {
        var divElement = document.createElement('div');
        divElement.className = 'e-product-info';
        var imgElement = document.createElement('img');
        imgElement.src = 'src/grid/images/product/' + e.Image + '.png';
        imgElement.alt = e.Product;
        var nameElement = document.createElement('span');
        nameElement.innerText = e.Product;
        divElement.appendChild(imgElement);
        divElement.appendChild(nameElement);
        return divElement.outerHTML;
    };

    window.categoryTemplate = function (e) {
        var divElement = document.createElement('div');
        divElement.className = 'e-category-info';
        var svgElement = document.createElement('div');
        svgElement.innerHTML = e.CategoryIcon;
        var nameElement = document.createElement('span');
        nameElement.innerText = e.Category;
        divElement.appendChild(svgElement);
        divElement.appendChild(nameElement);
        return divElement.outerHTML;
    };
};
