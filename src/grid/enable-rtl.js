this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        allowPaging: true,
        allowGrouping: true,
        allowSorting: true,
        enableRtl: true,
        allowReordering: true,
        editSettings: { allowEditing: true, allowAdding: false, allowDeleting: false, mode: 'Normal' },
        allowFiltering: true,
        filterSettings: { type: 'Menu' },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Left', editType: 'numericedit', isPrimaryKey: true, validationRules: { required: true } },
            { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, type: 'date', format: 'yMd' , editType: 'datepickeredit'
            },
            { field: 'Freight', width: 120, format: 'C2', editType: 'numericedit' },
            { field: 'ShipCountry', editType: 'dropdownedit', headerText: 'Ship Country', textAlign: 'Left', width: 150 }
        ],
        pageSettings: { pageCount: 5 }
    });
    grid.appendTo('#Grid');
};