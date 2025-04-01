this.default = function () {
    var datetimepicker = new ej.calendars.DateTimePicker({
        format: 'dd-MMM-yy hh:mm a',
        value: new Date(),
        inputFormats: ['dd/MM/yyyy hh:mm a', 'yyyyMMdd HH:mm']
    });
    datetimepicker.appendTo('#datetimepicker');

    var dropDownInstance = new ej.dropdowns.DropDownList({
        placeholder: 'Select a format',
        value: 'format1',
        dataSource: [
            { Id: 'format1', Text: 'dd-MMM-yy hh:mm a' },
            { Id: 'format2', Text: 'yyyy-MM-dd HH:mm' },
            { Id: 'format3', Text: 'dd-MMMM HH:mm' }
        ],
        fields: { text: 'Text', value: 'Id' },
        change: function (args) {
            datetimepicker.format = args.itemData.Text;
        }
    });
    dropDownInstance.appendTo('#datetimeformats');

    var multiSelectDateTimePicker = new ej.dropdowns.MultiSelect({
        placeholder: 'e.g. MM/dd/yyyy hh:mm a',
        value: ['dd/MM/yyyy hh:mm a', 'yyyyMMdd HH:mm'],
        dataSource: [
            'dd/MM/yyyy hh:mm a', 'ddMMMyy hh:mm a', 'yyyyMMdd HH:mm', 'dd.MM.yy HH:mm',
            'MM/dd/yyyy hh:mm a', 'yyyy/MMM/dd HH:mm', 'dd-MM-yyyy HH:mm'
        ],
        mode: 'CheckBox',
        showSelectAll: true,
        change: function (args) {
            datetimepicker.inputFormats = args.value;
        }
    });
    multiSelectDateTimePicker.appendTo('#inputFormatsDateTimePicker');
};