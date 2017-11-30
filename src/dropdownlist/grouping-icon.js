
this.default = function () {

    // initialize DropDownList component
    var groupList = new ej.dropdowns.DropDownList({
        // set the vagetables data to dataSource property
        dataSource: window.ddVegetableData,
        // map the appropriate columns to fields property
        fields: { groupBy: 'Category', text: 'Vegetable', value: 'Id' },
        // set the placeholder to DropDownList input element
        placeholder: 'Select a vegetable',
        // set the height of the popup element
        popupHeight: '200px'
    });
    groupList.appendTo('#vegetables');

    // initialize DropDownList component
    var iconList = new ej.dropdowns.DropDownList({
        // set the social media data to dataSource property
        dataSource: window.ddSocialMedia,
        // map the appropriate columns to fields property
        fields: { text: 'SocialMedia', iconCss: 'Class', value: 'Id' },
        // set the placeholder to DropDownList input element
        placeholder: 'Select a social media',
        // set the height of the popup element
        popupHeight: '200px'
    });
    iconList.appendTo('#icons');
};
