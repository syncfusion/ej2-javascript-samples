/**
 * Cell Data Binding sample.
 */
this.default = function() {
    //Initialize Spreadsheet component.
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        showRibbon: false,
        showFormulaBar: false,
        sheets: [
            {
                name: 'Monthly Budget',
                selectedRange: 'D13',
                rows: [
                    {
                        cells: [
                            { value: 'Category', style: { fontWeight: 'bold', textAlign: 'center' } },
                            { value: 'Planned cost', style: { fontWeight: 'bold', textAlign: 'center' } },
                            { value: 'Actual cost', style: { fontWeight: 'bold', textAlign: 'center' } },
                            { value: 'Difference', style: { fontWeight: 'bold', textAlign: 'center' } }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Food' },
                            { value: '$7000' },
                            { value: '$8120' },
                            { formula: '=B2-C2', format: '$#,##0.00' }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Loan' },
                            { value: '$1500' },
                            { value: '$1500' },
                            { formula: '=B3-C3', format: '$#,##0.00' }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Medical' },
                            { value: '$300' },
                            { value: '$0' },
                            { formula: '=B4-C4', format: '$#,##0.00' }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Clothing' },
                            { value: '$400' },
                            { value: '$140' },
                            { formula: '=B5-C5', format: '$#,##0.00' }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Education' },
                            { value: '$900' },
                            { value: '$750' },
                            { formula: '=B6-C6', format: '$#,##0.00' }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Insurance' },
                            { value: '$30' },
                            { value: '$30' },
                            { formula: '=B7-C7', format: '$#,##0.00' }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Utilities' },
                            { value: '$130' },
                            { value: '$160' },
                            { formula: '=B8-C8', format: '$#,##0.00' }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Enterainment' },
                            { value: '$500' },
                            { value: '$730' },
                            { formula: '=B9-C9', format: '$#,##0.00' }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Maintainance' },
                            { value: '$50' },
                            { value: '$70' },
                            { formula: '=B10-C10', format: '$#,##0.00' }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Transportation' },
                            { value: '$250' },
                            { value: '$400' },
                            { formula: '=B11-C11', format: '$#,##0.00' }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Gifts/Donations' },
                            { value: '$0' },
                            { value: '$100' },
                            { formula: '=B12-C12', format: '$#,##0.00' }
                        ]
                    },
                    {
                        cells: [
                            { index: 2, value: 'Total Difference:', style: { fontWeight: 'bold', textAlign: 'right' } },
                            { formula: '=D2+D12', format: '$#,##0.00', style: { fontWeight: 'bold' } }
                        ]
                    }
                ],
                columns: [
                    { width: 110 }, { width: 115 }, { width: 110 }, { width: 100 }
                ]
            }
        ]
    });
    //Render initialized Spreadsheet component.
    spreadsheet.appendTo('#spreadsheet');
};
