this.default = function () {
    var datepicker = new ej.calendars.DatePicker({
        format: 'dd-MMM-yy',
        value: new Date(),
        placeholder: 'Choose a date'
    });
    datepicker.appendTo('#datepicker');

    document.getElementById('dateFormats').addEventListener('change', changeLocale);

    function changeLocale() {
        var dateFormat = (document.getElementById('dateFormats')).value;
        datepicker.format = dateFormat;
        datepicker.dataBind();
    }
};