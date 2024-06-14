
this.default = function () {

    var columns = [
        { width: 110, field: 'OrderID', header: 'Order ID' },
        { width: 130, field: 'CustomerID', header: 'Customer ID' },
        { width: 90, field: 'Freight', header: 'Freight' },
        { width: 140, field: 'ShipCountry', header: 'Ship Country' }
      ];

    // Initialize multicolumn ComboBox component
    var sortingComboboxObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set the local data to dataSource property
        dataSource: window.orderData,
        //set column of the multicolumn combobox
        columns: columns,
        //set the fields of the multicolumn combobox
        fields: { text: 'OrderID', value: 'CustomerID' },
        //set the placeholder to multicolumn combobox input element
        placeholder: 'Select an order ID',
        // set the height of the popup element
        popupHeight: '230px',
        //set allowsorting to true to enable sort
        allowSorting: true,
        //set sort order to ascending
        sortOrder: 'Ascending',
        sortType: 'MultiColumn',
    });
    sortingComboboxObj.appendTo('#sorting');
};