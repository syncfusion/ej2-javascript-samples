this.default = function () {
    var columnNames = [
        { Id: 'OrderID', name: 'Order ID' },
        { Id: 'CustomerName', name: 'Customer Name' },
        { Id: 'OrderDate', name: 'Order Date' },
        { Id: 'Freight', name: 'Freight' }
    ];
    var direction = [
        { Id: 'Ascending', name: 'Ascending' },
        { Id: 'Descending', name: 'Descending' }
    ];
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        allowPaging: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true } },
            { field: 'CustomerName', headerText: 'Customer Name', width: 160, validationRules: { required: true, minLength: 5 } },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 0 } }
        ],
        pageSettings: { pageCount: 2 }
    });
    grid.appendTo('#Grid');

    var dropDownColumns = new ej.dropdowns.DropDownList({
        dataSource: columnNames,
        fields: { text: 'name', value: 'Id' },
        value: 'OrderID'
    });
    dropDownColumns.appendTo('#columns');

    var dropDownDirection = new ej.dropdowns.DropDownList({
        dataSource: direction,
        fields: { text: 'name', value: 'Id' },
        value: 'Ascending'
    });
    dropDownDirection.appendTo('#direction');

    var sort = new ej.buttons.Button();
    sort.appendTo('#sort');

    var clear = new ej.buttons.Button();
    clear.appendTo('#clear');

    document.getElementById('sort').onclick = function () {
        var columnName = dropDownColumns.value;
        var sortType = dropDownDirection.value;
        grid.sortColumn(columnName, sortType, false);
    };
    document.getElementById('clear').onclick = function () {
        grid.clearSorting();
    };
};