
this.default = function () {

    var groupColumns = [
        { field: 'Name', header: 'Name', width: 90 },
        { field: 'Position', header: 'Position', width: 85 },
        { field: 'Department', header: 'Department', width: 98 }, 
        { field: 'PhoneNo', header: 'Phone No', width: 105 },    
        { field: 'Location', header: 'Location', width: 98 }
    ];

    // Initialize the grouping multicolumn ComboBox component
    var groupingMulticolumnObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set the local data to dataSource property
        dataSource: window.employeeData,
        //set column of the multicolumn combobox
        columns: groupColumns,
        //set the fields of the multicolumn combobox
        fields: { text: 'Name', value: 'Department', groupBy: 'Position' },
        // set the placeholder to multicolumn combobox input element
        placeholder: 'Select a name',
        // set the height of the popup element
        popupHeight: '230px',
        allowSorting: false
    });
    groupingMulticolumnObj.appendTo('#grouping');
};