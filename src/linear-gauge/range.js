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
        title: 'Default',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        background:'transparent',
        width: '150px',
        axes: [{
            line: {
                width: 5
            },
            pointers: [{
                width: 0,
            }],
            ranges: [{
                start: 0,
                end: 100,
                startWidth: 10,
                endWidth: 10,
                color: '#F45656',
                offset: 5
            }],
            majorTicks: {
                interval: 20, height: 7, width: 1, position: 'Outside'
            },
            minorTicks: {
                interval: 10, height: 3, position: 'Outside'
            },
            minimum: 0,
            maximum: 100,
            opposedPosition: true,
            labelStyle: { position: 'Outside', font: { fontFamily: 'inherit' } }
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
        title: 'Exponential',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        width: '150px',
        background:'transparent',
        axes: [{
            line: {
                width: 5
            },
            pointers: [{
                width: 0,
            }],
            ranges: [{
                start: 0,
                end: 50,
                startWidth: 2,
                endWidth: 15,
                color: '#F45656',
                offset: 5
            }, {
                start: 50,
                end: 100,
                startWidth: 15,
                endWidth: 50,
                color: '#F45656',
                offset: 5
            }
            ],
            majorTicks: {
                interval: 20, height: 7, width: 1, position: 'Outside'
            },
            minorTicks: {
                interval: 10, height: 3, position: 'Outside'
            },
            minimum: 0,
            maximum: 100,
            opposedPosition: true,
            labelStyle: { position: 'Outside', font: { fontFamily: 'inherit' } }
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
        title: 'Concave',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        width: '150px',
        background:'transparent',
        axes: [{
            line: {
                width: 5
            },
            pointers: [
                {
                    width: 0,
                }
            ],
            ranges: [{
                start: 0,
                end: 50,
                color: '#F45656',
                startWidth: 50, endWidth: 20,
                offset: 5
            }, {
                start: 50,
                end: 100,
                color: '#F45656',
                startWidth: 20, endWidth: 50,
                offset: 5
            }
            ],
            minimum: 0,
            maximum: 100,
            opposedPosition: true,
            majorTicks: {
                interval: 20, height: 7, width: 1, position: 'Outside'
            },
            minorTicks: {
                interval: 10, height: 3, position: 'Outside'
            },
            labelStyle: { position: 'Outside', font: { fontFamily: 'inherit' } }
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
        width: '150px',
        background:'transparent',
        axes: [{
            line: {
                width: 5
            },
            majorTicks: {
                interval: 20,
                height: 7,
                width: 1,
                position: 'Outside'
            },
            minorTicks: {
                interval: 10,
                height: 3,
                position: 'Outside'
            },
            labelStyle: {
                position: 'Outside',
                font: { fontFamily: 'inherit' }
            },
            pointers: [
                {
                    width: 0
                }
            ],
            ranges: [
                {
                    start: 0,
                    end: 100,
                    linearGradient: {
                        startValue: '0%',
                        endValue: '100%',
                        colorStop: [
                            { color: "#FB7D55", offset: "0%", opacity: 1 },
                            { color: "#ECC85B", offset: "50%", opacity: 1 },
                            { color: "#6FC78A", offset: "100%", opacity: 1 }
                        ]
                    },
                    startWidth: 50,
                    endWidth: 50,
                    offset: 5
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
        title: 'Multiple ranges',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        width: '150px',
        background:'transparent',
        axes: [{
            line: {
                width: 5
            },
            ranges: [
                {
                    start: 0,
                    end: 30,
                    color: '#FB7D55',
                    startWidth: 50,
                    endWidth: 50,
                    offset: 5
                },
                {
                    start: 30,
                    end: 65,
                    color: '#ECC85B',
                    startWidth: 50,
                    endWidth: 50,
                    offset: 5
                },
                {
                    start: 65,
                    end: 100,
                    color: '#6FC78A',
                    startWidth: 50,
                    endWidth: 50,
                    offset: 5
                }
            ],
            majorTicks: {
                interval: 20,
                height: 7,
                width: 1,
                position: 'Outside'
            },
            minorTicks: {
                interval: 10,
                height: 3,
                position: 'Outside'
            },
            labelStyle: {
                position: 'Outside',
                font: { fontFamily: 'inherit' }
            },
            pointers: [
                {
                    width: 0
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