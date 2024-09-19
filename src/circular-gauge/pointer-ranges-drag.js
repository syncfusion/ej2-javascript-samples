this.default = function () {
    var content = '<div style="font-size: 14px;color:#E5C31C;font-weight: lighter;font-style: oblique;"><span>';
    var pointerValue;
    var circulargauge = new ej.circulargauge.CircularGauge({
        enablePointerDrag: true,
        enableRangeDrag: false,
        background:'transparent',
        dragMove: function (args) {
            if (isNaN(args.rangeIndex)) {
                pointerValue = Math.round(args.currentValue);
                document.getElementById('pointerValue').innerHTML = pointerValue;
                document.getElementById('value').value = pointerValue.toString();
                circulargauge.setAnnotationValue(0, 0, content + pointerValue + ' MPH</span></div>');
            }
        },
        dragEnd: function (args) {
            pointerValue = Math.round(args.currentValue);
            if (isNaN(args.rangeIndex)) {
                setPointersValue(circulargauge, pointerValue);
            }
        },
        axes: [{
            annotations: [{
                content: content + '70 MPH</span></div>',
                angle: 180, zIndex: '1',
                radius: '45%'
            }],
            endAngle: 140,
            startAngle: 220,
            lineStyle: { width: 0, color: '#9E9E9E' },
            radius: '80%', minimum: 0,
            maximum: 120,
            majorTicks: { useRangeColor: true },
            minorTicks: { useRangeColor: true },
            labelStyle: { useRangeColor: true, fontFamily: 'Segoe UI' },
            ranges: [{
                start: 0,
                end: 40,
                startWidth: 8, endWidth: 8,
                radius: '108%',
                color: '#30B32D'
            }, {
                start: 40,
                end: 100,
                startWidth: 8, endWidth: 8,
                radius: '108%',
                color: '#E5C31C'
            }, {
                start: 100, end: 120,
                startWidth: 8, endWidth: 8,
                radius: '108%',
                color: '#F03E3E'
            }],
            pointers: [{
                description:'Marker pointer value : 70',
                type: 'Marker', value: 70,
                markerShape: 'InvertedTriangle',
                radius: '110%',
                markerHeight: 20,
                color: '#E5C31C',
                markerWidth: 20
            }, {
                description:'Needle pointer value : 70',
                value: 70,
                radius: '60%',
                cap: { radius: 10, border: { width: 5, color: '#E5C31C' } },
                needleTail: { length: '0%', color: '#E5C31C' },
                color: '#E5C31C',
                markerWidth: 5
            }]
        }],
        load: function (args) {
            // custom code start
            var selectedRangeDragTheme = location.hash.split('/')[1];
            selectedRangeDragTheme = selectedRangeDragTheme ? selectedRangeDragTheme : 'Material';
            args.gauge.theme = (selectedRangeDragTheme.charAt(0).toUpperCase() +
                selectedRangeDragTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    circulargauge.appendTo('#user-container');
    function setPointersValue(circulargauge, pointerValue) {
        var color = ej.circulargauge.getRangeColor(pointerValue, (circulargauge.axes[0].ranges), circulargauge.axes[0].pointers[0].color);
        circulargauge.axes[0].pointers[0].color = color;
        circulargauge.axes[0].pointers[1].color = color;
        circulargauge.axes[0].pointers[0].animation.enable = false;
        circulargauge.axes[0].pointers[1].animation.enable = false;
        circulargauge.axes[0].pointers[0].needleTail.color = color;
        circulargauge.axes[0].pointers[1].needleTail.color = color;
        circulargauge.axes[0].pointers[0].cap.border.color = color;
        circulargauge.axes[0].pointers[1].cap.border.color = color;
        circulargauge.setPointerValue(0, 1, pointerValue);
        circulargauge.setPointerValue(0, 0, pointerValue);
        content = '<div style="font-size: 14px;color:' + color + ';font-weight: lighter;font-style: oblique;"><span>';
        circulargauge.setAnnotationValue(0, 0, content + pointerValue + ' MPH</span></div>');
    }
    document.getElementById('value').ontouchmove = document.getElementById('value').onpointermove =
        document.getElementById('value').onchange = function () {
            var pointerValue = parseInt(document.getElementById('value').value, 10);
            setPointersValue(circulargauge, pointerValue);
            document.getElementById('pointerValue').innerHTML = pointerValue.toString();
        };
        var pointerchange;
        var rangechange;
        var pointerchangeCheckBox = new ej.buttons.CheckBox({
            change: pointerchange,
            checked: true
        }, '#enable');
        pointerchangeCheckBox.change = pointerchange = function (e) {
            var boolean = e.checked;
            circulargauge.enablePointerDrag = boolean;
        };
        var rangechangeCheckBox = new ej.buttons.CheckBox({
            change: rangechange
        }, '#enable1');
        rangechangeCheckBox.change = rangechange = function (e) {
            var boolean = e.checked;
            circulargauge.enableRangeDrag = boolean;
        };
};