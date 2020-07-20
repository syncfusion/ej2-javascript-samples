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
        created: function() {
            // Sorted B(Employee Name field) column in ascending order
            spreadsheet.cellFormat({ fontWeight: 'bold',  textAlign: 'center' }, 'A1:G1');
            spreadsheet.sort({ sortDescriptors: { field: 'B' } }, 'A2:G51').then(function() {
                spreadsheet.applyFilter([{ field: 'D', operator: 'equal', value: 'Services' }], 'A1:G51');
            });
        }
    }
);
    //Render initialized Spreadsheet component
    spreadsheet.appendTo('#spreadsheet');
};