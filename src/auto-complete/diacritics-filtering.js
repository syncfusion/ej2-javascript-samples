

/**
 * AutoComplete Diacritics functionality Sample
 */
this.default = function () {
    // initialize AutoComplete component
    var dropdownObj = new ej.dropdowns.AutoComplete({
        //set the local data to dataSource property
        dataSource: window.diacritics,
        // set the placeholder to AutoComplete input element
        placeholder: 'e.g: gul',
        // enabled the ignoreAccent property for ignore the diacritics
        ignoreAccent: true
    });
    dropdownObj.appendTo('#list');
};