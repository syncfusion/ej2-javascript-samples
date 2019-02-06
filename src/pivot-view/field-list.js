/**
 * Pivot Field List sample
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotGridObj = new ej.pivotview.PivotView({
        enginePopulated: function () {
            if (!ej.base.Browser.isDevice && fieldlistObj && pivotGridObj) {
                fieldlistObj.update(pivotGridObj);
            }
        },
        width: '99%',
        height: 600,
        gridSettings: { columnWidth: 140 }
    });
    pivotGridObj.appendTo('#PivotView');
    var fieldlistObj = new ej.pivotview.PivotFieldList({
        dataSource: {
            data: window.Pivot_Data,
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
                pivotGridObj.element.style.width = '100%';
                pivotGridObj.allowCalculatedField = true;
                pivotGridObj.showFieldList = true;
            }
            pivotGridObj.tooltip.destroy();
            pivotGridObj.refresh();
        },
        enginePopulated: function () {
            fieldlistObj.updateView(pivotGridObj);
        }
    });
    fieldlistObj.appendTo('#PivotFieldList');
};
