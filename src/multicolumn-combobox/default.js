
this.default = function () {
    var defaultColumns = [
        { field: 'Name', width: 90, header: 'Name' },
        { field: 'Position', width: 85, header: 'Position', },
        { field: 'Department', width: 98, header: 'Department' }, 
        { field: 'PhoneNo', width: 105, header: 'Phone No' },    
        { field: 'Location',  width: 98, header: 'Location' }
    ];
    // Initialize the default multicolumn ComboBox component
    var multicolumnObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set column of the multicolumn combobox
        columns: defaultColumns,
        //set the fields of the multicolumn combobox
        fields: { text: 'Name', value: 'Department' },
        //set the local data to dataSource property
        dataSource: window.employeeData,
        // set the height of the popup element
        popupHeight: '230px',
        // set the placeholder to multicolumn combobox input element
        placeholder: 'Select a name',
        showClearButton: true,
        value: 'HR',
        text: 'John Smith',
        change: valueChange
    });
    multicolumnObj.appendTo('#default');

    function valueChange(args) {
        document.getElementById('value').innerHTML = args.itemData.value || 'null';
        document.getElementById('text').innerHTML = args.itemData.text || 'null';
    }
};