this.default = function () {
    var data = new ej.base.extend([], window.scheduleData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        selectedDate: new Date(2021, 0, 10),
        eventSettings: { dataSource: data }
    });
    scheduleObj.appendTo('#schedule');

    ej.inputs.Input.createInput({
        element: document.getElementById('events-search'),
        properties: { placeholder: 'Enter the Search text' }
    });

    ej.inputs.Input.createInput({
        element: document.getElementById('searchEventName'),
        properties: { placeholder: 'Subject' }
    });

    ej.inputs.Input.createInput({
        element: document.getElementById('searchEventLocation'),
        properties: { placeholder: 'Location' }
    });

    var startScheduleDate = new ej.calendars.DatePicker({ value: null, showClearButton: false, placeholder: 'Start Date' });
    startScheduleDate.appendTo('#startScheduleDate');

    var endScheduleDate = new ej.calendars.DatePicker({ value: null, showClearButton: false, placeholder: 'End Date' });
    endScheduleDate.appendTo('#endScheduleDate');

    var searchButton = new ej.buttons.Button();
    searchButton.appendTo('#seperateSearch');
    document.getElementById('seperateSearch').onclick = function () {
        var searchObj = [];
        var startDate;
        var endDate;
        var formElements = [].slice.call(document.querySelectorAll('.event-search .search-field'));
        formElements.forEach(function (node) {
            var fieldOperator;
            var predicateCondition;
            var fieldValue;
            var fieldInstance;
            if (node.value && node.value !== '' && !node.classList.contains('e-datepicker')) {
                fieldOperator = 'contains';
                predicateCondition = 'or';
                fieldValue = node.value;
                searchObj.push({
                    field: node.name, operator: fieldOperator, value: fieldValue, predicate: predicateCondition,
                    matchcase: true
                });
            }
            if (node.classList.contains('e-datepicker') && ((node)).ej2_instances[0].value) {
                fieldInstance = ((node)).ej2_instances[0];
                fieldValue = fieldInstance.value;
                if (node.classList.contains('e-start-time')) {
                    fieldOperator = 'greaterthanorequal';
                    predicateCondition = 'and';
                    startDate = new Date(+fieldValue);
                } else {
                    fieldOperator = 'lessthanorequal';
                    predicateCondition = 'and';
                    var date = new Date(+fieldInstance.value);
                    fieldValue = new Date(date.setDate(date.getDate() + 1));
                    endDate = fieldValue;
                }
                searchObj.push({
                    field: node.name, operator: fieldOperator, value: fieldValue, predicate: predicateCondition,
                    matchcase: false
                });
            }
        });
        if (searchObj.length > 0) {
            var filterCondition = searchObj[0];
            var predicate = new ej.data.Predicate(
                filterCondition.field, filterCondition.operator, filterCondition.value, filterCondition.matchcase);
            for (var i = 1; i < searchObj.length; i++) {
                predicate = predicate.and(searchObj[i].field, searchObj[i].operator, searchObj[i].value, searchObj[i].matchcase);
            }
            var result = new ej.data.DataManager(scheduleObj.getEvents(startDate, endDate, true)).
                executeLocal(new ej.data.Query().where(predicate));
            showSearchEvents('show', result);
        } else {
            showSearchEvents('hide');
        }
    };

    var clearButton = new ej.buttons.Button();
    clearButton.appendTo('#clear');
    document.getElementById('clear').onclick = function () {
        document.getElementById('schedule').style.display = 'block';
        document.getElementById('form-search').reset();
        showSearchEvents('hide');
    };

    document.getElementById('events-search').onkeyup = function (args) {
        var searchString = (args.target).value;
        if (searchString !== '') {
            new ej.data.DataManager(scheduleObj.getEvents(null, null, true)).executeQuery(new ej.data.Query().
                search(searchString, ['Subject', 'Location', 'Description'], null, true, true)).then(function (e) {
                    if ((e.result).length > 0) {
                        showSearchEvents('show', e.result);
                    } else {
                        showSearchEvents('hide');
                    }
                });
        } else {
            showSearchEvents('hide');
        }
    };

    function showSearchEvents(type, data) {
        if (type === 'show') {
            if (document.getElementById('grid').classList.contains('e-grid')) {
                var gridObj = document.querySelector('#grid').ej2_instances[0];
                gridObj.dataSource = data;
                gridObj.dataBind();
            } else {
                var grid = new ej.grids.Grid({
                    dataSource: data,
                    height: 505,
                    width: 'auto',
                    columns: [
                        { field: 'Subject', headerText: 'Subject', width: 120 },
                        { field: 'Location', headerText: 'Location', width: 120 },
                        { field: 'StartTime', headerText: 'StartTime', width: 120, format: { type: 'dateTime', format: 'M/d/y hh:mm a' } },
                        { field: 'EndTime', headerText: 'EndTime', width: 120, format: { type: 'dateTime', format: 'M/d/y hh:mm a' } },
                    ]
                });
                grid.appendTo(document.querySelector('#grid'));
                scheduleObj.element.style.display = 'none';
            }
        } else {
            var resultGridObj = (document.querySelector('#grid')).ej2_instances;
            if (resultGridObj && resultGridObj.length > 0 && !resultGridObj[0].isDestroyed) {
                resultGridObj[0].destroy();
            }
            scheduleObj.element.style.display = 'block';
        }
    }
};