this.default = function () {

    // initialize DropDownList component
    var dropDownListObj = new ej.dropdowns.DropDownList({
        // set the placeholder to DropDownList input element
        placeholder: 'Select a country',
        // set the placeholder to filter search box input element
        filterBarPlaceholder: 'Search',
        //set the local data to dataSource property
        dataSource: window.ddCountryData,
        // map the appropriate columns to fields property
        fields: { text: 'Name', value: 'Code' },
        // set the height of the popup element
        popupHeight: '250px',
        // set true for enable the filtering support.
        allowFiltering: true,
        // bind the filtering event
        filtering: function (e) {
            var dropdown_query = new ej.data.Query();
            // frame the query based on search string with filter type.
            dropdown_query = (e.text !== '') ? dropdown_query.where('Name', 'startswith', e.text, true) : dropdown_query;
            // pass the filter data source, filter query to updateData method.
            e.updateData(window.ddCountryData, dropdown_query);
        }
    });
    dropDownListObj.appendTo('#country');
};
