
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
        popupHeight: '300px',
        // set true for enable the filtering support
        allowFiltering: true,
        // bind the filtering event
        filtering: function (e) {
            var query = new ej.data.Query();
            // frame the query based on search string with filter type.
            query = (e.text !== '') ? query.where('Name', 'startswith', e.text, true) : query;
            // pass the filter data source, filter query to updateData method.
            e.updateData(window.ddCountryData, query);
            if (document.getElementById('nodata')) {
                // bind click event to button element
                document.getElementById('btn').onclick = function () {
                    // get the typed characters
                    var customValue = document.getElementById('country').value;
                    // make new object based on typed characters
                    var newItem = { 'Name': customValue, 'Code': customValue };
                    // new object added to data source.
                    comboBoxObj.dataSource.push(newItem);
                    // close the popup element.
                    comboBoxObj.hidePopup();
                    // pass new object to addItem method.
                    comboBoxObj.addItem(newItem);
                    // select the newly added item.
                    comboBoxObj.value = customValue;
                };
            }
        },
        // set the template content when the typed character(s) is not present in the list
        noRecordsTemplate: '<div><div id="nodata"> No matched item, do you want to add it as new item in list?</div><button id="btn" class="e-control e-btn">Add New Item</button></div>',
    });
    comboBoxObj.appendTo('#country');
};
