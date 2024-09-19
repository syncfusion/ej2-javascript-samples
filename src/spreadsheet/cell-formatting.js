/**
 * Default cell formatting sample.
 */
this.default = function () {

    var columns = [{ width: 80 }, { width: 140 }, { width: 100 }, { width: 232 }, { width: 120 }, { width: 100 },
    { width: 100 }, { width: 120 }, { width: 80 }];
    var rows = [{
        height: 36,
        // Applying cell formatting through cell binding
        cells: [{ style: { textAlign: 'right' } }, { style: { textIndent: '2pt' } }, { style: { textAlign: 'right' } },
        { style: { textIndent: '2pt' } }, { index: 5, style: { textAlign: 'right' } },
        { index: 7, style: { textAlign: 'center' } }, { index: 8, style: { textAlign: 'right' } }]
    }, { height: 42, cells: [] }, { height: 42, cells: [] }, { height: 42, cells: [] }, { height: 42, cells: [] }, { height: 42, cells: [] },
    { height: 42, cells: [] }, { height: 42, cells: [] }, { height: 42, cells: [] }, { height: 42, cells: [] }, { height: 42, cells: [] }, { height: 42, cells: [] }, { height: 42, cells: [] }, { height: 42, cells: [] },
    { height: 42, cells: [] }, { height: 42, cells: [] }];

    var sheet = [{
        name: 'Order Details',
        ranges: [{ dataSource: orderDetails }],
        columns: columns,
        rows: rows,
        showGridLines: false
    }];
    //Initialize Spreadsheet component.
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        sheets: sheet,
        showFormulaBar: false,
        showRibbon: false,
        created: createdHandler,
        beforeCellRender: beforeCellRender
    });

    //Render initialized Spreadsheet component.
    spreadsheet.appendTo('#spreadsheet');
    function createdHandler() {
        // Applying cell formatting dynamically using cellFormat method
        spreadsheet.cellFormat({ fontWeight: 'bold', backgroundColor: '#4b5366', color: '#ffffff', fontSize: '12pt' }, 'A1:I1');
        spreadsheet.cellFormat({ fontWeight: 'bold', textIndent: '2pt' }, 'B2:B16');
        spreadsheet.cellFormat({ fontStyle: 'italic', textIndent: '2pt' }, 'D2:D16');
        spreadsheet.cellFormat({ textIndent: '2pt' }, 'E1:E16');
        spreadsheet.cellFormat({ textIndent: '2pt' }, 'G1:G16');
        spreadsheet.cellFormat({ textAlign: 'center', fontWeight: 'bold' }, 'H2:H16');
        spreadsheet.cellFormat({ fontFamily: 'Helvetica New', verticalAlign: 'middle' }, 'A1:I16');
        spreadsheet.numberFormat('m/d/yyyy', 'C2:C16');
        spreadsheet.numberFormat('$#,##0.00', 'I2:I16');
        //Applying border to a range.
        spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A1:I16', 'Outer');
        spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A2:I15', 'Horizontal');
    }
    function beforeCellRender(args) {
        if (!spreadsheet.isOpen && spreadsheet.activeSheetIndex === 0) {
            if (args.cell && args.cell.value) {
                // Applying cell formatting before rendering the particular cell
                switch (args.cell.value) {
                    case 'Delivered':
                        spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, args.address);
                        break;
                    case 'Shipped':
                        spreadsheet.cellFormat({ color: '#62c9e8' }, args.address);
                        break;
                    case 'Pending':
                        spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, args.address);
                        break;
                    case 'Cancelled':
                        spreadsheet.cellFormat({ color: '#ff5b5b' }, args.address);
                        break;
                }
            }
        }
    }
};
