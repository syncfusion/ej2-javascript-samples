var needlePointer = 0.2;
var needleStartWidth = 1;
var needleStartWidthOne = 2;

this.default = function () {
    var pointerInterval = 0;
    var circulargauge = new ej.circulargauge.CircularGauge({
        background: 'transparent',
        axes: [{
            radius: '90%',
            startAngle: 0,
            endAngle: 0,
            minimum: 0,
            maximum: 12,
            majorTicks: {
                width: 2, height: 15, interval: 1, offset: 5
            },
            lineStyle: { width: 2 },
            minorTicks: {
                width: 1, height: 10, interval: 0.2, offset: 5
            },
            labelStyle: {
                font: {
                    fontFamily: 'inherit'
                },
                offset: 10,
                hiddenLabel: 'First'
            },
            pointers: [{
                value: 10.2,
                radius: '70%',
                pointerWidth: 3,
                needleStartWidth: needleStartWidthOne,
                needleEndWidth: 1,
                cap: {
                    radius: 5,
                    color: 'white',
                    border: { width: 1, color: '#00A885' }
                },
                needleTail: {
                    length: "0%",
                },
                animation: {
                    enable: false,
                },
            },
            {
                value: 2,
                radius: '100%',
                pointerWidth: 3,
                needleStartWidth: needleStartWidth,
                needleEndWidth: 1,
                cap: {
                    radius: 5,
                    color: 'white',
                    border: { width: 1, color: '#00A885' }
                },
                needleTail: {
                    length: "0%",
                },
                animation: {
                    enable: false,
                },
            },
            {
                value: 12,
                radius: '90%',
                pointerWidth: 3,
                needleStartWidth: needleStartWidth,
                needleEndWidth: 1,
                color: '#00A8B5',
                cap: {
                    radius: 5,
                    color: 'white',
                    border: { width: 1, color: '#00A885' }
                },
                needleTail: {
                    length: "25%",
                    color: '#00A8B5'
                },
                animation: {
                    enable: false,
                },
            }],
            annotations: [{
                description:'Sub gauge one',
                content: '<div id="subGaugeOne" style="margin-left: -50%"></div>',
                angle: 290,
                radius: '0%',
                zIndex: '1'
            }, {
                description:'Sub gauge two',
                content: '<div id="subGaugeTwo" style="margin-left: -110%;margin-top: -50%;"></div>',
                angle: 90,
                radius: '0%',
                zIndex: '1'
            }]
        }],
        load: function (args) {
            var clockTheme1 = location.hash.split('/')[1];
            clockTheme1 = clockTheme1 ? clockTheme1 : 'Material';
            args.gauge.theme = (clockTheme1.charAt(0).toUpperCase() +
            clockTheme1.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        resized: function (args) {
            var timeoutId = setTimeout(function() {
                if (document.getElementById('gauge')) {
                    renderGauges();
                } else {
                    clearInterval(+timeoutId);
                }
            }, 1000);
        },
        loaded: function (args) {
            renderGauges();
            if (pointerInterval === 0) {
                pointerInterval = setInterval(function () {
                    if (document.getElementById('gauge')) {
                        if (needlePointer <= 12) {
                            if (needlePointer == 0.2) {
                                needlePointer = 0.2;
                            }
                            circulargauge.setPointerValue(0, 2, needlePointer);
                            needlePointer += 0.2;
                        }
                        else {
                            needlePointer = 0.2;
                        }
                    }
                    else {
                        clearInterval(+pointerInterval);
                    }
                }, 1000);
            }
        },
    });
    circulargauge.appendTo('#gauge');
};
function renderGauges() {
    var annotationGaugeTwo = new ej.circulargauge.CircularGauge({
        width: '150px',
        height: '150px',
        background: 'transparent',
        axes: [{
            labelStyle: { hiddenLabel: 'First', font: { fontFamily: 'inherit', size: '7px' }, offset: -5 },
            majorTicks: { offset: 2, interval: 2 },
            minorTicks: { offset: 2, interval: 0.4 }, minimum: 0, maximum: 12,
            pointers: [{
                value: 8,
                radius: '50%', pointerWidth: 2, color: '#00A8B5',
                animation: { enable: false },
                cap: { radius: 0 }, needleTail: { length: '0%' }
            }], startAngle: 0, endAngle: 0, radius: '70%', lineStyle: { width: 2 }
        }],
        load: function (args) {
            // custom code start
            var clockTheme2 = location.hash.split('/')[1];
            clockTheme2 = clockTheme2 ? clockTheme2 : 'Material';
            args.gauge.theme = (clockTheme2.charAt(0).toUpperCase() +
                clockTheme2.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    annotationGaugeTwo.appendTo('#subGaugeTwo');
    var annotationGaugeOne = new ej.circulargauge.CircularGauge({
        width: '150px',
        height: '150px',
        background: 'transparent',
        axes: [{
            labelStyle: { hiddenLabel: 'First', font: { fontFamily: 'inherit', size: '7px' }, offset: -5 },
            pointers: [{
                value: 5,
                radius: '50%', pointerWidth: 2,
                color: '#00A8B5',
                animation: { enable: false },
                cap: { radius: 0 }, 
                needleTail: { length: '0%' }
            }], startAngle: 0, endAngle: 0, radius: '70%', lineStyle: { width: 2 },
            majorTicks: { interval: 2, offset: 2 },
            minorTicks: { interval: 0.4, offset: 2 }, minimum: 0, maximum: 12,
        }],
        load: function (args) {
            // custom code start
            var clockTheme3 = location.hash.split('/')[1];
            clockTheme3 = clockTheme3 ? clockTheme3 : 'Material';
            args.gauge.theme = (clockTheme3.charAt(0).toUpperCase() +
                clockTheme3.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5').replace(/-high/i, 'High');
            // custom code end
        }
    });
    annotationGaugeOne.appendTo('#subGaugeOne');
}