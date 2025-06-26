this.default = function () {
    var daterangepicker = new ej.calendars.DateRangePicker({
        format: "dd'/'MMM'/'yy hh:mm a",// custom format 
        startDate: new Date(new Date().setDate(1)),
        endDate: new Date(new Date().setDate(20)),
        inputFormats: ['dd/MM/yyyy', 'yyyyMMdd']
    });
    daterangepicker.appendTo('#daterangepicker');

    var multiSelect = new ej.dropdowns.MultiSelect({
        placeholder: 'e.g. MM/dd/yyyy',
        value: ['dd/MM/yyyy', 'yyyyMMdd'],
        dataSource: [
            'dd/MM/yyyy', 'ddMMMyy', 'yyyyMMdd', 'dd.MM.yy', 'MM/dd/yyyy', 'yyyy/MMM/dd', 'dd-MM-yyyy'
        ],
        mode: 'CheckBox',
        showSelectAll: true,
        allowFiltering:false,
        change: function(args) {
            daterangepicker.inputFormats = args.value;
        }
    });
    multiSelect.appendTo('#inputFormatsDatePicker');

    var dropdown = new ej.dropdowns.DropDownList({
        value: 'format1',
        placeholder: 'Select a format',
        dataSource: [
            { Id: 'format1', Text: 'dd/MMM/yy hh:mm a' },
            { Id: 'format2', Text: 'yyyy-MM-dd' },
            { Id: 'format3', Text: 'dd-MMMM-yyyy' },
            { Id: 'format4', Text: 'yyyy/MM/dd HH:mm' }
        ],
        fields: { text: 'Text', value: 'Id' },
        change: function (args) {
            daterangepicker.format = args.itemData.Text;
            daterangepicker.separator = (args.itemData.Text === 'yyyy/MM/dd HH:mm') ? 'to' : '-';
        }
    });
    dropdown.appendTo('#displayFormatDatePicker');
};