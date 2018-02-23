
this.default = function () {

    // initialize MultiSelect component
    var listObj = new ej.dropdowns.MultiSelect({
        // set the employees data to dataSource property
        dataSource: window.ddEmployeesList,
        // map the appropriate columns to fields property
        fields: { text: 'Name', value: 'Eimg' },
        // set the template content for popup header element
        headerTemplate: '<div class="header"> <span>Photo</span> <span style="margin-left:17px">Employee Info</span></div>',
        // set the template content for displays the selected items in input element.
        itemTemplate: '<div><img class="empImage" src="styles/images/Employees/${Eimg}.png" alt="employee"/>' +
        '<div class="ename"> ${Name} </div><div class="job"> ${Designation} </div></div>',
        // set the template content for displays the selected items in input element.
        valueTemplate: '<div style="width:100%;height:100%;">' +
            '<img class="value" src="styles/images/Employees/${Eimg}.png" height="26px" width="26px" alt="employee"/>' +
            '<div class="name"> ${Name} </div></div>',
        // set placeholder to MultiSelect input element
        placeholder: 'Select employees',
        // set the type of mode for how to visualized the selected items in input element.
        mode: 'Box'
    });
    listObj.appendTo('#template');
};