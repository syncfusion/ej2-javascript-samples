/**
 * Sample for legend
 */
this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        title: 'Measure of wind speed in Km/h',
        legendSettings: {
            visible: true,
            position: 'Bottom'
        },
        axes: [{
            lineStyle: { width: 2 },
            labelStyle: {
                position: 'Inside', useRangeColor: false,
                font: { size: '12px', color: '#424242', fontFamily: 'Roboto', fontStyle: 'Regular' }
            }, majorTicks: { height: 16, color: '#9E9E9E', interval: 20 }, minorTicks: { height: 8, interval: 10 },
            startAngle: 210, endAngle: 150, minimum: 0, maximum: 120, radius: '80%',
            ranges: [
                { start: 0, end: 5, color: '#ccffff', radius: '110%', legendText: 'Light air'},
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
                value: 70, radius: '60%', color: '#757575', pointerWidth: 8,
                cap: { radius: 7, color: '#757575' }, needleTail: { length: '18%' }
            }]
        }],
        // custom code start
        load: function (args) {
            var selectedLegendTheme = location.hash.split('/')[1];
            selectedLegendTheme = selectedLegendTheme ? selectedLegendTheme : 'Material';
            args.gauge.theme = (selectedLegendTheme.charAt(0).toUpperCase() + selectedLegendTheme.slice(1));
        }
        // custom code end
    });
    circulargauge.appendTo('#legend-container');
    // Code for property panel
    document.getElementById('enable').onchange = function () {
        var enableLegend = document.getElementById('enable').checked;
        circulargauge.legendSettings.visible = enableLegend;
        circulargauge.refresh();
    };
    document.getElementById('toggle').onchange = function () {
        var toggle = document.getElementById('toggle').checked;
        circulargauge.legendSettings.toggleVisibility = toggle;
    };
    document.getElementById('alignment').onchange = function (e) {
        var alignment = e.target.value;
        circulargauge.legendSettings.alignment = alignment;
    };
    document.getElementById('shape').onchange = function (e) {
        var shape = e.target.value;
        circulargauge.legendSettings.shape = shape;
    };
    document.getElementById('position').onchange = function (e) {
        var position = e.target.value;
        circulargauge.legendSettings.position = position;
    };
};