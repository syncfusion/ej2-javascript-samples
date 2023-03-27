/**
 * Data validation sample
 */
 this.default = function () {
    //Initialize Spreadsheet component
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        sheets: [
            {
                ranges: [{
                    dataSource: grossPay,
                    startCell: "A3"
                    },
                ],
                name: 'Gross Pay',
                rows: [{
                            cells: [{ value: 'Gross Pay Calculation', style:{ fontSize: "20pt", fontWeight : "bold", textAlign: "center", backgroundColor: '#B3FFB3', verticalAlign: 'middle'} }]
                        },
                        {
                            index: 13,
                            cells: [{
                                index: 7, value: 'Total Gross', style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight:'bold'}},
                            {
                                index: 8, formula: '=Sum(I4:I13)', format:'$#,##0.00', style: {border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight:'bold'}
                            }]
                        }
                ],
                columns: [
                    { width: 88,  }, { width: 120 }, { width: 106 }, { width: 98 }, { width: 110 }, { width: 110 }, { width: 110 }, { width: 98}, { width: 130}
                ]
            }  ],
        openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
        saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
        created: function() {
            spreadsheet.merge('A1:I2');
            spreadsheet.setBorder({ border: '1px solid #A6A6A6' }, "A1:I13");
            spreadsheet.cellFormat({ textAlign: 'center', verticalAlign: 'middle'}, 'A3:I13');
            spreadsheet.cellFormat({ backgroundColor: '#B3FFB3', fontWeight : "bold"}, 'A3:I3');
            spreadsheet.numberFormat('$#,##0.00', 'H4:I13');
            spreadsheet.wrap('H3:I3');
            //Add Data validation to range.
            spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'LessThan', value1: '9', ignoreBlank: false }, 'G4:G13');
            spreadsheet.addDataValidation({ type: 'TextLength', operator: 'GreaterThan', value1: '3', ignoreBlank: false }, 'B4:B13');
            spreadsheet.addDataValidation({ type: 'Time', operator: 'GreaterThan', value1: '8:00:00 AM', ignoreBlank: false  }, 'E4:E13');
            spreadsheet.addDataValidation({ type: 'Time', operator: 'LessThan', value1: '6:00:00 PM', ignoreBlank: false  }, 'F4:F13');
            spreadsheet.addDataValidation({ type: 'List', value1: 'Mon, Tue, Wed, Thu, Fri', ignoreBlank: false  }, 'D4:D13');
            spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'LessThan', value1: '=H5', ignoreBlank: false }, 'I4:I13');
            //Highlight Invalid Data.
            spreadsheet.addInvalidHighlight('G4:G13');
            spreadsheet.addInvalidHighlight('I4:I13');
        }
    }
);
    //Render initialized Spreadsheet component
    spreadsheet.appendTo('#spreadsheet');
};