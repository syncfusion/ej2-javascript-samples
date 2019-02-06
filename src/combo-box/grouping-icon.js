
this.default = function () {
    // initialize ComboBox component
    var groupComboBoxObj = new ej.dropdowns.ComboBox({
        //set the vegetable data to dataSource property
        dataSource: window.ddVegetableData,
        // map the appropriate columns to fields property
        fields: { groupBy: 'Category', text: 'Vegetable', value: 'Id' },
        // set the placeholder to ComboBox input element
        placeholder: 'Select a vegetable',
        // set the height of the popup element
        popupHeight: '200px'
    });
    groupComboBoxObj.appendTo('#vegetables');

    // initialize ComboBox component
    var iconComboBoxObj = new ej.dropdowns.ComboBox({
        //set the social media data to dataSource property
        dataSource: window.ddSocialMedia,
        // map the appropriate columns to fields property
        fields: { text: 'SocialMedia', iconCss: 'Class', value: 'Id' },
        // set the placeholder to ComboBox input element
        placeholder: 'Select a social media',
        // set the height of the popup element
        popupHeight: '200px'
    });
    iconComboBoxObj.appendTo('#icons');
};