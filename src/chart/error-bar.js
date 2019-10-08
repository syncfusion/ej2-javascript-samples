var fillRender = function (args) {
    var errorTheme = location.hash.split('/')[1];
    if (errorTheme && errorTheme.indexOf('fabric') > -1) {
        args.fill = window.fabricColors[args.point.index % 10];
    } else if (errorTheme === 'material') {
        args.fill = window.materialColors[args.point.index % 10];
    } else if (errorTheme === 'highcontrast') {
        args.fill = window.highcontrastColors[args.point.index % 10];
    } else {
        args.fill = window.bootstrapColors[args.point.index % 10];
    }
};
/**
 * Sample for Error Bar
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1,
            majorGridLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            labelFormat: '{value}%', minimum: 15, maximum: 45,
            lineStyle: { width: 0 }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Scatter',
                dataSource: [
                    { x: 'IND', y: 24 }, { x: 'AUS', y: 20 }, { x: 'USA', y: 35 },
                    { x: 'DEU', y: 27 }, { x: 'ITA', y: 30 },
                    { x: 'UK', y: 41 }, { x: 'RUS', y: 26 }
                ],
                xName: 'x', width: 2, yName: 'y', marker: { height: 10, width: 10 }, name: 'Sales',
                //Initializing Error Bar
                errorBar: { visible: true, verticalError: 3, horizontalError: 3 }
            },
        ],
        //Initializing Tootlip
        tooltip: {
            enable: true
        },
        pointRender: fillRender,
        legendSettings: { visible: false },
        //Initializing Chart Title
        title: 'Sales Distribution of Car by Region',
         // custom code start
        load: function (args) {
            var errorBarTheme = location.hash.split('/')[1];
            errorBarTheme = errorBarTheme ? errorBarTheme : 'Material';
            args.chart.theme = (errorBarTheme.charAt(0).toUpperCase() +
                errorBarTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
         // custom code end
    });
    chart.appendTo('#error-container');
    var typemode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.series[0].errorBar.type = typemode.value;
            chart.series[0].animation.enable = false;
            chart.refresh();
        }
    });
    typemode.appendTo('#selmode');
    var drawmode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.series[0].errorBar.mode = drawmode.value;
            chart.refresh();
        }
    });
    drawmode.appendTo('#drawmode');
    var direction = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.series[0].errorBar.direction = direction.value;
            chart.series[0].animation.enable = false;
            chart.refresh();
        }
    });
    direction.appendTo('#direction');
    var verticalerrror = new ej.inputs.NumericTextBox({
        value: 3,
        min: 1,
        max: 20,
        step: 1,
        change: function () {
            chart.series[0].errorBar.verticalError = verticalerrror.value;
            chart.series[0].animation.enable = false;
            chart.refresh();
        }
    });
    verticalerrror.appendTo('#verticalerrror');
    var horizontalerrror = new ej.inputs.NumericTextBox({
        value: 3,
        min: 1,
        max: 20,
        step: 1,
        change: function () {
            chart.series[0].errorBar.horizontalError = horizontalerrror.value;
            chart.series[0].animation.enable = false;
            chart.refresh();
        }
    });
    horizontalerrror.appendTo('#horizontalerrror');
};