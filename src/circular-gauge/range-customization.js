this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        background:'transparent',
        axes: [{
            lineStyle: { width: 10, color: 'transparent' },
            labelStyle: {
                position: 'Inside', useRangeColor: false,
                font: { size: '12px', fontFamily: 'inherit', fontStyle: 'Regular' }
            }, majorTicks: { height: 10, offset: 5 }, minorTicks: { height: 0 },
            annotations: [{
                description:'Speedometer',
                content: '<div><span style="font-size:14px; font-family:inherit">Speedometer</span></div>',
                radius: '30%', angle: 0, zIndex: 1
            }, {
                description:'65 MPH',
                content: '<div><span style="font-size:20px; font-family:inherit">65 MPH</span></div>',
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
        load: function (args) {
            // custom code start
            var selectedRangeTheme = location.hash.split('/')[1];
            selectedRangeTheme = selectedRangeTheme ? selectedRangeTheme : 'Material';
            args.gauge.theme = (selectedRangeTheme.charAt(0).toUpperCase() +
                selectedRangeTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    circulargauge.appendTo('#range-container');

    var listObj = new ej.dropdowns.DropDownList({
        index: 0, width: '100%',
        change: function () {
            var index = +listObj.value;
            colortObj.value = circulargauge.axes[0].ranges[index].color;
            document.getElementById('endWidth').value = circulargauge.axes[0].ranges[index].endWidth.toString();
            document.getElementById('rangeEndWidth').innerHTML = circulargauge.axes[0].ranges[index].endWidth.toString();
            document.getElementById('startWidth').value = circulargauge.axes[0].ranges[index].startWidth.toString();
            document.getElementById('rangeStartWidth').innerHTML = circulargauge.axes[0].ranges[index].startWidth.toString();
            document.getElementById('end').value = circulargauge.axes[0].ranges[index].end.toString();
            document.getElementById('rangeEnd').innerHTML = circulargauge.axes[0].ranges[index].end.toString();
            document.getElementById('start').value = circulargauge.axes[0].ranges[index].start.toString();
            document.getElementById('rangeStart').innerHTML = circulargauge.axes[0].ranges[index].start.toString();
            document.getElementById('radius').value = circulargauge.axes[0].ranges[index].roundedCornerRadius.toString();
            document.getElementById('cornerRadius').innerHTML = circulargauge.axes[0].ranges[index].roundedCornerRadius.toString();
            if (index == 0) {
                document.getElementById('start').min = "0";
                document.getElementById('start').max = "40";
                document.getElementById('end').min = "0";
                document.getElementById('end').max = "40";
            }
            else if (index == 1) {
                document.getElementById('start').min = "40";
                document.getElementById('start').max = "80";
                document.getElementById('end').min = "40";
                document.getElementById('end').max = "80";
            }
            else {
                document.getElementById('start').min = "80";
                document.getElementById('start').max = "120";
                document.getElementById('end').min = "80";
                document.getElementById('end').max = "120";
            }
            document.getElementById('start').value = circulargauge.axes[0].ranges[index].start.toString();
            document.getElementById('end').value = circulargauge.axes[0].ranges[index].end.toString();
            document.getElementById('rangeStart').innerHTML = circulargauge.axes[0].ranges[index].start.toString();
            document.getElementById('radius').value = circulargauge.axes[0].ranges[index].roundedCornerRadius.toString();
            document.getElementById('cornerRadius').innerHTML = circulargauge.axes[0].ranges[index].roundedCornerRadius.toString();
        }
    });
    listObj.appendTo('#rangeSelect');

    var colortObj = new ej.dropdowns.DropDownList({
        index: 0, width: '100%',
        change: function () {
            circulargauge.axes[0].ranges[+listObj.value].color = colortObj.value.toString();
            circulargauge.axes[0].pointers[0].animation.enable = false; circulargauge.refresh();
        }
    });
    colortObj.appendTo('#rangeColor');

    document.getElementById('start').onpointermove = document.getElementById('start').ontouchmove =
        document.getElementById('start').onchange = function () {
            var min = parseInt((document.getElementById('start')).value, 10);
            document.getElementById('rangeStart').innerHTML = min.toString();
            circulargauge.axes[0].ranges[+listObj.value].start = min;
            circulargauge.axes[0].pointers[0].animation.enable = false; circulargauge.refresh();
        };

    document.getElementById('end').onpointermove = document.getElementById('end').ontouchmove =
        document.getElementById('end').onchange = function () {
            var max = parseInt((document.getElementById('end')).value, 10);
            document.getElementById('rangeEnd').innerHTML = max.toString();
            circulargauge.axes[0].ranges[+listObj.value].end = max;
            circulargauge.axes[0].pointers[0].animation.enable = false; circulargauge.refresh();
        };

    document.getElementById('startWidth').onpointermove = document.getElementById('startWidth').ontouchmove =
        document.getElementById('startWidth').onchange = function () {
            var startWidth = parseInt((document.getElementById('startWidth')).value, 10);
            document.getElementById('rangeStartWidth').innerHTML = startWidth.toString();
            circulargauge.axes[0].ranges[+listObj.value].startWidth = startWidth;
            circulargauge.axes[0].pointers[0].animation.enable = false; circulargauge.refresh();
        };

    document.getElementById('endWidth').onpointermove = document.getElementById('endWidth').ontouchmove =
        document.getElementById('endWidth').onchange = function () {
            var endWidth = parseInt((document.getElementById('endWidth')).value, 10);
            document.getElementById('rangeEndWidth').innerHTML = endWidth.toString();
            circulargauge.axes[0].ranges[+listObj.value].endWidth = endWidth;
            circulargauge.axes[0].pointers[0].animation.enable = false; circulargauge.refresh();
        };

    document.getElementById('radius').onpointermove = document.getElementById('radius').ontouchmove =
        document.getElementById('radius').onchange = function () {
            var radius = parseInt((document.getElementById('radius')).value, 10);
            document.getElementById('cornerRadius').innerHTML = radius.toString();
            circulargauge.axes[0].ranges[+listObj.value].roundedCornerRadius = radius;
            circulargauge.axes[0].pointers[0].animation.enable = false; circulargauge.refresh();
        };

    var enableUseRangeColorChangeolorChange;
    var enableUseRangeColorCheckbox = new ej.buttons.CheckBox({
        change: enableUseRangeColorChangeolorChange, checked: false,
    }, '#enable');
    enableUseRangeColorCheckbox.change = enableUseRangeColorChangeolorChange = function (e) {
        var useRangeColor = e.checked;
        circulargauge.axes[0].labelStyle.useRangeColor = useRangeColor;
        circulargauge.axes[0].majorTicks.useRangeColor = useRangeColor;
        circulargauge.axes[0].minorTicks.useRangeColor = useRangeColor;
        circulargauge.axes[0].pointers[0].animation.enable = false;
        circulargauge.refresh();
    };
};