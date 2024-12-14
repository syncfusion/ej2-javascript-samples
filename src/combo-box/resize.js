this.default = function () {
    // initialize ComboBox component
    var comboBoxObj = new ej.dropdowns.ComboBox({
        // set true for enable the resize property to ComboBox 
        allowResize: true,
        // set the local data to dataSource property
        dataSource: window.ddCountryData,
        // map the appropriate columns to fields property
        fields: { text: 'Name', value: 'Code' },
        // set the placeholder to ComboBox input element
        placeholder: 'Select a country',
        // set the height of the popup element
        popupHeight: '270px',
    });
    comboBoxObj.appendTo('#country');
};
