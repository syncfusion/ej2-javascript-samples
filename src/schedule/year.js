this.default = function () {
    var scheduleObj = new ej.schedule.Schedule({
        cssClass: 'year-view',
        width: '100%', height: '555px',
        views: [
            { option: 'Year', isSelected: true },
            { option: 'TimelineYear', displayName: 'Horizontal Timeline Year' },
            {
                option: 'TimelineYear', displayName: 'Vertical Timeline Year',
                orientation: 'Vertical', group: { resources: ['Categories'] }
            }
        ],
        firstMonthOfYear: 0,
        monthsCount: 12,
        resources: [{
            field: 'TaskId', title: 'Category', name: 'Categories', allowMultiple: true,
            dataSource: [
                { text: 'Nancy', id: 1, color: '#df5286' },
                { text: 'Steven', id: 2, color: '#7fa900' },
                { text: 'Robert', id: 3, color: '#ea7a57' },
                { text: 'Smith', id: 4, color: '#5978ee' },
                { text: 'Michael', id: 5, color: '#df5286' }
            ],
            textField: 'text', idField: 'id', colorField: 'color'
        }],
        eventSettings: { dataSource: generateEvents() },
        eventRendered: function (args) {
            var eventColor = args.data.EventColor;
            if (!args.element || !eventColor) {
                return;
            } else {
                args.element.style.backgroundColor = eventColor;
            }
        }
    });
    scheduleObj.appendTo('#Schedule');


    function generateEvents() {
        var count = 250;
        var date = new Date();
        var names = [
            'Bering Sea Gold', 'Technology', 'Maintenance', 'Meeting', 'Travelling', 'Annual Conference', 'Birthday Celebration',
            'Farewell Celebration', 'Wedding Anniversary', 'Alaska: The Last Frontier', 'Deadliest Catch', 'Sports Day',
            'MoonShiners', 'Close Encounters', 'HighWay Thru Hell', 'Daily Planet', 'Cash Cab', 'Basketball Practice',
            'Rugby Match', 'Guitar Class', 'Music Lessons', 'Doctor checkup', 'Brazil - Mexico', 'Opening ceremony', 'Final presentation'
        ];
        var colors = [
            '#ff8787', '#9775fa', '#748ffc', '#3bc9db', '#69db7c',
            '#fdd835', '#748ffc', '#9775fa', '#df5286', '#7fa900',
            '#fec200', '#5978ee', '#00bdae', '#ea80fc'
        ];
        var startDate = new Date(date.getFullYear() - 2, 0, 1);
        var endDate = new Date(date.getFullYear() + 2, 11, 31);
        var dateCollections = [];
        for (var a = 0, id = 1; a < count; a++) {
            var start = new Date(Math.random() * (endDate.getTime() - startDate.getTime()) + startDate.getTime());
            var end = new Date(new Date(start.getTime()).setHours(start.getHours() + 1));
            var nCount = Math.floor(Math.random() * names.length);
            var n = Math.floor(Math.random() * colors.length);
            dateCollections.push({
                Id: id,
                Subject: names[nCount],
                StartTime: new Date(start.getTime()),
                EndTime: new Date(end.getTime()),
                IsAllDay: (id % 10) ? true : false,
                EventColor: colors[n],
                TaskId: (id % 5) + 1
            });
            id++;
        }
        return dateCollections;
    }

    var months = [
        { text: 'January', value: 0 },
        { text: 'February', value: 1 },
        { text: 'March', value: 2 },
        { text: 'April', value: 3 },
        { text: 'May', value: 4 },
        { text: 'June', value: 5 },
        { text: 'July', value: 6 },
        { text: 'August', value: 7 },
        { text: 'September', value: 8 },
        { text: 'October', value: 9 },
        { text: 'November', value: 10 },
        { text: 'December', value: 11 }
    ];
    var firstMonthObj = new ej.dropdowns.DropDownList({
        placeholder: "First month of year",
        floatLabelType: "Always",
        dataSource: months,
        popupHeight: '200px',
        fields: { text: 'text', value: 'value' },
        value: 0,
        change: firstMonthOfYear
    });
    firstMonthObj.appendTo('#firstMonthElement');

    var numberOfMonthsObj = new ej.inputs.NumericTextBox({
        placeholder: "Number of months",
        floatLabelType: "Always",
        min: 1,
        value: 12,
        max: 24,
        format: '###.##',
        change: numberOfMonths
    });
    numberOfMonthsObj.appendTo('#numberOfMonthsElement');

    function firstMonthOfYear(args) {
        scheduleObj.firstMonthOfYear = args.value;
    }

    function numberOfMonths(args) {
        scheduleObj.monthsCount = args.value;
    }
   
};