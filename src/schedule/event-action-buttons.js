this.default = function () {
    var instance = new ej.base.Internationalization();
    window.getTimeString = function (value) {
        return instance.formatDate(value, { format: 'HH:mm' });
    };

    var data = new ej.base.extend([], window.actionEventData, null, true);

    var scheduleObj;

    var eventTemplate = function (data) {
        return '<div class="custom-event">' +
                    '<div class="event-subject">' +
                        '<span class="event-title">' + data.Subject + '</span>' +
                    '</div>' +
                    '<div class="event-actions">' +
                        '<button class="icon-btn edit-btn">' +
                            '<span class="e-icons e-edit"></span>' +
                        '</button>' +
                        '<button class="icon-btn delete-btn">' +
                            '<span class="e-icons e-trash"></span>' +
                        '</button>' +
                    '</div>' +
                '</div>' +
                '<div class="event-time">Time: ' + window.getTimeString(new Date(data.StartTime)) + ' - ' + window.getTimeString(new Date(data.EndTime)) + '</div>';
    };

    function onPopupOpen(args) {
        if (args.type === 'QuickInfo' && args.data && args.data.Id && args.data.Id > 0) {
            args.cancel = true;
        }

        if (args.type !== 'Editor') return;
        var dialog = args.element.closest('.e-dialog');
        if (dialog) {
            var elementsToHide = dialog.querySelectorAll('.e-repeat-parent-row, .e-recurrenceeditor');
            elementsToHide.forEach(function (el) {
                el.style.display = 'none';
            });
        }
    }

    function onEventRendered(args) {
        var currentView = scheduleObj.currentView;
        window.applyCategoryColor(args, currentView);

        var eventData = args.data;
        var editBtn = args.element.querySelector('.edit-btn');
        var deleteBtn = args.element.querySelector('.delete-btn');

        if (editBtn) {
            editBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                scheduleObj.openEditor(eventData, 'Save');
            });
        }

        if (deleteBtn) {
            deleteBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                scheduleObj.deleteEvent(eventData);
            });
        }
    }

    scheduleObj = new ej.schedule.Schedule({
        cssClass: 'event-action-buttons',
        width: '100%',
        height: '650px',
        selectedDate: new Date(new Date().getFullYear(), 0, 16),
        views: ['Day', 'Week'],
        eventSettings: {
            dataSource: data,
            template: eventTemplate
        },
        eventRendered: onEventRendered,
        popupOpen: onPopupOpen
    });

    scheduleObj.appendTo('#Schedule');
};
