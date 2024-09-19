this.default = function () {
    document.getElementById('horizontal').onclick = function (e) {
        document.getElementById('container1').className = document.getElementById('container2').className =
        document.getElementById('container3').className = document.getElementById('container4').className = "col-xs-12 col-sm-12 col-lg-12 col-md-12";
        if (e.currentTarget != null) {
            e.currentTarget.style.color = "white";
            e.currentTarget.style.backgroundColor = "#0074E3";
            document.getElementById('vertical').style.color = "black";
            document.getElementById('vertical').style.backgroundColor = "white";
        }
        gauge1.width = gauge2.width = gauge3.width = gauge4.width = '450px';
        gauge1.height = gauge2.height = gauge3.height = gauge4.height = '150px';
        gauge1.orientation = gauge2.orientation = gauge4.orientation = gauge3.orientation = "Horizontal";
    };
    document.getElementById('vertical').onclick = function (e) {
        document.getElementById('container1').className = document.getElementById('container2').className =
        document.getElementById('container3').className = document.getElementById('container4').className = "col-xs-5 col-sm-5 col-lg-3 col-md-3";
        gauge1.width = gauge2.width = gauge3.width = gauge4.width = '200px';
        gauge1.height = gauge2.height = gauge3.height = gauge4.height = '350px';
        if (e.currentTarget != null) {
            e.currentTarget.style.color = "white";
            e.currentTarget.style.backgroundColor = "#0074E3";
            document.getElementById('horizontal').style.color = "black";
            document.getElementById('horizontal').style.backgroundColor = "white";
        }
        gauge1.orientation = gauge2.orientation = gauge3.orientation = gauge4.orientation = "Vertical";
    };

    var gauge1 = new ej.lineargauge.LinearGauge({
        load: function (args) {
            // custom code start
            var selectedTicksTheme1 = location.hash.split('/')[1];
            selectedTicksTheme1 = selectedTicksTheme1 ? selectedTicksTheme1 : 'Material';
            args.gauge.theme = (selectedTicksTheme1.charAt(0).toUpperCase() +
                selectedTicksTheme1.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        },
        title: 'Outside ticks',
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
            ranges: [{
                color: '#C4C7C5',
            }],
            pointers: [{
                width: 0,
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
    });
    gauge1.appendTo('#gauge1');

    var gauge2 = new ej.lineargauge.LinearGauge({
        load: function (args) {
            // custom code start
            var selectedTicksTheme2 = location.hash.split('/')[1];
            selectedTicksTheme2 = selectedTicksTheme2 ? selectedTicksTheme2 : 'Material';
            args.gauge.theme = (selectedTicksTheme2.charAt(0).toUpperCase() +
                selectedTicksTheme2.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        },
        width:'150px',
        height:'350px',
        title: 'Cross ticks',
        background:'transparent',
        animationDuration: 2000,
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        axes: [{
            ranges: [{
                color: '#C4C7C5',
            }],
            line: {
                width: 5
            },
            pointers: [{
                width: 0,
            }],
            majorTicks: {
                interval: 20, height: 7, width: 1, position: 'Cross'
            },
            minorTicks: {
                interval: 10, height: 3, position: 'Cross'
            },
            minimum: 0,
            maximum: 100,
            labelStyle: { font: { fontFamily: 'inherit' } }
        }]
    });
    gauge2.appendTo('#gauge2');

    var gauge3 = new ej.lineargauge.LinearGauge({
        load: function (args) {
            // custom code start
            var selectedTicksTheme3 = location.hash.split('/')[1];
            selectedTicksTheme3 = selectedTicksTheme3 ? selectedTicksTheme3 : 'Material';
            args.gauge.theme = (selectedTicksTheme3.charAt(0).toUpperCase() +
                selectedTicksTheme3.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        },
        width:'150px',
        height:'350px',
        title: 'Inside ticks',
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
            ranges: [{
                color: '#C4C7C5',
            }],
            pointers: [
                {
                    width: 0,
                }
            ],
            minimum: 0,
            maximum: 100,
            opposedPosition: true,
            isInversed: true,
            majorTicks: {
                interval: 20, height: 7, width: 1, position: 'Inside'
            },
            minorTicks: {
                interval: 10, height: 3, position: 'Inside'
            },
            labelStyle: { font: { fontFamily: 'inherit' } }
        }]
    });
    gauge3.appendTo('#gauge3');

    var gauge4 = new ej.lineargauge.LinearGauge({
        load: function (args) {
            // custom code start
            var selectedTicksTheme4 = location.hash.split('/')[1];
            selectedTicksTheme4 = selectedTicksTheme4 ? selectedTicksTheme4 : 'Material';
            args.gauge.theme = (selectedTicksTheme4.charAt(0).toUpperCase() +
                selectedTicksTheme4.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        },
        width:'150px',
        height:'350px',
        title: 'Ticks with offset',
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
            ranges: [{
                color: '#C4C7C5',
            }],
            majorTicks: {
                interval: 20,
                height: 7,
                width: 1,
                position: 'Inside',
                offset: 10
            },
            minorTicks: {
                interval: 10,
                height: 3,
                position: 'Inside',
                offset: 10
            },
            labelStyle: {
                font: { fontFamily: 'inherit' }
            },
            pointers: [
                {
                    width: 0
                }
            ],
            minimum: 0,
            maximum: 100,
            isInversed: true,
            opposedPosition: true
        }]
    });
    gauge4.appendTo('#gauge4');
};