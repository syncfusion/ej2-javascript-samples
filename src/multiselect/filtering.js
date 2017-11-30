
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
            var query = new ej.data.Query();
            // frame the query based on search string with filter type.
            query = (e.text !== '') ? query.where('Name', 'startswith', e.text, true) : query;
            // pass the filter data source, filter query to updateData method.
            e.updateData(window.ddCountryData, query);
        }
    });
    listObj.appendTo('#list');

};