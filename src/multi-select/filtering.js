this.default = function () {

    var listObj = new ej.dropdowns.MultiSelect({
        // set placeholder to MultiSelect input element
        placeholder: 'Select countries',
        // set the countries data to dataSource property
        dataSource: window.ddCountryData,
        query: new ej.data.Query(),
        // map the appropriate columns to fields property
        fields: { text: 'Name', value: 'Code' },
        // set true for enable the filtering support.
        allowFiltering: true,
        // bind the filtering event
        filtering: function (e) {
            var multiselect_query = new ej.data.Query();
            // frame the query based on search string with filter type.
            multiselect_query = (e.text !== '') ? multiselect_query.where('Name', 'startswith', e.text, true) : multiselect_query;
            // pass the filter data source, filter query to updateData method.
            e.updateData(window.ddCountryData, multiselect_query);
        }
    });
    listObj.appendTo('#list');

};