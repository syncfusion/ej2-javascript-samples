/* eslint-disable */

this.default = function () {
    var smithchart = new ej.charts.Smithchart({
        // custom code start
        load: function (args) {
            var defaulttheme = location.hash.split('/')[1];
            defaulttheme = defaulttheme ? defaulttheme : 'Fluent2';
            args.smithchart.theme = (defaulttheme.charAt(0).toUpperCase() +
                defaulttheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        // custom code end
        title: {
            visible: true,
            text: 'Transmission details'
        },
        series: [
            {
                points: [
                    { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                    { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                    { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                    { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                    { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                    { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
                ],
                name: 'Transmission1',
                enableAnimation: false,
                tooltip: { visible: true },
                marker: {
                    shape: 'Circle',
                    border: {
                        width: 2,
                    },
                    visible: true                    
                }
            }, {
                points: [
                    { resistance: 20, reactance: -50 }, { resistance: 10, reactance: -10 },
                    { resistance: 9, reactance: -4.5 }, { resistance: 8, reactance: -3.5 },
                    { resistance: 7, reactance: -2.5 }, { resistance: 6, reactance: -1.5 },
                    { resistance: 5, reactance: -1 }, { resistance: 4.5, reactance: -0.5 },
                    { resistance: 3.5, reactance: 0 }, { resistance: 2.5, reactance: 0.4 },
                    { resistance: 2, reactance: 0.5 }, { resistance: 1.5, reactance: 0.5 },
                    { resistance: 1, reactance: 0.4 }, { resistance: 0.5, reactance: 0.2 },
                    { resistance: 0.3, reactance: 0.1 }, { resistance: 0, reactance: 0.05 }                    
                ],
                name: 'Transmission2',
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
        renderType: 'Impedance',
    });
    smithchart.appendTo('#container');
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        width: 90,
        change: function () {
            var element = mode.value.toString();
            smithchart.renderType = element;
            smithchart.refresh();
        }
    });
    mode.appendTo('#rendering');
};