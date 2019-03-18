/**
 * Code for first gauge
 */
function pointeGauge1() {
    var pointeGauge1 = new ej.circulargauge.CircularGauge({
        axes: [{
            startAngle: 270,
            endAngle: 90,
            lineStyle: { width: 3, color: '#ff5985' },
            labelStyle: {
                position: 'Outside',
                font: { size: '0px', color: '#ff5985' }
            }, majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            }, minorTicks: {
                height: 0,
                width: 0,
            },
            radius: '90%',
            minimum: 0,
            maximum: 100,
            pointers: [{
                type: 'RangeBar',
                value: 66,
                radius: '90%',
                color: '#ff5985',
                pointerWidth: 10,
                animation: { enable: true, duration: 1000 }
            }],
            annotations: [
                {
                    angle: 180,
                    radius: '20%', zIndex:1,
                    content: '<div style="color:#757575; font-family:Roboto; font-size:14px;">Range Bar</div>'
                }
            ]
        }],
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        }
        // custom code end
    });
    return pointeGauge1;
}

/**
 * Code for second gauge
*/ 
function pointeGauge2() {
    var pointeGauge2 = new ej.circulargauge.CircularGauge({
        axes: [{
            startAngle: 270,
            endAngle: 90,
            lineStyle: { width: 3, color: '#01aebe' },
            labelStyle: {
                position: 'Outside',
                font: { size: '0px', color: '#01aebe' }
            }, majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            }, minorTicks: {
                height: 0,
                width: 0,
            },
            radius: '90%',
            minimum: 0,
            maximum: 100,
            pointers: [{
                radius: '100%',
                value: 80,
                type: 'Marker',
                markerShape: 'InvertedTriangle',
                markerWidth: 15,
                markerHeight: 15,
                color: 'rgb(0,171,169)'
            }],
            annotations: [
                {
                    angle: 180,
                    radius: '20%', zIndex:1,
                    content: '<div style="color:#757575; font-family:Roboto; font-size:14px;">Inverted Triangle</div>'
                }
            ]
        }],
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        }
        // custom code end
    });
    return pointeGauge2;
}
/**
 * Code for Third Gauge
 */
function pointeGauge3() {
    var pointeGauge3 = new ej.circulargauge.CircularGauge({
        axes: [{
            startAngle: 270,
            endAngle: 90,
            lineStyle: { width: 3, color: '#1E7145' },
            labelStyle: {
                position: 'Outside',
                font: { size: '0px', color: '#1E7145' }
            }, majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            }, minorTicks: {
                height: 0,
                width: 0,
            },
            radius: '90%',
            minimum: 0,
            maximum: 100,
            pointers: [{
                type: 'Marker',
                markerShape: 'Triangle',
                radius: '100%',
                animation: { enable: true, duration: 1000 },
                value: 70,
                markerWidth: 15,
                markerHeight: 15,
                color: '#1E7145',
                border: {
                    width: 1,
                    color: ' #1E7145'
                }
            }],
            annotations: [
                {
                    angle: 180,
                    radius: '20%', zIndex:1,
                    content: '<div style="color:#757575; font-family:Roboto; font-size:14px;">Triangle</div>'
                }
            ]
        }],
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        }
        // custom code end
    });
    return pointeGauge3;
}
/**
 * Code for Fourth gauge
 */
function pointeGauge4() {
    var pointeGauge4 = new ej.circulargauge.CircularGauge({
        centerY: '40%',
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        // custom code end
        axes: [{
            startAngle: 270,
            endAngle: 90,
            lineStyle: { width: 3, color: '#9250e6' },
            labelStyle: {
                position: 'Outside',
                font: { size: '0px', color: '#9250e6' }
            }, majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            }, minorTicks: {
                height: 0,
                width: 0,
            },
            radius: '90%',
            minimum: 0,
            maximum: 100,
            pointers: [{
                radius: '100%',
                animation: { enable: true, duration: 900 },
                value: 70,
                color: '#923C99',
                pointerWidth: 6,
                cap: { radius: 0 },
                needleTail: { length: '4%', color: '#923C99' }
            }],
            annotations: [
                {
                    angle: 180,
                    radius: '20%', zIndex:1,
                    content: '<div style="color:#757575; font-family:Roboto; font-size:14px;">Needle</div>'
                }
            ]
        }],
    });
    return pointeGauge4;
}
/**
 * Code for Fifth gauge
 */
