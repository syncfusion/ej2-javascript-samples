this.default = function () {
    var columnNames = [
        { id: 'CategoryName', name: 'Category Name' },
        { id: 'ProductName', name: 'Product Name' },
        { id: 'UnitsInStock', name: 'Units In Stock' },
        { id: 'Discontinued', name: 'Discontinued' }
    ];
    var grid = new ej.grids.Grid({
        dataSource: window.categoryData,
        allowPaging: true,
        pageSettings: { pageCount: 2 },
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        columns: [
            { field: 'CategoryName', headerText: 'Category Name', width: 160 },
            { field: 'ProductName', headerText: 'Product Name', width: 170 },
            { field: 'UnitsInStock', headerText: 'Units In Stock', width: 170, textAlign: 'Right' },
            {
                field: 'Discontinued', headerText: 'Discontinued', width: 150, textAlign: 'Center', type: 'boolean',
                displayAsCheckBox: true
            }
        ]
    });
    grid.appendTo('#Grid');

    var dropDownListObject = new ej.dropdowns.DropDownList({
        dataSource: columnNames,
        fields: { text: 'name', value: 'id' },
        value: 'CategoryName',
        change: function (e) {
            var columnName = e.value;
            var column = grid.getColumnByField(columnName);
            if (column.visible === undefined || column.visible) {
                show.disabled = true;
                hide.disabled = false;
            } else {
                hide.disabled = true;
                show.disabled = false;
            }
        }
    });
    dropDownListObject.appendTo('#ddlelement');

    var show = new ej.buttons.Button({ disabled: true });
    show.appendTo('#show');

    var hide = new ej.buttons.Button();
    hide.appendTo('#hide');

    var hiddenColumns = document.getElementById('hiddencolumns');

    document.getElementById('show').onclick = function () {
        var columnName = dropDownListObject.value;
        var column = grid.getColumnByField(columnName);
        grid.showHider.show(column.headerText, 'headerText');
        show.disabled = true;
        hide.disabled = false;
        hiddenColumns.value = hiddenColumns.value.replace(column.headerText + '\n', '');
    };
    document.getElementById('hide').onclick = function () {
        var columnName = dropDownListObject.value;
        var column = grid.getColumnByField(columnName);
        if (grid.getHeaderTable().querySelectorAll('th.e-hide').length === 3) {
            alert('Atleast one Column should be visible');
        }
        else {
            grid.showHider.hide(column.headerText, 'headerText');
            hide.disabled = true;
            show.disabled = false;
            hiddenColumns.value = hiddenColumns.value + column.headerText + '\n';
        }
    };
};