/**
 * Pivot Table Exporting Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            enableSorting: true,
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            dataSource: window.Pivot_Data,
            expandAll: false
        },
        width: '100%',
        height: 300,
        allowExcelExport: true,
        allowPdfExport: true,
        showFieldList: true,
        gridSettings: { columnWidth: 140 }
    });
    pivotObj.appendTo('#PivotView');   
    var exportType = new ej.dropdowns.DropDownList({
        index: 0,
        width: 160
    });
    exportType.appendTo('#mode');
    var exportBtn = new ej.buttons.Button({
        isPrimary: true
    });
    exportBtn.appendTo('#export-btn');
    document.getElementById('export-btn').onclick = function () {
        if (exportType.value === 'excel') {
            pivotObj.excelExport();
        }
        else if (exportType.value === 'csv') {
            pivotObj.csvExport();
        }
        else {
            pivotObj.pdfExport();
        }
    };
};
