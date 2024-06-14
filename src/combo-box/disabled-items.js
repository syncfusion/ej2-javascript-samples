
this.default = function () {

    // initialize ComboBox component
    var defaultObject = new ej.dropdowns.ComboBox({
        //set the data to dataSource property
        dataSource: window.statusData,
        // set placeholder to ComboBox input element
        placeholder: "Select Status",
        // set true for enable the filtering support.
        allowFiltering: true,
        // map the appropriate columns to fields property
        fields: { value: 'ID', text: 'Text', disabled: 'State' },
    });

    // render initialized ComboBox
    defaultObject.appendTo('#default');

    // initialize ComboBox component
    var groupingObject = new ej.dropdowns.ComboBox({
        //set the data to dataSource property
        dataSource: window.groupingData,
        // set placeholder to ComboBox input element
        placeholder: "Select Vegetable",
        // map the appropriate columns to fields property
        fields: { groupBy: 'Category', text: 'Vegetable', value: 'Id', disabled: 'State' },
    });

    // render initialized ComboBox
    groupingObject.appendTo('#grouping');

};