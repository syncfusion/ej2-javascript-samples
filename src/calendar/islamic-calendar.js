this.default = function () {
    var span;
    var addClass = ej.base.addClass;
    var calendar = new ej.calendars.Calendar({
        change: valueChange,
        renderDayCell: disableDate,
        calendarMode: 'Islamic'
    });
    calendar.appendTo('#calendar');
    function valueChange(args) {
        /*Displays selected date in the label*/
        document.getElementById('date_label').textContent = 'Selected Value: ' + this.globalize.formatDate(args.value, { type: 'date', format: 'ddMMMyyyy', calendar: 'islamic' });
    }
    function disableDate(args) {
        /*Date need to be disabled*/
        if (args.date.getDate() === 2 || args.date.getDate() === 10 || args.date.getDate() === 28) {
            args.isDisabled = true;
        }
        if (args.date.getDate() === 13) {
            span = document.createElement('span');
            args.element.children[0].className += 'e-day sf-icon-cup highlight';
            addClass([args.element], ['special', 'e-day', 'dinner']);
            args.element.setAttribute('data-val', ' Dinner !');
            args.element.appendChild(span);
        }
        if (args.date.getDate() === 23) {
            args.element.children[0].className += 'e-day sf-icon-start highlight';
            span = document.createElement('span');
            span.setAttribute('class', 'sf-icons-star highlight');
            //use the imported method to add the multiple classes to the given element
            addClass([args.element], ['special', 'e-day', 'holiday']);
            args.element.setAttribute('data-val', ' Holiday !');
            args.element.appendChild(span);
        }
     
    }
};