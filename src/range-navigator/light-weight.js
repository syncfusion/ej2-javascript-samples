/**
 * Sample for range navigator without series
 */
function GetDateTimeData(start, end, min, max, inc) {
    var series1 = [];
    var point = {};
    var value = 100;
    var date;
    inc = inc ? inc : 1;
    for (var i = 0; start <= end; i += inc) {
        date = start.getTime();
        if (min || max) {
            value = getRandomInt(min, max);
        }
        else {
            if (Math.random() > 0.5) {
                value += Math.random();
            }
            else {
                value -= Math.random();
            }
        }
        point = { x: new Date(date), y: value };
        new Date(start.setDate(start.getDate() + 1));
        series1.push(point);
    }
    return series1;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var selectedTheme = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
this.default = function () {
        var range = new ej.charts.RangeNavigator({
            valueType: 'DateTime',
            intervalType: 'Months',
            labelFormat: 'MMM',
            value: [new Date('2018-06-01'), new Date('2018-07-01')],
            dataSource: GetDateTimeData(new Date('2018-01-01'), new Date('2019-01-01')),
            xName: 'x', yName: 'y',
            width: ej.base.Browser.isDevice ? '100%' : '80%',
            theme: theme,
            navigatorStyleSettings: {
                thumb: {
                    type: 'Rectangle'
                },
            },
            changed: (function (args) {
                var currentDate = new Date(+args.start);
                var workingDaysCount = 0;
                var holidaysDaysCount = 0;
                while (currentDate <= new Date(+args.end)) {
                    if (currentDate.getDay() > 0 && currentDate.getDay() <= 5) {
                        workingDaysCount++;
                    }
                    else {
                        holidaysDaysCount++;
                    }
                    currentDate.setDate(currentDate.getDate() + 1);
                }
                document.getElementById('workingcount').innerHTML = ' ' + workingDaysCount;
                document.getElementById('weekendcount').innerHTML = ' ' + holidaysDaysCount;
            })
        });
        range.appendTo('#datetime');
    };