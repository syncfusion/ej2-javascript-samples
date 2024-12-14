
this.default = function () {

    var Columns = [
        { field: 'Eimg', header: 'Photos', width: 90, headerTemplate: '<div class="header"> <span>Photo</span> </div>', template: '<div><img class="empImage" src="src/multicolumn-combobox/Employees/${Eimg}.png" alt="employee"/> </div>'},
        { field: 'Name', header: 'Employee Name', width: 150, headerTemplate: '<div class="header"> <span class="e-icons e-multicolumn-userlogin"></span> <span>Employee info</span> </div>', template: '<div class="ename"> ${Name} </div>' + '<div class="job"> ${Designation} </div>' },
        { field: 'DateofJoining', header: 'Date Of Joining', width: 130, headerTemplate: '<div class="header"> <span class="e-icons e-multicolumn-calender"></span> <span>Date of joining</span> </div>', template: '<div class="dateOfJoining"> ${DateofJoining} </div>' },
        { field: 'Country', header: 'Country', width: 100, headerTemplate: '<div class="header"> <span>Country</span> </div>', template: '<div class="country"> ${Country} </div>' }
    ];

    // Initialize multicolumn ComboBox component
    var multicolumnObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set the local data to dataSource property
        dataSource: window.employeesList,
        //set column of the multicolumn combobox
        columns: Columns,
        //set the fields of the multicolumn combobox
        fields: { text: 'Name', value: 'Eimg' },
        //set the placeholder to multicolumn combobox input element
        placeholder: 'e.g. Andrew Fuller',
        // set the height of the popup element
        popupHeight: '210px',
        popupWidth: '540px',
        // set the css of the multicolumn combobox
        cssClass: 'multicolumn-customize',
        // set the grid settings for multicolumn combobox
        gridSettings: { rowHeight: 40 }
    });
    multicolumnObj.appendTo('#template');
};