this.default = function () {
	var span;
    //assign the add class method from base.
    var addClass = ej.base.addClass;
    var datepicker = new ej.calendars.DatePicker({
        renderDayCell: customDates,
        value: new Date('1/13/2017'),
        cssClass: 'e-customStyle'
    });
    datepicker.appendTo('#datepicker');

    function customDates(args) {
        if (args.date.getDate() === 10) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
			args.element.setAttribute('title', 'Birthday !');
            //use the imported method to add the multiple classes to the given element
            addClass([args.element], ['special', 'e-day', 'birthday']);
			args.element.firstElementChild.setAttribute('title', 'Birthday !');
            args.element.appendChild(span);
        }
        if (args.date.getDate() === 15) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
			args.element.setAttribute('title', 'Farewell !');
            addClass([args.element], ['special', 'e-day', 'farewell']);
			args.element.firstElementChild.setAttribute('title', 'Farewell !');
            args.element.appendChild(span);

        }
        if (args.date.getDate() === 25) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
			args.element.setAttribute('title', 'Vacation !');
            addClass([args.element], ['special', 'e-day', 'vacation']);
			args.element.firstElementChild.setAttribute('title', 'Vacation !');
            args.element.appendChild(span);

        }
    }
};