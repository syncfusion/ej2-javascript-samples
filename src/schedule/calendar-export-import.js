this.default = function () {
    var data = new ej.base.extend([], window.scheduleData, null, true);
    // Initialize schedule component
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        views: ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'],
        selectedDate: new Date(2021, 0, 10),
        eventSettings: { dataSource: data }
    });
    scheduleObj.appendTo('#Schedule');

    var buttonObj = new ej.buttons.Button();
    buttonObj.appendTo('#ics-export');
    buttonObj.element.onclick = function () {
        scheduleObj.exportToICalendar();
    };

    // Initialize Uploder component for import
    var uploadObj = new ej.inputs.Uploader({
        allowedExtensions: '.ics',
        cssClass: 'calendar-import',
        buttons: { browse: 'Choose file' },
        multiple: false,
        showFileList: false,
        selected: function (args) {
            scheduleObj.importICalendar(args.event.target.files[0]);
        }
    });
    uploadObj.appendTo('#ics-import');
};
