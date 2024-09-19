this.default = function () {
    var isMajorTicks = true;
    var circulargauge = new ej.circulargauge.CircularGauge({
        background:'transparent',
        axes: [{
            annotations: [{
                content: '<div id="content" style="color:#518C03;font-size:20px;font-family:inherit;font-weight:semibold;">145</div>',
                angle: 0, radius: '0%', zIndex: '1',
            }],
            startAngle: 210, endAngle: 150,
            lineStyle: { width: 2, color: '#9E9E9E' },
            labelStyle: {
                position: 'Outside', autoAngle: true,
                font: { size: '10px', fontFamily: 'inherit' }
            }, majorTicks: {
                position: 'Inside', color: '#757575', width: 2, height: 10, interval: 20
            }, minorTicks: {
                position: 'Inside', color: '#757575', height: 5, width: 2, interval: 10
            },
            radius: '84%', minimum: 0, maximum: 170,
            pointers: [{
                animation: { enable: false }, value: 145,
                type: 'RangeBar', roundedCornerRadius: 10,
                color: '#8BC34A', radius: '60%', pointerWidth: 7,
            }]
        }],
        load: function (args) {
            // custom code start
            var ticksAndLabelsTheme = location.hash.split('/')[1];
            ticksAndLabelsTheme = ticksAndLabelsTheme ? ticksAndLabelsTheme : 'Material';
            args.gauge.theme = (ticksAndLabelsTheme.charAt(0).toUpperCase() +
                ticksAndLabelsTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    circulargauge.appendTo('#labels-container');

    var ticks = new ej.dropdowns.DropDownList({
        index: 0, width: '100%',
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
            document.getElementById('offset').innerHTML = tick.offset.toString();
            document.getElementById('height').innerHTML = tick.height.toString();
        }
    });
    ticks.appendTo('#Ticks');

    var tickPosition = new ej.dropdowns.DropDownList({
        index: 0, width: '100%',
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
    
    var labelPosition = new ej.dropdowns.DropDownList({
        index: 0, width: '100%',
        change: function () {
            circulargauge.axes[0].labelStyle.position = labelPosition.value.toString();
            circulargauge.refresh();
        }
    });
    labelPosition.appendTo('#labelposition');
    
    var tickOffsetInput = document.getElementById('tickOffset');
    tickOffsetInput.addEventListener('input', function () {
        var value = parseInt(tickOffsetInput.value, 10);
        if (isMajorTicks) {
            circulargauge.axes[0].majorTicks.offset = value;
        } else {
            circulargauge.axes[0].minorTicks.offset = value;
        }
        document.getElementById('offset').innerHTML = value.toString();
        circulargauge.refresh();
    });

    var tickHeightInput = document.getElementById('tickHeight');
    tickHeightInput.addEventListener('input', function () {
        var value = parseInt(tickHeightInput.value, 10);
        if (isMajorTicks) {
            circulargauge.axes[0].majorTicks.height = value;
        }
        else {
            circulargauge.axes[0].minorTicks.height = value;
        }
        document.getElementById('height').innerHTML = value.toString();
        circulargauge.refresh();
    });
    
    var labelOffsetInput = document.getElementById('labelOffset');
    labelOffsetInput.addEventListener('input', function () {
        var value = parseInt(labelOffsetInput.value, 10);
        circulargauge.axes[0].labelStyle.offset = value;
        document.getElementById('labelOffsetValue').innerHTML = value.toString();
        circulargauge.refresh();
    });
    var enableRTLChange;
    var enableRTLCheckbox = new ej.buttons.CheckBox({
        change: enableRTLChange, checked: false,
    }, '#showLastLabel');
    enableRTLCheckbox.change = enableRTLChange = function (e) {
        var showLabel = e.checked;
        circulargauge.axes[0].showLastLabel = showLabel;
        circulargauge.refresh();
    };
};