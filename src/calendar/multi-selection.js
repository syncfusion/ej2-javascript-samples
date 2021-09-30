this.default = function () {
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth();
    var calendar = new ej.calendars.Calendar({
        isMultiSelection: true,
        values: [new Date(currentYear, currentMonth, 10), new Date(currentYear, currentMonth, 15), new Date(currentYear, currentMonth, 25)],
        change: changeValue,
        created: changeValue
    });
    calendar.appendTo('#calendar');
    function changeValue() {     
        var element = document.getElementById('multiselect');
        element.innerHTML = '';
        for (var index = 0; index < this.values.length; index++) {
            element.insertBefore(document.createTextNode(this.values[index]), element.childNodes[0]);
            element.insertBefore(document.createElement('br'), element.childNodes[0]);
        }
    }
};