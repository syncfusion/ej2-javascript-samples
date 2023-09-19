
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

    // initialize DropDownList component
    var listObj = new ej.dropdowns.DropDownList({
        //set the data to dataSource property
        dataSource: records,
        //enable the virtualization property
        enableVirtualization: true,
        popupHeight: '200px',
        allowFiltering: true,
        fields: { text: 'text', value: 'id' },
        // set the placeholder to DropDownList input element
        placeholder: 'e.g. Item 1'
    });
    listObj.appendTo('#data');
};