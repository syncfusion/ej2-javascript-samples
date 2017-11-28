
this.default = function () {
    var countryList = new ej.dropdowns.ComboBox({
        // set the country data to dataSource property
        dataSource: window.ddCountry,
        // set the height of the popup element
        popupHeight: 'auto',
        // map the appropriate columns to fields property
        fields: { value: 'CountryId', text: 'CountryName' },
        // set false for disable the behavior of custom value rendering
        allowCustom: false,
        // bind change event
        change: function () {
            if (countryList.value === null) {
                stateList.enabled = false;
                cityList.enabled = false;
                // clear the selection
                stateList.value = null;
                // clear the selection
                cityList.value = null;
            }
            else {
                stateList.enabled = true;
                // frame the query based on selected value in country ComboBox.
                var tempQuery = new ej.data.Query().where('CountryId', 'equal', countryList.value);
                stateList.query = tempQuery;
                // clear the selection
                stateList.value = null;
                // clear the selection
                cityList.value = null;
                cityList.enabled = false;
            }
            // bind the property change to state ComboBox
            stateList.dataBind();
            // bind the property change to city ComboBox
            cityList.dataBind();
        },
        // set the placeholder to ComboBox input element
        placeholder: 'Select a country'
    });
    countryList.appendTo('#country');
    var stateList = new ej.dropdowns.ComboBox({
        // set the state data to dataSource property
        dataSource: window.ddState,
        // set the height of the popup element
        popupHeight: 'auto',
        // map the appropriate columns to fields property
        fields: { value: 'StateId', text: 'StateName' },
        // set disable state by default to prevent user interact.
        enabled: false,
        // set false for disable the behavior of custom value rendering
        allowCustom: false,
        // bind change event
        change: function () {
            if (stateList.value === null) {
                cityList.enabled = false;
                // clear the selection
                cityList.value = null;
            }
            else {
                cityList.enabled = true;
                // frame the query based on selected value in state ComboBox.
                var tempQuery = new ej.data.Query().where('StateId', 'equal', stateList.value);
                // set the framed query based on selected value in state ComboBox.
                cityList.query = tempQuery;
                // clear the selection
                cityList.value = null;
            }
            // bind the property change to city ComboBox
            cityList.dataBind();
        },
        placeholder: 'Select a state'
    });
    stateList.appendTo('#state');
    var cityList = new ej.dropdowns.ComboBox({
        // set the city data to dataSource property
        dataSource: window.ddCities,
        // set the height of the popup element
        popupHeight: 'auto',
        // map the appropriate columns to fields property
        fields: { text: 'CityName', value: 'CityId' },
        // set disable state by default to prevent user interact.
        enabled: false,
        // set false for disable the behavior of custom value rendering
        allowCustom: false,
        // set the placeholder to ComboBox input element
        placeholder: 'Select a city'
    });
    cityList.appendTo('#city');
};