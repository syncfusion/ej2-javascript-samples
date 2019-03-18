/**
 * Linear Gauge Range Sample
 */
function linear() {
    var gauge = new ej.lineargauge.LinearGauge({
        orientation: 'Horizontal',
        axes: [{
            line: {
                width: 0
            },
            labelStyle: {
                format: '{value}%',
                offset: 30
            },
            pointers: [
                {
                    value: 35,
                    height: 10,
                    width: 10,
                    markerType: 'Triangle',
                    placement: 'Near',
                    offset: -40,
                }
            ],
            majorTicks: {
                height: 0
            },
            minorTicks: {
                height: 0
            },
            ranges: [{
                start: 0,
                end: 32,
                color: '#30B32D',
                startWidth: 15,
                endWidth: 15
            },
            {
                start: 32,
                end: 68,
                startWidth: 15,
                endWidth: 15,
                color: '#FFDF00'
            },
            {
                start: 68,
                end: 100,
                startWidth: 15,
                endWidth: 15,
                color: '#F03E3E'
            }]
        }],
        annotations: [{
            content: '<div id="pointer" style="width:20px"><h1 style="font-size:18px;">35</h1></div>',
            axisIndex: 0,
            axisValue: 35,
            y: -50, zIndex: '1'
        }],
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        }
        // custom code end
    });
    return gauge;
}
this.default = function () {
    var gauge = new ej.lineargauge.LinearGauge(linear());
    gauge.appendTo('#rangeContainer');
    document.getElementById('end').ontouchmove = document.getElementById('end').onpointermove =
    document.getElementById('end').onchange = function () {
        var start = document.getElementById('start');
        var end = document.getElementById('end');
        gauge.axes[0].ranges[+rangeIndex.value].start = parseInt(start.value, 10);
        gauge.axes[0].ranges[+rangeIndex.value].end = parseInt(end.value, 10);
        document.getElementById('endRangeValue').innerHTML = 'Range End <span>&nbsp;&nbsp;&nbsp;' + end.value;
        gauge.refresh();
    };
    var rangeIndex = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            var value = +rangeIndex.value;
            var start = document.getElementById('start');
            var end = document.getElementById('end');
            var rangeColor = document.getElementById('color');
            var startWidth = document.getElementById('startWidth');
            var endWidth = document.getElementById('endWidth');
            start.value = gauge.axes[0].ranges[value].start.toString();
            end.value = gauge.axes[0].ranges[value].end.toString();
            startWidth.value = gauge.axes[0].ranges[value].startWidth.toString();
            endWidth.value = gauge.axes[0].ranges[value].endWidth.toString();
            rangeColor.value = gauge.axes[0].ranges[value].color.toString();
            document.getElementById('startWidthValue').innerHTML = 'Range Start Width<span>&nbsp;&nbsp;&nbsp;' + startWidth.value;
            document.getElementById('endWidthValue').innerHTML = 'Range End Width<span>&nbsp;&nbsp;&nbsp;' + endWidth.value;
            document.getElementById('startRangeValue').innerHTML = 'Range Start <span>&nbsp;&nbsp;&nbsp;' + start.value;
            document.getElementById('endRangeValue').innerHTML = 'Range End <span>&nbsp;&nbsp;&nbsp;' + end.value;
            gauge.refresh();
        }
    });
    rangeIndex.appendTo('#rangeIndex');

    // Code for Property Panel
    
    document.getElementById('color').onchange = function () {
        var ele = document.getElementById('color');
        gauge.axes[0].ranges[+rangeIndex.value].color = ele.value;
        gauge.refresh();
    };
    document.getElementById('startWidth').ontouchmove = document.getElementById('startWidth').onpointermove =
        document.getElementById('startWidth').onchange = function () {
            var ele = document.getElementById('startWidth');
            gauge.axes[0].ranges[+rangeIndex.value].startWidth = parseInt(ele.value, 10);
            document.getElementById('startWidthValue').innerHTML = 'Range Start Width<span>&nbsp;&nbsp;&nbsp;' + ele.value;
            gauge.refresh();
        };
    document.getElementById('endWidth').ontouchmove = document.getElementById('endWidth').onpointermove =
        document.getElementById('endWidth').onchange = function () {
            var ele = document.getElementById('endWidth');
            gauge.axes[0].ranges[+rangeIndex.value].endWidth = parseInt(ele.value, 10);
            document.getElementById('endWidthValue').innerHTML = 'Range End Width<span>&nbsp;&nbsp;&nbsp;' + ele.value;
            gauge.refresh();
        };
    var useRangeColor = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            gauge.axes[0].labelStyle.useRangeColor = (useRangeColor.value === 'range') ? true : false;
            gauge.refresh();
        }
    });
    useRangeColor.appendTo('#useRangeColor');
    document.getElementById('start').ontouchmove = document.getElementById('start').onpointermove =
    document.getElementById('start').onchange = function () {
        var start = document.getElementById('start');
        var end = document.getElementById('end');
        gauge.axes[0].ranges[+rangeIndex.value].start = parseInt(start.value, 10);
        gauge.axes[0].ranges[+rangeIndex.value].end = parseInt(end.value, 10);
        document.getElementById('startRangeValue').innerHTML = 'Range Start <span>&nbsp;&nbsp;&nbsp;' + start.value;
        gauge.refresh();
    };
};