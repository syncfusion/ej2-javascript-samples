this.default = function () {
	var span;
    var addClass = ej.base.addClass;
    var calendar = new ej.calendars.Calendar({
        renderDayCell: customDates, change: valueChange
    });
    calendar.appendTo('#calendar');
    function valueChange(args) {
        /*Displays selected date in the label*/
        var title = '';
        if (args.event) {
            title = event.currentTarget.classList.contains('e-selected') ? event.currentTarget.getAttribute('data-val') : args.event.currentTarget.getElementsByClassName('e-selected').length > 0 ? args.event.currentTarget.getElementsByClassName('e-selected')[0].getAttribute('data-val') : null;
            title = title == null ? '' : ' ( ' + title + ' )';
        }
        document.getElementById('date_label').textContent = 'Selected Value: ' + args.value.toLocaleDateString() + title;
    }
    function customDates(args) {
        if (args.date.getDate() === 10) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            args.element.firstElementChild.setAttribute('title', 'Birthday !');
            addClass([args.element], [ 'e-day','special', 'birthday']);
			args.element.setAttribute('data-val', ' Birthday !');
             args.element.setAttribute('title', 'Birthday !');
            args.element.appendChild(span);
        }
        if (args.date.getDate() === 15) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            args.element.firstElementChild.setAttribute('title', 'Farewell !');
            addClass([args.element], [ 'e-day','special', 'farewell']);
			args.element.setAttribute('data-val', 'Farewell !');
            args.element.setAttribute('title', 'Farewell !');
            args.element.appendChild(span);

        }
        if (args.date.getDate() === 25) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            args.element.firstElementChild.setAttribute('title', 'Vacation !');
            addClass([args.element], [ 'e-day','special', 'vacation']);
			args.element.setAttribute('title', 'Vacation !');
            args.element.setAttribute('data-val', 'Vacation !');
            args.element.appendChild(span);

        }
    }
};