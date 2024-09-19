this.default = function () {
    document.getElementById('horizontal').onclick = function (e) {
        document.getElementById('containerBox').style.padding = "0%";
        if (e.currentTarget != null) {
            e.currentTarget.style.color = "white";
            e.currentTarget.style.backgroundColor = "#0074E3";
            document.getElementById('vertical').style.color = "black";
            document.getElementById('vertical').style.backgroundColor = "white";
        }
        gauge5.width = gauge4.width = gauge3.width = gauge2.width = gauge1.width = '450px';
        gauge5.height = gauge4.height = gauge3.height = gauge2.height = gauge1.height = '150px';
        gauge2.orientation = gauge3.orientation = gauge1.orientation = gauge4.orientation = gauge5.orientation = "Horizontal";
        document.getElementById('container1').className = document.getElementById('container2').className =
        document.getElementById('container3').className = document.getElementById('container4').className =
        document.getElementById('container5').className = "col-xs-12 col-sm-12 col-lg-12 col-md-12";
    };
    document.getElementById('vertical').onclick = function (e) {
        if (e.currentTarget != null) {
            e.currentTarget.style.color = "white"; e.currentTarget.style.backgroundColor = "#0074E3";
            document.getElementById('horizontal').style.color = "black";
            document.getElementById('horizontal').style.backgroundColor = "white";
        }
        document.getElementById('containerBox').style.padding = "4%";
        gauge5.orientation = gauge4.orientation = gauge3.orientation = gauge2.orientation = gauge1.orientation = "Vertical";
        gauge1.width = gauge2.width = gauge3.width = gauge4.width = gauge5.width = '200px';
        gauge1.height = gauge2.height = gauge3.height = gauge4.height = gauge5.height = '350px';
        document.getElementById('container1').className = document.getElementById('container2').className =
        document.getElementById('container3').className = document.getElementById('container4').className =
        document.getElementById('container5').className = "col-xs-4 col-sm-4 col-lg-2 col-md-2";
    };
    var gauge1 = new ej.lineargauge.LinearGauge({
        title: 'Outside',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        width:'150px',
        height:'350px',
        background:'transparent',
        animationDuration: 2000,
        axes: [{
            line: {
                width: 5
            },
            majorTicks: {
                interval: 20, height: 7, width: 1
            },
            minorTicks: {
                interval: 10, height: 3
            },
            pointers: [{
                value: 70,
                height: 5,
                width: 5,
                placement: 'Near',
                type: 'Bar',
                position: 'Outside',
                color: '#0074E3',
                animationDuration: 1500
            }
            ],
            minimum: 0,
            maximum: 100,
            opposedPosition: true,
            labelStyle: { font: { fontFamily: 'inherit' } }
        }],
        load: function (args) {
            // custom code start
            var barPointerTheme = location.hash.split('/')[1];
            barPointerTheme = barPointerTheme ? barPointerTheme : 'Material';
            args.gauge.theme = (barPointerTheme.charAt(0).toUpperCase() +
                barPointerTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    gauge1.appendTo('#gauge1');
    
    var gauge2 = new ej.lineargauge.LinearGauge({
        title: 'Cross',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        width:'150px',
        height:'350px',
        background:'transparent',
        animationDuration: 2000,
        axes: [{
            line: {
                width: 5
            },
            minimum: 0,
            maximum: 100,
            pointers: [{
                value: 70,
                height: 5,
                width: 5,
                placement: 'Near',
                type: 'Bar',
                position: 'Cross',
                color: '#0074E3',
                animationDuration: 1500
            }
            ],
            opposedPosition: true,
            labelStyle: { font: { fontFamily: 'inherit' } },
            majorTicks: {
                interval: 20, height: 7, width: 1
            },
            minorTicks: {
                interval: 10, height: 3
            },
        }],
        load: function (args) {
            // custom code start
            var barPointerTheme2 = location.hash.split('/')[1];
            barPointerTheme2 = barPointerTheme2 ? barPointerTheme2 : 'Material';
            args.gauge.theme = (barPointerTheme2.charAt(0).toUpperCase() +
                barPointerTheme2.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    gauge2.appendTo('#gauge2');

    var gauge3 = new ej.lineargauge.LinearGauge({
        title: 'Inside',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        width:'150px',
        height:'350px',
        background:'transparent',
        animationDuration: 2000,
        axes: [{
            line: {
                width: 5
            },
            pointers: [{
                value: 70,
                height: 5,
                width: 5,
                placement: 'Near',
                type: 'Bar',
                position: 'Inside',
                color: '#0074E3',
                animationDuration: 1500
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
            var barPointerTheme3 = location.hash.split('/')[1];
            barPointerTheme3 = barPointerTheme3 ? barPointerTheme3 : 'Material';
            args.gauge.theme = (barPointerTheme3.charAt(0).toUpperCase() +
                barPointerTheme3.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    gauge3.appendTo('#gauge3');

    var gauge4 = new ej.lineargauge.LinearGauge({
        title: 'Gradient shader',
        width:'150px',
        height:'350px',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        background:'transparent',
        animationDuration: 2000,
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
                value: 70,
                height: 5,
                width: 5,
                offset: 2,
                placement: 'Near',
                type: 'Bar',
                position: 'Outside',
                color: '#0074E3',
                animationDuration: 1500,
                linearGradient: {
                    startValue: "0%",
                    endValue: "100%",
                    colorStop: [
                        { color: "#FB7D55", offset: "0%", opacity: 1 },
                        { color: "#ECC85B", offset: "50%", opacity: 1 },
                        { color: "#6FC78A", offset: "100%", opacity: 1 }
                    ]
                }
            }
            ],
            minimum: 0,
            maximum: 100,
            opposedPosition: true
        }],
        load: function (args) {
            // custom code start
            var barPointerTheme4 = location.hash.split('/')[1];
            barPointerTheme4 = barPointerTheme4 ? barPointerTheme4 : 'Material';
            args.gauge.theme = (barPointerTheme4.charAt(0).toUpperCase() +
                barPointerTheme4.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    gauge4.appendTo('#gauge4');

    var gauge5 = new ej.lineargauge.LinearGauge({
        title: 'Multiple bar pointers',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        width:'150px',
        height:'350px',
        background:'transparent',
        animationDuration: 2000,
        axes: [{
            line: {
                width: 5
            },
            labelStyle: {
                font: { fontFamily: 'inherit' }
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
            pointers: [{
                value: 10,
                height: 5,
                width: 5,
                placement: 'Near',
                type: 'Bar',
                position: 'Inside',
                color: '#0074E3',
                animationDuration: 1500
            },
            {
                value: 70,
                height: 5,
                width: 5,
                placement: 'Near',
                type: 'Bar',
                position: 'Outside',
                color: 'red',
                animationDuration: 1500
            }
            ],
            minimum: 0,
            maximum: 100,
            opposedPosition: true
        }],
        load: function (args) {
            // custom code start
            var barPointerTheme5 = location.hash.split('/')[1];
            barPointerTheme5 = barPointerTheme5 ? barPointerTheme5 : 'Material';
            args.gauge.theme = (barPointerTheme5.charAt(0).toUpperCase() +
                barPointerTheme5.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    gauge5.appendTo('#gauge5');
};