
this.default = function () {
    // initialize AutoComplete component
    var atcObj = new ej.dropdowns.AutoComplete({
        // set the local data to dataSource property
        dataSource: window.ddEmployeesList,
        // map the appropriate columns to fields property
        fields: { value: 'Name' },
        // set the template content for popup header element
        headerTemplate:
        '<div class="header"> <span>Photo</span> <span class="info">Employee Info</span></div>',
        // set the template content for list items
        itemTemplate: '<div><img class="empImage" src="styles/images/Employees/${Eimg}.png" alt="employee"/>' +
            '<div class="ename"> ${Name} </div><div class="job"> ${Designation} </div></div>',
        // set the placeholder to AutoComplete input element
        placeholder: 'e.g. Andrew Fuller',
        // set the height of the popup element
        popupHeight: '450px'
    });
    atcObj.appendTo('#employees');
};