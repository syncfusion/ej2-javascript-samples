this.default = function () {
    var daterangepicker = new ej.calendars.DateRangePicker({
        presets: [
            { label: 'This Week', start: new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)).toDateString()),
			end: new Date(new Date(new Date().setDate(new Date(new Date().setDate((new Date().getDate() - (new Date().getDay() + 7) % 7)) + 6).getDate() + 6)).toDateString()) },
            { label: 'Last Week', start: new Date(new Date(new Date().setDate(new Date().getDate() - 6)).toDateString()), end: new Date(new Date().toDateString()) },
            { label: 'This Month', start: new Date(new Date(new Date().setDate(1)).toDateString()), end: new Date(new Date().toDateString()) },
            { label: 'Last Month', start: new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).setDate(1)).toDateString()), end:new Date(new Date().toDateString()) }
        ]
    });
    daterangepicker.appendTo('#daterangepicker');
};