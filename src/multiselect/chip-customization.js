
this.default = function () {

    // initialize MultiSelect component
    var colors = new ej.dropdowns.MultiSelect({
        // set the colors data to dataSource property
        dataSource: window.msColorsData,
        // map the appropriate columns to fields property
        fields: { text: 'Color', value: 'Code' },
        // set the value to MultiSelect
        value: ['#75523C', '#4CD242', '#FF745C', '#3B8289', '#CA3832'],
        // set the placeholder to MultiSelect input element
        placeholder: 'Favorite Colors',
        // set the type of mode for how to visualized the selected items in input element.
        mode: 'Box',
        // bind the tagging event
        tagging: function (e) {
            // set the current selected item text as class to chip element.
            e.setClass(e.itemData[colors.fields.text].toLowerCase());
        }
    });
    colors.appendTo('#chip-customization');
};