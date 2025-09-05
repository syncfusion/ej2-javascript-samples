/**
 * Pivot Table Server-Side Aggregation Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            url: 'https://ej2services.syncfusion.com/js/development/api/pivot/post',
            mode: 'Server',
            expandAll: false,
            enableSorting: true,
            columns: [ { name: 'Year', caption: 'Production Year' },
            ],
            values: [
                { name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' }
            ],
            rows: [{ name: 'Country' }, {name: 'Products'}],
            drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
            formatSettings: [{ name: 'Amount', format: 'C0' }, { name: 'Sold', format: 'N0' }],
            filters: [],
            fieldMapping: [
                { name: 'Product_Categories', groupName: 'Product Details'},
                { name: 'Products', groupName: 'Product Details' }
            ]
        },
        width: '100%',
        height: 450,
        showFieldList: true,
        showGroupingBar: true,
        allowDataCompression: true,
        allowExcelExport: true,
        allowPdfExport: true,
        showToolbar: true,
        gridSettings: {
            columnWidth: ej.base.Browser.isDevice ? 100 : 120,
            layout: 'Tabular'
        },
        toolbarRender: function (args) {
            args.customToolbar.splice(2, 0, {
                template: '<ul id="grid_menu"></ul>',
                id: 'custom_toolbar'
            });
            args.customToolbar.splice(1, 0, {
                type: 'Separator'
            });
        },
        toolbar: ['Export', 'FieldList'],
        dataBound: function () {
            if (ej.base.Browser.isDevice && pivotObj && pivotObj.enableRtl) {
                document.querySelector('.control-section').classList.add('e-rtl');
            }
            if (document.querySelector('#grid_menu .e-menu-item') == null) {
                var menuItems = [
                    {
                        iconCss: 'e-toolbar-grid e-icons',
                        items: [
                            { text: 'Compact Layout', id: 'Compact' },
                            { text: 'Tabular Layout', id: 'Tabular' },
                        ],
                    },
                ];
                new ej.navigations.Menu(
                    { items: menuItems, select: gridToolbarClicked },
                    '#grid_menu'
                );
            }
        },
        beforeExport: function (args) {
            if (args.excelExportProperties) {
                getExcelExportProperties(args.excelExportProperties);
            } else if (args.pdfExportProperties) {
                getPdfExportProperties(args.pdfExportProperties);
            }
        }
    });
    pivotObj.appendTo('#PivotView');

    function gridToolbarClicked(args) {
        if (pivotObj && pivotObj.gridSettings && pivotObj.gridSettings.layout !== args.item.id && (args.item.id == 'Compact' || args.item.id == 'Tabular')) {
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

     function getExcelExportProperties(excelExportProperties) {
        excelExportProperties.header = {
            headerRows: 7,
            rows: [
                {
                    index: 1,
                    cells: [
                        { index: 1, colSpan: 13, value: 'INVOICE', style: { fontColor: '#C25050', fontSize: 25, hAlign: 'Center', bold: true } }
                    ]
                },
                {
                    index: 3,
                    cells: [
                        { index: 1, colSpan: 3, value: 'Adventure Traders', style: { fontColor: '#C67878', fontSize: 15, bold: true } },
                        { index: 10, colSpan: 2, value: 'INVOICE NUMBER', style: { fontColor: '#C67878', bold: true } },
                        { index: 12, colSpan: 2, value: 'DATE', style: { fontColor: '#C67878', bold: true } }
                    ]
                },
                {
                    index: 4,
                    cells: [
                        { index: 1, colSpan: 3, value: '2501 Aerial Center Parkway' },
                        { index: 10, colSpan: 2, value: 2034 },
                        { index: 12, colSpan: 2, value: new Date() }
                    ]
                },
                {
                    index: 5,
                    cells: [
                        { index: 1, colSpan: 3, value: 'Tel +1 888.936.8638 Fax +1 919.573.0306' },
                        { index: 10, colSpan: 2, value: 'CUSTOMER ID', style: { fontColor: '#C67878', bold: true } },
                        { index: 12, colSpan: 2, value: 'TERMS', style: { fontColor: '#C67878', bold: true } }
                    ]
                },
                {
                    index: 6,
                    cells: [
                        { index: 10, colSpan: 2, value: 564 },
                        { index: 12, colSpan: 2, value: 'Net 30 days' }
                    ]
                }
            ]
        };
        excelExportProperties.footer = {
            footerRows: 3,
            rows: [
                {
                    index: 2,
                    cells: [
                        { colSpan: 13, value: 'Thank you for your business!', style: { fontColor: '#C67878', hAlign: 'Center', bold: true } }
                    ]
                },
                {
                    index: 3,
                    cells: [
                        { colSpan: 13, value: '!Visit Again!', style: { fontColor: '#C67878', hAlign: 'Center', bold: true } }
                    ]
                }
            ]
        };
    }
    
    function getPdfExportProperties(pdfExportProperties) {
        pdfExportProperties.header = {
            fromTop: 0,
            height: 130,
            contents: [
                {
                    type: 'Text',
                    value: 'INVOICE',
                    position: { x: 250, y: 50 },
                    style: { textBrushColor: '#C25050', fontSize: 19 },
                },
            ],
        };
        pdfExportProperties.footer = {
            fromBottom: 0,
            height: 130,
            contents: [
                {
                    type: 'Text',
                    value: 'Thank you for your business!',
                    position: { x: 250, y: 50 },
                    style: { textBrushColor: '#C67878', fontSize: 13 },
                },
            ],
        };
    }
};