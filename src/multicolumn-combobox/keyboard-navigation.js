
this.default = function () {
    var multiColumns = [
        { field: 'OrderID', header: 'Order ID', width: 110 },
        { field: 'CustomerID', width: 130, header: 'Customer ID' },
        { field: 'Freight', header: 'Freight', width: 90 },
        { field: 'ShipCountry', header: 'Ship Country', width: 140 }
    ];
    // Initialize multicolumn ComboBox component
    var keyboardComboboxObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set the local data to dataSource property
        dataSource: window.orderData,
        //set column of the multicolumn combobox
        columns: multiColumns,
        //set the fields of the multicolumn combobox
        fields: { text: 'OrderID', value: 'CustomerID' },
        //set the placeholder to multicolumn combobox input element
        placeholder: 'Select an order ID',
        // set the height of the popup element
        popupHeight: '230px'
    });
    keyboardComboboxObj.appendTo('#keyboard');
};