this.default = function () {
    var firstGrid = new ej.grids.Grid({
        dataSource: window.orderData.splice(0, 5),
        allowExcelExport: true,
        allowPdfExport: true,
        toolbar: ['excelexport', 'pdfexport'],
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'right', width: 120, type: 'number' },
            { field: 'OrderDate', headerText: 'Order Date', textAlign: 'right', width: 140, format: 'yMd' },
            { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
            { field: 'Freight', headerText: 'Freight', textAlign: 'right', width: 120, format: 'C' },
        ],
    });
    var secondGrid = new ej.grids.Grid({
        dataSource: window.productData.splice(0, 5),
        allowExcelExport: true,
        allowPdfExport: true,
        columns: [
            { field: 'ProductID', headerText: 'Product ID', textAlign: 'right', width: 120 },
            { field: 'ProductName', headerText: 'Product Name', width: 145 },
            { field: 'UnitPrice', headerText: 'Unit Price', textAlign: 'right', width: 140, format: 'C2' },
        ],
    });
    firstGrid.appendTo('#FirstGrid');
    secondGrid.appendTo('#SecondGrid');
    firstGrid.toolbarClick = function (args) {
        if (args.item.id === 'FirstGrid_excelexport') {
            var firstGridExcelExport = firstGrid.excelExport(getExcelExportProperties(), true);
            firstGridExcelExport.then(function (bookData) {
                secondGrid.excelExport(getExcelExportProperties(), false, bookData);
            });
        }
        if (args.item.id === 'FirstGrid_pdfexport') {
            var firstGridPdfExport = firstGrid.pdfExport(getPdfExportProperties(), true);
            firstGridPdfExport.then(function (pdfData) {
                secondGrid.pdfExport(getPdfExportProperties(), false, pdfData);
            });
        }

        /* tslint:disable-next-line:no-any */
        function getExcelExportProperties() {
            return {
                header: {
                    headerRows: 7,
                    rows: [
                        {
                            cells: [
                                {
                                    colSpan: 6,
                                    value: 'Northwind Traders',
                                    style: { fontColor: '#C67878', fontSize: 20, hAlign: 'center', bold: true, }
                                }]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 6,
                                    value: '2501 Aerial Center Parkway',
                                    style: { fontColor: '#C67878', fontSize: 15, hAlign: 'center', bold: true, }
                                }]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 6,
                                    value: 'Suite 200 Morrisville, NC 27560 USA',
                                    style: { fontColor: '#C67878', fontSize: 15, hAlign: 'center', bold: true, }
                                }]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 6,
                                    value: 'Tel +1 888.936.8638 Fax +1 919.573.0306',
                                    style: { fontColor: '#C67878', fontSize: 15, hAlign: 'center', bold: true, }
                                }]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 6,
                                    hyperlink: { target: 'https://www.northwind.com/', displayText: 'www.northwind.com' },
                                    style: { hAlign: 'center' }
                                }]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 6,
                                    hyperlink: { target: 'mailto:support@northwind.com' },
                                    style: { hAlign: 'center' }
                                }]
                        },
                    ]
                },
                footer: {
                    footerRows: 4,
                    rows: [
                        {
                            cells: [
                                {
                                    colSpan: 6,
                                    value: 'Thank you for your business!',
                                    style: { hAlign: 'center', bold: true }
                                }]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 6,
                                    value: '!Visit Again!',
                                    style: { hAlign: 'center', bold: true }
                                }]
                        }
                    ]
                },
            };
        }

        /* tslint:disable-next-line:no-any */
        function getPdfExportProperties() {
            return {
                header: {
                    fromTop: 0,
                    height: 120,
                    contents: [
                        {
                            type: 'line',
                            style: { penColor: '#000000', penSize: 1, dashStyle: 'solid' },
                            points: { x1: 25, y1: 4, x2: 800, y2: 4 }
                        },
                        {
                            type: 'line',
                            style: { penColor: '#000000', penSize: 1, dashStyle: 'solid' },
                            points: { x1: 25, y1: 100, x2: 800, y2: 100 }
                        },
                        {
                            type: 'text',
                            value: 'Northwind Traders',
                            position: { x: 300, y: 20 },
                            style: { textBrushColor: '#C67878', fontSize: 14 }
                        },
                        {
                            type: 'text',
                            value: '2501 Aerial Center Parkway',
                            position: { x: 280, y: 45 },
                            style: { textBrushColor: '#C67878', fontSize: 14 }
                        },
                        {
                            type: 'text',
                            value: 'Tel +1 888.936.8638 Fax +1 919.573.0306',
                            position: { x: 240, y: 70 },
                            style: { textBrushColor: '#C67878', fontSize: 14 }
                        },
                    ]
                },
                footer: {
                    fromBottom: 160,
                    height: 100,
                    contents: [
                        {
                            type: 'line',
                            style: { penColor: '#000000', penSize: 1, dashStyle: 'solid' },
                            points: { x1: 25, y1: 4, x2: 800, y2: 4 }
                        },
                        {
                            type: 'line',
                            style: { penColor: '#000000', penSize: 1, dashStyle: 'solid' },
                            points: { x1: 25, y1: 60, x2: 800, y2: 60 }
                        },
                        {
                            type: 'text',
                            value: '!! Thank you !!',
                            position: { x: 300, y: 20 },
                            style: { textBrushColor: '#C67878', fontSize: 14 }
                        }
                    ]
                }
            };
        }
    };
};