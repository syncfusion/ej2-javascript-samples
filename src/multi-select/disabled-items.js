
this.default = function () {

    // initialize MultiSelect component
    var defaultObject = new ej.dropdowns.MultiSelect({
        //set the data to dataSource property
        dataSource: window.statusDatab,
        // set placeholder to MultiSelect input element
        placeholder: "Select Tags",
        // set true for enable the filtering support.
        allowFiltering: true,
        // map the appropriate columns to fields property
        fields: { value: 'ID', text: 'Text', disabled: 'State' },
    });

    // render initialized MultiSelect
    defaultObject.appendTo('#default');

    // initialize MultiSelect component
    var groupingObject = new ej.dropdowns.MultiSelect({
        //set the data to dataSource property
        dataSource: window.groupingData,
        // set placeholder to MultiSelect input element
        placeholder: "Select Vegetables",
        // map the appropriate columns to fields property
        fields: { groupBy: 'Category', text: 'Vegetable', value: 'Id', disabled: 'State' },
        // set the type of mode for checkbox to visualized the checkbox added in li element.
        mode: 'CheckBox',
    });

    // render initialized MultiSelect
    groupingObject.appendTo('#grouping');

};