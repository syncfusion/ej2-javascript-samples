
this.default = function () {

    var columns = [
        { field: 'Title', header: 'Title', width: 180 },
        { field: 'Author', header: 'Author', width: 150 },
        { field: 'Genre', header: 'Genre', width: 100 },
        { field: 'PublishedYear', header: 'Published Year', width: 120 },     
        { field: 'Price', header: 'Price', width: 70 }
    ];

    // Initialize multicolumn ComboBox component
    var multicolumnObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set the local data to dataSource property
        dataSource: window.bookDetails,
         //set column of the multicolumn combobox
        columns: columns,
        //set the fields of the multicolumn combobox
        fields: { text: 'Title', value: 'Author' },
        //set the placeholder to multicolumn combobox input element
        placeholder: 'e.g. The Hobbit',
        // set the height of the popup element
        popupHeight: '210px',
        popupWidth: '650px',
        // set enableRtl tru to enable rtl
        enableRtl: true
    });
    multicolumnObj.appendTo('#rtl');
};