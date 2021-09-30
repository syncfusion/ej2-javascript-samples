this.default = function () {
    var data = new ej.base.extend([], window.eventsData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 1, 15),
        eventSettings: {
            dataSource: data
        },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        },
        popupOpen: function (args) {
            if (args.type === 'Editor') {
                // Create required custom elements in initial time
                if (!args.element.querySelector('.custom-field-row')) {
                    var row = new ej.base.createElement('div', { className: 'custom-field-row' });
                    var formElement = args.element.querySelector('.e-schedule-form');
                    formElement.firstChild.insertBefore(row, args.element.querySelector('.e-title-location-row'));
                    var container = new ej.base.createElement('div', { className: 'custom-field-container' });
                    var inputEle = new ej.base.createElement('input', {
                        className: 'e-field', attrs: { name: 'EventType' }
                    });
                    container.appendChild(inputEle);
                    row.appendChild(container);
                    var drowDownList = new ej.dropdowns.DropDownList({
                        dataSource: [
                            { text: 'Public Event', value: 'public-event' },
                            { text: 'Maintenance', value: 'maintenance' },
                            { text: 'Commercial Event', value: 'commercial-event' },
                            { text: 'Family Event', value: 'family-event' }
                        ],
                        fields: { text: 'text', value: 'value' },
                        value: args.EventType,
                        floatLabelType: 'Always', placeholder: 'Event Type'
                    });
                    drowDownList.appendTo(inputEle);
                    inputEle.setAttribute('name', 'EventType');
                }
            }
        }
    });
    scheduleObj.appendTo('#Schedule');
};