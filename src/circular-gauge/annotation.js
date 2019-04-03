function gauge1() {
    var gauge1 = new ej.circulargauge.CircularGauge({
        centerY: '45%',
        resized: function (args) {
            location.reload();
        },
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        // custom code end
        titleStyle: { color: 'black', size: '16px' },
        axes: [
            {
                startAngle: 0, endAngle: 0,
                lineStyle: { width: 0 }, radius: ej.base.Browser.isDevice ? '90%' : '70%',
                ranges: [
                    {
                        start: 0, end: 3,
                        color: 'rgb(128,128,128)'
                    }, {
                        start: 3, end: 12,
                        color: 'rgb(192,192,192)'
                    }
                ],
                annotations: [{
                    angle: 270, radius: '50%', zIndex: '1',
                    content: '<div id="minutes" style="width:75px;height:75px;"></div>'
                }, {
                    angle: 180, radius: '50%', zIndex: '1',
                    content: '<div id="seconds" style="width:75px;height:75px;"></div>'
                }, {
                    angle: 90, zIndex: '1',
                    radius: '40%',
                    content: '<div id="hr" style="background-color:rgb(128,128,128); color:white;font-size:12px;">11:11 AM</div>'
                }, {
                    angle: 360, radius: '50%', zIndex: '1',
                    content: '<div id="tm" style="font-size:10px;">21-06-17</div>'
                }],
                labelStyle: {
                    hiddenLabel: 'First', autoAngle: false
                }, majorTicks: {
                    width: 2, height: 14, interval: 1
                }, minorTicks: {
                    height: 4, width: 1, interval: 0.2
                },
                minimum: 0, maximum: 12,
                pointers: [{
                    pointerWidth: 5, radius: '40%',
                    border: { width: 0 },
                    cap: { radius: 0, border: { width: 0 } },
                    needleTail: { length: '0%' }, animation: { enable: false }
                }, {
                    radius: '60%', pointerWidth: 5,
                    border: {
                        width: 0
                    },
                    cap: {
                        radius: 0,
                        border: {
                            width: 0
                        }
                    },
                    needleTail: {
                        length: '0%'
                    }, animation: {
                        enable: false
                    }
                }, {
                    radius: '70%',
                    pointerWidth: 1,
                    cap: {
                        radius: 4,
                        border: {
                            width: 2
                        }
                    },
                    border: {
                        width: 2
                    },
                    needleTail: {
                        length: '20%',
                        border: {
                            width: 2
                        },
                    }, animation: {
                        enable: false,
                        duration: 500
                    }
                }]
            }
        ]
    });
    return gauge1;
}
function gauge2() {
    var gauge2 = new ej.circulargauge.CircularGauge({
        background: 'transparent',
        titleStyle: { color: 'black' },
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        // custom code end
        axes: [
            {
                startAngle: 0, endAngle: 0,
                ranges: [
                    {
                        startWidth: 4, endWidth: 4,
                        start: 0, end: 3,
                        color: 'rgb(128,128,128)'
                    }, {
                        color: 'rgb(192,192,192)',
                        start: 3, end: 12,
                        startWidth: 4, endWidth: 4
                    }
                ],
                lineStyle: { width: 0 },
                annotations: [{
                    angle: 270,
                    radius: '40%',
                    content: null
                }, {
                    angle: 180,
                    radius: '40%',
                    content: null
                }, {
                    angle: 90,
                    radius: '50%',
                    content: null
                }, {
                    radius: '35%',
                    angle: 360, zIndex: '1',
                    content: '<div id="tm" style="font-size:10px;">21-06-17</div>'
                }], majorTicks: {
                    width: 1,
                    height: 5,
                    interval: 1
                },
                labelStyle: {
                    hiddenLabel: 'First',
                    font: {
                        size: '0px'
                    },
                    autoAngle: false
                }, minorTicks: {
                    height: 3,
                    width: 0.5,
                    interval: 0.2
                },
                minimum: 0,
                maximum: 12,
                pointers: [{
                    radius: '70%',
                    pointerWidth: 2,
                    cap: {
                        radius: 2,
                        border: {
                            width: 0.2
                        }
                    },
                    needleTail: {
                        length: '10%'
                    }, animation: {
                        enable: false,
                        duration: 500
                    }
                }]
            }
        ]
    });
    return gauge2;
}

