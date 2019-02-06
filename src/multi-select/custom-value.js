
this.default = function () {

    // initialize MultiSelect component
    var games = new ej.dropdowns.MultiSelect({
        // set the countries data to dataSource property
        dataSource: window.ddCountryData,
        // map the appropriate columns to fields property
        fields: { text: 'Name', value: 'Code' },
        // set the placeholder to MultiSelect input element
        placeholder: 'Select countries',
        // set true to enable the custom value support.
        allowCustomValue: true,
        // set the type of mode for how to visualized the selected items in input element.
        mode: 'Box'
    });
    games.appendTo('#default');
};