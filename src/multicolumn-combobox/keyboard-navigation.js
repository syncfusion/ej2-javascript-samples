
this.default = function () {
    var columns = [
        { field: 'ProductID', width: 100, header: 'Product ID'},
        { field: 'ProductName', width: 200, header: 'Product Name', },
        { field: 'UnitPrice', width: 90, header: 'UnitPrice' },
        { field: 'UnitsInStock', width: 120, header: 'Units In Stock' },     
    ];
    // Initialize multicolumn ComboBox component
    var keyboardComboboxObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set the local data to dataSource property
        dataSource: window.productDetails,
        //set column of the multicolumn combobox
        columns: columns,
        //set the fields of the multicolumn combobox
        fields: { text: 'ProductName', value: 'ProductID' },
        //set the placeholder to multicolumn combobox input element
        placeholder: 'Select any product',
        // set the height of the popup element
        popupHeight: '210px',
        popupWidth: '530px'
    });
    keyboardComboboxObj.appendTo('#keyboard');
};