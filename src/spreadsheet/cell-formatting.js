/**
 * Default Spreadsheet sample.
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
        rangeSettings: [{ dataSource: orderDetails }],
        columns: columns,
        rows: rows,
        showGridLines: false
    }];
    //Initialize Spreadsheet component.
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        sheets: sheet,
        showFormulaBar: false,
        showRibbon: false,
        dataBound: dataBound,
        beforeCellRender: beforeCellRender
    });

    //Render initialized Spreadsheet component.
    spreadsheet.appendTo('#spreadsheet');
    function dataBound() {
        if (!spreadsheet.isOpen && spreadsheet.activeSheetTab === 1) {
            // Skip setting cell formatting for other sheets
            if (spreadsheet.sheets[spreadsheet.activeSheetTab - 1].name !== 'Order Details') { return; }
            // Applying cell formatting dynamically using cellFormat method
            spreadsheet.cellFormat({ fontWeight: 'bold', backgroundColor: '#4b5366', color: '#ffffff', fontSize: '12pt' }, 'A1:I1');
            spreadsheet.cellFormat({ fontWeight: 'bold', textIndent: '2pt' }, 'B2:B16');
            spreadsheet.cellFormat({ fontStyle: 'italic', textIndent: '2pt' }, 'D2:D16');
            spreadsheet.cellFormat({ textIndent: '2pt' }, 'E1:E16');
            spreadsheet.cellFormat({ textIndent: '2pt' }, 'G1:G16');
            spreadsheet.cellFormat({ textAlign: 'center', fontWeight: 'bold' }, 'H2:H16');
            spreadsheet.cellFormat({ fontFamily: 'Helvetica New', verticalAlign: 'middle' }, 'A1:I16');
        }
    }
    function beforeCellRender(args) {
        if (!spreadsheet.isOpen && spreadsheet.activeSheetTab === 1) {
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