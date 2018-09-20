this.default = function () {
    // initialize AutoComplete component
    var atcObj = new ej.dropdowns.AutoComplete({
        // set the local data to dataSource property
        dataSource: window.ddCountryData,
        // map the appropriate columns to fields property
        fields: { value: 'Name' },
        // set the placeholder to AutoComplete input element
        placeholder: 'e.g. Australia',
        // enable the highlight property to highlight the matched character in suggestion list
        highlight: true
    });
    atcObj.appendTo('#country');

    // initialize DropDownList component
    var ddlObj = new ej.dropdowns.DropDownList({
        // set the array of string data to dataSource property
        dataSource: ['Contains', 'StartsWith', 'EndsWith'],
        // set the value to select an item at initial rendering.
        text: 'Contains',
        // set the placeholder to DropDownList input element
        placeholder: 'Select a type',
        // set width size of DropDownList element.
        width: '150px',
        // bind change event to modify the filter type of AutoComplete element.
        change: function (e) {
            atcObj.filterType = e.itemData.value;
        }
    });
    ddlObj.appendTo('#filter-type');
};