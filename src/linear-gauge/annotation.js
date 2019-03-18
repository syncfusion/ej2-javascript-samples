/**
 * Linear Gauge Annotation Sample
 */
var gauge;
this.default = function () {
    var count = 0;
    gauge = new ej.lineargauge.LinearGauge({
        rangePalettes: ['#30b32d', '#ffdd00', '#f03e3e'],
        orientation: 'Horizontal',
        axes: [{
            maximum: 90,
            labelStyle: {
                font: {
                    size: '0px'
                }
            },
            line: {
                width: 0
            },
            pointers: [
                {
                    value: 35,
                    height: 15,
                    width: 15,
                    color: '#757575',
                    placement: 'Near',
                    markerType: 'Triangle',
                    offset: -50
                }
            ],
            majorTicks: {
                interval: 10,
                height: 0
            },
            minorTicks: {
                height: 0
            },
            ranges: [{
                start: 0,
                end: 30,
                startWidth: 50,
                endWidth: 50
            },
            {
                start: 30,
                end: 60,
                startWidth: 50,
                endWidth: 50
            },
            {
                start: 60,
                end: 90,
                startWidth: 50,
                endWidth: 50
            }]
        }],
        load: gaugeLoad
    });
    gauge.appendTo('#annotationContainer');
};
function gaugeLoad(args) {
    // custom code start
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    // custom code end
    if (this.count === undefined) {
        gauge.annotations = [
            {
                content: '<div id="title" style="width:200px;"><p style="font-size:18px;">CPU Utilization</p></div>',
                horizontalAlignment: 'Center',
                x: 35,
                y: 50, zIndex: '1'
            },
            {
                content: '<div id="low"><img style="height:25px;width:25px;" src="src/linear-gauge/images/Low.png"/></div>',
                axisIndex: 0,
                axisValue: 15,
                y: -25,
                zIndex: '1'
            },
            {
                content: '<div id="moderate"><img style="height:25px;width:25px;" src="src/linear-gauge/images/Moderate.png"/></div>',
                axisIndex: 0,
                axisValue: 45,
                y: -25,
                zIndex: '1'
            },
            {
                content: '<div id="high"><img style="height:25px;width:25px;" src="src/linear-gauge/images/High.png"/></div>',
                axisIndex: 0,
                axisValue: 75,
                y: -25,
                zIndex: '1'
            },
            {
                content: '<div id="lowText"><p style="font-size:15px;color:#248622;">Low</p></div>',
                axisIndex: 0,
                axisValue: 15,
                y: 20, zIndex: '1'
            },
            {
                content: '<div id="moderateText"><p style="font-size:15px;color:#ba9e2a;">Moderate</p></div>',
                axisIndex: 0,
                axisValue: 45,
                y: 20, zIndex: '1'
            },
            {
                content: '<div id="highText"><p style="font-size:15px;color:#b42f2f;">High</p></div>',
                axisIndex: 0,
                axisValue: 75,
                y: 20, zIndex: '1'
            }
        ];
        this.count = 0;
        gauge.refresh();
    }
}