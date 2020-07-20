this.default = function () {
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%', height: '555px',
        views: [
            { option: 'Year' },
            { option: 'TimelineYear', displayName: 'Horizontal Timeline Year', isSelected: true },
            {
                option: 'TimelineYear', displayName: 'Vertical Timeline Year',
                orientation: 'Vertical', group: { resources: ['Categories'] }
            }
        ],
        resources: [{
            field: 'TaskId', title: 'Category', name: 'Categories', allowMultiple: true,
            dataSource: [
                { text: 'Nancy', id: 1, color: '#df5286' },
                { text: 'Steven', id: 2, color: '#7fa900' },
                { text: 'Robert', id: 3, color: '#ea7a57' },
                { text: 'Smith', id: 4, color: '#5978ee' },
                { text: 'Micheal', id: 5, color: '#df5286' }
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

    //custom code start
    function generateEvents() {
        var count = 250;
        var date = new Date();
        var names = [
            'Bering Sea Gold', 'Technology', 'Maintenance', 'Meeting', 'Travelling', 'Annual Conference', 'Birthday Celebration',
            'Farewell Celebration', 'Wedding Aniversary', 'Alaska: The Last Frontier', 'Deadest Catch', 'Sports Day',
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
    // custom code end
};