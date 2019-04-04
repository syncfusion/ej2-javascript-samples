/**
 * Sample for Range
 */
this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        axes: [{
            lineStyle: { width: 10, color: 'transparent' },
            labelStyle: {
                position: 'Inside', useRangeColor: false,
                font: { size: '12px', fontFamily: 'Roboto', fontStyle: 'Regular' }
            }, majorTicks: { height: 10, width: 0.5, offset: 10 }, minorTicks: { height: 0, width: 0.5 },
            annotations: [{
                content: '<div><span style="font-size:14px; color:#9E9E9E; font-family:Regular">Speedometer</span></div>',
                radius: '30%', angle: 0, zIndex: 1
            }, {
                content: '<div><span style="font-size:20px; color:#424242; font-family:Regular">65 MPH</span></div>',
                radius: '40%', angle: 180, zIndex: 1
            }],
            startAngle: 210, endAngle: 150, minimum: 0, maximum: 120, radius: '80%',
            ranges: [{ start: 0, end: 40, color: '#30B32D' }, { start: 40, end: 80, color: '#FFDD00' },
            { start: 80, end: 120, color: '#F03E3E' }],
            pointers: [{
                value: 65, radius: '60%', pointerWidth: 8,
                cap: { radius: 7 }, needleTail: { length: '18%' }
            }]
        }],
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        // custom code end
    });
    circulargauge.appendTo('#range-container');
    // Code for Property Panel
    var colortObj;
    var listObj = new ej.dropdowns.DropDownList({
        index: 0, width: 120,
        change: function () {
            var index = +listObj.value;
            colortObj.value = circulargauge.axes[0].ranges[index].color;
            (document.getElementById('endWidth')).value = circulargauge.axes[0].ranges[index].endWidth.toString();
            document.getElementById('rangeEndWidth').innerHTML = 'End Width <span> &nbsp;&nbsp;&nbsp;' +
                circulargauge.axes[0].ranges[index].endWidth;
            (document.getElementById('startWidth')).value = circulargauge.axes[0].ranges[index].startWidth.toString();
            document.getElementById('rangeStartWidth').innerHTML = 'Start Width <span> &nbsp;&nbsp;&nbsp;' +
                circulargauge.axes[0].ranges[index].startWidth;
            (document.getElementById('end')).value = circulargauge.axes[0].ranges[index].end.toString();
            document.getElementById('rangeEnd').innerHTML = 'Range End <span> &nbsp;&nbsp;&nbsp;' +
                circulargauge.axes[0].ranges[index].end;
            (document.getElementById('start')).value = circulargauge.axes[0].ranges[index].start.toString();
            document.getElementById('rangeStart').innerHTML = 'Range Start <span> &nbsp;&nbsp;&nbsp;' +
                circulargauge.axes[0].ranges[index].start;
            document.getElementById('radius').value = circulargauge.axes[0].ranges[index].roundedCornerRadius.toString();
            document.getElementById('cornerRadius').innerHTML = 'Corner Radius <span>    ' +
                circulargauge.axes[0].ranges[index].roundedCornerRadius;
        }
    });
    listObj.appendTo('#rangeSelect');

    colortObj = new ej.dropdowns.DropDownList({
        index: 0, width: 120,
        change: function () {
            circulargauge.axes[0].ranges[+listObj.value].color = colortObj.value.toString();
            circulargauge.axes[0].pointers[0].animation.enable = false; circulargauge.refresh();
        }
    });
    colortObj.appendTo('#rangeColor');

    document.getElementById('start').onpointermove = document.getElementById('start').ontouchmove =
        document.getElementById('start').onchange = function () {
            var min = parseInt((document.getElementById('start')).value, 10);
            document.getElementById('rangeStart').innerHTML = 'Range Start <span> &nbsp;&nbsp;&nbsp;' + min;
            circulargauge.axes[0].ranges[+listObj.value].start = min;
            circulargauge.axes[0].pointers[0].animation.enable = false; circulargauge.refresh();
        };

    document.getElementById('end').onpointermove = document.getElementById('end').ontouchmove =
        document.getElementById('end').onchange = function () {
            var max = parseInt((document.getElementById('end')).value, 10);
            document.getElementById('rangeEnd').innerHTML = 'Range End <span> &nbsp;&nbsp;&nbsp;' + max;
            circulargauge.axes[0].ranges[+listObj.value].end = max;
            circulargauge.axes[0].pointers[0].animation.enable = false; circulargauge.refresh();
        };

    document.getElementById('startWidth').onpointermove = document.getElementById('startWidth').ontouchmove =
        document.getElementById('startWidth').onchange = function () {
            var startWidth = parseInt((document.getElementById('startWidth')).value, 10);
            document.getElementById('rangeStartWidth').innerHTML = 'Start Width <span> &nbsp;&nbsp;&nbsp;' + startWidth;
            circulargauge.axes[0].ranges[+listObj.value].startWidth = startWidth;
            circulargauge.axes[0].pointers[0].animation.enable = false; circulargauge.refresh();
        };

    document.getElementById('endWidth').onpointermove = document.getElementById('endWidth').ontouchmove =
        document.getElementById('endWidth').onchange = function () {
            var endWidth = parseInt((document.getElementById('endWidth')).value, 10);
            document.getElementById('rangeEndWidth').innerHTML = 'End Width <span> &nbsp;&nbsp;&nbsp;' + endWidth;
            circulargauge.axes[0].ranges[+listObj.value].endWidth = endWidth;
            circulargauge.axes[0].pointers[0].animation.enable = false; circulargauge.refresh();
        };

    document.getElementById('radius').onpointermove = document.getElementById('radius').ontouchmove =
        document.getElementById('radius').onchange = function () {
            var radius = parseInt((document.getElementById('radius')).value, 10);
            document.getElementById('cornerRadius').innerHTML = 'Corner Radius <span> &nbsp;&nbsp;&nbsp;' + radius;
            circulargauge.axes[0].ranges[+listObj.value].roundedCornerRadius = radius;
            circulargauge.axes[0].pointers[0].animation.enable = false; circulargauge.refresh();
        };

    document.getElementById('enable').onchange = function () {
        var useRangeColor = (document.getElementById('enable')).checked;
        circulargauge.axes[0].labelStyle.useRangeColor = useRangeColor;
        circulargauge.axes[0].majorTicks.useRangeColor = useRangeColor;
        circulargauge.axes[0].minorTicks.useRangeColor = useRangeColor;
        circulargauge.axes[0].pointers[0].animation.enable = false; circulargauge.refresh();
    };
};