this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        centerY: '65%',
        background: 'transparent',
        axes: [{
            radius: '80%',
            startAngle: 0,
            endAngle: 0,
            majorTicks: {
                width: 0,
            },
            lineStyle: { width: 0 },
            minorTicks: {
                width: 0,
            },
            labelStyle: {
                format:'{value} %',
                font: {
                    size: '0px'
                },
            },
            annotations: [{
                description:'Axis background',
                angle: 0,
                radius: '0%',
                zIndex: '1',
                content: '<div style="margin-top: -37%;display: flex;justify-content: center;"><img alt="Axis background image" src="./src/circular-gauge/images/axis-background.png" height="400" width="400" /></div>'
            },
            {
                description:'Sub gauge',
                angle: 0,
                radius: '0%',
                zIndex: '1',
                content: '<div id="subGauge" style="margin-left: -50%; margin-top: -46%;"></div>'
            }, {
                description:'Annotation value : 90',
                angle: 10,
                radius: '0%',
                zIndex: '1',
                content: '<div style="color:orange;margin-top: -84px;margin-left: 0px;font-size: 18px;"> 90</div>'
            }],
            pointers: [{
                cap: {
                    radius: 8,
                    border: { width: 0 }
                },
                needleTail: {
                    length: '25%',
                },
            }]
        }],
        load: function (args) {
            // custom code start
            var axisBackgroundTheme = location.hash.split('/')[1];
            axisBackgroundTheme = axisBackgroundTheme ? axisBackgroundTheme : 'Material';
            args.gauge.theme = (axisBackgroundTheme.charAt(0).toUpperCase() +
            axisBackgroundTheme.slice(1)).replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5').replace(/-dark/i, 'Dark');
            // custom code end
        },
        resized: function (args) {
            window.location.reload();
        },
        loaded: function (args) {
            updateGauge();
        }
    });
    circulargauge.appendTo('#gauge');
};
function updateGauge() {
    var annotationGauge = new ej.circulargauge.CircularGauge({
        centerY: '45%',
        titleStyle: { color: 'black', size: '16px' },
        width: '600px',
        height: '450px',
        background: 'transparent',
        axes: [{
            labelStyle: { hiddenLabel: 'First', font: { fontFamily: 'inherit', color: 'White' } },
            majorTicks: { height: 15, interval: 30 },
            minorTicks: { height: 10, interval: 6 }, minimum: 0, maximum: 360,
            pointers: [{
                description:'Marker pointer value : 90',
                value: 90,
                radius: '45%', markerWidth: 12, markerHeight: 12,
                type: 'Marker', markerShape: 'Triangle', color: 'Orange',
                animation: { enable: true, duration: 500 }
            }], startAngle: 0, endAngle: 0, radius: '60%', lineStyle: { width: 0 }
        }],
        load: function (args) {
            // custom code start
            var selectedAnnotationTheme = location.hash.split('/')[1];
            selectedAnnotationTheme = selectedAnnotationTheme ? selectedAnnotationTheme : 'Material';
            args.gauge.theme = (selectedAnnotationTheme.charAt(0).toUpperCase() +
                selectedAnnotationTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        },
        resized: function (args) {
            window.location.reload();
        }
    });
    annotationGauge.appendTo('#subGauge');
}