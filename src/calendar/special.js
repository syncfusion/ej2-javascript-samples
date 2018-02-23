this.default = function () {
    var addClass = ej.base.addClass;
    var calendar = new ej.calendars.Calendar({
        renderDayCell: customDates, change: valueChange
    });
    calendar.appendTo('#calendar');
    function valueChange(args) {
        /*Displays selected date in the label*/
        var title = '';
        if (args.event) {
            title = event.currentTarget.getAttribute('data-val');
            title = title == null ? '' : ' ( ' + title + ' )';
        }
        document.getElementById('date_label').textContent = 'Selected Value: ' + args.value.toLocaleDateString() + title;
    }
    function customDates(args) {
        var span;
        if (args.date.getDate() === 10) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            addClass([args.element], ['special', 'e-day', 'birthday']);
            args.element.setAttribute('title', ' Birthday !');
            args.element.setAttribute('data-val', ' Birthday !');
            args.element.appendChild(span);
        }
        if (args.date.getDate() === 15) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            addClass([args.element], ['special', 'e-day', 'farewell']);
            args.element.setAttribute('title', 'Farewell !');
            args.element.setAttribute('data-val', 'Farewell !');
            args.element.appendChild(span);

        }
        if (args.date.getDate() === 25) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            addClass([args.element], ['special', 'e-day', 'vacation']);
            args.element.setAttribute('title', 'Vacation !');
            args.element.setAttribute('data-val', 'Vacation !');
            args.element.appendChild(span);

        }
    }
};