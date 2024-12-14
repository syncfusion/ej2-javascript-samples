this.default = function () {
    var dManager = [];
    var initialLoad = true;
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 3, 1),
        views: ['Month'],
        readonly: true,
        resources: [{
            field: 'AirlineId',
            title: 'Airline',
            name: 'Airlines',
            allowMultiple: true,
            dataSource: [
                { text: 'Airways 1', id: 1 },
                { text: 'Airways 2', id: 2 },
                { text: 'Airways 3', id: 3 }
            ],
            textField: 'text', idField: 'id'
        }],
        eventSettings: {
            template: '#event-template',
            enableTooltip: true,
            tooltipTemplate: '#tooltip-template'
        },
        actionBegin: function (args) {
            if (args.requestType === 'toolbarItemRendering') {
                args.items[2].align = 'Center';
                args.items[2].suffixIcon = '';
                args.items = args.items.splice(2, 1);
            }
        },
        dataBinding: function (args) {
            if (initialLoad) {
                scheduleObj.eventSettings.dataSource = generateEvents(scheduleObj);
                initialLoad = false;
            }
        },
        dataBound: function () {
            var eventCollections = scheduleObj.getCurrentViewEvents();
            eventCollections.sort(function (a, b) {
                return ((a.Fare) - (b.Fare));
            });
            var indexDate = new Date(((eventCollections[0]).StartTime).getTime());
            indexDate.setHours(0, 0, 0, 0);
            var index = scheduleObj.getIndexOfDate(scheduleObj.activeView.renderDates, indexDate);
            var target = scheduleObj.element.querySelectorAll('.e-work-cells')[index];
            ej.base.addClass([target], 'best-price');
            target.appendChild(ej.base.createElement('div', { className: 'best-price', innerHTML: 'Best Price' }));
        },
        popupOpen: function (args) {
            args.cancel = true;
        }
    });
    window.getAirwaysName = function (value) {
        return (value === 1) ? 'Airways 1' : (value === 2) ? 'Airways 2' : 'Airways 3';
    };
    window.getAirwaysImage = function (value) {
        return (value === 1) ? 'airways-1' : (value === 2) ? 'airways-2' : 'airways-3';
    };
    window.getFormattedTime = function (date) {
        var instance = new ej.base.Internationalization();
        return instance.formatDate(date, { skeleton: 'Hm' });
    };

    scheduleObj.appendTo('#Schedule');

    new ej.buttons.CheckBox({ cssClass: 'e-resource e-airways-1', label: 'Airways 1', checked: true, change: onChange }, '#airways-1');
    new ej.buttons.CheckBox({ cssClass: 'e-resource e-airways-2', label: 'Airways 2', checked: true, change: onChange }, '#airways-2');
    new ej.buttons.CheckBox({ cssClass: 'e-resource e-airways-3', label: 'Airways 3', checked: true, change: onChange }, '#airways-3');

    function onChange(args) {
        var tdElement = scheduleObj.element.querySelector('.best-price:not(.e-work-cells)');
        if (tdElement) {
            ej.base.removeClass([ej.base.closest(tdElement, 'td')], 'best-price');
            ej.base.remove(tdElement);
        }
        var scheduleData = new ej.base.extend([], dManager, null, true);
        var selectedResource = [];
        var resourceCollection = [].slice.call(document.querySelectorAll('.e-resource'));
        resourceCollection.forEach(function (element, index) {
            var resEle = element.querySelector('.e-icons');
            if (resEle && resEle.classList.contains('e-check')) {
                selectedResource.push(index);
            }
        });
        var filteredData = [];
        var resources = scheduleObj.resourceBase.resourceCollection.slice(-1)[0].dataSource;
        var _loop_1 = function (resource) {
            var data = scheduleData.filter(function (event) { return resources[resource].id === event.AirlineId; });
            filteredData = filteredData.concat(data);
        };
        for (var _i = 0, selectedResource_1 = selectedResource; _i < selectedResource_1.length; _i++) {
            var resource = selectedResource_1[_i];
            _loop_1(resource);
        }
        filteredData = filterByFare(filteredData, scheduleObj);
        scheduleObj.eventSettings.dataSource = filteredData;
        scheduleObj.dataBind();
    }

    function filterByFare(appointments, scheduleObj) {
        appointments.sort(function (object1, object2) {
            var d1 = +(object1.StartTime);
            var d2 = +(object2.StartTime);
            var d3 = +(object1.EndTime);
            var d4 = +(object2.EndTime);
            return ((d1 - d2) || ((d4 - d2) - (d3 - d1)));
        });
        var renderDate = scheduleObj.activeView.getRenderDates();
        var finalData = [];
        for (var i = 0; i < renderDate.length; i++) {
            var date = renderDate[i];
            if (scheduleObj.selectedDate.getMonth() === date.getMonth()) {
                var strTime = new Date(+date);
                var endTime = new Date(new Date(strTime.getTime()).setHours(23, 59, 59, 59));
                var perDayData = scheduleObj.eventBase.filterEvents(strTime, endTime, appointments);
                if (perDayData.length > 0) {
                    perDayData.sort(function (a, b) { return ((a.Fare) - (b.Fare)); });
                    finalData.push(perDayData[0]);
                }
            }
        }
        return finalData;
    }

    function generateEvents(scheduleObj) {
        var collections = [];
        var dataCollections = [
            {
                Id: 100,
                StartTime: new Date(2021, 3, 1, 8, 30),
                EndTime: new Date(2021, 3, 1, 10, 0),
                AirlineId: 1
            }, {
                Id: 102,
                StartTime: new Date(2021, 3, 1, 11, 0),
                EndTime: new Date(2021, 3, 1, 12, 0),
                AirlineId: 2
            }, {
                Id: 103,
                StartTime: new Date(2021, 3, 1, 14, 0),
                EndTime: new Date(2021, 3, 1, 15, 0),
                AirlineId: 3
            }
        ];
        var start = new Date(2021, 3, 1);
        var dateCollections = Array.apply(null, { length: 30 })
            .map(function (value, index) { return new Date(start.getTime() + (1000 * 60 * 60 * 24 * index)); });
        var id = 1;
        var day = 0;
        for (var i = 0; i < dateCollections.length; i++) {
            var resource = 1;
            for (var j = 0; j < dataCollections.length; j++) {
                var strDate = new Date((dataCollections[j].StartTime).getTime());
                var endDate = new Date((dataCollections[j].EndTime).getTime());
                collections.push({
                    Id: id,
                    StartTime: new Date(strDate.setDate(strDate.getDate() + day)),
                    EndTime: new Date(endDate.setDate(endDate.getDate() + day)),
                    AirlineId: resource,
                    Fare: ((Math.random() * 500) + 100).toFixed(2)
                });
                resource += 1;
                id += 1;
            }
            day += 1;
        }
        dManager = new ej.base.extend([], collections, null, true);
        var filteredCollection = filterByFare(collections, scheduleObj);
        return filteredCollection;
    }
};