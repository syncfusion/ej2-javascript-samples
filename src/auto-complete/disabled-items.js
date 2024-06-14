
this.default = function () {

    // initialize AutoComplete component
    var defaultObject = new ej.dropdowns.AutoComplete({
        //set the data to dataSource property
        dataSource: window.statusDatac,
        // set placeholder to AutoComplete input element
        placeholder: "Select Status",
        // map the appropriate columns to fields property
        fields: { value: 'Status', disabled: 'State' },
    });

    // render initialized AutoComplete
    defaultObject.appendTo('#default');

    // initialize AutoComplete component
    var groupingObject = new ej.dropdowns.AutoComplete({
        //set the data to dataSource property
        dataSource: window.groupingDatab,
        // set placeholder to AutoComplete input element
        placeholder: "Select Vegetable",
        // map the appropriate columns to fields property
        fields: { groupBy: 'Category', value: 'Vegetable', disabled: 'State' },
    });

    // render initialized AutoComplete
    groupingObject.appendTo('#grouping');

};