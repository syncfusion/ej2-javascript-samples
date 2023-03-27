/**
 * MultiSelect Selection Limit Samples
 */
 
this.default = function () {
    // initialize the MultiSelect component
    var checkList = new ej.dropdowns.MultiSelect({
        // set the country data to dataSource property
        dataSource: window.ddCountryData,
        // map the appropriate columns to fields property
        fields: { text: 'Name', value: 'Code' },
        // set the type of mode for checkbox to visualized the checkbox added in li element.
        mode: 'CheckBox',
        // set the placeholder to MultiSelect input element
        placeholder: 'Select countries',
        // set maximum selection length in Multiselect.
        maximumSelectionLength: 3,
        // set true for enable the dropdown icon.
        showDropDownIcon: true,
        // set the placeholder to MultiSelect filter input element
        filterBarPlaceholder: 'Search countries',
        // set the MultiSelect popup height
        popupHeight: '350px',
        // set the cssClass to Multiselect input element
        cssClass: 'e-specific'

    });
    checkList.appendTo('#selectLimit');
    // Render the Numeric Textbox
    var numeric = new ej.inputs.NumericTextBox({
        value: 3,
        min: 1,
        max: window.ddCountryData.length,
        format: 'n0'
    });
    numeric.appendTo('#maxsel');
    // Render Button control in properties panel
    var buttonApply = new ej.buttons.Button();
    buttonApply.appendTo('#buttonApply');

    document.getElementById('buttonApply').onclick = function () {
        var maxsel = parseFloat((document.getElementById('maxsel')).value);
        checkList.value = null;
        checkList.maximumSelectionLength = maxsel;
    };
};