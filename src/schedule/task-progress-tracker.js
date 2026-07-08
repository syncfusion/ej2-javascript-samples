this.default = function () {
    var employeeData = [
        { Text: 'Sarah', Id: 1, Color: '#EF4444' },
        { Text: 'John', Id: 2, Color: '#10B981' },
        { Text: 'Emma', Id: 3, Color: '#3B82F6' },
        { Text: 'Michael', Id: 4, Color: '#F59E0B' },
        { Text: 'Lisa', Id: 5, Color: '#8B5CF6' },
        { Text: 'David', Id: 6, Color: '#EC4899' }
    ];

    var eventData = new ej.base.extend([], window.taskData, null, true);

    var STATUS_MAP = {
        'pending': { icon: 'e-clock', color: '#DC2626' },
        'in-progress': { icon: 'e-play', color: '#3B82F6' },
        'review': { icon: 'e-eye', color: '#F59E0B' },
        'done': { icon: 'e-check', color: '#10B981' }
    };

    var eventTemplate = function (data) {
        var config = STATUS_MAP[data.Status] || STATUS_MAP.pending;
        var progressText = (data.Progress || 0) + '%';
        var statusLabel = data.Status || 'pending';

        return [
            '<div class="custom-event" style="--status-color: ', config.color, ';" title="', (data.Subject || 'Task'), '">',

                '<div class="event-header">',
                    '<div class="event-subject">', (data.Subject || 'Task'), '</div>',
                    '<div class="event-progress-percent">', progressText, '</div>',
                '</div>',

                '<div class="event-footer">',
                    '<div class="label-wrapper">',
                        '<span class="e-icons ', config.icon, ' status-icon";"></span>',
                        '<span class="status-label">', statusLabel, '</span>',
                    '</div>',
                '</div>',

            '</div>'
        ].join('');
    };

    function onPopupOpen(args) {
        if (args.type !== 'Editor') return;

        var dialog = args.element.closest('.e-dialog');
        if (dialog) {
            var elementsToHide = dialog.querySelectorAll('.e-repeat-parent-row, .e-recurrenceeditor');
            elementsToHide.forEach(function (el) {
                el.style.display = 'none';
            });
        }

        var form = args.element.querySelector('.e-schedule-form');
        if (!form) return;

        var existingCustomFields = form.querySelector('.custom-fields');
        if (existingCustomFields) {
            existingCustomFields.remove();
        }

        var container = document.createElement('div');
        container.className = 'custom-fields';

        container.innerHTML = [
            '<div class="e-field-group e-custom-row">',
                '<input id="statusDropdown" name="Status" type="text" class="e-field" />',
            '</div>',

            '<div class="e-field-group e-custom-row">',
                '<div class="e-float-input e-control-wrapper e-input-group">',
                    '<input id="progressInput"',
                        ' name="Progress"',
                        ' type="number"',
                        ' min="0"' ,
                        ' max="100"' ,
                        ' step="1"' ,
                        ' class="e-field e-input"',
                        ' value="', (args.data.Progress || '0'), '" />',
                    '<label class="e-float-text e-label-top">Progress (%)</label>',
                '</div>',
            '</div>'
        ].join('');

        form.appendChild(container);

        var progressEl = container.querySelector('[name="Progress"]');

        var statusDropdown = new ej.dropdowns.DropDownList({
            dataSource: [
                { text: 'Pending', value: 'pending' },
                { text: 'In-Progress', value: 'in-progress' },
                { text: 'Review', value: 'review' },
                { text: 'Done', value: 'done' }
            ],
            fields: { text: 'text', value: 'value' },
            value: args.data.Status || 'pending',
            change: function (e) {
                applyStatusRules(e.value);
            },
            placeholder: 'Status',
            floatLabelType: 'Auto'
        });
        statusDropdown.appendTo('#statusDropdown');

        progressEl.value = (args.data.Progress !== undefined && args.data.Progress !== null) ? args.data.Progress : 0;
        applyStatusRules(statusDropdown.value);

        progressEl.addEventListener('input', function (e) {
            var value = Number(e.target.value) || 0;
            var currentStatus = statusDropdown.value;
            if (currentStatus === 'in-progress') {
                if (value >= 99) value = 98;
                if (value <= 0) value = 0;
            }
            
            e.target.value = value;
        });

        function applyStatusRules(status) {
            if (status === 'done') {
                progressEl.value = 100;
                progressEl.disabled = true;
            } else if (status === 'review') {
                progressEl.value = 99;
                progressEl.disabled = true;
            } else if (status === 'pending') {
                progressEl.value = 0;
                progressEl.disabled = true;
            } else if (status === 'in-progress') {
                var currentValue = Number(progressEl.value) || 0;
                if (currentValue >= 99) {
                    progressEl.value = 98;
                }
                progressEl.disabled = false;
            } else {
                progressEl.disabled = false;
            }
        }
    }

    var scheduleObj = new ej.schedule.Schedule({
        cssClass: 'event-customization-schedule',
        width: '100%',
        height: '550px',
        selectedDate: new Date(2026, 3, 24),
        currentView: 'TimelineWeek',
        popupOpen: onPopupOpen,
        allowOverlap: false,
        startHour: '09:00',
        endHour: '18:00',
        showWeekend: false,
        views: ['TimelineWeek'],
        group: { resources: ['Employees'] },
        resources: [
            {
                field: 'EmployeeId',
                name: 'Employees',
                dataSource: employeeData,
                textField: 'Text',
                idField: 'Id',
                colorField: 'Color'
            }
        ],
        eventSettings: {
            dataSource: eventData,
            fields: {
                id: 'Id',
                subject: { name: 'Subject' },
                startTime: { name: 'StartTime' },
                endTime: { name: 'EndTime' },
                description: { name: 'Description' },
                status: { name: 'Status' },
                progress: { name: 'Progress' }
            },
            template: eventTemplate
        },
    });
    scheduleObj.appendTo('#Schedule');
};