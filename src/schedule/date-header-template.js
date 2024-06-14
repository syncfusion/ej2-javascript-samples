this.default = function () {
    // Used in templates to get day string
    var instance = new ej.base.Internationalization();
    window.getDateHeaderText = function (value) {
        return instance.formatDate(value, { skeleton: 'Ed' });
    };
    window.getWeather = function (value) {
        switch (value.getDay()) {
            case 0:
                return '<img class="weather-image" src="src/schedule/images/weather-clear.svg" alt="Clear weather"/><div class="weather-text">25°C</div>';
            case 1:
                return '<img class="weather-image" src="src/schedule/images/weather-clouds.svg" alt="Clouds weather"/><div class="weather-text">18°C</div>';
            case 2:
                return '<img class="weather-image" src="src/schedule/images/weather-rain.svg"/ alt="Rain weather"><div class="weather-text">10°C</div>';
            case 3:
                return '<img class="weather-image" src="src/schedule/images/weather-clouds.svg" alt="Clouds weather"/><div class="weather-text">16°C</div>';
            case 4:
                return '<img class="weather-image" src="src/schedule/images/weather-rain.svg" alt="Rain weather"/><div class="weather-text">8°C</div>';
            case 5:
                return '<img class="weather-image" src="src/schedule/images/weather-clear.svg" alt="Clear weather"/><div class="weather-text">27°C</div>';
            case 6:
                return '<img class="weather-image" src="src/schedule/images/weather-clouds.svg" alt="Clouds weather"/><div class="weather-text">17°C</div>';
            default:
                return null;
        }
    };

    var data = new ej.base.extend([], window.scheduleData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        dateHeaderTemplate: '<div class="date-text">${getDateHeaderText(data.date)}</div>${getWeather(data.date)}',
        views: ['Day', 'Week', 'WorkWeek', 'Month', 'TimelineMonth'],
        selectedDate: new Date(2021, 0, 10),
        eventSettings: { dataSource: data },
        cssClass: 'schedule-date-header-template',
        renderCell: function (args) {
            if (args.elementType === 'monthCells' && this.currentView === 'Month') {
                var ele = document.createElement('div');
                ele.innerHTML = getWeather(args.date);
                (args.element).appendChild(ele.firstChild);
            }
        },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');
};