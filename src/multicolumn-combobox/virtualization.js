
this.default = function () {

    //Generate large datas
    var data = function(count) {
        var names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Emily Davis"];
        var departments = ["HR", "IT", "Finance", "Marketing", "Sales"];
        var roles = ["Manager", "Developer", "Analyst", "Consultant", "Executive"];
        var locations = ["New York", "San Francisco", "London", "Berlin", "Tokyo"];
        var result = [];
        for (var i = 0; i < count; i++) {
            result.push({
                Name: names[Math.floor(Math.random() * names.length)],
                Department: departments[Math.floor(Math.random() * departments.length)],
                Role: roles[Math.floor(Math.random() * roles.length)],
                Location: locations[Math.floor(Math.random() * locations.length)]
            });
        }
        return result;
    };

    var columns = [
        { field: 'Name', header: 'Name', width: 100 },
        { field: 'Department', header: 'Department', width: 100 },
        { field: 'Role', header: 'Role', width: 90 },
        { field: 'Location', header: 'Location', width: 90,}
    ];

    // Initialize multicolumn ComboBox component
    var virtualComboboxObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set the random generated data to dataSource property
        dataSource: data(150),
        //set column of the multicolumn combobox
        columns: columns,
        //Set enableVirtualization true to enable virtual scroll
        enableVirtualization: true,
        //set the fields of the multicolumn combobox
        fields: { text: 'Name', value: 'Name'},
        //set the placeholder to multicolumn combobox input element
        placeholder: ' e.g. Alice Johnson',
        // set the height of the popup element
        popupHeight: '210px',
        popupWidth: '530px',
        gridSettings: { rowHeight: 40 }
    });
    virtualComboboxObj.appendTo('#virtual');
};