
this.default = function () {

    var columns = [
        { field: 'Eimg', header: 'Employee ID', width: 120 },
        { field: 'Name', header: 'Employee Name', width: 160 },
        { field: 'Designation', width: 150, header: 'Designation' },
        { field: 'Country', header: 'Country', width: 100 }
    ];

    // Initialize multicolumn ComboBox component
    var multicolumnObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set the local data to dataSource property
        dataSource: window.ddEmployeesList,
         //set column of the multicolumn combobox
        columns: columns,
        //set the fields of the multicolumn combobox
        fields: { text: 'Name', value: 'Designation' },
        //set the placeholder to multicolumn combobox input element
        placeholder: 'Select an employee',
        // set the height of the popup element
        popupHeight: '230px',
        // set enableRtl tru to enable rtl
        enableRtl: true
    });
    multicolumnObj.appendTo('#rtl');
};