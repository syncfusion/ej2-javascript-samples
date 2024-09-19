/**
 * Default Spreadsheet sample
 */
this.default = function () {
    //Initialize Spreadsheet component
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        sheets: [
            {
                name: 'Car Sales Report',
                ranges: [{ dataSource: defaultData }],
                rows: [
                    {
                        index: 30,
                        cells: [
                            { index: 4, value: 'Total Amount:', style: { fontWeight: 'bold', textAlign: 'right' } },
                            { formula: '=SUM(F2:F30)', style: { fontWeight: 'bold' } },
                        ]
                    }],
                columns: [
                    { width: 180 }, { width: 130 }, { width: 130 }, { width: 180 },
                    { width: 130 }, { width: 120 }
                ]
            }
        ],
        openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
        saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
        created: function () {
            // Applies cell and number formatting to specified range of the active sheet
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
            // Apply format to the specified range in the active sheet.
            spreadsheet.numberFormat('$#,##0.00', 'F2:F31');
            spreadsheet.numberFormat('m/d/yyyy', 'E2:E30');
        }
    });

    //Render initialized Spreadsheet component
    spreadsheet.appendTo('#spreadsheet');
};
