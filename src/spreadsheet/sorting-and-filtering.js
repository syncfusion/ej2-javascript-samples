/**
 * Filtering and sorting sample
 */
this.default = function () {
    //Initialize Spreadsheet component
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        sheets: [{
			name: 'Employee Details',
            ranges: [{
                dataSource: sortingAndFiltering,
                showFieldAsHeader: true
            }],
            columns: [{
                width: 110
            },
            {
                width: 142
            },
            {
                width: 80
            },
            {
                width: 137
            },
            {
                width: 122
            },
            {
                width: 92
            },
            {
                width: 124
            }]
        }],
        openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
        saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
        created: function() {
            // Sorted B(Employee Name field) column in ascending order
            spreadsheet.cellFormat({ fontWeight: 'bold',  textAlign: 'center' }, 'A1:G1');
            spreadsheet.sort({ sortDescriptors: { field: 'B' } }, 'A2:G51').then(function() {
                spreadsheet.applyFilter([{ field: 'D', operator: 'equal', value: 'Services' }], 'A1:G51');
            });
            spreadsheet.numberFormat('m/d/yyyy', 'E2:E51');
            spreadsheet.numberFormat('$#,##0.00', 'F2:F51');
        }
    }
);
    //Render initialized Spreadsheet component
    spreadsheet.appendTo('#spreadsheet');
};
