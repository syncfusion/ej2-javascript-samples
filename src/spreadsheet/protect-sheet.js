/**
 * Protect sheet sample.
 */
this.default = function() {
    // Initialize Spreadsheet component.
    var numberFormat = ej.spreadsheet.getFormatFromType('Currency');
    var percentageFormat = ej.spreadsheet.getFormatFromType('Percentage');
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
         // To protect the workbook
         password: "spreadsheet",
        sheets: [{
            isProtected: true,
            name: 'EMI Calculator',
            rows: [{
                cells: [{
                    index: 1,
                    value: 'Home Loan Calculator',
                    style: {
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }
                }]
            }, {
                cells: [{
                    index: 1,
                    value: 'Loan Amount:'
                }, {
                    value: '100000',
                    format: numberFormat
                }]
            }, {
                cells: [{
                    index: 1,
                    value: 'Interest Rate:'
                }, {
                    value: '0.08',
                    format: percentageFormat
                }]
            }, {
                cells: [{
                    index: 1,
                    value: 'Periods (terms in year):'
                }, {
                    value: '1'
                }]
            }, {
                cells: [{
                    index: 1,
                    value: 'Start Date:'
                }, {
                    value: '03-03-2020'
                }]
            }, {
                cells: [{
                    index: 1,
                    value: 'Loan EMI:'
                }, {
                    value: '8698.84',
                    format: numberFormat
                }]
            }, {
                cells: [{
                    index: 1,
                    value: 'Number of Payments:'
                }, {
                    value: '12'
                }]
            }, {
                cells: [{
                    index: 1,
                    value: 'Total Repayment Amount:'
                }, {
                    value: '104386.11',
                    format: numberFormat
                }]
            }, {
                cells: [{
                    index: 1,
                    value: 'Total Interest Amount:'
                }, {
                    value: '4386.11',
                    format: numberFormat
                }]
            }],
            columns: [{
                index: 1,
                width: 190
            }, {
                width: 100
            }]
        }, {
            isProtected: true,
            name: 'EMI Schedule',
            ranges: [{
                dataSource: protectSheet,
                showFieldAsHeader: true
            }],
            columns: [{
                index: 1,
                width: 110
            }, {
                width: 85
            }, {
                width: 85
            }, {
                width: 80
            }, {
                width: 90
            }]
        }],
        openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
        saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
        created: function() {
            //Applied style and number formatting to a range
            spreadsheet.cellFormat({ fontWeight: 'bold' }, 'EMI Schedule!A1:F1');
            spreadsheet.numberFormat(numberFormat, 'EMI Schedule!C2:F13');
        },
        beforeCellRender: function(args) {
            //Merged cells using custom code
            if (spreadsheet.activeSheetIndex === 0 && args.address === 'B1') {
                args.element.colSpan = 2;
            }
        }
    }
);
    // Render initialized Spreadsheet component.
    spreadsheet.appendTo('#spreadsheet');
};
