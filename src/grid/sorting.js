this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        allowPaging: true,
        pageSettings: { pageCount: 2 },
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true } },
            { field: 'CustomerName', headerText: 'Customer Name', width: 150, validationRules: { required: true, minLength: 5 } },
            { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit' },
            { field: 'Freight', width: 150, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 0 } },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType: 'dropdownedit' }
        ],
        actionComplete: sort,
        sortSettings: { columns: [{ field: 'OrderDate', direction: 'Ascending' }, { field: 'Freight', direction: 'Descending' }] }
    });
    grid.appendTo('#Grid');

    var orderID = new ej.buttons.CheckBox();
    orderID.appendTo('#OrderID');

    var customerName = new ej.buttons.CheckBox();
    customerName.appendTo('#CustomerName');

    var orderDate = new ej.buttons.CheckBox({ checked: true });
    orderDate.appendTo('#OrderDate');

    var freight = new ej.buttons.CheckBox({ checked: true });
    freight.appendTo('#Freight');

    var shipCountry = new ej.buttons.CheckBox();
    shipCountry.appendTo('#ShipCountry');

    document.getElementById('OrderID').onclick = function() {
        if (orderID.checked) {
            grid.sortColumn('OrderID', 'Ascending', true);
        } else {
            grid.removeSortColumn('OrderID');
        }
    };
    document.getElementById('CustomerName').onclick = function() {
        if (customerName.checked) {
            grid.sortColumn('CustomerName', 'Ascending', true);
        } else {
            grid.removeSortColumn('CustomerName');
        }
    };
    document.getElementById('OrderDate').onclick = function() {
        if (orderDate.checked) {
            grid.sortColumn('OrderDate', 'Ascending', true);
        } else {
            grid.removeSortColumn('OrderDate');
        }
    };
    document.getElementById('Freight').onclick = function() {
        if (freight.checked) {
            grid.sortColumn('Freight', 'Ascending', true);
        } else {
            grid.removeSortColumn('Freight');
        }
    };
    document.getElementById('ShipCountry').onclick = function() {
        if (shipCountry.checked) {
            grid.sortColumn('ShipCountry', 'Ascending', true);
        } else {
            grid.removeSortColumn('ShipCountry');
        }
    };
    function sort(args) {
        if (args.requestType === 'sorting') {
            for (var i = 0, a = grid.getColumns(); i < a.length; i++) {
                var columns = a[i];
                for (var j = 0, b = grid.sortSettings.columns; j < b.length; j++) {
                    var sortcolumns = b[j];
                    if (sortcolumns.field === columns.field) {
                        check(sortcolumns.field, true);
                        break;
                    }
                    else {
                        check(columns.field,false);
                    }
                }
            }
    }
    }
    function check(field, state) {
        switch (field) {
            case 'OrderID':
                orderID.checked = state; break;
            case 'CustomerName':
                customerName.checked = state; break;
            case 'OrderDate':
                orderDate.checked = state; break;
            case 'Freight':
                freight.checked = state; break;
            case 'ShipCountry':
                shipCountry.checked = state;
        }
    }
};
