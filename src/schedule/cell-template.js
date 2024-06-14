this.default = function () {
    var data = new ej.base.extend([], null, true);
    window.getCellContent = function (date) {
        if (date.getMonth() === 10 && date.getDate() === 23) {
            return '<img src="src/schedule/images/thanksgiving-day.svg" alt="Thanksgiving day"/><div class="caption">Thanksgiving day</div>';
        } else if (date.getMonth() === 11 && date.getDate() === 9) {
            return '<img src="src/schedule/images/get-together.svg" alt="Party time"/><div class="caption">Party time</div>';
        } else if (date.getMonth() === 11 && date.getDate() === 13) {
            return '<img src="src/schedule/images/get-together.svg" alt="Party time"/><div class="caption">Party time</div>';
        } else if (date.getMonth() === 11 && date.getDate() === 22) {
            return '<img src="src/schedule/images/birthday.svg" alt="Happy birthday"/><div class="caption">Happy birthday</div>';
        } else if (date.getMonth() === 11 && date.getDate() === 24) {
            return '<img src="src/schedule/images/christmas-eve.svg" /><div class="caption">Christmas Eve</div>';
        } else if (date.getMonth() === 11 && date.getDate() === 25) {
            return '<img src="src/schedule/images/christmas.svg" alt="Christmas Eve"/><div class="caption">Christmas Day</div>';
        } else if (date.getMonth() === 0 && date.getDate() === 1) {
            return '<img src="src/schedule/images/newyear.svg" alt="New year"/><div class="caption">New Year\'s Day</div>';
        } else if (date.getMonth() === 0 && date.getDate() === 14) {
            return '<img src="src/schedule/images/get-together.svg" alt="Get together"/><div class="caption">Get together</div>';
        }
        return '';
    };
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        cellTemplate: '${if(type === "monthCells")}<div class="templatewrap">${getCellContent(data.date)}</div>${/if}',
        views: ['Month'],
        currentView: 'Month',
        eventSettings: { dataSource: data },
        selectedDate: new Date(2021, 11, 15)
    });
    scheduleObj.appendTo('#Schedule');
};