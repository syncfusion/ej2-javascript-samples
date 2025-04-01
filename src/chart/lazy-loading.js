this.default = function () {
    var intl = new ej.base.Internationalization();
    //var spinnerEle = document.getElementById('spinner');
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift',
            skeleton: 'yMMM',
            skeletonType: 'Date',
            scrollbarSettings: {
                range: {
                    minimum: new Date(2009, 0, 1),
                    maximum: new Date(2014, 0, 1)
                },
                enable: true,
                pointsLength: 1000,
                enableZoom: false,
                height: 14
            }
        },
        primaryYAxis: {
            title: 'Server Load',
            labelFormat: '{value}MB'
        },
        series: [{
            dataSource: GetDateTimeData(new Date(2009, 0, 1), new Date(2009, 8, 1)),
            xName: 'x', yName: 'y',
            type: 'Line', animation: { enable: false }
        }],
        height: '450',
        title: 'Network Load',
        crosshair: { enable: false, lineType: 'Vertical' },
        tooltip: { enable: true, showNearestTooltip: true, header : '<b>${point.x}</b>', format : 'Server load : <b>${point.y}</b>'},
        legendSettings: { visible: true },
        // scrollStart: function (args) {
        //         ej.popups.createSpinner({ target: spinnerEle, width: '50px', label: 'Loading' });
        //         ej.popups.showSpinner(spinnerEle);
        //     },
        scrollEnd: function (args) {
            //ej.popups.hideSpinner(spinnerEle);
            if (lazymode.value === 'Range') {
                chart.series[0].dataSource = GetDateTimeData(args.currentRange.minimum, args.currentRange.maximum);
            }
            else {
                chart.series[0].dataSource = GetNumericData(args.currentRange.minimum, args.currentRange.maximum);
            }
            chart.dataBind();
        },
        width: '100%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
         // custom code end
    });
    chart.appendTo('#container');
    function GetDateTimeData(start, end) {
        var series1 = [];
        var date;
        var value = 30;
        var option = {
            skeleton: 'full',
            type: 'dateTime'
        };
        var dateParser = intl.getDateParser(option);
        var dateFormatter = intl.getDateFormat(option);
        for (var i = 0; start <= end; i++) {
            date = Date.parse(dateParser(dateFormatter(start)));
            if (Math.random() > 0.5) {
                value += (Math.random() * 10 - 5);
            } 
            else {
                value -= (Math.random() * 10 - 5);
            }
            if (value < 0) {
                value = getRandomInt(20, 40);
            }
            var point1 = { x: new Date(date), y: Math.round(value) };
            new Date(start.setDate(start.getDate() + 1));
            series1.push(point1);
        }
        return series1;
    }
    function GetNumericData(start, end) {
        var series1 = [];
        var value = 30;
        for (var i = start; i <= end; i++) {
            if (Math.random() > 0.5) {
                value += (Math.random() * 10 - 5);
            }
            else {
                value -= (Math.random() * 10 - 5);
            }
            if (value < 0) {
                value = getRandomInt(20, 40);
            }
            var point = { x: i, y: Math.round(value) };
            series1.push(point);
        }
        return series1;
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var lazymode = new ej.dropdowns.DropDownList({
        index: 0,
        width: 120,
        change: function (arg) {
            var min;
            var max;
            if (arg.value === 'Range') {
                chart.primaryXAxis.valueType = 'DateTime';
                min = chart.primaryXAxis.scrollbarSettings.range.minimum = new Date(2009, 0, 1);
                max = chart.primaryXAxis.scrollbarSettings.range.maximum = new Date(2014, 0, 1);
                chart.series[0].dataSource = GetDateTimeData(new Date(2009, 0, 1), new Date(2009, 8, 1)); 
                chart.refresh();
                minDate.enabled = true;
                maxDate.enabled = true;
                pointslength.enabled = false;
            }
            else {
                chart.primaryXAxis.valueType = 'Double';
                chart.primaryXAxis.scrollbarSettings.range.minimum = null;
                chart.primaryXAxis.scrollbarSettings.range.maximum = null;
                chart.primaryXAxis.scrollbarSettings.pointsLength = 1000;
                chart.series[0].dataSource = GetNumericData(1, 200);
                chart.refresh();
                minDate.enabled = false;
                maxDate.enabled = false;
                pointslength.enabled = true;
            }
        }
    });
    lazymode.appendTo('#lazymode');
    var minDate = new ej.calendars.DatePicker({
        value: new Date(2009, 0, 1),
        width: 120,
        change: function (args) {
            chart.primaryXAxis.scrollbarSettings.range.minimum = args.value;
            chart.refresh();
        }
    });
    minDate.appendTo('#datepickermin');
    var maxDate = new ej.calendars.DatePicker({
        value: new Date(2014, 0, 1),
        width: 120,
        change: function (args) {
            chart.primaryXAxis.scrollbarSettings.range.maximum = args.value;
            chart.refresh();
        }
    });
    maxDate.appendTo('#datepickermax');
    var pointslength = new ej.inputs.NumericTextBox({
        min: 1000,
        max: 10000,
        value: 1000,
        step: 100,
        enabled: false,
        format: 'n',
        width: 120,
        change: function (args) {
            chart.primaryXAxis.scrollbarSettings.pointsLength = args.value;
            chart.refresh();
        }
    });
    pointslength.appendTo('#pointslength');
};

