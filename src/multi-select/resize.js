this.default = function () {

    var listObj = new ej.dropdowns.MultiSelect({
        // set placeholder to MultiSelect input element
        placeholder: 'Select countries',
        // set true for enable the resize property to multi select
        allowResize: true,
        // set the countries data to dataSource property
        dataSource: window.ddCountryData,
        // map the appropriate columns to fields property
        fields: { text: 'Name', value: 'Code' },
    });
    listObj.appendTo('#list');

};
