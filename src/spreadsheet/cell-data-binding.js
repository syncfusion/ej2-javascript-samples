/**
 * Cell Data Binding sample
 */
this.default = function() {
    // Initialize Spreadsheet component.
    var numberFormat = ej.spreadsheet.getFormatFromType('Currency');
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
                            { value: '7000', format: '$#,##0.00' },
                            { value: '8120', format: '$#,##0.00' },
                            { formula: '=B2-C2', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Loan' },
                            { value: '1500', format: '$#,##0.00' },
                            { value: '1500', format: '$#,##0.00' },
                            { formula: '=B3-C3', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Medical' },
                            { value: '300', format: '$#,##0.00' },
                            { value: '0', format: '$#,##0.00' },
                            { formula: '=B4-C4', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Clothing' },
                            { value: '400', format: '$#,##0.00' },
                            { value: '140', format: '$#,##0.00' },
                            { formula: '=B5-C5', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Education' },
                            { value: '900', format: '$#,##0.00' },
                            { value: '750', format: '$#,##0.00' },
                            { formula: '=B6-C6', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Insurance' },
                            { value: '30', format: '$#,##0.00' },
                            { value: '30', format: '$#,##0.00' },
                            { formula: '=B7-C7', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Utilities' },
                            { value: '130', format: '$#,##0.00' },
                            { value: '160', format: '$#,##0.00' },
                            { formula: '=B8-C8', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Enterainment' },
                            { value: '500', format: '$#,##0.00' },
                            { value: '730', format: '$#,##0.00' },
                            { formula: '=B9-C9', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Maintainance' },
                            { value: '50', format: '$#,##0.00' },
                            { value: '70', format: '$#,##0.00' },
                            { formula: '=B10-C10', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Transportation' },
                            { value: '250', format: '$#,##0.00' },
                            { value: '400', format: '$#,##0.00' },
                            { formula: '=B11-C11', format: numberFormat }
                        ]
                    },
                    {
                        cells: [
                            { value: 'Gifts/Donations' },
                            { value: '0', format: '$#,##0.00' },
                            { value: '100', format: '$#,##0.00' },
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
