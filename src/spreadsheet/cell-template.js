/**
 * Cell Template sample
 */
this.default = function () {
    // Initialize Spreadsheet component.
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        showRibbon: false,
        showFormulaBar: false,
        enableContextMenu: false,
        cssClass: 'e-custom-spreadsheet',
        allowOpen: false,
        allowSave: false,
        allowPrint: false,
        allowEditing: false,
        selectionSettings: {
        mode: 'None'
        },
        scrollSettings: {
            isFinite: true
        },
        sheets: [{
            rowCount: 40,
            colCount: 30,
            showGridLines: false,
            name: 'Registration Form',
            rows: [{
                height: 55,
                cells: [{
                    index: 1,
                    value: 'Interview Registration Form',
                    style: {
                        fontSize: '12pt',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        textDecoration: 'underline'
                    }
                }]
            }, {
                height: 45,
                cells: [{
                    index: 1,
                    value: 'Name'
                }],
            }, {
                height: 45,
                cells: [{
                    index: 1,
                    value: 'Date of Birth:'
                }]
            }, {
                height: 45,
                cells: [{
                    index: 1,
                    value: 'Gender:'
                }]
            }, {
                height: 45,
                cells: [{
                    index: 1,
                    value: 'Year of Experience:'
                }]
            }, {
                height: 45,
                cells: [{
                    index: 1,
                    value: 'Areas of Interest:'
                }]
            }, {
                height: 45,
                cells: [{
                    index: 1,
                    value: 'Mobile Number:'
                }]
            }, {
                height: 45,
                cells: [{
                    index: 1,
                    value: 'Email:'
                }]
            }, {
                height: 82,
                cells: [{
                    index: 1,
                    value: 'Address:'
                }]
            }],
            columns: [{
                index: 1,
                width: 190
            }, {
                width: 350
            }],
            ranges: [{
                template: '<input />',
                address: 'C2:C3'
            }, {
                template: '<div style="padding-left: 2px"><input type="radio" name="gender" value="male" /><input type="radio" name="gender" value="female"/></div>',
                address: 'C4'
            }, {
                template: '<input />',
                address: 'C5:C8'
            }, {
                template: '<textarea rows="3"/>',
                address: 'C9'
            }, {
                template: '<button class="e-btn e-flat" style="float:right">Add</button>',
                address: 'C11'
            }]
        }
        ],
        beforeCellRender: function(args) {
            //Initializing input components before cell rendering
            if (spreadsheet.activeSheetIndex === 0) {
                var target = args.element.firstElementChild;
                switch (args.address) {
                    case 'B1':
                        args.element.colSpan = 2;
                        break;
                    case 'C2':
                        new ej.inputs.TextBox({ placeholder: 'Name' }, target);
                        break;
                    case 'C3':
                        new ej.calendars.DatePicker({ placeholder: 'DOB', }, target);
                        break;
                    case 'C4':
                        new ej.buttons.RadioButton({ label: 'Male' }, args.element.firstElementChild.firstElementChild);
                        new ej.buttons.RadioButton({ label: 'Female' }, args.element.firstElementChild.lastElementChild);
                        break;
                    case 'C5':
                        var experience =  ['0 - 1 year', '1 - 3 years', '3 - 5 years', '5 - 10 years'];
                        new ej.dropdowns.DropDownList({
                            placeholder: 'Experience',
                            dataSource: experience
                        }, target);
                        break;
                    case 'C6':
                        var languages = ['JAVA', 'C#', 'SQL'];
                        new ej.dropdowns.MultiSelect({
                            showClearButton: false,
                            placeholder: 'Areas of Interest',
                            dataSource: languages
                        }, target);
                        break;
                    case 'C7':
                        new ej.inputs.TextBox({ placeholder: 'Mobile Number' }, target);
                        break;
                    case 'C8':
                        new ej.inputs.TextBox({ placeholder: 'Email' }, target);
                        break;
                    case 'C9':
                        new ej.inputs.TextBox({ placeholder: 'Address' }, target);
                        break;
                }
            }
        },
        created: function() {
            //Applies format to specified range
            spreadsheet.cellFormat({ fontWeight: 'bold' }, 'B2:B9');
            spreadsheet.cellFormat({ verticalAlign: 'middle' }, 'B2:C9');
        },
        contextMenuBeforeOpen: function () {
            spreadsheet.enableContextMenuItems(['Duplicate'], false, false);
        }
    });
    // Render initialized Spreadsheet component.
    spreadsheet.appendTo('#spreadsheet');
};
