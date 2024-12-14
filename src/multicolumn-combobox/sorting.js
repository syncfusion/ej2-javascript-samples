
this.default = function () {
    // Initialize multicolumn ComboBox component
    var sortingComboboxObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set the local data to dataSource property
        dataSource: window.products,
        //set column of the multicolumn combobox
        columns: window.multicolumColumns,
        //set the fields of the multicolumn combobox
        fields: { text: 'Name', value: 'Category' },
        //set the placeholder to multicolumn combobox input element
        placeholder: 'e.g. laptop',
        // set the height of the popup element
        popupHeight: '210px',
        popupWidth: '600px',
        //set allowsorting to true to enable sort
        allowSorting: true,
        //set sort order to ascending
        sortOrder: 'Ascending',
        sortType: 'MultiColumn',
    });
    sortingComboboxObj.appendTo('#sorting');
};