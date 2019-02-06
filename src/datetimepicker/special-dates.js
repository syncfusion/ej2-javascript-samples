this.default = function () {
	var span;
    var addClass = ej.base.addClass;
    var datetimepicker = new ej.calendars.DateTimePicker({
        renderDayCell: customDates,
        value: new Date('1/13/2017'),
        cssClass: 'e-customStyle'
    });
    datetimepicker.appendTo('#datetimepicker');

    function customDates(args) {
        if (args.date.getDate() === 10) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            addClass([args.element], [ 'e-day','special', 'birthday']);
            args.element.firstElementChild.setAttribute('title', 'Birthday !');
            args.element.setAttribute('title', 'Birthday !');
            args.element.appendChild(span);
        }
        if (args.date.getDate() === 15) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            addClass([args.element], [ 'e-day','special', 'vacation']);
            args.element.firstElementChild.setAttribute('title', 'Vacation !');
            args.element.setAttribute('title', 'Vacation !');
            args.element.appendChild(span);

        }
        if (args.date.getDate() === 20) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            addClass([args.element], [ 'e-day','special', 'farewell']);
            args.element.firstElementChild.setAttribute('title', 'Farewell !');
            args.element.setAttribute('title', 'Farewell !');
            args.element.appendChild(span);

        }

    }
};