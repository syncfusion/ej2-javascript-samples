this.default = function () {
    var outputElement = document.querySelector('#rule-output');
    var recObject = new ej.schedule.RecurrenceEditor({
        change: function (args) {
            outputElement.innerText = args.value;
        }
    });
    recObject.appendTo('#RecurrenceEditor');
    recObject.setRecurrenceRule('FREQ=DAILY;INTERVAL=2;COUNT=8');
    outputElement.innerText = recObject.value;
};