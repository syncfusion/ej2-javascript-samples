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
        filterSettings: { type: 'Excel' },
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
        pageSettings: { pageCount: 3 },
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
        }
    });
    if (ej.base.Browser.isDevice) {
        grid.appendTo('#adaptivedevice');
        document.getElementsByClassName('e-mobile-layout')[0].style.display = 'none';
    } else {
        grid.appendTo('#adaptivebrowser');
    }

    // enable/disable vertical row direction
    var directionChange = new ej.buttons.CheckBox({
        change: function(e) {
            if (e.checked) {
                grid.rowRenderingMode = 'Horizontal';
            } else {
                grid.rowRenderingMode = 'Vertical';
            }
        }
    }); 
    directionChange.appendTo('#fullscreen');
};