this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.categoryData,
        allowPaging: true,
        pageSettings: { pageCount: 2 },
        columns: [
            { field: 'CategoryName', headerText: 'Category Name', width: 160 },
            { field: 'ProductName', headerText: 'Product Name', width: 170 },
            { field: 'UnitsInStock', headerText: 'Units In Stock', width: 170, textAlign: 'right' },
            {
                field: 'Discontinued', headerText: 'Discontinued', width: 150, textAlign: 'center', type: 'boolean',
                displayAsCheckBox: true
            }
        ]
    });
    grid.appendTo('#Grid');
    var show = document.getElementById('show');
    var hide = document.getElementById('hide');
    var hiddenColumns = document.getElementById('hiddencolumns');
    var drop = document.getElementById('drop');
    show.onclick = function () {
        var columnName = drop.value;
        var column = grid.getColumnByField(columnName);
        grid.showHider.show(column.headerText, 'headerText');
        show.disabled = true;
        hide.disabled = false;
        hiddenColumns.value = hiddenColumns.value.replace(column.headerText + '\n', '');
    };
    hide.onclick = function () {
        var columnName = drop.value;
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
    drop.onchange = function () {
        var columnName = drop.value;
        var column = grid.getColumnByField(columnName);
        if (column.visible === undefined || column.visible) {
            show.disabled = true;
            hide.disabled = false;
        }
        else {
            hide.disabled = true;
            show.disabled = false;
        }
    };
};