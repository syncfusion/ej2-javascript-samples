this.default = function () {
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        cssClass: 'horizontal-grouping',
        selectedDate: new Date(2021, 3, 6),
        views: ['Week', 'Month', 'Agenda'],
        resourceHeaderTemplate: '#restemplate',
        group: {
            resources: ['Airlines']
        },
        resources: [{
            field: 'AirlineId', title: 'Airline Name',
            name: 'Airlines', allowMultiple: true,
            dataSource: [
                { AirlineName: 'Airways 1', AirlineId: 1, AirlineColor: '#EA7A57' },
                { AirlineName: 'Airways 2', AirlineId: 2, AirlineColor: '#357cd2' },
                { AirlineName: 'Airways 3', AirlineId: 3, AirlineColor: '#7fa900' }
            ],
            textField: 'AirlineName', idField: 'AirlineId', colorField: 'AirlineColor'
        }],
        eventSettings: {
            dataSource: generateEvents(),
            fields: {
                subject: { title: 'Travel Summary', name: 'Subject' },
                location: { title: 'Source', name: 'Location' },
                description: { title: 'Comments', name: 'Description' },
                startTime: { title: 'Departure Time', name: 'StartTime' },
                endTime: { title: 'Arrival Time', name: 'EndTime' }
            }
        }
    });
    scheduleObj.appendTo('#Schedule');

    window.getAirlineImage = function (value) {
        var airlineName = window.getAirlineName(value);
        return airlineName.replace(' ', '-').toLowerCase();
    };
    window.getAirlineName = function (value) {
        return (value.resourceData) ? value.resourceData[value.resource.textField] : value.resourceName;
    };
    window.getAirlineModel = function (value) {
        var airlineName = window.getAirlineName(value);
        return (airlineName === 'Airways 1') ? 'CRJ 700' : (airlineName === 'Airways 2') ? 'Airbus A330' : 'ATR 72-600';
    };
    window.getAirlineSeats = function (value) {
        var airlineName = window.getAirlineName(value);
        return (airlineName === 'Airways 1') ? 50 : (airlineName === 'Airways 2') ? 75 : 100;
    };

    function generateEvents() {
        var subjectCollection = ['Barcelona to Los Angeles', 'Los Angeles to Barcelona'];
        var collections = [];
        var dataCollections = [1, 2, 3];
        var id = 1;
        for (var i = 0; i < dataCollections.length; i++) {
            var startDate = new Date(2021, 3, 1);
            startDate.setMilliseconds(1000 * 60 * 60 * 0.5 * (dataCollections[i] - 1));
            var lastDate = new Date((+startDate) + (1000 * 60 * 60 * 24 * 30));
            for (var date = startDate; date.getTime() < lastDate.getTime(); date = new Date(date.getTime() + (1000 * 60 * 60 * 5))) {
                var strDate = new Date(+date);
                var endDate = new Date((+strDate) + (1000 * 60 * 60 * (2.5 + (0.5 * dataCollections[i]))));
                collections.push({
                    Id: id,
                    Subject: subjectCollection[id % 2],
                    StartTime: new Date(+strDate),
                    EndTime: new Date(+endDate),
                    AirlineId: dataCollections[i]
                });
                id += 1;
            }
        }
        return collections;
    }
};