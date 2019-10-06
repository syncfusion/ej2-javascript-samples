/**
 * Default Spreadsheet sample.
 */
this.default = function () {
    var sheet = [{
        name: 'Stock Details',
        rows: [{
            height: 40,
            cells: []
        },
        {
            index: 11,
            cells: [
                { index: 3, value: 'Average profit:' },
                { index: 5, formula: '=AVERAGE(F2:F11)', format: '0.00' },
            ],
            height: 25
        },
        {
            index: 12,
            cells: [
                { index: 3, value: 'Maximum stock value:' },
                { index: 5, formula: '=MAX(D2:D11)', format: '0.00' }
            ],
            height: 25
        },
        {
            index: 13,
            cells: [
                { index: 3, value: 'Minimum stock value:' },
                { index: 5, formula: '=MIN(E2:E11)' },
            ],
            height: 25
        }, {
            index: 14,
            cells: [
                { index: 3, value: 'Non-profitable days:' },
                { index: 5, formula: '=COUNTIF(F2:F11,"<=0")' },
            ],
            height: 25
        }],
        columns: [{ width: 100 }, { width: 130 }, { width: 140 }, { width: 140 }, { width: 130 }, { width: 130 }],
        selectedRange: 'F15',
        rangeSettings: [{
            dataSource: formulaData,
            startCell: 'A1',
        }]
    }];
    //Initialize Spreadsheet component.
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        sheets: sheet,
        showRibbon: false,
        dataBound: function () {
            if (!spreadsheet.isOpen && spreadsheet.activeSheetTab === 1) {
                spreadsheet.cellFormat
                    ({ fontWeight: 'bold', backgroundColor: '#4ECDC4', textAlign: 'center', fontSize: '14px' }, 'A1:F1');
                spreadsheet.cellFormat({ backgroundColor: '#F2F2F2' }, 'A2:F11');
                spreadsheet.cellFormat({ fontWeight: 'bold', backgroundColor: '#C6EFCE' }, 'A12:F15');
                spreadsheet.numberFormat('0.00', 'F2:F11');
            }
        },
    });
    //Render initialized Spreadsheet component.
    spreadsheet.appendTo('#spreadsheet');

};