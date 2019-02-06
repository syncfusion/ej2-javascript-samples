
this.default = function () {

    // initialize the MultiSelect component
    var groupList = new ej.dropdowns.MultiSelect({
        // set the vegetables data to dataSource property
        dataSource: window.ddVegetableData,
        // map the appropriate columns to fields property
        fields: { groupBy: 'Category', text: 'Vegetable', value: 'Id' },
        // set placeholder to MultiSelect input element
        placeholder: 'Select vegetables',
    });
    groupList.appendTo('#group');
};