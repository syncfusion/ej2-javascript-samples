/**
 * PivotView Exporting Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotGridObj = new ej.pivotview.PivotView({
        dataSource: {
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            enableSorting: true,
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            data: window.Pivot_Data,
            expandAll: false
        },
        width: '100%',
        height: 300,
        allowExcelExport: true,
        allowPdfExport: true,
        showFieldList: true,
        gridSettings: { columnWidth: 140 }
    });
    pivotGridObj.appendTo('#PivotView');   
    var exportType = new ej.dropdowns.DropDownList({
        index: 0,
        width: 160
    });
    exportType.appendTo('#mode');
    var exportBtn = new ej.buttons.Button({
        cssClass: 'e-flat', isPrimary: true,
    });
    exportBtn.appendTo('#export-btn');
    document.getElementById('export-btn').onclick = function () {
        if (exportType.value === 'excel') {
            pivotGridObj.excelExport();
        }
        else if (exportType.value === 'csv') {
            pivotGridObj.csvExport();
        }
        else {
            pivotGridObj.pdfExport();
        }
    };
};
