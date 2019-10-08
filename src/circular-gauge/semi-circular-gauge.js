/** 
 * Semi circular gauge sample.
*/
this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        // custom code start
        load: function (args) {
            var semitheme = location.hash.split('/')[1];
            semitheme = semitheme ? semitheme : 'Material';
            args.gauge.theme = (semitheme.charAt(0).toUpperCase() + semitheme.slice(1));
        },
        // custom code end
        moveToCenter: false,
        axes: [{
            hideIntersectingLabel: true,
            startAngle: 270, endAngle: 90,
            lineStyle: { width: 0, color: '#0450C2' },
            labelStyle: {
                position: 'Outside', autoAngle: true,
                font: { fontWeight: 'normal' }
            }, majorTicks: {
                position: 'Inside', width: 2, height: 12, interval: 4
            }, minorTicks: {
                position: 'Inside', height: 5, width: 1, interval: 2
            },
            radius: '80%', minimum: 0, maximum: 100,
            pointers: [{
                animation: { enable: false },
                value: 30,
                radius: '75%',
                color: '#FF9200',
                pointerWidth: 7,
                cap: { radius: 8, color: '#565656', border: { width: 0 } },
                needleTail: { length: '13%', color: '#FF9200' }
            }]
        }]
    });
    circulargauge.appendTo('#gauge');
    // code for Property Panel
    var opacity;
    var highlightCheckBox = new ej.buttons.CheckBox({
        change: opacity, checked: false,
    }, '#angle');
    highlightCheckBox.change = opacity = function (e) {
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
    document.getElementById('start').onpointermove = document.getElementById('start').ontouchmove =
        document.getElementById('start').onchange = function () {
            var min = parseInt(document.getElementById('start').value, 10);
            document.getElementById('rangeStart').innerHTML = 'Start Angle <span> &nbsp;&nbsp;&nbsp;' + min + '°';
            circulargauge.axes[0].startAngle = min;
            circulargauge.refresh();
        };
    document.getElementById('end').onpointermove = document.getElementById('end').ontouchmove =
        document.getElementById('end').onchange = function () {
            var max = parseInt(document.getElementById('end').value, 10);
            document.getElementById('rangeEnd').innerHTML = 'End Angle <span> &nbsp;&nbsp;&nbsp;' + max + '°';
            circulargauge.axes[0].endAngle = max;
            circulargauge.refresh();
        };
    document.getElementById('radius').onpointermove = document.getElementById('radius').ontouchmove =
        document.getElementById('radius').onchange = function () {
            var max = parseInt(document.getElementById('radius').value, 10);
            document.getElementById('radius1').innerHTML = 'Radius <span> &nbsp;&nbsp;&nbsp;' + max + '%';
            circulargauge.axes[0].radius = '' + max + '%';
            circulargauge.refresh();
        };
    document.getElementById('centerX').onpointermove = document.getElementById('centerX').ontouchmove =
        document.getElementById('centerX').onchange = function () {
            if (!highlightCheckBox.checked) {
                var max = parseInt(document.getElementById('centerX').value, 10);
                document.getElementById('center1').innerHTML = 'Center X <span> &nbsp;&nbsp;&nbsp;' + max + '%';
                circulargauge.centerX = '' + max + '%';
                circulargauge.refresh();
            }
        };
    document.getElementById('centerY').onpointermove = document.getElementById('centerY').ontouchmove =
        document.getElementById('centerY').onchange = function () {
            if (!highlightCheckBox.checked) {
                var max = parseInt(document.getElementById('centerY').value, 10);
                document.getElementById('center2').innerHTML = 'Center Y <span> &nbsp;&nbsp;&nbsp;' + max + '%';
                circulargauge.centerY = '' + max + '%';
                circulargauge.refresh();
            }
        };
        var intersectionChanage;
        var labelIntersectionCheckBox = new ej.buttons.CheckBox({
            change: intersectionChanage, checked: true,
        }, '#hidelabel');
        labelIntersectionCheckBox.change = opacity = function (e) {
            circulargauge.axes[0].hideIntersectingLabel = e.checked;
            circulargauge.refresh();
        };
};
