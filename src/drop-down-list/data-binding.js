
this.default = function () {

    // initialize DropDownList component
    var dropDownListObj = new ej.dropdowns.DropDownList({
        // bind the DataManager instance to dataSource property
        dataSource: new ej.data.DataManager({
            url: 'https://services.syncfusion.com/js/production/api/Employees',
            adaptor: new ej.data.WebApiAdaptor(),
            crossDomain: true
        }),
        // bind the Query instance to query property
        query: new ej.data.Query().select(['FirstName', 'EmployeeID']).take(10).requiresCount(),
        // map the appropriate columns to fields property
        fields: { text: 'FirstName', value: 'EmployeeID' },
        // sort the resulted items
        sortOrder: 'Ascending',
        // set the placeholder to DropDownList input element
        placeholder: 'Select a name',
        // set the height of the popup element
        popupHeight: '200px'
    });
    dropDownListObj.appendTo('#customers');

    // initialize DropDownList component
    var games = new ej.dropdowns.DropDownList({
        // set the local data to dataSource property
        dataSource: window.ddSportsData,
        // map the appropriate columns to fields property
        fields: { text: 'Game' },
        // set the placeholder to DropDownList input element
        placeholder: 'Select a game',
        // set the height of the popup element
        popupHeight: '200px'
    });
    games.appendTo('#games');

};
