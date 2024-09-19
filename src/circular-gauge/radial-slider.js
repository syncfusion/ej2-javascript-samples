this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        dragMove: function (args) {
            pointerValue = args.currentValue;
            if (pointerValue != null) {
                circulargauge.setPointerValue(0, 0, pointerValue);
                circulargauge.setRangeValue(0, 0, 0, pointerValue);
                circulargauge.setRangeValue(0, 1, pointerValue, 100);
                circulargauge.setAnnotationValue(0, 0, '<div style="font-style: oblique; margin-left: 8px;font-size: 20px;"><span>' + Math.ceil(pointerValue) + '%</span></div>');
            }
        },
        enablePointerDrag: true,
        background:'transparent',
        axes: [{
            radius: '80%',
            startAngle: 0,
            endAngle: 0,
            majorTicks: {
                height: 0
            },
            lineStyle: { width: 0 },
            minorTicks: {
                height: 0
            },
            labelStyle: {
                font: {
                    size: '0px'
                },
                offset: -1
            },
            pointers: [{
                value: 30,
                type: 'Marker',
                markerShape: 'Circle',
                radius: '97%',
                markerHeight: 25,
                markerWidth: 25,
                color: '#2C75DC',
                animation: {
                    enable: false,
                },
            }],
            ranges: [
                {
                    start: 0, end: 30, color: '#2C75DC', startWidth: 12, endWidth: 12, radius: '100%'
                },
                {
                    start: 30, end: 100, color: '#BFD6F5', startWidth: 12, endWidth: 12, radius: '100%'
                },
            ],
            annotations: [{
                content: '<div style="font-style: oblique; margin-left: 8px;font-size: 20px;"><span>30%</span></div>',
                angle: 180,
                radius: '0%',
                zIndex: '1'
            }]
        }],
        load: function (args) {
            // custom code start
            var selectedSliderTheme = location.hash.split('/')[1];
            selectedSliderTheme = selectedSliderTheme ? selectedSliderTheme : 'Material';
            args.gauge.theme = (selectedSliderTheme.charAt(0).toUpperCase() +
                selectedSliderTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    circulargauge.appendTo('#gauge');
};