this.default = function () {
    var ownerData = generateResourceData(1, 300, 'Resource');
    var eventData = generateStaticEvents(new Date(2018, 4, 1), 300, 12);
    var scheduleObj = new ej.schedule.Schedule({
        height: '650px',
        width: '100%',
        currentView: 'TimelineMonth',
        views: [{
            option: 'TimelineMonth',
            eventTemplate: '#timeline-event-template',
            allowVirtualScrolling: true
        }],
        group: {
            byGroupID: false,
            resources: ['Resources']
        },
        resources: [{
            field: 'ResourceId',
            title: 'Resource',
            name: 'Resources',
            allowMultiple: true,
            dataSource: ownerData,
            textField: 'Text',
            idField: 'Id',
            colorField: 'Color'
        }],
        selectedDate: new Date(2018, 4, 1),
        eventSettings: {
            dataSource: eventData
        }
    });
    scheduleObj.appendTo('#Schedule');

    //custom code start
    function generateStaticEvents(start, resCount, overlapCount) {
        var data = [];
        var id = 1;
        for (var i = 0; i < resCount; i++) {
            var randomCollection = [];
            var random = 0;
            for (var j = 0; j < overlapCount; j++) {
                random = Math.floor(Math.random() * (30));
                random = (random === 0) ? 1 : random;
                if (randomCollection.indexOf(random) !== -1 || randomCollection.indexOf(random + 2) !== -1 ||
                    randomCollection.indexOf(random - 2) !== -1) {
                    random += (Math.max.apply(null, randomCollection) + 10);
                }
                for (var k = 1; k <= 2; k++) {
                    randomCollection.push(random + k);
                }
                var startDate = new Date(start.getFullYear(), start.getMonth(), random);
                startDate = new Date(startDate.getTime() + (((random % 10) * 10) * (1000 * 60)));
                var endDate = new Date(startDate.getTime() + ((1440 + 30) * (1000 * 60)));
                data.push({
                    Id: id,
                    Subject: 'Event #' + id,
                    StartTime: startDate,
                    EndTime: endDate,
                    IsAllDay: (id % 10) ? false : true,
                    ResourceId: i + 1
                });
                id++;
            }
        }
        return data;
    }

    function generateResourceData(startId, endId, text) {
        var data = [];
        var colors = [
            '#ff8787', '#9775fa', '#748ffc', '#3bc9db', '#69db7c',
            '#fdd835', '#748ffc', '#9775fa', '#df5286', '#7fa900',
            '#fec200', '#5978ee', '#00bdae', '#ea80fc'
        ];
        for (var a = startId; a <= endId; a++) {
            var n = Math.floor(Math.random() * colors.length);
            data.push({
                Id: a,
                Text: text + ' ' + a,
                Color: colors[n]
            });
        }
        return data;
    }
    //custom code end
};
