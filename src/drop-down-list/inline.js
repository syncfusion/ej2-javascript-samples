this.default = function () {

    // initialize DropDownList component
    var dropDownListObj = new ej.dropdowns.DropDownList({
        // set the employees data to dataSource property
        dataSource: window.inlineData,
        // map the appropriate columns to fields property
        fields: { text: 'Name' },
        value: 'Michael',
        // set the placeholder to DropDownList input element
        placeholder: 'Select an employee',
        // set the width to component
        width: '65px',
        popupWidth: '140px',
        popupHeight: '200px',
        cssClass:'inlinecss'
    });
    dropDownListObj.appendTo('#inline');
};
