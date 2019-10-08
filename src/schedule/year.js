this.default = function () {
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '555px',
        views: [{
            option: 'TimelineYear',
            displayName: 'Horizontal Year'
        }],
        eventSettings: {
            dataSource: generateEvents()
        },
        eventRendered: function (args) {
            return applyEventColor(args);
        }
    });
    scheduleObj.appendTo('#Schedule');
    var dropDownListObject = new ej.dropdowns.DropDownList({
        popupWidth: 180,
        change: function (args) {
            scheduleObj.views = [{
                option: 'TimelineYear',
                orientation: args.value
            }];
            scheduleObj.dataBind();
        }
    });
    dropDownListObject.appendTo('#year-orientation');

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
                EventColor: colors[n]
            });
            id++;
        }
        return dateCollections;
    }

    function applyEventColor(args) {
        var eventColor = args.data.EventColor;
        if (!args.element || !eventColor) {
            return;
        } else {
            args.element.style.backgroundColor = eventColor;
        }
    }
    //custom code end
};