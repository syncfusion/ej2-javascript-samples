this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        moveToCenter: false,
        background:'transparent',
        axes: [{
            hideIntersectingLabel: true,
            startAngle: 270, endAngle: 90,
            lineStyle: { width: 3 },
            labelStyle: {
                position: 'Outside', autoAngle: true,
                font: { fontWeight: 'normal', fontFamily: 'inherit' },
                format: '{value}%'
            }, majorTicks: {
                position: 'Inside', width: 2, height: 15, interval: 10
            }, minorTicks: {
                position: 'Inside', height: 8, width: 1, interval: 2
            },
            radius: '100%', minimum: 0, maximum: 100,
            pointers: [{
                animation: { enable: false },
                value: 30,
                radius: '75%',
                pointerWidth: 7,
                cap: { radius: 8, border: { width: 0 } },
                needleTail: { length: '13%' }
            }]
        }],
        load: function (args) {
            // custom code start
            var selectGaugeTheme = location.hash.split('/')[1];
            selectGaugeTheme = selectGaugeTheme ? selectGaugeTheme : 'Material';
            args.gauge.theme = (selectGaugeTheme.charAt(0).toUpperCase() +
                selectGaugeTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    circulargauge.appendTo('#gauge');

    var radiusAngle;
    var highlightCheckBox = new ej.buttons.CheckBox({
        change: radiusAngle, checked: false,
    }, '#angle');
        
    highlightCheckBox.change = radiusAngle = function (e) {
        var centerX = document.getElementById('centerX');
        var centerY = document.getElementById('centerY');
        if (e.checked) {
            circulargauge.centerX = null;
            circulargauge.centerY = null;
            circulargauge.moveToCenter = true;
            centerX.disabled = true;
            centerY.disabled = true;
        }
        else {
            circulargauge.centerX = centerX.value + '%';
            circulargauge.centerY = centerY.value + '%';
            centerX.disabled = false;
            centerY.disabled = false;
            circulargauge.moveToCenter = false;
        }
        circulargauge.refresh();
    };
    var startInput = document.getElementById('start');
    startInput.addEventListener('input', function () {
        var min = parseInt(startInput.value, 10);
        document.getElementById('rangeStart').innerHTML = min + '°';
        circulargauge.axes[0].startAngle = min;
        circulargauge.refresh();
    });
    var endInput = document.getElementById('end');
    endInput.addEventListener('input', function () {
        var max = parseInt(endInput.value, 10);
        document.getElementById('rangeEnd').innerHTML = max + '°';
        circulargauge.axes[0].endAngle = max;
        circulargauge.refresh();
    });
    var radiusInput = document.getElementById('radius');
    radiusInput.addEventListener('input', function () {
        var max = parseInt(radiusInput.value, 10);
        document.getElementById('radius1').innerHTML = max + '%';
        circulargauge.axes[0].radius = '' + max + '%';
        circulargauge.refresh();
    });
    var centerXInput = document.getElementById('centerX');
    centerXInput.addEventListener('input', function () {
        if (!highlightCheckBox.checked) {
            var max = parseInt(centerXInput.value, 10);
            document.getElementById('center1').innerHTML = max + '%';
            circulargauge.centerX = '' + max + '%';
            circulargauge.refresh();
        }
    });
    var centerYInput = document.getElementById('centerY');
    centerYInput.addEventListener('input', function () {
        if (!highlightCheckBox.checked) {
            var max = parseInt(centerYInput.value, 10);
            document.getElementById('center2').innerHTML = max + '%';
            circulargauge.centerY = '' + max + '%';
            circulargauge.refresh();
        }
    });
    var hiddenLabel;
    var labelIntersectionCheckBox = new ej.buttons.CheckBox({
        checked: true,
    }, '#hidelabel');
    labelIntersectionCheckBox.change = hiddenLabel = function (e) {
        circulargauge.axes[0].hideIntersectingLabel = e.checked;
        circulargauge.refresh();
    };
};
