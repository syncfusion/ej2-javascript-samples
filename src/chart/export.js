/**
 * Sample for chart export
 */
var labelRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    var materialColors = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883', '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb',
        '#ea7a57', '#404041', '#00bdae'];
    var fabricColors = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5',
        '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300', '#4472c4', '#70ad47', '#ffc000', '#ed7d31'];
    var bootstrapColors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6',
        '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
    var highcontrastColors = ['#79ECE4', '#E98272', '#DFE6B6', '#C6E773', '#BA98FF',
        '#FA83C3', '#00C27A', '#43ACEF', '#D681EF', '#D8BC6E'];
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = fabricColors[args.point.index];
    }
    else if (selectedTheme === 'material') {
        args.fill = materialColors[args.point.index];
    } 
    else if (selectedTheme === 'highcontrast') {
        args.fill = highcontrastColors[args.point.index];
    }
    else {
        args.fill = bootstrapColors[args.point.index % 10];
    }
};
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            title: 'Countries',
            valueType: 'Category',
            majorGridLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        pointRender: labelRender,
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Measurements',
            labelFormat: '{value}GW',
            minimum: 0,
            maximum: 40,
            interval: 10,
            majorGridLines: { width: 0 }
        },
        //Initializing Series
        series: [
            {
                type: 'Column',
                dataSource: [
                    { x: 'DEU', y: 35.5 }, { x: 'CHN', y: 18.3 }, { x: 'ITA', y: 17.6 }, { x: 'JPN', y: 13.6 },
                    { x: 'US', y: 12 }, { x: 'ESP', y: 5.6 }, { x: 'FRA', y: 4.6 }, { x: 'AUS', y: 3.3 },
                    { x: 'BEL', y: 3 }, { x: 'UK', y: 2.9 }
                ],
                xName: 'x', width: 2,
                yName: 'y'
            }
        ],
        title: 'Top 10 Countries Using Solar Power',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
         // custom code end
    });
    chart.appendTo('#export-container');
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        width: 100
    });
    mode.appendTo('#mode');
    var togglebtn = new ej.buttons.Button({
        iconCss: 'e-icons e-play-icon', cssClass: 'e-flat', isPrimary: true,
    });
    togglebtn.appendTo('#togglebtn');
    document.getElementById('togglebtn').onclick = function () {
        var fileName = (document.getElementById('fileName')).value;
        chart.exportModule.export(mode.value, fileName);
    };
};
