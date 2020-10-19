this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sortData,
        childMapping: 'subtasks',
        height: 350,
        treeColumnIndex: 0,
        allowPaging: true,
        allowSorting: true,
        columns: [
            { field: 'orderName', headerText: 'Order Name', width: 200 },
            { field: 'Category', headerText: 'Category', width: 140 },
            { field: 'orderDate', headerText: 'Order Date', width: 150, textAlign: 'Right', format: 'yMd', type: 'date' },
            { field: 'units', headerText: 'Units', width: 110, textAlign: 'Right' }
        ],
        actionComplete: sort,
        sortSettings: { columns: [{ field: 'Category', direction: 'Ascending' }, { field: 'orderName', direction: 'Ascending' }] }
    });
    treeGridObj.appendTo('#TreeGrid');
    var orderName = new ej.buttons.CheckBox({ checked: true });
    orderName.appendTo('#OrderName');
    var category = new ej.buttons.CheckBox({ checked: true });
    category.appendTo('#Category');
    var orderDate = new ej.buttons.CheckBox();
    orderDate.appendTo('#OrderDate');
    var units = new ej.buttons.CheckBox();
    units.appendTo('#Units');
    var unitPrice = new ej.buttons.CheckBox();
    unitPrice.appendTo('#UnitPrice');
    document.getElementById('OrderName').onclick = function () {
        if (orderName.checked) {
            treeGridObj.sortByColumn('orderName', 'Ascending', true);
        }
        else {
            treeGridObj.grid.removeSortColumn('orderName');
        }
    };
    document.getElementById('Category').onclick = function () {
        if (category.checked) {
            treeGridObj.sortByColumn('Category', 'Ascending', true);
        }
        else {
            treeGridObj.grid.removeSortColumn('Category');
        }
    };
    document.getElementById('OrderDate').onclick = function () {
        if (orderDate.checked) {
            treeGridObj.sortByColumn('orderDate', 'Ascending', true);
        }
        else {
            treeGridObj.grid.removeSortColumn('orderDate');
        }
    };
    document.getElementById('Units').onclick = function () {
        if (units.checked) {
            treeGridObj.sortByColumn('units', 'Ascending', true);
        }
        else {
            treeGridObj.grid.removeSortColumn('units');
        }
    };
    function sort(args) {
        if (args.requestType === 'sorting') {
            for (var _i = 0, _a = treeGridObj.getColumns(); _i < _a.length; _i++) {
                var columns = _a[_i];
                for (var _b = 0, _c = treeGridObj.sortSettings.columns; _b < _c.length; _b++) {
                    var sortcolumns = _c[_b];
                    if (sortcolumns.field === columns.field) {
                        check(sortcolumns.field, true);
                        break;
                    }
                    else {
                        check(columns.field, false);
                    }
                }
            }
        }
    }
    function check(field, state) {
        switch (field) {
            case 'orderName':
                orderName.checked = state;
                break;
            case 'Category':
                category.checked = state;
                break;
            case 'orderDate':
                orderDate.checked = state;
                break;
            case 'units':
                units.checked = state;
                break;
            case 'unitPrice':
                unitprice.checked = state;
                break;
            case 'price':
                price.checked = state;
                break;
        }
    }

};
