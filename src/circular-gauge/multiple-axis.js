/**
 * Sample for Multiple Axes
 */
this.default = function () {
    var axisIndex = 0;
    var axis;
    var direction;
    var circulargauge = new ej.circulargauge.CircularGauge({
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        //custom code end
        title: 'Gauge with Multiple Axes',
        titleStyle: { color: 'gray', size: '16px' },
        axes: [{
            lineStyle: { width: 1.5, color: ' #9E9E9E' },
            radius: '95%',
            labelStyle: {
                position: 'Inside', autoAngle: true,
                hiddenLabel: 'None'
            }, majorTicks: {
                position: 'Inside',
                width: 2, height: 10, color: '#757575'
            }, minorTicks: {
                position: 'Inside', width: 2,
                height: 5, color: '#757575'
            },
            minimum: 0, maximum: 160, startAngle: 220, endAngle: 140,
            pointers: [{
                value: 80, radius: '100%', color: '#333333',
                markerHeight: 15, markerWidth: 15, type: 'Marker',
                markerShape: 'Triangle',
            }]
        }, {
            lineStyle: { width: 1.5, color: '#E84011' }, radius: '95%',
            labelStyle: {
                position: 'Outside', autoAngle: true,
                hiddenLabel: 'None', font: { color: '#E84011' }
            }, majorTicks: {
                position: 'Outside', width: 2, height: 10,
                color: '#E84011'
            }, minorTicks: {
                position: 'Outside', width: 2,
                height: 5, color: '#E84011'
            },
            minimum: 0, maximum: 240, startAngle: 220, endAngle: 140,
            pointers: [{
                value: 120, radius: '100%', color: '#C62E0A',
                markerHeight: 15, markerWidth: 15, type: 'Marker',
                markerShape: 'InvertedTriangle',
            }]
        }]
    });
    circulargauge.appendTo('#axis-container');
    // code for Property Panel
    axis = new ej.dropdowns.DropDownList({
        index: 0, width: 120,
        change: function () {
            axisIndex = +axis.value;
            direction.value = circulargauge.axes[axisIndex].direction;
            var startAngle = circulargauge.axes[axisIndex].startAngle;
            var endAngle = circulargauge.axes[axisIndex].endAngle;
            document.getElementById('start').innerHTML = 'Start Angle <span> &nbsp;&nbsp;&nbsp;' + startAngle;
            document.getElementById('end').innerHTML = 'End Angle <span> &nbsp;&nbsp;&nbsp;' + endAngle;
            document.getElementById('startAngle').value = startAngle.toString();
            document.getElementById('endAngle').value = endAngle.toString();
        }
    });
    axis.appendTo('#axisIndex');
    direction = new ej.dropdowns.DropDownList({
        index: 0, width: 120,
        change: function () {
            circulargauge.axes[axisIndex].direction = direction.value.toString();
            circulargauge.axes[0].pointers[0].animation.enable = false;
            circulargauge.axes[1].pointers[0].animation.enable = false;
            circulargauge.refresh();
        }
    });
    direction.appendTo('#axisDirection');
    document.getElementById('startAngle').onpointermove = document.getElementById('startAngle').ontouchmove =
        document.getElementById('startAngle').onchange = function () {
            var value = parseInt(document.getElementById('startAngle').value, 10);
            circulargauge.axes[0].pointers[0].animation.enable = false;
            circulargauge.axes[1].pointers[0].animation.enable = false;
            circulargauge.axes[axisIndex].startAngle = value;
            document.getElementById('start').innerHTML = 'Start Angle <span> &nbsp;&nbsp;&nbsp;' + value;
            circulargauge.axes[axisIndex].labelStyle.hiddenLabel =
                ej.circulargauge.isCompleteAngle(circulargauge.axes[axisIndex].startAngle, circulargauge.axes[axisIndex].endAngle) ?
                    'First' : 'None';
            circulargauge.refresh();
        };
    document.getElementById('endAngle').onpointermove = document.getElementById('endAngle').ontouchmove =
        document.getElementById('endAngle').onchange = function () {
            var value = parseInt(document.getElementById('endAngle').value, 10);
            circulargauge.axes[0].pointers[0].animation.enable = false;
            circulargauge.axes[1].pointers[0].animation.enable = false;
            circulargauge.axes[axisIndex].endAngle = value;
            document.getElementById('end').innerHTML = 'End Angle <span> &nbsp;&nbsp;&nbsp;' + value;
            circulargauge.axes[axisIndex].labelStyle.hiddenLabel =
                ej.circulargauge.isCompleteAngle(circulargauge.axes[axisIndex].startAngle, circulargauge.axes[axisIndex].endAngle) ?
                    'First' : 'None';
            circulargauge.refresh();
        };
};