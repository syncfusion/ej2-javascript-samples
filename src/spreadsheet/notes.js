this.default = function () {
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        sheets: [
            {
                ranges: [{
                    dataSource: window.notesData,
                    startCell: "B3"
                },
                ],
                name: 'Cart',
                rows: [
                    {
                        index: 0,
                        cells: [{
                            value: 'Shopping Cart', rowSpan: 2, colSpan: 6, style: {
                                fontSize: '20pt', fontWeight: 'bold',
                                textAlign: 'center', backgroundColor: '#279377', verticalAlign: 'middle', color: '#ffffff'
                            }
                        }]
                    },
                    {
                        index: 2,
                        cells: [{ value: 'Product ID', style: { fontWeight: 'bold', textAlign: 'center' } },
                        { style: { fontWeight: 'bold', textAlign: 'center' } },
                        { style: { fontWeight: 'bold', textAlign: 'center' } },
                        { style: { fontWeight: 'bold', textAlign: 'center' } },
                        { style: { fontWeight: 'bold', textAlign: 'center' } },
                        { style: { fontWeight: 'bold', textAlign: 'center' } }
                        ]
                    },
                    {
                        cells: [{ value: '101', style: { textAlign: 'left' } },
                        { index: 1, notes: 'This product has been the most profitable this month.' }
                        ]
                    },
                    {
                        cells: [{ value: '102', style: { textAlign: 'left' } },
                        { index: 1, notes: 'This product has had the lowest sales in terms of quantity this month.' }
                        ]
                    },
                    {
                        cells: [{ value: '103', style: { textAlign: 'left' } },
                        { index: 1, notes: 'This product has been the least profitable this month.' }
                        ]
                    },
                    {
                        cells: [{ value: '104', style: { textAlign: 'left' } }]
                    },
                    {
                        cells: [{ value: '105', style: { textAlign: 'left' } },
                        { index: 1, notes: 'This product has had the highest sales in terms of quantity this month.' }
                        ]
                    },
                    {
                        cells: [{ value: '106', style: { textAlign: 'left' } }]
                    },
                    {
                        cells: [{ value: '107', style: { textAlign: 'left' } }]
                    },
                    {
                        cells: [{ value: '108', style: { textAlign: 'left' } }]
                    },
                    {
                        cells: [{ value: '109', style: { textAlign: 'left' } }]
                    },
                    {
                        cells: [{
                            index: 4, value: 'Total Amount', style: {
                                border: '1px solid #A6A6A6', fontWeight: 'bold',
                                textAlign: 'center', verticalAlign: 'middle'
                            }
                        },
                        {
                            index: 5, formula: '=Sum(F4:F12)', format: '$#,##0.00', style: {
                                border: '1px solid #A6A6A6',
                                textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                            }
                        }]
                    }
                ],
                columns: [
                    { width: 88, }, { width: 120 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 110 }
                ]
            }
        ],
        openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
        saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
        created: function () {
            spreadsheet.numberFormat('$#,##0.00', 'F4:F12');
            spreadsheet.numberFormat('$###', 'E4:E12');
            spreadsheet.freezePanes(3, 0);
        }
    }
    );
    spreadsheet.appendTo('#spreadsheet');
};
