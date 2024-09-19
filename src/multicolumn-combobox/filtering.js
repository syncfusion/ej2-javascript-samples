
this.default = function () {

    var columns = [
        { field: 'Name', header: 'Name', width: 100 },
        { field: 'YearOfJoining', header: 'Year Of Joining', width: 120 },               
        { field: 'Status', header: 'Status', width: 90 },
        { field: 'Location', header: 'Location', width: 100 },
        { field: 'Experience', header: 'Experience in Years', width: 150 }                  
    ];

    // Initialize multicolumn ComboBox component
    var multicolumnObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set the local data to dataSource property
        dataSource: window.workDetails,
        //set column of the multicolumn combobox
        columns: columns,
        //set the fields of the multicolumn combobox
        fields: { text: 'Name', value: 'Experience' },
        // set the placeholder to multicolumn combobox input element
        placeholder: 'Select a name',
        // set the height of the popup element
        popupHeight: '230px',
        // bind the filtering event
        filtering: function (e) {
            var query = new ej.data.Query();
            // frame the query based on search string with filter type.
            query = (e.text !== '') ? query.where('Name', 'startswith', e.text, true) : query;
            // pass the filter data source, filter query to updateData method.
            e.updateData(window.workDetails, query);
        }
    });
    multicolumnObj.appendTo('#filtering');
};