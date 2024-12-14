this.default = function () {

    // initialize DropDownList component
    var dropDownListObj = new ej.dropdowns.DropDownList({
        // set the placeholder to DropDownList input element
        placeholder: 'Select a country',
        // set true for enable the resize property to drop down list
        allowResize: true,
        //set the local data to dataSource property
        dataSource: window.ddCountryData,
        // map the appropriate columns to fields property
        fields: { text: 'Name', value: 'Code' },
        // set the height of the popup element
        popupHeight: '250px',
    });
    dropDownListObj.appendTo('#country');
};