function pointeGauge5() {
    var pointeGauge5 = new ej.circulargauge.CircularGauge({
        centerY: '40%',
        axes: [{
            startAngle: 270,
            endAngle: 90,
            lineStyle: { width: 0 },
            labelStyle: {
                position: 'Outside',
                font: { size: '0px', color: '#067bc2' }
            }, majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            }, minorTicks: {
                height: 0,
                width: 0,
            },
            radius: '90%',
            minimum: 0,
            maximum: 100,
            pointers: [{
                radius: '100%',
                animation: { enable: true, duration: 900 },
                value: 40,
                color: '#067bc2',
                pointerWidth: 6,
                cap: { radius: 0 },
                needleTail: { length: '4%', color: '#067bc2' }
            }, {
                radius: '100%',
                type: 'RangeBar',
                animation: { enable: true, duration: 900 },
                value: 40,
                color: '#067bc2',
                pointerWidth: 5
            }],
            annotations: [
                {
                    angle: 180,
                    radius: '20%', zIndex:1,
                    content: '<div style="color:#757575; font-family:Roboto; font-size:14px;">Live Update</div>'
                }
            ]
        }],
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        }
        // custom code end
    });
    return pointeGauge5;
}
this.default = function () {
    var firstgauge = new ej.circulargauge.CircularGauge(pointeGauge1());
    var pointeGauge5Interval1;
    var gauge6Interval1;
    firstgauge.appendTo('#container2');
    var secondgauge = new ej.circulargauge.CircularGauge(pointeGauge2());
    secondgauge.appendTo('#container1');
    var thirdgauge = new ej.circulargauge.CircularGauge(pointeGauge3());
    thirdgauge.appendTo('#container3');
    var fourthgauge = new ej.circulargauge.CircularGauge({
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        // custom code end
        centerY: '40%',
        axes: [{
            startAngle: 270,
            endAngle: 90,
            lineStyle: { width: 3, color: '#e3a21a' },
            labelStyle: {
                position: 'Outside',
                font: { size: '0px', color: '#e3a21a' }
            }, majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            }, minorTicks: {
                height: 0,
                width: 0,
            },
            radius: '90%',
            minimum: 0,
            maximum: 100,
            pointers: [{
                radius: '80%',
                value: 80,
                markerWidth: 5,
                markerHeight: 5,
                animation: { enable: true, duration: 1000 },
                color: '#e3a21a',
                pointerWidth: 10,
                cap: {
                    radius: 8,
                    color: 'white',
                    border: {
                        color: '#e3a21a',
                        width: 1
                    }
                },
                needleTail: {
                    length: '20%',
                    color: '#e3a21a'
                }
            }, {
                radius: '60%', value: 40,
                markerWidth: 5, markerHeight: 5,
                animation: { duration: 1000 },
                color: '#ffb133',
                pointerWidth: 10,
                cap: {
                    radius: 8, color: 'white',
                    border: { color: '#ffb133', width: 1 }
                },
                needleTail: { length: '20%', color: '#e3a21a' }
            }],
            annotations: [
                {
                    angle: 180,
                    radius: '25%', zIndex:1,
                    content: '<div style="color:#757575; font-family:Roboto; font-size:14px;">Multiple Needle</div>'
                }
            ]
        }],
    });
    fourthgauge.appendTo('#container5');
    var fifthGauge = new ej.circulargauge.CircularGauge(pointeGauge4());
    fifthGauge.appendTo('#container4');
    var sixthGauge = new ej.circulargauge.CircularGauge(pointeGauge5());
    sixthGauge.appendTo('#container6');
    this.pointeGauge5Interval1 = setInterval(function () {
        var newVal = Math.random() * (90 - 20) + 20;
        if (document.getElementById('container5')) {
            fifthGauge.setPointerValue(0, 0, newVal);
        }
        else {
            clearInterval(this.pointeGauge5Interval1);
        }
    }, 1000);
    this.gauge6Interval1 = setInterval(function () {
        var newVal = Math.random() * (80 - 30) + 30;
        if (document.getElementById('container6')) {
            sixthGauge.setPointerValue(0, 0, newVal);
            sixthGauge.setPointerValue(0, 1, newVal);
        }
        else {
            clearInterval(this.gauge6Interval1);
        }
    }, 1000);
};