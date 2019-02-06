this.default = function () {
    var value;
    var isStartTimeChange = true;
    var startTime = new ej.calendars.TimePicker({
        placeholder: 'Start Time',
        change: onEnableEndTime
    });
    startTime.appendTo('#start');
    var endTime = new ej.calendars.TimePicker({
        placeholder: 'End Time',
        enabled: false
    });
    endTime.appendTo('#end');

    var checkboxObject = new ej.buttons.CheckBox({ label: 'Business Hours', change: changeTime });
    checkboxObject.appendTo('#dayRange');

    var endInput = document.getElementById('end');

    function changeTime(args) {
        isStartTimeChange = false;
        if (args.checked) {
            startTime.value = new Date('9/6/2017 9:00');
            endTime.enabled = true;
            endTime.value = new Date('9/6/2017 18:00');
            startTime.readonly = true;
            endTime.readonly = true;
        } else {
            endTime.value = null;
            startTime.value = null;
            endInput.value = '';
            startTime.readonly = false;
            endTime.readonly = false;
            endTime.enabled = false;
        }
    }
    function onEnableEndTime(args) {
        if (isStartTimeChange) {
            endTime.enabled = true;
            endTime.value = null;
            endInput.value = '';
            value = new Date(+args.value);
            value.setMinutes(value.getMinutes() + endTime.step);
            endTime.min = value;
        } else {
            isStartTimeChange = true;
        }
    }
};