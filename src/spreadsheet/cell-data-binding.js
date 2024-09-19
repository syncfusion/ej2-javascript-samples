/**
 * Cell Data Binding sample
 */
this.default = function() {
    // Initialize Spreadsheet component.
    var numberFormat = '$#,##0.00';
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
                            { value: '7000', format: numberFormat },
                            { value: '8120', format: numberFormat },
                            { formula: '=B2-C2', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Loan' },
                            { value: '1500', format: numberFormat },
                            { value: '1500', format: numberFormat },
                            { formula: '=B3-C3', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Medical' },
                            { value: '300', format: numberFormat },
                            { value: '0', format: numberFormat },
                            { formula: '=B4-C4', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Clothing' },
                            { value: '400', format: numberFormat },
                            { value: '140', format: numberFormat },
                            { formula: '=B5-C5', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Education' },
                            { value: '900', format: numberFormat },
                            { value: '750', format: numberFormat },
                            { formula: '=B6-C6', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Insurance' },
                            { value: '30', format: numberFormat },
                            { value: '30', format: numberFormat },
                            { formula: '=B7-C7', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Utilities' },
                            { value: '130', format: numberFormat },
                            { value: '160', format: numberFormat },
                            { formula: '=B8-C8', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Enterainment' },
                            { value: '500', format: numberFormat },
                            { value: '730', format: numberFormat },
                            { formula: '=B9-C9', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Maintainance' },
                            { value: '50', format: numberFormat },
                            { value: '70', format: numberFormat },
                            { formula: '=B10-C10', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Transportation' },
                            { value: '250', format: numberFormat },
                            { value: '400', format: numberFormat },
                            { formula: '=B11-C11', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Gifts/Donations' },
                            { value: '0', format: numberFormat },
                            { value: '100', format: numberFormat },
                            { formula: '=B12-C12', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { index: 2, value: 'Total Difference:', style: { fontWeight: 'bold', textAlign: 'right' } },
                            { formula: '=D2+D12', format: numberFormat, style: { fontWeight: 'bold' } }
                        ]
                    }
                ],
                columns: [
                    { width: 110 }, { width: 115 }, { width: 110 }, { width: 100 }
                ]
            }
        ]
    });
    // Render initialized Spreadsheet component.
    spreadsheet.appendTo('#spreadsheet');
};
