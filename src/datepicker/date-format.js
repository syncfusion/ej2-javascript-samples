this.default = function () {
    var datepicker = new ej.calendars.DatePicker({
        format: 'dd-MMM-yy',
        value: new Date(),
        inputFormats: ['dd/MM/yyyy', 'yyyyMMdd']
    });
    datepicker.appendTo('#datepicker');

    var dropDownInstance = new ej.dropdowns.DropDownList({
        placeholder: 'Select a format',
        value: 'format1',
        dataSource: [
            { Id: 'format1', Text: 'dd-MMM-yy' },
            { Id: 'format2', Text: 'yyyy-MM-dd' },
            { Id: 'format3', Text: 'dd-MMMM-yyyy' }
        ],
        fields: { text: 'Text', value: 'Id' },
        change: function (args) {
            datepicker.format = args.itemData.Text;
        }
    });
    dropDownInstance.appendTo('#displayFormatDatePicker');

    var multiSelectDatePicker = new ej.dropdowns.MultiSelect({
        placeholder: 'e.g. MM/dd/yyyy',
        value: ['dd/MM/yyyy', 'yyyyMMdd'],
        dataSource: [
            'dd/MM/yyyy', 'ddMMMyy', 'yyyyMMdd', 'dd.MM.yy', 'MM/dd/yyyy', 'yyyy/MMM/dd', 'dd-MM-yyyy'
        ],
        mode: 'CheckBox',
        showSelectAll: true,
        change: function (args) {
            datepicker.inputFormats = args.value;
        }
    });
    multiSelectDatePicker.appendTo('#inputFormatsDatePicker');
};