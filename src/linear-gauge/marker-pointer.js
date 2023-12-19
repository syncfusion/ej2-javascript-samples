this.default = function () {
    document.getElementById('horizontal').onclick = function (e) {
        document.getElementById('containerBox').style.padding = "0%"; 
        document.getElementById('container1').className = document.getElementById('container2').className =
        document.getElementById('container3').className = document.getElementById('container4').className =
        document.getElementById('container5').className = "col-xs-12 col-sm-12 col-lg-12 col-md-12";
        gauge1.width = gauge2.width = gauge3.width = gauge4.width = gauge5.width = '450px';
        gauge1.height = gauge2.height = gauge3.height = gauge4.height = gauge5.height = '150px';
        gauge1.orientation = gauge2.orientation = gauge3.orientation = gauge4.orientation = gauge5.orientation = "Horizontal";
        if (e.currentTarget != null) {
            e.currentTarget['style']['color'] = "white";
            e.currentTarget['style']['backgroundColor'] = "#0074E3";
            document.getElementById('vertical').style.color = "black";
            document.getElementById('vertical').style.backgroundColor = "white";
        }
    };
    document.getElementById('vertical').onclick = function (e) {
        document.getElementById('containerBox').style.padding = "4%";
        document.getElementById('container1').className = document.getElementById('container2').className =
        document.getElementById('container3').className = document.getElementById('container4').className =
        document.getElementById('container5').className = "col-xs-4 col-sm-4 col-lg-2 col-md-2";
        gauge1.width = gauge2.width = gauge3.width = gauge4.width = gauge5.width = '200px';
        gauge1.height = gauge2.height = gauge3.height = gauge4.height = gauge5.height = '350px';
        gauge1.orientation = gauge2.orientation = gauge3.orientation = gauge4.orientation = gauge5.orientation = "Vertical";
        if (e.currentTarget != null) {
            e.currentTarget['style']['color'] = "white";
            e.currentTarget['style']['backgroundColor'] = "#0074E3";
            document.getElementById('horizontal')['style']['color'] = "black";
            document.getElementById('horizontal')['style']['backgroundColor'] = "white";
        }
    };
    var gauge1 = new ej.lineargauge.LinearGauge({
        dragStart: function (args) {
            if (args.pointerIndex == 1) {
                gauge1.axes[0].pointers[0].animationDuration = 0;
                gauge1.axes[0].pointers[1].animationDuration = 0;
            }
        },
        dragEnd: function (args) {
            if (args.pointerIndex == 1) {
                gauge1.axes[0].pointers[0].animationDuration = 1500;
                gauge1.axes[0].pointers[1].animationDuration = 1500;
            }
        },
        dragMove: function (args) {
            if (args.pointerIndex == 1) {
                gauge1.setPointerValue(0, 0, args.currentValue);
            }
        },
        height: '350px',
        width:'150px',
        title: 'Inverted triangle',
        background:'transparent',
        animationDuration: 2000,
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        axes: [{
            line: {
                width: 5
            },
            pointers: [{
                width: 5,
                value: 40,
                height: 5,
                placement: 'Near',
                type: 'Bar',
                offset: 12,
                color: '#0074E3',
                animationDuration: 1500
            }, {
                width: 15,
                value: 40,
                height: 15,
                enableDrag: true,
                placement: 'Near',
                markerType: 'Triangle',
                animationDuration: 1500
            }
            ],
            majorTicks: {
                interval: 20, height: 7, width: 1
            },
            minorTicks: {
                interval: 10, height: 3
            },
            minimum: 0,
            maximum: 100,
            opposedPosition: true,
            labelStyle: { font: { fontFamily: 'inherit' } }
        }],
        load: function (args) {
            // custom code start
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            // custom code end
        }
    });
    gauge1.appendTo('#gaugeTriangle');

    var gauge2 = new ej.lineargauge.LinearGauge({
        dragStart: function (args) {
            if (args.pointerIndex == 1) {
                gauge2.axes[0].pointers[0].animationDuration = 0;
                gauge2.axes[0].pointers[1].animationDuration = 0;
            }
        },
        dragEnd: function (args) {
            if (args.pointerIndex == 1) {
                gauge2.axes[0].pointers[0].animationDuration = 1500;
                gauge2.axes[0].pointers[1].animationDuration = 1500;
            }
        },
        dragMove: function (args) {
            if (args.pointerIndex == 1) {
                gauge2.setPointerValue(0, 0, args.currentValue);
            }
        },
        height: '350px',
        width:'150px',
        background:'transparent',
        animationDuration: 2000,
        title: 'Circle',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        axes: [{
            line: {
                width: 5
            },
            pointers: [{
                width: 5,
                value: 20,
                height: 5,
                placement: 'Near',
                type: 'Bar',
                offset: 12,
                color: '#0074E3',
                animationDuration: 1500
            }, {
                width: 15,
                value: 20,
                height: 15,
                enableDrag: true,
                placement: 'Near',
                markerType: 'Circle',
                animationDuration: 1500
            }
            ],
            majorTicks: {
                interval: 20, height: 7, width: 1
            },
            minorTicks: {
                interval: 10, height: 3
            },
            minimum: 0,
            maximum: 100,
            opposedPosition: true,
            labelStyle: { font: { fontFamily: 'inherit' } }
        }],
        load: function (args) {
            // custom code start
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            // custom code end
        }
    });
    gauge2.appendTo('#gaugeCircle');

    var gauge3 = new ej.lineargauge.LinearGauge({
        dragStart: function (args) {
            if (args.pointerIndex == 1) {
                gauge3.axes[0].pointers[0].animationDuration = 0;
                gauge3.axes[0].pointers[1].animationDuration = 0;
            }
        },
        dragEnd: function (args) {
            if (args.pointerIndex == 1) {
                gauge3.axes[0].pointers[0].animationDuration = 1500;
                gauge3.axes[0].pointers[1].animationDuration = 1500;
            }
        },
        dragMove: function (args) {
            if (args.pointerIndex == 1) {
                gauge3.axes[0].pointers[1].text = Math.round(args.currentValue).toString() + " Points";
                gauge3.setPointerValue(0, 0, args.currentValue);
            }
        },
        title: 'Text',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        height: '350px',
        width:'168px',
        background:'transparent',
        animationDuration: 2000,
        axes: [{
            line: {
                width: 5
            },
            pointers: [{
                width: 5,
                value: 50,
                height: 5,
                placement: 'Near',
                type: 'Bar',
                offset: 12,
                color: '#0074E3',
                animationDuration: 1500
            }, {
                width: 15,
                value: 50,
                height: 15,
                enableDrag: true,
                placement: 'Near',
                markerType: 'Text',
                text:'50 Points',
                textStyle:{ fontFamily: 'inherit' },
                animationDuration: 1500,
                offset:-10
            }
            ],
            minimum: 0,
            maximum: 100,
            opposedPosition: true,
            majorTicks: {
                interval: 20, height: 7, width: 1
            },
            minorTicks: {
                interval: 10, height: 3
            },
            labelStyle: { font: { fontFamily: 'inherit' } }
        }],
        load: function (args) {
            // custom code start
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            // custom code end
        }
    });
    gauge3.appendTo('#gaugeText');

    var gauge4 = new ej.lineargauge.LinearGauge({
        dragStart: function (args) {
            if (args.pointerIndex == 1) {
                gauge4.axes[0].pointers[0].animationDuration = 0;
                gauge4.axes[0].pointers[1].animationDuration = 0;
            }
        },
        dragEnd: function (args) {
            if (args.pointerIndex == 1) {
                gauge4.axes[0].pointers[0].animationDuration = 1500;
                gauge4.axes[0].pointers[1].animationDuration = 1500;
            }
        },
        dragMove: function (args) {
            if (args.pointerIndex == 1) {
                gauge4.setPointerValue(0, 0, args.currentValue);
            }
        },
        height: '350px',
        width:'150px',
        title: 'Rectangle',
        background:'transparent',
        animationDuration: 2000,
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        axes: [{
            line: {
                width: 5
            },
            majorTicks: {
                interval: 20,
                height: 7,
                width: 1
            },
            minorTicks: {
                interval: 10,
                height: 3
            },
            labelStyle: {
                font: { fontFamily: 'inherit' }
            },
            pointers: [{
                width: 5,
                value: 30,
                height: 5,
                placement: 'Near',
                type: 'Bar',
                offset: 12,
                color: '#0074E3',
                animationDuration: 1500
            }, {
                width: 15,
                value: 30,
                height: 5,
                enableDrag: true,
                placement: 'Near',
                markerType: 'Rectangle',
                animationDuration: 1500
            }
            ],
            minimum: 0,
            maximum: 100,
            opposedPosition: true
        }],
        load: function (args) {
            // custom code start
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            // custom code end
        }
    });
    gauge4.appendTo('#gaugeRectangle');

    var gauge5 = new ej.lineargauge.LinearGauge({
        dragStart: function (args) {
            if (args.pointerIndex == 1) {
                gauge5.axes[0].pointers[0].animationDuration = 0;
                gauge5.axes[0].pointers[1].animationDuration = 0;
            }
        },
        dragEnd: function (args) {
            if (args.pointerIndex == 1) {
                gauge5.axes[0].pointers[0].animationDuration = 1500;
                gauge5.axes[0].pointers[1].animationDuration = 1500;
            }
        },
        dragMove: function (args) {
            if (args.pointerIndex == 1) {
                gauge5.setPointerValue(0, 0, args.currentValue);
            }
        },
        height: '350px',
        width:'150px',
        background:'transparent',
        animationDuration: 2000,
        title: 'Multiple pointers',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        axes: [{
            line: {
                width: 5
            },
            majorTicks: {
                interval: 20,
                height: 7,
                width: 1
            },
            minorTicks: {
                interval: 10,
                height: 3
            },
            labelStyle: {
                font: { fontFamily: 'inherit' }
            },
            pointers: [{
                width: 5,
                value: 10,
                height: 5,
                placement: 'Near',
                type: 'Bar',
                offset: 12,
                color: '#0074E3',
                animationDuration: 1500
            }, {
                width: 15,
                value: 10,
                height: 15,
                enableDrag: true,
                placement: 'Near',
                markerType: 'Triangle',
                animationDuration: 1500
            }, {
                width: 15,
                value: 100,
                height: 15,
                enableDrag: true,
                placement: 'Near',
                markerType: 'Diamond',
                animationDuration: 1500
            }
            ],
            minimum: 0,
            maximum: 100,
            opposedPosition: true
        }],
        load: function (args) {
            // custom code start
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            // custom code end
        }
    });
    gauge5.appendTo('#gaugeMultiple');
};
