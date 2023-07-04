
this.default = function () {
    // initialize AutoComplete component
    var atcObj1 = new ej.dropdowns.AutoComplete({
        // bind the DataManager instance to dataSource property
        dataSource: new ej.data.DataManager({ url: 'https://services.syncfusion.com/js/production/api/Employees', adaptor: new ej.data.WebApiAdaptor(), crossDomain: true}),
        // set the count for displays the suggestion items.
        suggestionCount: 5,
        // bind the Query instance to query property
        query: new ej.data.Query().select(['FirstName', 'EmployeeID']).take(10).requiresCount(),
        // map the appropriate columns to fields property
        fields: { value: 'FirstName' },
        // set the placeholder to AutoComplete input element
        placeholder: 'e.g. Andrew Fuller',
        // sort the resulted items
        sortOrder: 'Ascending',
        // enable the autofill property to fill a first matched value in input when press a down key
        autofill: true,
        // set the filterType to searching operation
        filterType: 'StartsWith',
    });
    atcObj1.appendTo('#products');

    // initialize AutoComplete component
    var atcObj2 = new ej.dropdowns.AutoComplete({
        //set the local data to dataSource property
        dataSource: window.ddCountryData,
        // map the appropriate columns to fields property
        fields: { value: 'Name' },
        // set the placeholder to AutoComplete input element
        placeholder: 'e.g. Australia',
        // sort the resulted items
        sortOrder: 'Ascending',
        // set the filterType to searching operation
        filterType: 'StartsWith',
        // enable the autofill property to fill a first matched value in input when press a down key
        autofill: true
    });
    atcObj2.appendTo('#country');
    var checkBoxObj = new ej.buttons.CheckBox({
        // set true for enable the checked state at initial rendering
        checked: true,
        // set text value for check box element.
        label: 'Autofill',
        // bind change event
        change: function (args) {
            // enable or disable the autofill in remote data AutoComplete based on CheckBox checked state
            atcObj1.autofill = args.checked;
            // enable or disable the autofill in local data AutoComplete based on CheckBox checked state
            atcObj2.autofill = args.checked;
        }
    });
    checkBoxObj.appendTo('#checkAutofill');

};