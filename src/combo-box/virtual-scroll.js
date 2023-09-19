
this.default = function () {
    // define the array of data
    var records = [];
        for (var i = 1; i <= 150; i++) {
            var item = {
                id: 'id' + i,
                text: "Item " + i,
            };
            records.push(item);
        }

    // initialize ComboBox component
    var comboBoxObj = new ej.dropdowns.ComboBox({
        //set the data to dataSource property
        dataSource: records,
        //enable the virtualization property
        enableVirtualization: true,
        popupHeight: '200px',
        allowFiltering: true,
        fields: { text: 'text', value: 'id' },
        // set the placeholder to ComboBox input element
        placeholder: 'e.g. Item 1'
    });
    comboBoxObj.appendTo('#data');
};