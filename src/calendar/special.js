this.default = function () {
    var calendar = new ej.calendars.Calendar({
        renderDayCell: customDates, change: valueChange
    });
    calendar.appendTo('#calendar');
    function valueChange(args) {
        (document.getElementById('date_label')).textContent = 'Selected Value: ' + args.value.toLocaleDateString();
    }
    function customDates(args) {
        if (args.date.getDate() === 10) {
            var span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            args.element.appendChild(span);
            args.element.setAttribute('title', 'Birthday !');
            args.element.setAttribute('data-val', 'Birthday !');
        }
        if (args.date.getDate() === 15) {
            args.element.className = 'special';
            args.element.setAttribute('title', 'Farewell');
            args.element.setAttribute('data-val', 'Farewell !');
        }
        if (args.date.getDate() === 20) {
            args.element.className = 'daycell';
        }
    }
};