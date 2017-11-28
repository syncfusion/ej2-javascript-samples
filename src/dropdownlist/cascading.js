
this.default = function () {
    // initialize DropDownList component
    var countryObj = new ej.dropdowns.DropDownList({
        // set the country data to dataSource property
        dataSource: window.ddCountry,
        // set the height of the popup element
        popupHeight: 'auto',
        // map the appropriate columns to fields property
        fields: { value: 'CountryId', text: 'CountryName' },
        // bind the change event
        change: function () {
            // disable the state DropDownList
            stateObj.enabled = true;
            // frame the query based on selected value in country DropDownList.
            var tempQuery = new ej.data.Query().where('CountryId', 'equal', countryObj.value);
            // set the framed query based on selected value in country DropDownList.
            stateObj.query = tempQuery;
            // set null value to state DropDownList text property
            stateObj.text = null;
            // bind the property changes to state DropDownList
            stateObj.dataBind();
            // set null value to city DropDownList text property
            cityObj.text = null;
            // disable the city DropDownList
            cityObj.enabled = false;
            // bind the property changes to City DropDownList
            cityObj.dataBind();
        },
        placeholder: 'Select a country'
    });
    countryObj.appendTo('#country');

    //initiates the state DropDownList
    var stateObj = new ej.dropdowns.DropDownList({
        // set the state data to dataSource property
        dataSource: window.ddState,
        // set the height of the popup element
        popupHeight: 'auto',
        // map the appropriate columns to fields property
        fields: { value: 'StateId', text: 'StateName' },
        // set disable state by default to prevent user interact.
        enabled: false,
        // bind the change event
        change: function () {
            // enable the city DropDownList
            cityObj.enabled = true;
            // Query the data source based on state DropDownList selected value
            var tempQuery1 = new ej.data.Query().where('StateId', 'equal', stateObj.value);
            // set the framed query based on selected value in city DropDownList.
            cityObj.query = tempQuery1;
            //clear the existing selection
            cityObj.text = null;
            // bind the property change to city DropDownList
            cityObj.dataBind();
        },
        placeholder: 'Select a state'
    });
    stateObj.appendTo('#state');
    var cityObj = new ej.dropdowns.DropDownList({
        // set the city data to dataSource property
        dataSource: window.ddCities,
        // set the height of the popup element
        popupHeight: 'auto',
        // map the appropriate columns to fields property
        fields: { text: 'CityName', value: 'CityId' },
        // disable the DropDownList by default to prevent the user interact.
        enabled: false,
        // set the placeholder to DropDownList input element
        placeholder: 'Select a city'
    });
    cityObj.appendTo('#city');
};