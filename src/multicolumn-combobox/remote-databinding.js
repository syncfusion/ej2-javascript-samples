this.default = function () {

    var columns = [
        { field: 'EmployeeID', header: 'Employee ID', width: 120 },
        { field: 'FirstName', header: 'Name', width: 130 },
        { field: 'Designation', header: 'Designation', width: 120 },
        { field: 'Country', header: 'Country', width: 90 },
    ];

    // Initialize multicolumn ComboBox component
    var multicolumnObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set the remote data to dataSource property
        dataSource: new ej.data.DataManager({ url:'https://services.syncfusion.com/js/production/api/Employees', adaptor: new ej.data.WebApiAdaptor(), crossDomain: true}),
        //set the column of the multicolumn combobox
        columns: columns,
        //set the fields of the multicolumn combobox
        fields: { text: 'FirstName', value: 'EmployeeID' },
        // bind the Query instance to query property
        query: new ej.data.Query().select(['FirstName', 'EmployeeID', 'Designation', 'Country']).take(10).requiresCount(),
        // set the placeholder to multicolumn combobox input element
        placeholder: 'eg. Andrew',
        // set the height of the popup element
        popupHeight: '210px',
        popupWidth: '500px',
        allowSorting: false
    });
    multicolumnObj.appendTo('#remote');
};