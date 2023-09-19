
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

    // initialize AutoComplete component
    var atcObj = new ej.dropdowns.AutoComplete({
        //set the data to dataSource property
        dataSource: records,
        //enable the virtualization property
        enableVirtualization: true,
        popupHeight: '200px',
        fields: { text: 'text', value: 'text' },
        // set the placeholder to AutoComplete input element
        placeholder: 'e.g. Item 1'
    });
    atcObj.appendTo('#data');
};