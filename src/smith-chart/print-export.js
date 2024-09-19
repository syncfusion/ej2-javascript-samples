this.default = function () {
    var smithchart = new ej.charts.Smithchart({
        // custom code start
        load: function (args) {
            var printtheme = location.hash.split('/')[1];
            printtheme = printtheme ? printtheme : 'Fluent2';
            args.smithchart.theme = (printtheme.charAt(0).toUpperCase() +
                printtheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        // custom code end
        horizontalAxis: {
            minorGridLines: {
                visible: true
            }
        },
        radialAxis: {
            minorGridLines: {
                visible: true
            }
        },
        series: [
            {
                points: [
                    { resistance: 0.15, reactance: 0 },
                    { resistance: 0.15, reactance: 0.15 },
                    { resistance: 0.18, reactance: 0.3 },
                    { resistance: 0.2, reactance: 0.4 },
                    { resistance: 0.25, reactance: 0.6 },
                    { resistance: 0.38, reactance: 0.95 },
                    { resistance: 0.6, reactance: 1.25 },
                    { resistance: 1, reactance: 1.6 },
                    { resistance: 1.65, reactance: 1.9 },
                    { resistance: 2.75, reactance: 2 },
                    { resistance: 4.5, reactance: 0 },
                    { resistance: 3, reactance: -2 },
                    { resistance: 1.65, reactance: -1.95 },
                    { resistance: 1, reactance: -1.65 },
                    { resistance: 0.6, reactance: -1.25 },
                    { resistance: 0.35, reactance: -0.9 },
                    { resistance: 0.25, reactance: -0.6 },
                    { resistance: 0.25, reactance: -0.4 },
                    { resistance: 0.25, reactance: -0.3 },
                    { resistance: 0.25, reactance: -0.15 },
                    { resistance: 0.25, reactance: 0 },
                ],
                name: 'Transmission',
                enableAnimation: false,
                tooltip: { visible: true },
                marker: {
                    shape: 'Circle',
                    visible: true,
                    border: {
                        width: 2,
                    }
                }
            },
        ],
        legendSettings: {
            visible: true,
            shape: 'Circle'
        },
    });
    smithchart.appendTo('#container');
    // Code for Property Panel
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        width: 100
    });
    mode.appendTo('#mode');
    var togglebtn1 = new ej.buttons.Button({
        iconCss: 'e-icons e-export-icon', cssClass: 'e-flat', isPrimary: true
    });
    togglebtn1.appendTo('#togglebtn1');
    document.getElementById('togglebtn1').onclick = function () {
        var fileName = (document.getElementById('fileName')).value;
        smithchart.export(mode.value, fileName);
    };
    var togglebtn2 = new ej.buttons.Button({
        cssClass: 'e-flat', iconCss: 'e-icons e-print-icon', isPrimary: true
    });
    togglebtn2.appendTo('#togglebtn2');
    document.getElementById('togglebtn2').onclick = function () {
        smithchart.print();
    };
};