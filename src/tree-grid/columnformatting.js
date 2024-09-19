this.default = function () {
    var columnNames = [
        { id: 'price', name: 'Price' },
        { id: 'orderDate', name: 'Order Date' }
    ];
    var priceFormat = [
        { id: 'n2', format: 'n2' },
        { id: 'n3', format: 'n3' },
        { id: 'c2', format: 'c2' },
        { id: 'c3', format: 'c3' },
        { id: 'p2', format: 'p2' },
        { id: 'p3', format: 'p3' }
    ];
    var dateFormat = [
        { id: 'M/d/yyyy', format: 'Short Date' },
        { id: 'dddd, MMMM dd, yyyy', format: 'Long Date' },
        { id: 'MMMM, yyyy', format: 'Month/Year' },
        { id: 'MMMM, dd', format: 'Month/Day' }
    ];
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.formatData,
        allowPaging: true,
        height: 350,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        pageSettings: { pageCount: 5 },
        columns: [
            { field: 'orderID', headerText: 'Order ID', textAlign: 'Right', width: 110 },
            { field: 'orderName', headerText: 'Order Name', textAlign: 'Left', width: 210 },
            { field: 'orderDate', headerText: 'Order Date', textAlign: 'Right', width: 190,
            format: { format: 'dd/MM/yyyy', type: 'date' } },
            { field: 'price', headerText: 'Price', textAlign: 'Right', width: 120, format: 'c2', type: 'number' },
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
    var dropDownColumn = new ej.dropdowns.DropDownList({
        dataSource: columnNames,
        width: '140px',
        fields: { text: 'name', value: 'id' },
        value: 'price',
        change: function (e) {
            var columnName = e.value;
            if (columnName === 'price') {
                dropDownFormat.dataSource = priceFormat;
            }
            if (columnName === 'orderDate') {
                dropDownFormat.dataSource = dateFormat;
            }
            dropDownFormat.index = 0;
        }
    });
    dropDownColumn.appendTo('#columns');
    var dropDownFormat = new ej.dropdowns.DropDownList({
        dataSource: priceFormat,
        width: '140px',
        fields: { text: 'format', value: 'id' },
        value: 'c2',
        change: function (e) {
            var formatval = e.value;
            var columnName = dropDownColumn.value;
            if (columnName === 'price') {
                treeGridObj.getColumnByField(columnName).format = formatval;
            }
            if (columnName === 'orderDate') {
                treeGridObj.getColumnByField(columnName).format = { format: formatval, type: 'date' };
            }
            treeGridObj.refreshColumns();
        }
    });
    dropDownFormat.appendTo('#format');
};
