/**
 * Linear Gauge Tooltip Sample
 */
var gauge;
this.default = function () {
    gauge = new ej.lineargauge.LinearGauge({
        container: {
            width: 140,
            border: {
                width: 2,
                color: '#a6a6a6'
            }
        },
        tooltip: {
            enable: true,
        },
        orientation: 'Horizontal',
        axes: [
            {
                minimum: 0,
                maximum: 10,
                line: {
                    offset: 140
                },
                majorTicks: {
                    interval: 1
                },
                minorTicks: {
                    interval: 0.2
                },
                pointers: [{
                    type: 'Bar',
                    value: 5.4,
                    offset: 15,
                    color: '#ff66b3'
                }],
            },
            {
                opposedPosition: true,
                minimum: 0,
                maximum: 25,
                line: {
                    offset: -140,
                },
                majorTicks: {
                    interval: 1
                },
                minorTicks: {
                    interval: 0.2
                },
                pointers: [{
                    type: 'Bar',
                    offset: -15,
                    value: 16.5,
                    color: '#4d94ff'
                }]
            }
        ],
        annotations: [
            {
                content: '<div id="first"><h1 style="font-size:15px;color: #686868">Inches</h1></div>',
                axisIndex: 0,
                axisValue: 5.4,
                x: 35,
                y: -58,
                zIndex: '1'
            },
            {
                content: '<div id="second"><h1 style="font-size:15px;color: #686868">Centimeters</h1></div>',
                axisIndex: 1,
                axisValue: 16.5,
                x: 50,
                y: 52,
                zIndex: '1'
            }
        ],
        axisLabelRender: labelRender,
        tooltipRender: renderTooltip,
        load: gaugeLoad,
        loaded: gaugeLoaded,
        resized: gaugeResized,
    });
    gauge.appendTo('#tooltipContainer');
};
function renderTooltip(args) {
    args.content = (args.axis.visibleRange.max === 25) ? args.content + ' cm' : args.content + ' in';
}
function labelRender(args) {
    if (args.axis.visibleRange.min === args.value || args.axis.visibleRange.max === args.value) {
        args.text = '';
    }
}
function gaugeMobileSize() {
    gauge.axes[1].majorTicks.interval = 2;
    gauge.axes[1].minorTicks.interval = 1;
    gauge.orientation = 'Vertical';
    gauge.annotations[0].x = -57;
    gauge.annotations[0].y = -30;
    gauge.annotations[1].x = 50;
    gauge.annotations[1].y = -45;
}
function gaugeDesktopSize() {
    gauge.axes[1].majorTicks.interval = 1;
    gauge.axes[1].minorTicks.interval = 0.5;
    gauge.orientation = 'Horizontal';
    gauge.annotations[0].x = 35;
    gauge.annotations[0].y = -58;
    gauge.annotations[1].x = 50;
    gauge.annotations[1].y = 52;
}
function gaugeResized(args) {
    if (args.currentSize.width < 500) {
        gaugeMobileSize();
    }
    else {
        gaugeDesktopSize();
    }
}
function gaugeLoad(args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    if (args.gauge.theme.toLowerCase().indexOf('dark') > 1 || args.gauge.theme.toLowerCase() === 'highcontrast') {
        args.gauge.annotations[0].content = '<div id="second"><h1 style="font-size:15px; color: #DADADA">Inches</h1></div>';
        args.gauge.annotations[1].content = '<div id="second"><h1 style="font-size:15px; color: #DADADA">Centimeters</h1></div>';
    }
    var width = parseInt(((this.width, this.element.offsetWidth) || this.element.offsetWidth || 600), 10);
    if (width < 500) {
        gaugeMobileSize();
    }
    else {
        gaugeDesktopSize();
    }
}
function gaugeLoaded(args) {
    if (document.getElementById('tooltipContainer')) {
        if (gauge.availableSize.width < 500) {
            document.getElementById('tooltipContainer_Annotation_0').style.transform = 'rotate(270deg)';
            document.getElementById('tooltipContainer_Annotation_1').style.transform = 'rotate(270deg)';
        }
        else {
            document.getElementById('tooltipContainer_Annotation_0').style.transform = '';
            document.getElementById('tooltipContainer_Annotation_1').style.transform = '';
        }
    }
}