function calcTime(offset) {
    var date = new Date();
    var localTime = date.getTime();
    var localOffset = date.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;
    var curretDate = new Date(utc + (3600000 * (+offset)));
    return curretDate;
}
this.default = function () {
    var clockInterval;
    var intervalExecute = true;
    var indianTime = new ej.circulargauge.CircularGauge(gauge1());
    var subGauge1;
    var subGauge2;
    indianTime.appendTo('#clockgauge');
    updateSubGauge1.apply(this);
    updateSubGauge2.apply(this);
    function updateSubGauge1() {
        subGauge1 = new ej.circulargauge.CircularGauge(gauge2());
        subGauge1.appendTo('#minutes');
    }
    function updateSubGauge2() {
        var _this = this;
        subGauge2 = new ej.circulargauge.CircularGauge({
            background: 'transparent',
            // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
            },
            // custom code end
            axes: [{
                ranges: [{ start: 0, end: 3, startWidth: 4, endWidth: 4, color: 'rgb(128,128,128)' },
                { start: 3, end: 12, startWidth: 4, endWidth: 4, color: 'rgb(192,192,192)' }],
                annotations: [{ angle: 270, radius: '40%', content: null },
                { angle: 180, radius: '40%', content: null },
                { angle: 90, radius: '50%', content: null },
                { angle: 360, radius: '35%', zIndex: '1', content: '<div id="tm" style="font-size:10px;">21-06-17</div>' }],
                majorTicks: { width: 1, height: 5, interval: 1 },
                labelStyle: { hiddenLabel: 'First', font: { size: '0px' }, autoAngle: false },
                pointers: [{
                    cap: {
                        radius: 2, border: { width: 0.2 }
                    }, needleTail: { length: '10%' }, animation: { enable: false, duration: 500 },
                    radius: '70%', pointerWidth: 2,
                }], startAngle: 0, endAngle: 0, lineStyle: { width: 0 },
                minorTicks: { height: 3, width: 0.5, interval: 0.2 }, minimum: 0, maximum: 12,
            }],
            loaded: intervalExecute ? (function (args) {
                if (intervalExecute) {
                    updateTime(false);
                    _this.clockInterval = setInterval(function () {
                        updateTime(true, _this.clearInterval);
                    }, 1000);
                    intervalExecute = false;
                }
            }) : null
        });
        subGauge2.appendTo('#seconds');
    }
    function updateTime(enable, interval) {
        if (document.getElementById('clockgauge') && document.getElementsByClassName('e-circulargauge')) {
            getTime('+5.5', indianTime, enable);
            if (document.getElementById('minutes').childElementCount) {
                getTime('+5.5', subGauge1, enable, true);
            }
            else {
                updateSubGauge1();
                getTime('+5.5', subGauge1, enable, true);
            }
            if (document.getElementById('seconds').childElementCount) {
                getTime('+5.5', subGauge2, enable, true);
            }
            else {
                updateSubGauge2();
                getTime('+5.5', subGauge2, enable, true);
            }
        }
        else {
            clearInterval(interval);
        }
    }
    function getTime(offset, gauge, enable, subGauge) {
        var returnTime = calcTime(offset);
        var seconds = returnTime.getSeconds() * 12 / 60;
        seconds = seconds === 0 ? 12 : seconds;
        if (!subGauge) {
            gauge.axes[0].pointers[2].animation.enable = enable;
            gauge.axes[0].pointers[2].currentValue = seconds === 0.2 ? 0 : gauge.axes[0].pointers[2].currentValue;
        }
        else {
            gauge.axes[0].pointers[0].currentValue = seconds === 0.2 ? 0 : gauge.axes[0].pointers[0].currentValue;
            gauge.axes[0].pointers[0].animation.enable = (gauge.element.id === 'seconds' && enable);
        }
        var hour = (returnTime.getHours() + returnTime.getMinutes() / 60) % 12;
        var minutes = returnTime.getMinutes() * 12 / 60 + returnTime.getSeconds() * 12 / 3600;
        var content;
        var hourValue;
        if (subGauge) {
            if (gauge.element.id === 'minutes') {
                content = '<div id="tm" style="font-size:8px;">' + Math.floor(returnTime.getMinutes()) + ' M</div>';
                gauge.setPointerValue(0, 0, minutes);
                gauge.setAnnotationValue(0, 3, content);
            }
            else {
                gauge.setPointerValue(0, 0, seconds);
                content = '<div id="tm" style="font-size:8px;">' + Math.floor(returnTime.getSeconds()) + ' S</div>';
                gauge.setAnnotationValue(0, 3, content);
            }
        }
        else {
            gauge.setPointerValue(0, 0, hour);
            gauge.setPointerValue(0, 1, minutes);
            gauge.setPointerValue(0, 2, seconds);
            hourValue = (Math.floor(returnTime.getHours()) % 12);
            content = '<div id="hr" style="background-color:rgba(226, 226, 226, 0.4);' +
                'color:rgba(29,29,29,0.9);padding:4px;font-size:12px;">' +
                (hourValue === 0 ? 12 : hourValue) + ':' + Math.floor(returnTime.getMinutes()) +
                (returnTime.getHours() >= 12 ? ' PM' : ' AM') + '</div>';
            gauge.setAnnotationValue(0, 2, content);
            var date = new Date();
            content = '<div id="tm" style="font-size:10px;">' + date.getDate() + '-' +
                (date.getMonth() + 1) + '-' + date.getFullYear() + '</div>';
            gauge.setAnnotationValue(0, 3, content);
        }
    }
};