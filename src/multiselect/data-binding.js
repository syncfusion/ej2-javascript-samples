
this.default = function () {
    var listObj = new ej.dropdowns.MultiSelect({
        // bind the DataManager instance to dataSource property
        dataSource: new ej.data.DataManager({ url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc', adaptor: new ej.data.ODataAdaptor(), crossDomain: true}),
        // bind the Query instance to query property
        query: new ej.data.Query().from('Customers').select(['ContactName', 'CustomerID']).take(25),
        // map the appropriate columns to fields property
        fields: { text: 'ContactName', value: 'CustomerID' },
        // set the placeholder to MultiSelect input element
        placeholder: 'Select customer',
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