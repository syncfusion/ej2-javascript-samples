/**
 * Pivot Table Server-Side Aggregation Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            url: 'https://ej2services.syncfusion.com/js/development/api/pivot/post',
            mode: 'Server',
            expandAll: true,
            enableSorting: true,
            columns: [ { name: 'Year', caption: 'Production Year' },
            ],
            values: [
                { name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' }
            ],
            rows: [{ name: 'Country' }, {name: 'Products'}],
            formatSettings: [{ name: 'Amount', format: 'C0' }, { name: 'Sold', format: 'N0' }],
            filters: []
        },
        width: '100%',
        height: 450,
        showFieldList: true,
        showGroupingBar: true,
        allowDataCompression: true,
        allowExcelExport: true,
        allowPdfExport: true,
        showToolbar: true,
        displayOption: { view: 'Both' },
        chartSettings: {
            title: 'Sales Analysis',
            primaryYAxis: { border: { width: 0 } },
            legendSettings: { visible: false, },
            chartSeries: { type: 'Bar', animation: { enable: false } }
        },
        toolbar: ['Chart', 'FieldList'],
        gridSettings: {
            columnWidth: ej.base.Browser.isDevice ? 100 : 120,
        },
        toolbarRender: function (args) {
            args.customToolbar.splice(0, 0, {
                prefixIcon: 'e-menu-icon e-pivotview-excel-export e-icons',
                tooltipText: 'Excel Export as Pivot',
                click: toolbarClicked.bind(this),
            });
            args.customToolbar.splice(1, 0, {
                type: 'Separator'
            });
            args.customToolbar.splice(2, 0, {
                template: '<ul id="grid_menu"></ul>',
                id: 'custom_toolbar'
            });
            args.customToolbar.splice(3, 0, {
                type: 'Separator'
            });
        },
        dataBound: function () {
            if (ej.base.Browser.isDevice && pivotObj && pivotObj.enableRtl) {
                document.querySelector('.control-section').classList.add('e-rtl');
            }

            if (document.querySelector('#grid_menu .e-menu-item') == null) {
                var menuItem = [
                    {
                        iconCss: 'e-toolbar-grid e-icons',
                        items: [
                            { text: 'Compact Layout', id: 'Compact' },
                            { text: 'Tabular Layout', id: 'Tabular' },
                        ],
                    },
                ];
                var gridMenu = new ej.navigations.Menu(
                    { items: menuItem, select: gridToolbarClicked },
                    '#grid_menu'
                );
            }
        }
    });
    pivotObj.appendTo('#PivotView');

    function toolbarClicked() {
        pivotObj.exportAsPivot();
    }
    function gridToolbarClicked(args) {
        if (pivotObj && pivotObj.gridSettings && pivotObj.gridSettings.layout !== args.item.id) {
            pivotObj.setProperties({
                gridSettings: {
                    layout: args.item.id
                },
                displayOption: {
                    view: 'Both', primary: 'Table'
                },
            }, true);
            pivotObj.refresh();
        }
    }
};