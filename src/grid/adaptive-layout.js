/**
 * Adaptive Grid sample
 */
this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.data,
        rowRenderingMode: 'Vertical',
        enableAdaptiveUI: true,
        allowPaging: true,
        allowSorting: true,
        allowFiltering: true,
        showColumnChooser: true,
        showColumnMenu: true,
        allowGrouping: false,
        groupSettings: { showGroupedColumn: true },
        filterSettings: { type: 'Excel' },
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser', 'ExcelExport', 'PdfExport'],
        pageSettings: { pageCount: 3, pageSizes: true },
        allowExcelExport: true,
        allowPdfExport: true,
        height: '100%',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, width: 180, validationRules: { required: true, number: true } },
            { field: 'Freight', headerText: 'Freight', width: 180, format: 'C2', editType: 'numericedit', validationRules: { required: true } },
            { field: 'CustomerName', headerText: 'Name', width: 180, validationRules: { required: true } },
            { field: 'ShipCity', headerText: 'Ship City', width: 180 },
        ],
        aggregates: [{
            columns: [{
                type: 'Sum',
                field: 'Freight',
                format: 'C2',
                footerTemplate: 'Sum: ${Sum}'
            }]
        }],
        load: function() {
            if (!ej.base.Browser.isDevice) {
                grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
            }
            if(grid.pageSettings.pageSizes) {
                document.querySelector('.e-adaptive-demo').classList.add('e-pager-pagesizes');
            }
            else{
                document.querySelector('.e-adaptive-demo').classList.remove('e-pager-pagesizes');
            }
        }
    });
    if (ej.base.Browser.isDevice) {
        grid.appendTo('#adaptivedevice');
        document.getElementsByClassName('e-mobile-layout')[0].style.display = 'none';
    } else {
        grid.appendTo('#adaptivebrowser');
    }
    grid.toolbarClick = function (args) {
        if (args.item.id === grid.element.id + '_pdfexport') {
            grid.pdfExport();
        } else if (args.item.id === grid.element.id + '_excelexport') {
            grid.excelExport();
        }
    };

    // enable/disable vertical row direction
    var directionChange = new ej.buttons.CheckBox({
        change: function(e) {
            grid.rowRenderingMode = e.checked ? 'Horizontal' : 'Vertical';
            grid.allowGrouping = e.checked;
        }
    }); 
    directionChange.appendTo('#fullscreen');
};
