this.default = function () {
    var data = new ej.base.extend([], window.doctorsEventData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        views: ['Day', 'Week', 'WorkWeek', 'Month'],
        showQuickInfo: false,
        selectedDate: new Date(2021, 1, 15),
        eventSettings: {
            dataSource: data,
            fields: {
                startTime: { name: 'StartTime', validation: { required: true } },
                endTime: { name: 'EndTime', validation: { required: true } }
            }
        },
        editorTemplate: '#EventEditorTemplate',
        editorHeaderTemplate: '#EventEditorHeaderTemplate',
        popupOpen: function (args) {
            if (args.type === 'Editor') {
                var statusElement = args.element.querySelector('#EventType');
                if (!statusElement.classList.contains('e-dropdownlist')) {
                    var dropDownListObject = new ej.dropdowns.DropDownList({
                        placeholder: 'Select a status', value: statusElement.value,
                        dataSource: ['New', 'Requested', 'Confirmed']
                    });
                    dropDownListObject.appendTo(statusElement);
                    statusElement.setAttribute('name', 'EventType');
                }
                var startElement = args.element.querySelector('#StartTime');
                if (!startElement.classList.contains('e-datetimepicker')) {
                    new ej.calendars.DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement);
                }
                var endElement = args.element.querySelector('#EndTime');
                if (!endElement.classList.contains('e-datetimepicker')) {
                    new ej.calendars.DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement);
                }
            }
        },
        eventRendered: function (args) {
            switch (args.data.EventType) {
                case 'Requested':
                    (args.element).style.backgroundColor = '#F57F17';
                    break;
                case 'Confirmed':
                    (args.element).style.backgroundColor = '#7fa900';
                    break;
                case 'New':
                    (args.element).style.backgroundColor = '#8e24aa';
                    break;
            }
        },
        actionBegin: function (args) {
            if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
                var data;
                if (args.requestType === 'eventCreate') {
                    data = args.data[0];
                } else if (args.requestType === 'eventChange') {
                    data = args.data;
                }
                if (!scheduleObj.isSlotAvailable(data.StartTime, data.EndTime)) {
                    args.cancel = true;
                }
            }
        }
    });
    scheduleObj.appendTo('#Schedule');
};
