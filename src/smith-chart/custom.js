this.default = function () {
    var smithchart = new ej.charts.Smithchart({
        // custom code start
        load: function (args) {
            var customtheme = location.hash.split('/')[1];
            customtheme = customtheme ? customtheme : 'Fluent2';
            args.smithchart.theme = (customtheme.charAt(0).toUpperCase() +
                customtheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
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
                    { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                    { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 4 },
                    { resistance: 3.5, reactance: 3 }, { resistance: 2.5, reactance: 2 },
                    { resistance: 2, reactance: 1.5 }, { resistance: 1.5, reactance: 1.25 },
                    { resistance: 1, reactance: 0.9 }, { resistance: 0.5, reactance: 0.6 },
                    { resistance: 0.3, reactance: 0.4 }, { resistance: 0, reactance: 0.15 },
                ],
                name: 'Transmission1',
                enableAnimation: false,
                width: 2,
                tooltip: { visible: true },
                enableSmartLabels: false,
                fill: '#0F94C4',
                marker: {
                    shape: 'rectangle',
                    visible: true,
                    border: {
                        width: 2,
                    }
                }
            }, {
                points: [
                    { resistance: 20, reactance: -51 }, { resistance: 10, reactance: -9 },
                    { resistance: 9, reactance: -4.4 }, { resistance: 8, reactance: -3.4 },
                    { resistance: 7, reactance: -2.6 }, { resistance: 6, reactance: -1.6 },
                    { resistance: 5, reactance: -1.1 }, { resistance: 4.5, reactance: -0.9 },
                    { resistance: 3.5, reactance: -0.8 }, { resistance: 2.5, reactance: -0.4 },
                    { resistance: 2, reactance: -0.2 }, { resistance: 1.5, reactance: 0 },
                    { resistance: 1, reactance: 0.1 }, { resistance: 0.5, reactance: 0.1 },
                    { resistance: 0.3, reactance: 0.15 }, { resistance: 0, reactance: 0.04 },
                ],
                name: 'Transmission2',
                enableAnimation: false,
                width: 2,
                tooltip: { visible: true },
                enableSmartLabels: false,
                fill: '#EE0C88',
                marker: {
                    shape: 'rectangle',
                    visible: true,
                    border: {
                        width: 2,
                    }
                }
            },
        ],
        radius: 1,
        legendSettings: {
            visible: true,
            position: 'Top',
            border: { color: 'transparent' },
            shape: 'Circle'
        },
        title: {
            text: 'Impedance Transmission', enableTrim: true, maximumWidth: 200,
            visible: true, font: { size: '16px' }
        }
    });
    smithchart.appendTo('#container');
    // Code for Property Panel
    var sliderChange;
    var slider = new ej.inputs.Slider({
        value: 0, type: 'MinRange',
        change: sliderChange,
        max: 1, min: 0, step: 0.1
    }, '#radius');
    setTimeout(function() {
        slider.value = 1;
        slider.dataBind();
    }, 100);
    document.getElementById('radius1').innerHTML = 'Radius <span> ' + 1;
    slider.change = sliderChange = function (e) {
        smithchart.radius = e.value;
        document.getElementById('radius1').innerHTML = 'Radius <span> ' + e.value;
        smithchart.refresh();
    };
    var markerChange;
    var markerCheckBox = new ej.buttons.CheckBox({
        change: markerChange, checked: true
    }, '#marker');
    var datalabelChange;
    var datalabelCheckBox = new ej.buttons.CheckBox({
        change: markerChange
    }, '#datalabel');
    var animateChange;
    var animateCheckBox = new ej.buttons.CheckBox({
        change: markerChange
    }, '#animate');
    var tooltipChange;
    var tooltipCheckBox = new ej.buttons.CheckBox({
        change: markerChange, checked: true
    }, '#tooltip');
    var legendChange;
    var legendCheckBox = new ej.buttons.CheckBox({
        change: markerChange, checked: true
    }, '#legend');
    markerCheckBox.change = markerChange = function (e) {
        var boolean = e.checked;
        if (boolean) {
            smithchart.series[0].marker.visible = true;
            smithchart.series[1].marker.visible = true;
        }
        else {
            smithchart.series[0].marker.visible = false;
            smithchart.series[1].marker.visible = false;
        }
        smithchart.refresh();
    };
    datalabelCheckBox.change = datalabelChange = function (e) {
        var boolean = e.checked;
        if (boolean) {
            smithchart.series[0].marker.dataLabel.visible = true;
            smithchart.series[1].marker.dataLabel.visible = true;
        }
        else {
            smithchart.series[0].marker.dataLabel.visible = false;
            smithchart.series[1].marker.dataLabel.visible = false;
        }
        smithchart.refresh();
    };
    animateCheckBox.change = animateChange = function (e) {
        var boolean = e.checked;
        if (boolean) {
            smithchart.series[0].enableAnimation = true;
            smithchart.series[1].enableAnimation = true;
        }
        else {
            smithchart.series[0].enableAnimation = false;
            smithchart.series[1].enableAnimation = false;
        }
        smithchart.refresh();
    };
    tooltipCheckBox.change = tooltipChange = function (e) {
        var boolean = e.checked;
        if (boolean) {
            smithchart.series[0].tooltip.visible = true;
            smithchart.series[1].tooltip.visible = true;
        }
        else {
            smithchart.series[0].tooltip.visible = false;
            smithchart.series[1].tooltip.visible = false;
        }
        smithchart.refresh();
    };
    legendCheckBox.change = legendChange = function (e) {
        var boolean = e.checked;
        if (boolean) {
            smithchart.legendSettings.visible = true;
            mode.enabled = true;
        }
        else {
            smithchart.legendSettings.visible = false;
            mode.enabled = false;
        }
        smithchart.refresh();
    };
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        width: 90,
        change: function () {
            var element = mode.value.toString();
            smithchart.legendSettings.position = element;
            smithchart.refresh();
        }
    });
    mode.appendTo('#legend1');
};