/**
 * Sample for label
 */
this.default = function () {
    var isMajorTicks = true;
    var circulargauge = new ej.circulargauge.CircularGauge({
        axes: [{
            annotations: [{
                content: '<div id="content" style="color:#518C03;font-size:20px;font-family:Segoe UI;font-weight:semibold;">145</div>',
                angle: 0, radius: '0%', zIndex: '1',
            }],
            startAngle: 210, endAngle: 150,
            lineStyle: { width: 2, color: '#9E9E9E' },
            labelStyle: {
                position: 'Outside', autoAngle: true,
                font: { size: '10px' }
            }, majorTicks: {
                position: 'Inside', color: '#757575', width: 2, height: 10, interval: 20
            }, minorTicks: {
                position: 'Inside', color: '#757575', height: 5, width: 2, interval: 10
            },
            radius: '75%', minimum: 0, maximum: 170,
            pointers: [{
                animation: { enable: false }, value: 145,
                type: 'RangeBar', roundedCornerRadius: 10,
                color: '#8BC34A', radius: '60%', pointerWidth: 10,
            }]
        }],
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        }
        // custom code end
    });
    circulargauge.appendTo('#labels-container');
    var ticks;
    var tickPosition;
    var labelPosition;
    ticks = new ej.dropdowns.DropDownList({
        index: 0, width: 120,
        change: function () {
            var value = ticks.value.toString();
            var tick;
            isMajorTicks = value === 'major';
            if (isMajorTicks) {
                tick = circulargauge.axes[0].majorTicks;
            }
            else {
                tick = circulargauge.axes[0].minorTicks;
            }
            tickPosition.value = tick.position;
            document.getElementById('tickOffset').value = tick.offset.toString();
            document.getElementById('tickHeight').value = tick.height.toString();
            document.getElementById('offset').innerHTML = 'Tick Offset <span>&nbsp;&nbsp;&nbsp;' + tick.offset;
            document.getElementById('height').innerHTML = 'Tick Height <span>&nbsp;&nbsp;&nbsp;' + tick.height;
        }
    });
    ticks.appendTo('#Ticks');
    tickPosition = new ej.dropdowns.DropDownList({
        index: 0, width: 120,
        change: function () {
            var value = tickPosition.value.toString();
            if (isMajorTicks) {
                circulargauge.axes[0].majorTicks.position = value;
            }
            else {
                circulargauge.axes[0].minorTicks.position = value;
            }
            circulargauge.refresh();
        }
    });
    tickPosition.appendTo('#tickposition');

    // Code for property panel
    labelPosition = new ej.dropdowns.DropDownList({
        index: 0, width: 120,
        change: function () {
            circulargauge.axes[0].labelStyle.position = labelPosition.value.toString();
            circulargauge.refresh();
        }
    });
    labelPosition.appendTo('#labelposition');
    document.getElementById('tickOffset').onpointermove = document.getElementById('tickOffset').ontouchmove =
        document.getElementById('tickOffset').onchange = function () {
            var value = parseInt(document.getElementById('tickOffset').value, 10);
            if (isMajorTicks) {
                circulargauge.axes[0].majorTicks.offset = value;
            }
            else {
                circulargauge.axes[0].minorTicks.offset = value;
            }
            document.getElementById('offset').innerHTML = 'Tick Offset <span>&nbsp;&nbsp;&nbsp;' + value;
            circulargauge.refresh();
        };
    document.getElementById('tickHeight').onpointermove = document.getElementById('tickHeight').ontouchmove =
        document.getElementById('tickHeight').onchange = function () {
            var value = parseInt(document.getElementById('tickHeight').value, 10);
            if (isMajorTicks) {
                circulargauge.axes[0].majorTicks.height = value;
            }
            else {
                circulargauge.axes[0].minorTicks.height = value;
            }
            document.getElementById('height').innerHTML = 'Tick Height <span>&nbsp;&nbsp;&nbsp;' + value;
            circulargauge.refresh();
        };
    document.getElementById('labelOffset').onpointermove = document.getElementById('labelOffset').ontouchmove =
        document.getElementById('labelOffset').onchange = function () {
            var value = parseInt(document.getElementById('labelOffset').value, 10);
            circulargauge.axes[0].labelStyle.offset = value;
            document.getElementById('labelOffsetValue').innerHTML = 'Label Offset <span>&nbsp;&nbsp;&nbsp;' + value;
            circulargauge.refresh();
        };
    var enableRTLChange;
    var enableRTLCheckbox = new ej.buttons.CheckBox({
        change: enableRTLChange, checked: false,
    }, '#showLastLabel');
    enableRTLCheckbox.change = enableRTLChange =  function (e) {
        var showLabel = e.checked;
        circulargauge.axes[0].showLastLabel = showLabel;
        circulargauge.refresh();
    };
};