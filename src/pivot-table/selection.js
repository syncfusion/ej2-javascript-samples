/**
 * Pivot Table Sample with Selection feature with Chart integration.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            dataSource: window.Pivot_Data,
            expandAll: true,
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            filters: [],
            enableSorting: true,
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            valueSortSettings: { headerDelimiter: ' - ' }
        },
        width: '100%',
        height: 400,
        cellSelected: function (args) {
            document.getElementById('selection-EventLog').innerHTML = '';
            if (args.selectedCellsInfo.length > 0) {
                var count = 0;
                while (args.selectedCellsInfo.length > count) {
                    var cell = args.selectedCellsInfo[count];
                    var summMeasure = this.engineModule.fieldList[cell.measure] ? this.engineModule.fieldList[cell.measure].aggregateType + ' of ' +
                        this.engineModule.fieldList[cell.measure].caption : '';
                    appendElement(
                        (cell.columnHeaders == '' ? '' : 'Column Headers: ' + '<b>' + cell.columnHeaders + '</b></br>') +
                        (cell.rowHeaders == '' ? '' : 'Row Headers: ' + '<b>' + cell.rowHeaders + '</b></br>') +
                        (summMeasure == '' ? '' : 'Measure: ' + '<b>' + summMeasure + '</b></br>') +
                        'Value: ' + '<b>' + cell.currentCell.formattedText + '</b><hr></br>');
                    count++;
                }
            }
        },
        gridSettings: {
            columnWidth: 120,
            allowSelection: true,
            selectionSettings: { mode: 'Cell', type: 'Multiple', cellSelectionMode: 'Box' }
        }
    });
    pivotObj.appendTo('#PivotView');
    var modeddl = new ej.dropdowns.DropDownList({
        floatLabelType: 'Auto',
        width: 150,
        change: function (args) {
            pivotObj.gridSettings.selectionSettings.mode = args.value;
            pivotObj.renderModule.updateGridSettings();
        }
    });
    modeddl.appendTo('#mode');
    var typeddl = new ej.dropdowns.DropDownList({
        floatLabelType: 'Auto',
        width: 150,
        change: function (args) {
            pivotObj.gridSettings.selectionSettings.type = args.value;
            pivotObj.renderModule.updateGridSettings();
        }
    });
    typeddl.appendTo('#type');
    function appendElement(html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('selection-EventLog');
        log.appendChild(span);
    }
};
