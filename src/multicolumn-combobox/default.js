
this.default = function () {
    // Initialize the default multicolumn ComboBox component
    var multicolumnObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set column of the multicolumn combobox
        columns: window.multicolumColumns,
        //set the fields of the multicolumn combobox
        fields: { text: 'Name', value: 'Category' },
        //set the local data to dataSource property
        dataSource: window.products,
        // set the height of the popup element
        popupHeight: '220px',
        popupWidth: '520px',
        // set the placeholder to multicolumn combobox input element
        placeholder: 'Select any product',
        showClearButton: true,
        value: 'Electronics',
        text: 'Smartphone',
        change: valueChange
    });
    multicolumnObj.appendTo('#default');

    function valueChange(args) {
        document.getElementById('value').innerHTML = args.itemData.value || 'null';
        document.getElementById('text').innerHTML = args.itemData.text || 'null';
    }
};