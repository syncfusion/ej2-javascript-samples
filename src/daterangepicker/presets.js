this.default = function () {
    var daterangepicker = new ej.calendars.DateRangePicker({
        placeholder: 'Select a range',
        presets: [
            { label: 'This Week', start: new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)),
			end: new Date(new Date().setDate(new Date(new Date().setDate((new Date().getDate() - (new Date().getDay() + 7) % 7)) + 6).getDate() + 6)) },
            { label: 'Last Week', start: new Date(new Date().setDate(new Date().getDate() - 6)), end: new Date() },
            { label: 'This Month', start: new Date(new Date().setDate(1)), end: new Date() },
            { label: 'Last Month', start: new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).setDate(1)), end: new Date() }
        ]
    });
    daterangepicker.appendTo('#daterangepicker');
};