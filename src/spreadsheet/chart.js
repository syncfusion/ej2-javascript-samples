/**
 * Spreadsheet Chart Sample
 */
this.default = function () {
    //Initialize Spreadsheet component
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        sheets: [
            {
                name: 'GDP',
                ranges: [{ dataSource: GDPData, startCell: 'A3' }],
                rows: [
                    {
                        height: 30,
                        cells: [
                            { value: 'Gross Domestic Product (in trillions)', style: { backgroundColor: '#e56590', color: '#fff', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' } }
                        ]
                    },
                    {
                        cells: [
                            { index: 6, chart: [{ type: 'Column', range: 'A3:E10' }] }
                        ]
                    }
                ],
                columns: [
                    { width: 80 }, { width: 75 }, { width: 75 }, { width: 75 }, { width: 75 }
                ]
            }
        ],
        openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
        saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
        created: function () {
            // Formatting cells dynamically using cellFormat method
            spreadsheet.cellFormat({ backgroundColor: '#e56590', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'A3:E3');
            // Applying currency format to the specified range.
            spreadsheet.numberFormat('$#,##0.00', 'B4:E10');
            // Merging the cells from A1 to E1
            spreadsheet.merge('A1:E1');
        }
    });

    //Render initialized Spreadsheet component
    spreadsheet.appendTo('#spreadsheet');
};