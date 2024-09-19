this.default = function () {
    var axisIndex = 0;
    var circulargauge = new ej.circulargauge.CircularGauge({
        background:'transparent',
        axes: [{
            lineStyle: { width: 1.5 },
            radius: '91%',
            labelStyle: {
                position: 'Inside', autoAngle: true,
                hiddenLabel: 'None',
                font: { fontFamily: 'inherit' }
            }, majorTicks: {
                position: 'Inside',
                width: 2, height: 10
            }, minorTicks: {
                position: 'Inside', width: 2,
                height: 5
            },
            minimum: 0, maximum: 160, startAngle: 220, endAngle: 140,
            pointers: [{
                value: 80, radius: '100%',
                markerHeight: 15, markerWidth: 15, type: 'Marker',
                markerShape: 'Triangle',
            }]
        }, {
            lineStyle: { width: 1.5, color: '#E84011' }, radius: '92%',
            labelStyle: {
                position: 'Outside', autoAngle: true,
                hiddenLabel: 'None', font: { fontFamily: 'inherit' }
            }, majorTicks: {
                position: 'Outside', width: 2, height: 10,
                color: '#E84011'
            }, minorTicks: {
                position: 'Outside', width: 2,
                height: 5, color: '#E84011'
            },
            minimum: 0, maximum: 240, startAngle: 220, endAngle: 140,
            pointers: [{
                value: 120, radius: '100%', color: '#E84011',
                markerHeight: 15, markerWidth: 15, type: 'Marker',
                markerShape: 'InvertedTriangle',
            }]
        }],
        load: function (args) {
            // custom code start
            var selectedAxesTheme = location.hash.split('/')[1];
            selectedAxesTheme = selectedAxesTheme ? selectedAxesTheme : 'Material';
            args.gauge.theme = (selectedAxesTheme.charAt(0).toUpperCase() +
                selectedAxesTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            //custom code end
        }
    });
    circulargauge.appendTo('#axis-container');

   var axis = new ej.dropdowns.DropDownList({
        index: 0, width: '100%',
        change: function () {
            axisIndex = +axis.value;
            direction.value = circulargauge.axes[axisIndex].direction;
            var startAngle = circulargauge.axes[axisIndex].startAngle;
            var endAngle = circulargauge.axes[axisIndex].endAngle;
            document.getElementById('start').innerHTML = startAngle;
            document.getElementById('end').innerHTML = endAngle;
            document.getElementById('startAngle').value = startAngle.toString();
            document.getElementById('endAngle').value = endAngle.toString();
        }
    });
    axis.appendTo('#axisIndex');
    var direction = new ej.dropdowns.DropDownList({
        index: 0, width: '100%',
        change: function () {
            circulargauge.axes[axisIndex].direction = direction.value.toString();
            circulargauge.axes[0].pointers[0].animation.enable = false;
            circulargauge.axes[1].pointers[0].animation.enable = false;
            circulargauge.refresh();
        }
    });
    direction.appendTo('#axisDirection');
    var startAngleInput = document.getElementById('startAngle');
    startAngleInput.addEventListener('input', function () {
        var value = parseInt(startAngleInput.value, 10);
        circulargauge.axes[0].pointers[0].animation.enable = false;
        circulargauge.axes[1].pointers[0].animation.enable = false;
        circulargauge.axes[axisIndex].startAngle = value;
        document.getElementById('start').innerHTML = value.toString();
        circulargauge.axes[axisIndex].labelStyle.hiddenLabel =
            ej.circulargauge.isCompleteAngle(circulargauge.axes[axisIndex].startAngle, circulargauge.axes[axisIndex].endAngle) ?
                'First' : 'None';
        circulargauge.refresh();
    });
    var endAngleInput = document.getElementById('endAngle');
    endAngleInput.addEventListener('input', function () {
        var value = parseInt(endAngleInput.value, 10);
        circulargauge.axes[0].pointers[0].animation.enable = false;
        circulargauge.axes[1].pointers[0].animation.enable = false;
        circulargauge.axes[axisIndex].endAngle = value;
        document.getElementById('end').innerHTML = value.toString();
        circulargauge.axes[axisIndex].labelStyle.hiddenLabel =
            ej.circulargauge.isCompleteAngle(circulargauge.axes[axisIndex].startAngle, circulargauge.axes[axisIndex].endAngle) ?
                'First' : 'None';
        circulargauge.refresh();
    });
};