this.default = function () {

    // Initialize the grouping multicolumn ComboBox component
    var groupingMulticolumnObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set the local data to dataSource property
        dataSource: window.products,
        //set column of the multicolumn combobox
        columns: window.multicolumColumns,
        //set the fields of the multicolumn combobox
        fields: { text: 'Name', value: 'Name', groupBy: 'Category' },
        // set the placeholder to multicolumn combobox input element
        placeholder: 'e.g. Laptop',
        // set the height of the popup element
        popupHeight: '210px',
        popupWidth: '430px',
        allowSorting: false
    });
    groupingMulticolumnObj.appendTo('#grouping');
};