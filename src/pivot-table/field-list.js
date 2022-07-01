/**
 * Pivot Field List sample
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        enginePopulated: function () {
            if (!ej.base.Browser.isDevice && fieldlistObj && pivotObj) {
                fieldlistObj.update(pivotObj);
            }
        },
        width: '99%',
        height: 600,
        gridSettings: { columnWidth: 140 }
    });
    pivotObj.appendTo('#PivotView');
    var fieldlistObj = new ej.pivotview.PivotFieldList({
        dataSourceSettings: {
            dataSource: window.Pivot_Data,
            expandAll: false,
            allowLabelFilter: true,
            allowValueFilter: true,
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            enableSorting: true
        },
        allowCalculatedField: true,
        enableFieldSearching: true,
        renderMode: 'Fixed',
        load: function () {
            if (ej.base.Browser.isDevice) {
                fieldlistObj.renderMode = 'Popup';
                fieldlistObj.target = '.control-section';
                ej.base.setStyleAttribute(document.getElementById('PivotFieldList'), {
					'width': 0,
                    'height': 0,
                    'float': 'left',
                    'display': 'none'
                });
            }
        },
        dataBound: function () {
            if (ej.base.Browser.isDevice) {
                pivotObj.element.style.width = '100%';
                pivotObj.allowCalculatedField = true;
                pivotObj.showFieldList = true;
            }
            pivotObj.tooltip.destroy();
            pivotObj.refresh();
        },
        enginePopulated: function () {
            fieldlistObj.updateView(pivotObj);
        }
    });
    fieldlistObj.appendTo('#PivotFieldList');
};
