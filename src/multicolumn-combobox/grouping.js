
this.default = function () {

    var columns = [
        { field: 'OrderID', header: 'Order ID', width: 110 },
        { field: 'CustomerName', width: 130, header: 'Customer Name' },
        { field: 'Freight', header: 'Freight', width: 90 },
        { field: 'ShipPostalCode', header: 'Ship PostalCode', width: 160 },
        { field: 'ShipCountry', header: 'Ship Country', width: 140 }
    ];

    // Initialize multicolumn ComboBox component
    var multicolumnObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set the local data to dataSource property
        dataSource: window.orderData,
        //set column of the multicolumn combobox
        columns: columns,
        //set the fields of the multicolumn combobox
        fields: { text: 'CustomerName', value: 'OrderID', groupBy: 'ShipCountry' },
        // set the placeholder to multicolumn combobox input element
        placeholder: 'Select a customer name',
        // set the height of the popup element
        popupHeight: '230px',
        allowSorting: false
    });
    multicolumnObj.appendTo('#grouping');
};