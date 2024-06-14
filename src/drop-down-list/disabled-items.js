
this.default = function () {

    // initialize DropDownList component
    var defaultObject = new ej.dropdowns.DropDownList({
        //set the local data to dataSource property
        dataSource: window.statusData,
        // set placeholder to DropDownList input element
        placeholder: "Select Status",
        // set true for enable the filtering support.
        allowFiltering: true,
        // map the appropriate columns to fields property
        fields: { value: 'ID', text: 'Text', disabled: 'State' },
    });

    // render initialized DropDownList
    defaultObject.appendTo('#default');

    // initialize DropDownList component
    var groupingObject = new ej.dropdowns.DropDownList({
        //set the local data to dataSource property
        dataSource: window.groupingData,
        // set placeholder to DropDownList input element
        placeholder: "Select Vegetable",
        // map the appropriate columns to fields property
        fields: { groupBy: 'Category', text: 'Vegetable', value: 'Id', disabled: 'State' },
    });

    // render initialized DropDownList
    groupingObject.appendTo('#grouping');

};