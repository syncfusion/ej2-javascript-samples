/**
 * Defer Update sample
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        enginePopulated: function () {
            if (!ej.base.Browser.isDevice && fieldlistObj && pivotObj) {
                fieldlistObj.update(pivotObj);
            }
        },
        allowDeferLayoutUpdate: true,
        width: '99%',
        height: 620,
        gridSettings: { columnWidth: 140 }
    });
    pivotObj.appendTo('#PivotView');
    var fieldlistObj = new ej.pivotview.PivotFieldList({
        dataSourceSettings: {
            dataSource: window.Pivot_Data,
            drilledMembers: [{ name: 'Country', items: ['France', 'Germany', 'United States'] }],
            filterSettings: [{ name: 'Products', items: ['Gloves', 'Helmets', 'Shorts', 'Vests'], type: 'Include' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            enableSorting: true,
            expandAll: false,
            allowLabelFilter: true,
            allowValueFilter: true,
        },
        allowDeferLayoutUpdate: true,
        allowCalculatedField: true,
        renderMode: 'Fixed',
        load: function () {
            if (ej.base.Browser.isDevice) {
                ej.base.setStyleAttribute(document.getElementById('PivotFieldList'), {
                    'width': 0,
                    'height': 0,
                    'float': 'left',
                    'display': 'none'
                });
                fieldlistObj.renderMode = 'Popup';
                fieldlistObj.target = '.control-section';
            }
        },
        enginePopulated: function () {
            if (fieldlistObj.isRequiredUpdate) {
                fieldlistObj.updateView(pivotObj);
            }
            pivotObj.notify('ui-update', pivotObj);
            if (!ej.base.Browser.isDevice) {
                fieldlistObj.notify('tree-view-update', fieldlistObj);
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
        }
    });
    fieldlistObj.appendTo('#PivotFieldList');
};
