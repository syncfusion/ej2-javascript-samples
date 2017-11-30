
this.default = function () {
    // initialize AutoComplete component
    var groupObj = new ej.dropdowns.AutoComplete({
        //set the local data to dataSource property
        dataSource: window.ddVegetableData,
        // map the appropriate columns to fields property
        fields: { groupBy: 'Category', value: 'Vegetable' },
        // set the placeholder to AutoComplete input element
        placeholder: 'e.g. Cabbage'
    });
    groupObj.appendTo('#vegetables');

    // initialize AutoComplete component
    var iconObj = new ej.dropdowns.AutoComplete({
        //set the local data to dataSource property
        dataSource: window.ddSocialMedia,
        // map the appropriate columns to fields property
        fields: { iconCss: 'Class', value: 'SocialMedia' },
        // set the placeholder to AutoComplete input element
        placeholder: 'e.g. Facebook'
    });
    iconObj.appendTo('#icons');
};