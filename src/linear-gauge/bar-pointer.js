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
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            // custom code end
        }
    });
    gauge3.appendTo('#gauge3');

    var gauge4 = new ej.lineargauge.LinearGauge({
        title: 'Gradient shader',
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
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
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
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            // custom code end
        }
    });
    gauge5.appendTo('#gauge5');
};