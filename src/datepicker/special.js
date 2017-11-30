this.default = function () {
    var datepicker = new ej.calendars.DatePicker({
        renderDayCell: customDates,
        placeholder: 'Choose a date',
        value: new Date('1/13/2017')
    });
    datepicker.appendTo('#datepicker');

    function customDates(args) {
        var span;
        if (+args.date === +new Date('1/2/2017')) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            args.element.className = 'special e-day federal';
            args.element.setAttribute('title', ' Federal New Year’s Day !');
            args.element.appendChild(span);
        }
        if (+args.date === +new Date('1/16/2017')) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            args.element.className = 'special e-day luther';
            args.element.setAttribute('title', 'Birthday of Martin Luther King!');
            args.element.appendChild(span);

        }
        if (+args.date === +new Date('2/20/2017')) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            args.element.className = 'special e-day washington';
            args.element.setAttribute('title', 'Washington’s Birthday!');
            args.element.appendChild(span);

        }
        if (+args.date === +new Date('5/29/2017')) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            args.element.className = 'special e-day memorial';
            args.element.setAttribute('title', 'Memorial Day!');
            args.element.appendChild(span);

        }
        if (+args.date === +new Date('7/4/2017')) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            args.element.className = 'special e-day independence';
            args.element.setAttribute('title', 'Independence Day!');
            args.element.appendChild(span);

        }
        if (+args.date === +new Date('9/4/2017')) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            args.element.className = 'special e-day labour';
            args.element.setAttribute('title', 'Labor Day!');
            args.element.appendChild(span);
        }
        if (+args.date === +new Date('10/9/2017')) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            args.element.className = 'special e-day columbus';
            args.element.setAttribute('title', 'Columbus Day!');
            args.element.appendChild(span);
        }
        if (+args.date === +new Date('11/10/2017')) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            args.element.className = 'special e-day veterans';
            args.element.setAttribute('title', 'Veterans Day!');
            args.element.appendChild(span);
        }
        if (+args.date === +new Date('11/23/2017')) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            args.element.className = 'special e-day thanksgiving';
            args.element.setAttribute('title', 'Thanksgiving Day!');
            args.element.appendChild(span);
        }
        if (+args.date === +new Date('12/25/2017')) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            args.element.className = 'special e-day christmas';
            args.element.setAttribute('title', 'Christmas Day!');
            args.element.appendChild(span);
        }
    }
};