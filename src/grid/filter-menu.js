/**
 * Grid filtermenu sample
 */
this.default = function () {
    var filtertype = [
        { id: 'Menu', type: 'Menu' },
        { id: 'CheckBox', type: 'Checkbox' },
        { id: 'Excel', type: 'Excel' }
    ];
    var grid = new ej.grids.Grid({
         dataSource: window.orderDatas,
        allowPaging: true,
        allowFiltering: true,
		filterSettings: {type:'Menu'},
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' }
        ],
        pageSettings: { pageCount: 5 }
    });
    grid.appendTo('#Grid');

    // sets the filterType
    var dropDownFilterType = new ej.dropdowns.DropDownList({
        dataSource: filtertype,
        fields: { text: 'type', value: 'id' },
        value: 'Menu',
        change: function (e) {
            var dropSelectedValue = e.value;
            grid.filterSettings.type = dropSelectedValue;
            grid.clearFiltering();
        }
    });
    dropDownFilterType.appendTo('#filtertype');
};