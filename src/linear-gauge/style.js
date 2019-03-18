/**
 * Linear Gauge Style Sample
 */
this.default = function () {
    var gauge1 = new ej.lineargauge.LinearGauge(firstGauge());
    gauge1.appendTo('#container1');
    var gauge2 = new ej.lineargauge.LinearGauge(secondGauge());
    gauge2.appendTo('#container2');
    var gauge3 = new ej.lineargauge.LinearGauge(thirdGauge());
    gauge3.appendTo('#container3');
    var gauge4 = new ej.lineargauge.LinearGauge(fourthGauge());
    gauge4.appendTo('#container4');
};
function firstGauge() {
    var gauge1 = new ej.lineargauge.LinearGauge({
        orientation: 'Horizontal',
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        // custom code end
        axes: [{
            line: {
                color: '#9E9E9E'
            },
            pointers: [{
                value: 80,
                offset: 10,
                height: 13,
                width: 13,
            }],
            majorTicks: {
                interval: 10,
                color: '#9E9E9E',
            },
            minorTicks: {
                color: '#9E9E9E'
            },
        }]
    });
    return gauge1;
}
function secondGauge() {
    var gauge2 = new ej.lineargauge.LinearGauge({
        orientation: 'Horizontal',
        container: {
            width: 30,
            backgroundColor: '#e0e0e0',
            border: {
                width: 0
            },
            offset: -20
        },
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        // custom code end
        axes: [{
            line: {
                offset: 30
            },
            majorTicks: {
                interval: 10,
            },
            labelStyle: {
                offset: 50
            },
            pointers: [{
                value: 10,
                placement: 'Near',
                offset: -50,
                height: 15,
                width: 15,
                markerType: 'Triangle'
            }],
            ranges: [
                {
                    start: 0,
                    end: 10,
                    startWidth: 30,
                    endWidth: 30,
                    color: '#30b32d'
                }
            ]
        }]
    });
    return gauge2;
}
function thirdGauge() {
    var gauge3 = new ej.lineargauge.LinearGauge({
        orientation: 'Horizontal',
        axes: [{
            line: {
                offset: -20,
                color: '#9E9E9E'
            },
            pointers: [
                {
                    value: 70,
                    offset: 20,
                    height: 13,
                    width: 13,
                },
                {
                    value: 70,
                    type: 'Bar',
                    height: 10,
                    color: 'red'
                }
            ],
            majorTicks: {
                interval: 10,
                color: '#9E9E9E'
            },
            minorTicks: {
                color: '#9E9E9E'
            },
        }],
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        }
        // custom code end
    });
    return gauge3;
}
function fourthGauge() {
    var gauge4 = new ej.lineargauge.LinearGauge({
        axes: [{
            line: {
                width: 0
            },
            majorTicks: {
                interval: 10,
                height: 0
            },
            minorTicks: {
                height: 0
            },
            labelStyle: {
                offset: 55
            },
            pointers: [
                {
                    value: 60,
                    height: 15,
                    width: 15,
                    placement: 'Near',
                    offset: -50,
                    markerType: 'Triangle'
                },
                {
                    type: 'Bar',
                    color: '#ff9200',
                    value: 60,
                    height: 30
                }
            ],
        }],
        orientation: 'Horizontal',
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        // custom code end
        container: {
            width: 30,
            offset: 0,
            backgroundColor: '#e0e0e0'
        }
    });
    return gauge4;
}