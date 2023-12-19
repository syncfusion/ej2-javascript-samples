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
    else if (selectedTheme === 'highcontrast'){
        args.fill = highcontrastColors[args.point.index];
    }
    else if (selectedTheme === 'fluent' || selectedTheme === 'fluent-dark') {
        args.fill = fluentColors[args.point.index % 10];
    } 
    else {
        args.fill = bootstrapColors[args.point.index % 10];
    }
};
/**
 * Sample for chart print
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1,
            majorGridLines: { width: 0 },
            majorTickLines: {width : 0},
            minorTickLines: {width: 0}
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        pointRender: labelRender,
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 0,
            labelFormat:'${value}k',
            maximum: 20,
            interval: 4,
            lineStyle: { width: 0 },
            majorGridLines: { width: 2 },
            majorTickLines: { width: 0 },
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: [    { x : "John", y : 10, text:"$10k" },
                { x : "Jake", y : 12, text:"$12k" },
                { x : "Peter", y : 18, text:"$18k" },
                { x : "James", y : 11, text:"$11k" },
                { x : "Mary", y : 9.7, text:"$9.7k" }],
                xName: 'x', width: 2,
                yName: 'y', marker: { dataLabel: { visible: true, name: 'text', position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            }
        ],
        //Initializing Chart Title
        title: 'Sales Comparision',
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#print-container');
    var togglebtn = new ej.buttons.Button({
        cssClass: 'e-flat', isPrimary: true, iconCss: 'e-icons e-print-icon'
    });
    togglebtn.appendTo('#togglebtn');
    document.getElementById('togglebtn').onclick = function () {
        chart.print();
    };
};