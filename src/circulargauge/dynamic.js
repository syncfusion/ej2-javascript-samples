define(["require", "exports", "@syncfusion/ej2-circulargauge", "@syncfusion/ej2-circulargauge", "./dynamic-gauge"], function (require, exports, ej2_circulargauge_1, ej2_circulargauge_2, dynamic_gauge_1) {
    "use strict";
    var _this = this;
    Object.defineProperty(exports, "__esModule", { value: true });
    this.default = function () {
        var toolTipInterval;
        var toolTipInterval1;
        var GEARS = [0.14, 0.06, 0.035, 0.027, 0.019];
        var speed = 0;
        var skip = 0;
        var gear = 0;
        var count = 0;
        var start = true;
        var circulargauge1 = new ej2_circulargauge_1.CircularGauge(dynamic_gauge_1.gauge());
        circulargauge1.appendTo('#dynamic-container');
        var circulargauge2 = new ej2_circulargauge_1.CircularGauge(dynamic_gauge_1.gauge1());
        circulargauge2.appendTo('#rpm');
        var circulargauge3 = new ej2_circulargauge_1.CircularGauge(dynamic_gauge_1.gauge2());
        circulargauge3.appendTo('#fuel');
        var circulargauge4 = new ej2_circulargauge_1.CircularGauge(dynamic_gauge_1.gauge3());
        circulargauge4.appendTo('#battery');
        _this.toolTipInterval1 = setInterval(function () {
            if (document.getElementById('dynamic-container')) {
                if (speed < 200 && start) {
                    count = 0;
                    circulargauge1.axes[0].pointers[0].animation.duration = 30;
                    circulargauge2.axes[0].pointers[0].animation.duration = 30;
                    if (GEARS[gear] * speed > 4 && gear < GEARS.length) {
                        gear++;
                        skip = 400 / 50;
                    }
                    if (skip-- < 0) {
                        speed += 0.6 - (0.0017 * speed);
                    }
                    circulargauge1.setPointerValue(0, 0, speed);
                    circulargauge1.setAnnotationValue(1, 3, Math.round(speed) + ' KM/H');
                    circulargauge2.setPointerValue(0, 0, GEARS[gear] * speed + 0.9);
                }
                else {
                    count = count + 1;
                    if (start) {
                        if (count < 200) {
                            circulargauge1.setAnnotationValue(1, 3, Math.round((Math.random() * (200 - 202) + 202)) + ' KM');
                            circulargauge1.setPointerValue(0, 0, Math.random() * (200 - 202) + 202);
                        }
                        else {
                            speed = 0;
                            gear = 0;
                            circulargauge1.axes[0].pointers[0].animation.duration = 2000;
                            circulargauge2.axes[0].pointers[0].animation.duration = 2000;
                            circulargauge1.setPointerValue(0, 0, speed);
                            circulargauge1.setAnnotationValue(1, 3, Math.round(speed) + ' KM/H');
                            circulargauge2.setPointerValue(0, 0, 0);
                            start = false;
                        }
                    }
                    else {
                        start = count > 350;
                    }
                }
            }
            else {
                clearInterval(_this.toolTipInterval1);
            }
        }, 50);
    };
});
