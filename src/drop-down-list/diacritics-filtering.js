/**
 * DropDownList Diacritics functionality Sample
 */
this.default = function () {
    // initialize DropDownList component
    var dropdownObj = new ej.dropdowns.DropDownList({
        //set the local data to dataSource property
        dataSource: window.diacritics,
        // set the placeholder to DropDownList input element
        placeholder: 'Select a value',
        // enabled the ignoreAccent property for ignore the diacritics
        ignoreAccent: true,
        // set true for enable the filtering support.
        allowFiltering: true,
        // set the placeholder to filterbar
        filterBarPlaceholder: 'e.g: gul'
    });
    dropdownObj.appendTo('#list');
};