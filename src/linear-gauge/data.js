/**
 * Thermometer linear gauge
 */
this.default = function () {
    var gauge1 = new ej.lineargauge.LinearGauge(firstGauge());
    gauge1.appendTo('#container1');
    var gauge3 = new ej.lineargauge.LinearGauge(thirdGauge());
    gauge3.appendTo('#container3');
    var gauge2 = new ej.lineargauge.LinearGauge(secondGauge());
    gauge2.appendTo('#container2');
};

function firstGauge() {
    var gauge1 = new ej.lineargauge.LinearGauge({
        container: {
            width: 30,
            border: {
                width: 0
            },
            offset: 30
        },
        // custom code start
        load: function (args1) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args1.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
            if (args1.gauge.theme.toLowerCase().indexOf('dark') > 1 || args1.gauge.theme.toLowerCase() === 'highcontrast') {
                args1.gauge.annotations[1].content = '<div id="running" style="width:100px;"><img style="height:25px;width:25px;' +
                    'float:left" src="src/linear-gauge/images/running1.svg" /></span><p style="float:left;' +
                    'margin-left:10px;">Running</p></div>';
            }
        },
        // custom code end
        orientation: 'Horizontal',
        axes: [{
            line: {
                offset: 30
            },
            labelStyle: {
                offset: 50
            },
            pointers: [{
                value: 10,
                placement: 'Near',
                offset: -60,
                height: 10,
                width: 10,
                markerType: 'Triangle'
            }],
            ranges: [{
                start: 0,
                end: 10,
                startWidth: 30,
                endWidth: 30,
                color: '#30b32d'
            }]
        }],
        annotations: [{
                content: '<div id="title" style="width:300px;"> <img style="float:left" src' + '="src/linear-gauge/images/exercise-tracking.svg"/><p style="font-size:18px;color:#4285F4;float:left;margin-left:12px;' + 'margin-top:4px">Exercise Tracking </p></div>',
                axisIndex: 0,
                axisValue: 0,
                x: 150,
                y: -180,
                zIndex: '1'
            },
            {
                content: '<div id="running" style="width:100px;"><img style="height:25px;width:25px;float:left" src="src/linear-gauge' +
                    '/images/Running.svg" /></span><p style="float:left;margin-left:10px;">Running</p></div>',
                axisIndex: 0,
                axisValue: 0,
                x: 50,
                y: -130,
                zIndex: '1'
            },
            {
                content: '<div id="pointerText" style="width:60px;"><p style="font-size:15px;">10 MPH</p></div>',
                axisIndex: 0,
                axisValue: 10,
                y: -65,
                zIndex: '1'
            }
        ]
    });
    return gauge1;
}

function secondGauge() {
    var gauge1 = new ej.lineargauge.LinearGauge({
        axes: [{
            line: {
                offset: 30
            },
            labelStyle: {
                offset: 50
            },
            pointers: [{
                value: 28,
                height: 10,
                width: 10,
                placement: 'Near',
                offset: -60,
                markerType: 'Triangle'
            }],
            ranges: [{
                start: 0,
                end: 28,
                startWidth: 30,
                endWidth: 30,
                color: '#30b32d'
            }]
        }],
        // custom code start
        load: function (args2) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args2.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
            if (args2.gauge.theme.toLowerCase().indexOf('dark') > 1 || args2.gauge.theme.toLowerCase() === 'highcontrast') {
                args2.gauge.annotations[0].content = '<div id="cycle" style="width:100px;"><img style="height:25px;width:25px;' +
                    'float:left" src="src/linear-gauge/images/cycling1.svg" /></span><p style="float:left;' +
                    'margin-left:10px;">Cycling</p></div>';
            }
        },
        // custom code end
        orientation: 'Horizontal',
        container: {
            width: 30,
            border: {
                width: 0
            },
            offset: -50
        },
        annotations: [{
                content: '<div id="cycle" style="width:100px;"><img style="height:25px;width:25px;float:left" src="src/linear-gauge' + '/images/Cycling.svg" /></span><p style="float:left;margin-left:10px;">Cycling</p></div>',
                axisIndex: 0,
                axisValue: 0,
                x: 50,
                y: -110,
                zIndex: '1'
            },
            {
                content: '<div id="pointerText" style="width:60px;"><p style="font-size:15px;">28 MPH</p></div>',
                axisIndex: 0,
                axisValue: 28,
                y: -70,
                zIndex: '1'
            }
        ]
    });
    return gauge1;
}

function thirdGauge() {
    var gauge3 = new ej.lineargauge.LinearGauge({
        // custom code start
        load: function (args3) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args3.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
            if (args3.gauge.theme.toLowerCase().indexOf('dark') > 1 || args3.gauge.theme.toLowerCase() === 'highcontrast') {
                args3.gauge.annotations[0].content = '<div id="walk" style="width:100px;"><img style="height:25px;width:25px;' +
                    'float:left" src="src/linear-gauge/images/walking1.svg" /></span><p style="float:left;' +
                    'margin-left:10px;">Walking</p></div>';
            }
        },
        // custom code end
        annotations: [{
                content: '<div id="walk" style="width:100px;"><img style="height:25px;width:25px;float:left" src="src/' +
                    'linear-gauge/images/Walking.svg" /></span><p style="float:left;margin-left:10px;">Walking</p></div>',
                axisIndex: 0,
                axisValue: 0,
                x: 50,
                y: -120,
                zIndex: '1'
            },
            {
                content: '<div id="pointerText" style="width:100px;"><p style="font-size:15px;">2000 Steps</p></div>',
                axisIndex: 0,
                axisValue: 2.2,
                y: -65,
                zIndex: '1'
            }
        ],
        orientation: 'Horizontal',
        container: {
            width: 30,
            border: {
                width: 0
            },
            offset: -90
        },
        axes: [{
            maximum: 10,
            line: {
                offset: 30
            },
            labelStyle: {
                format: '{value}k',
                offset: 50
            },
            pointers: [{
                value: 2,
                height: 10,
                width: 10,
                placement: 'Near',
                offset: -60,
                markerType: 'Triangle'
            }],
            ranges: [{
                start: 0,
                end: 2,
                startWidth: 30,
                endWidth: 30,
                color: '#30b32d'
            }]
        }]
    });
    return gauge3;
}