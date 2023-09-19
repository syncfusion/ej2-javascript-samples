this.default = function () {
    var ownerData = window.generateResourceData(1, 300, 'Resource');
    var eventData = generateStaticEvents(new Date(2021, 4, 1), 300, 12);
    var scheduleObj = new ej.schedule.Schedule({
        height: '650px',
        width: '100%',
        currentView: 'TimelineMonth',
        cssClass:'virtual-scroll',
        views: [{
            option: 'TimelineMonth',
            eventTemplate: '#timeline-event-template',
            allowVirtualScrolling: true
        },
        { 
            option: 'Month',
            eventTemplate: '#timeline-event-template',
            allowVirtualScrolling: true 
        }
        ],
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
        selectedDate: new Date(2021, 4, 1),
        eventSettings: {
            dataSource: eventData
        }
    });
    scheduleObj.appendTo('#Schedule');

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
};
