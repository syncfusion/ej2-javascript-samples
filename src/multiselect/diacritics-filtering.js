/**
 * MultiSelect Diacritics functionality Sample
 */
this.default = function () {
    // initialize MultiSelect component
    var dropdownObj = new ej.dropdowns.MultiSelect({
        //set the local data to dataSource property
        dataSource: window.diacritics,
        // set the placeholder to MultiSelect input element
        placeholder: 'e.g: gul',
        // enabled the ignoreAccent property for ignore the diacritics
        ignoreAccent: true,
        // set true for enable the filtering support.
        allowFiltering: true
    });
    dropdownObj.appendTo('#list');
};