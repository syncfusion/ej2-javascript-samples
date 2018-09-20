/**
 * Pivot Field List sample
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotGridObj = new ej.pivotview.PivotView({
        enginePopulated: function () {
            if (fieldlistObj) {
                fieldlistObj.update(pivotGridObj);
            }
        },
        load: function () {
            if (fieldlistObj) {
                fieldlistObj.refresh();
            }
        },
        width: '99%',
        height: 530,
        gridSettings: { columnWidth: 140 }
    });
    pivotGridObj.appendTo('#PivotView');
    var fieldlistObj = new ej.pivotview.PivotFieldList({
        dataSource: {
            data: window.Pivot_Data,
            expandAll: false,
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
                document.getElementById('PivotFieldList').removeAttribute('style');
                ej.base.setStyleAttribute(document.getElementById('PivotFieldList'), {
                    'height': 0,
                    'float': 'left'
                });
            }
        },
        dataBound: function () {
            if (ej.base.Browser.isDevice) {
                ej.base.prepend([document.getElementById('PivotFieldList')], document.getElementById('PivotView'));
            }
        },
        enginePopulated: function () {
            fieldlistObj.updateView(pivotGridObj);
        }
    });
    fieldlistObj.appendTo('#PivotFieldList');
};
