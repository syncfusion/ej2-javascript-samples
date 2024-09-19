this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        title: 'Measure of wind speed in Km/h',
        background:'transparent',
        titleStyle: {
            fontFamily: 'inherit'       
        },
        legendSettings: {
            visible: true,
            position: 'Bottom',
            textStyle: {
                fontFamily: 'inherit',
                size: '12px'
            }
        },
        axes: [{
            lineStyle: { width: 2 },
            labelStyle: {
                position: 'Inside', useRangeColor: false, font: { fontFamily: 'inherit' },
            }, majorTicks: { height: 16, color: '#9E9E9E', interval: 20 }, minorTicks: { height: 8, interval: 10 },
            startAngle: 210, endAngle: 150, minimum: 0, maximum: 120, radius: '80%',
            ranges: [
                { start: 0, end: 5, color: '#ccffff', radius: '110%', legendText: 'Light air' },
                { start: 5, end: 11, color: '#99ffff', radius: '110%', legendText: 'Light breeze' },
                { start: 11, end: 19, color: '#99ff99', radius: '110%', legendText: 'Gentle breeze' },
                { start: 19, end: 28, color: '#79ff4d', radius: '110%', legendText: 'Moderate breeze' },
                { start: 28, end: 49, color: '#c6ff1a', radius: '110%', legendText: 'Strong breeze' },
                { start: 49, end: 74, color: '#e6ac00', radius: '110%', legendText: 'Gale' },
                { start: 74, end: 102, color: '#ff6600', radius: '110%', legendText: 'Storm' },
                { start: 102, end: 120, color: '#ff0000', radius: '110%', legendText: 'Hurricane force' },
            ],
            pointers: [{
                animation: { enable: true },
                value: 70, radius: '60%', pointerWidth: 8,
                cap: { radius: 7 }, needleTail: { length: '18%' }
            }]
        }],
        load: function (args) {
            // custom code start
            var selectedLegendTheme = location.hash.split('/')[1];
            selectedLegendTheme = selectedLegendTheme ? selectedLegendTheme : 'Material';
            args.gauge.theme = (selectedLegendTheme.charAt(0).toUpperCase() +
                selectedLegendTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
       }
    });
    circulargauge.appendTo('#legend-container');

    var showLegendVisible;
    var showLegendVisibleCheckBox = new ej.buttons.CheckBox({
        change: showLegendVisible,
        checked: true
    }, '#enable');
    showLegendVisibleCheckBox.change = showLegendVisible = function (e) {
        var boolean = e.checked;
        circulargauge.legendSettings.visible = boolean;
        circulargauge.refresh();
    };
    var toggelLegend;
    var toggelLegendCheckBox = new ej.buttons.CheckBox({
        change: toggelLegend,
        checked: true
    }, '#toggle');

    toggelLegendCheckBox.change = toggelLegend = function (e) {
        var boolean = e.checked;
        circulargauge.legendSettings.toggleVisibility = boolean;
        circulargauge.refresh();
    };
    var labelPosition = new ej.dropdowns.DropDownList({
        index: 0, width: '100%',
        change: function () {
            circulargauge.legendSettings.alignment = labelPosition.value.toString();
            circulargauge.refresh();
        }
    });
    labelPosition.appendTo('#alignment');
    var labelPosition1 = new ej.dropdowns.DropDownList({
        index: 0, width: '100%',
        change: function () {
            circulargauge.legendSettings.shape = labelPosition1.value.toString();
            circulargauge.refresh();
        }
    });
    labelPosition1.appendTo('#shape');
    var labelPosition2 = new ej.dropdowns.DropDownList({
        index: 0, width: '100%',
        change: function () {
            circulargauge.legendSettings.position = labelPosition2.value.toString();
            circulargauge.refresh();
        }
    });
    labelPosition2.appendTo('#position');
};