this.default = function () {
    // initialize ComboBox component
    var comboBoxObj = new ej.dropdowns.ComboBox({
        // set the local data to dataSource property
        dataSource: window.ddCountryData,
        // map the appropriate columns to fields property
        fields: { text: 'Name', value: 'Code' },
        // set the placeholder to ComboBox input element
        placeholder: 'Select a country',
        // set the height of the popup element
        popupHeight: '270px',
        // set true for enable the filtering support.
        allowFiltering: true,
        // bind the filtering event
        filtering: function (e) {
            var combobox_query = new ej.data.Query();
            // frame the query based on search string with filter type.
            combobox_query = (e.text !== '') ? combobox_query.where('Name', 'startswith', e.text, true) : combobox_query;
            // pass the filter data source, filter query to updateData method.
            e.updateData(window.ddCountryData, combobox_query);
        }
    });
    comboBoxObj.appendTo('#country');
};