
this.default = function () {
    var listObj = new ej.dropdowns.MultiSelect({
        // bind the DataManager instance to dataSource property
        dataSource: new ej.data.DataManager({ url: 'https://services.syncfusion.com/js/production/api/Employees', adaptor: new ej.data.WebApiAdaptor(), crossDomain: true}),
        // bind the Query instance to query property
        query: new ej.data.Query().select(['FirstName', 'EmployeeID']).take(10).requiresCount(),
        // set the placeholder to MultiSelect input element
        placeholder: 'Select names',
        // map the appropriate columns to fields property
        fields: { text: 'FirstName', value: 'EmployeeID' },
        // sort the resulted items
        sortOrder: 'Ascending'
    });
    listObj.appendTo('#remote');

    // initialize MultiSelect component
    var games = new ej.dropdowns.MultiSelect({
        // set the local data to dataSource property
        dataSource: window.ddCountryData,
        // map the appropriate columns to fields property
        fields: { text: 'Name', value: 'Code'},
        // set the placeholder to MultiSelect input element
        placeholder: 'Select countries',
    });
    games.appendTo('#local');

};