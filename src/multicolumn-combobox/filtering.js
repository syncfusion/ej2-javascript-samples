this.default = function () {

    var columns = [
        { field: 'Name', header: 'Name', width: 105 },
        { field: 'Department', header: 'Department', width: 110 },               
        { field: 'Role', header: 'Role', width: 140 },
        { field: 'Location', header: 'Location', width: 100 },
        { field: 'Experience', header: 'Experience in Years', width: 145 }                  
    ];

    // Initialize multicolumn ComboBox component
    var multicolumnObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set the local data to dataSource property
        dataSource: window.employee,
        //set column of the multicolumn combobox
        columns: columns,
        //set the fields of the multicolumn combobox
        fields: { text: 'Name', value: 'Experience' },
        // set the placeholder to multicolumn combobox input element
        placeholder: 'e.g. Alice Johnson',
        // set the height of the popup element
        popupHeight: '210px',
        popupWidth: '630px'
    });
    multicolumnObj.appendTo('#filtering');

    var filterTypes = [
        { text: "StartsWith", value: "StartsWith" },
        { text: "EndsWith", value: "EndsWith" },
        { text: "Contains", value: "Contains" },
    ];

    var listObj = new ej.dropdowns.DropDownList({
        // set the index value to select an item based on index at initial rendering
        index: 0,
        // set the placeholder to DropDownList input element
        placeholder: 'select a filter type',
        // set the height of the popup element
        popupHeight: '200px',
        popupWidth: "300px",
        // bind the change event
        change: function (args) { multicolumnObj.filterType = args.value; }
    });
    listObj.appendTo('#filterType');  
};