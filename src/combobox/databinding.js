
this.default = function () {
    // initialize ComboBox component
    var comboBoxObj1 = new ej.dropdowns.ComboBox({
        // bind the DataManager instance to dataSource property
        dataSource: new ej.data.DataManager({ url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc', adaptor: new ej.data.ODataAdaptor(), crossDomain: true}),
        // bind the Query instance to query property
        query: new ej.data.Query().from('Customers').select(['ContactName', 'CustomerID']).take(24),
        // map the appropriate columns to fields property
        fields: { text: 'ContactName', value: 'CustomerID' },
        // set the placeholder to ComboBox input element
        placeholder: 'Select a name',
        // set the height of the popup element
        popupHeight: '200px',
        // sort the resulted items
        sortOrder: 'Ascending',
        // enable the autofill property to fill a first matched value in input when press a down key
        autofill: true
    });
    comboBoxObj1.appendTo('#customers');

    // initialize ComboBox component
    var comboBoxObj2 = new ej.dropdowns.ComboBox({
        // set the sports data to dataSource property
        dataSource: window.ddSportsData,
        // map the appropriate columns to fields property
        fields: { text: 'Game', value: 'Id' },
        // set the placeholder to ComboBox input element
        placeholder: 'Select a game',
        // sort the resulted items
        sortOrder: 'Ascending',
        // set the height of the popup element
        popupHeight: '230px',
        // enable the autofill property to fill a first matched value in input when press a down key
        autofill: true
    });
    comboBoxObj2.appendTo('#games');

    // Initialize the CheckBox component
    var checkBoxObj = new ej.buttons.CheckBox({
        // set true for enable the checked state at initial rendering
        checked: true,
        // set text value for check box element.
        label: 'Autofill',
        // bind change event
        change: function (args) {
            // enable or disable the autofill in remote data ComboBox based on CheckBox checked state
            comboBoxObj1.autofill = args.checked;
            // enable or disable the autofill in local data ComboBox based on CheckBox checked state
            comboBoxObj2.autofill = args.checked;
        }
    });
    checkBoxObj.appendTo('#checkAutofill');

};