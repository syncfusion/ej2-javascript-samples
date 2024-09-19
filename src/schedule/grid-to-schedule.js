this.default = function () {
    
    window.getName = function (value) {
        return value.resourceData[value.resource.textField];
    };

    var data = new ej.base.extend([], window.resourceData.concat(window.timelineResourceData), null, true);

    var resourceData = [
        { text: 'Nancy', id: 1, color: '#df5286' },
        { text: 'Steven', id: 2, color: '#7fa900' },
        { text: 'Robert', id: 3, color: '#ea7a57' },
        { text: 'Smith', id: 4, color: '#5978ee' },
        { text: 'Michael', id: 5, color: '#00bdae' },
        { text: 'Root', id: 6, color: '#f57b42' },
        { text: 'John', id: 7, color: '#1aaa55' },
        { text: 'Stellah', id: 8, color: '#ffb74d' },
        { text: 'Chirish', id: 9, color: '#7460ee' },
        { text: 'Megan', id: 10, color: '#c0ca33' },
    ];

    var gridData = [
        { Task: 'Test report validation', Duration: '3 Hours' },
        { Task: 'Timeline estimation', Duration: '4 Hours' },
        { Task: 'Workflow Analysis', Duration: '2 Hours' },
        { Task: 'Quality Analysis', Duration: '5 Hours' },
        { Task: 'Cross-browser testing', Duration: '1 Hour' },
        { Task: 'Resolution-based testing', Duration: '3 Hours' },
        { Task: 'Project Preview', Duration: '6 Hours' },
        { Task: 'Developers Meeting', Duration: '2 Hours' },
        { Task: 'Test case correction', Duration: '7 Hours' },
        { Task: 'Debugging', Duration: '4 Hours' },
        { Task: 'Exception handling', Duration: '5 Hours' },
        { Task: 'Bug fixing', Duration: '1 Hour' },
        { Task: 'Bug Automation', Duration: '3 Hours' },
        { Task: 'Bug fixing', Duration: '6 Hours' },
    ];

    function calculateEventDuration(startTime, endTime) {
        var durationInMilliseconds = endTime - startTime;
        var durationInHours = durationInMilliseconds / (1000 * 60 * 60);
        return Math.floor(durationInHours) + ' Hours';
    }

    function handleDragStop(args, scheduleObj, gridObj) {
        if (ej.base.closest(args.event.target, '#Grid')) {
            scheduleObj.deleteEvent(args.data.Id);
            var startTime = new Date(args.data.StartTime);
            var endTime = new Date(args.data.EndTime);
            var formattedDuration = calculateEventDuration(startTime, endTime);
            var gridRecord = { Task: args.data.Subject, Duration: formattedDuration };
            gridObj.addRecord(gridRecord);
        }
    }

    var scheduleObj = new ej.schedule.Schedule({
        cssClass: 'grid-schedule',
        width: '100%',
        height: '100%',
        eventDragArea: '.content-wrapper',
        selectedDate: new Date(2023, 0, 4),
        rowAutoHeight: true,
        currentView: 'TimelineDay',
        timeScale: { slotCount: 1, interval: 60 },
        views: [{ option: 'TimelineDay' }],
        group: { enableCompactView: false, resources: ['Names'] },
        resources: [
            {
                field: 'TaskId',
                title: 'Name',
                name: 'Names',
                dataSource: resourceData,
                textField: 'text',
                idField: 'id',
                colorField: 'color',
            },
        ],
        eventSettings: { dataSource: data },
        dragStop: function (args) {
            handleDragStop(args, scheduleObj, gridObj);
        },
        dataBound: function () {
            var resourceDataCounter = 0;
            var resourceCells = scheduleObj.element.querySelectorAll('.e-resource-cells .e-resource-text');
            for (var i = 0; i < resourceCells.length; i++) {
                var cell = resourceCells[i];
                var workcells = scheduleObj.element.querySelector('.e-work-cells');
                if (!workcells) continue;
                var timestamp = Number(workcells.getAttribute('data-date'));
                var startDate = new Date(timestamp);
                var endDate = new Date(startDate);
                endDate.setDate(startDate.getDate() + 1);
                var events = scheduleObj.getEvents(startDate, endDate, true);
                if (resourceDataCounter < scheduleObj.resourceCollection[0].dataSource.length) {
                    resourceDataCounter++;
                }
                var resourceEvents = [];
                for (var j = 0; j < events.length; j++) {
                    if (events[j].TaskId === resourceDataCounter) {
                        resourceEvents.push(events[j]);
                    }
                }
                var currentText = cell.innerText;
                var eventCount = resourceEvents.length;
                var resourceName = currentText.split('(')[0].trim();
                cell.innerText = resourceName + ' (' + eventCount + ')';
            }
        },
    });
    scheduleObj.appendTo('#Schedule');

    var gridObj = new ej.grids.Grid({
        dataSource: gridData,
        cssClass: 'drag-grid',
        width: '280px',
        height: '100%',
        allowRowDragAndDrop: true,
        columns: [
            { field: 'Task', headerText: 'Task', width: 50 },
            { field: 'Duration', headerText: 'Duration', width: 30 },
        ],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        rowDropSettings: { targetID: 'Schedule' },
        rowDrag: function (args) {
            args.cancel = true;
        },
        rowDrop: function (args) {
            args.cancel = true;
            var scheduleElement = ej.base.closest(args.target, '.e-content-wrap');
            if (scheduleElement && args.target.classList.contains('e-work-cells')) {
                var cellData = scheduleObj.getCellDetails(args.target);
                var resourceDetails = scheduleObj.getResourcesByIndex(cellData.groupIndex);
                var durationStr = args.data[0].Duration;
                var durationHours = parseInt(durationStr.split(' ')[0], 10);
                var startTime = new Date(cellData.startTime);
                var endTime = new Date(startTime.getTime() + durationHours * 60 * 60 * 1000);
                var eventData = {
                    Id: scheduleObj.getEventMaxID(),
                    Subject: args.data[0].Task,
                    StartTime: startTime,
                    EndTime: endTime,
                    IsAllDay: cellData.isAllDay,
                    TaskId: resourceDetails.resourceData.id,
                };
                scheduleObj.addEvent(eventData);
                gridObj.deleteRecord(args.data[0]);
            }
        },
        dataBound: function () {
            if (scheduleObj) {
                var selectedCells = scheduleObj.element.querySelectorAll('.e-selected-cell');
                for (var i = 0; i < selectedCells.length; i++) {
                    selectedCells[i].classList.remove('e-selected-cell');
                }
            }
        }
    });
    gridObj.appendTo('#Grid');
};
