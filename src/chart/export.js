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
    var fluentColors = ["#1AC9E6", "#DA4CB2", "#EDBB40", "#AF4BCF", "#FF7266", "#1BD565", "#EE993D", "#5887FF", "#EC548D",
    "#7D39C0"];  
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = fabricColors[args.point.index];
    }
    else if (selectedTheme === 'material') {
        args.fill = materialColors[args.point.index];
    } 
    else if (selectedTheme === 'highcontrast') {
        args.fill = highcontrastColors[args.point.index];
    }
    else if (selectedTheme === 'fluent' || selectedTheme === 'fluent-dark') {
        args.fill = fluentColors[args.point.index % 10];
    }
    else {
        args.fill = bootstrapColors[args.point.index % 10];
    }
};
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1,
            labelIntersectAction: ej.base.Browser.isDevice ? 'None' : 'Trim',
            labelRotation: -45,
            majorGridLines: { width: 0 },
            majorTickLines: {width : 0},
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        pointRender: labelRender,
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Measurements (in Gigawatt)',
            labelFormat: ej.base.Browser.isDevice? '{value}' : '{value}GW',
            minimum: 0,
            maximum: 40,
            interval: 10,
            lineStyle: { width: 0 },
            majorGridLines: { width: 2 },
            minorTickLines: { width: 0 },
        },
        //Initializing Series
        series: [
            {
                type: 'Column',
                dataSource: [
                    { x: "India", y: 35.5, text: ej.base.Browser.isDevice ? "35.5" : "35.5GW" },
                    { x: "China", y: 18.3, text: ej.base.Browser.isDevice ? "18.3" : "18.3GW" },
                    { x: "Italy", y: 17.6, text: ej.base.Browser.isDevice ? " 17.6" : " 17.6GW" },
                    { x: "Japan", y: 13.6, text: ej.base.Browser.isDevice ? "13.6" : "13.6GW" },
                    { x: "United state", y: 12, text: ej.base.Browser.isDevice ? "12" : "12GW" },
                    { x: "Spain", y: 5.6, text: ej.base.Browser.isDevice ? "5.6" : "5.6GW" },
                    { x: "France", y: 4.6, text: ej.base.Browser.isDevice ? "4.6" : "4.6GW" },
                    { x: "Australia", y: 3.3, text: ej.base.Browser.isDevice ? "3.3" : "3.3GW" },
                    { x: "Belgium", y: 3, text: ej.base.Browser.isDevice ? "3" : "3GW" },
                    { x: "United Kingdom", y: 2.9, text: ej.base.Browser.isDevice ? "2.9" : "2.9GW" },
                ],
                xName: 'x', width: 2,
                yName: 'y', marker: { dataLabel: { visible: true, name: 'text', position: 'Top', enableRotation: ej.base.Browser.isDevice ? true : false, angle: ej.base.Browser.isDevice ? -90 : 0, font: { fontWeight: '600', color: '#ffffff', size: '9px' } } }
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
        iconCss: 'e-icons e-export-icon', cssClass: 'e-flat', isPrimary: true,
    });
    togglebtn.appendTo('#togglebtn');
    document.getElementById('togglebtn').onclick = function () {
        var fileName = (document.getElementById('fileName')).value;
        chart.exportModule.export(mode.value, fileName);
    };
};
