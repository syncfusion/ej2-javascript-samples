/**
 * Sample for direction compass
 */
this.default = function () {
    var value = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', ''];
    var pointerColor;
    var labelColor;
    var circulargauge = new ej.circulargauge.CircularGauge({
        axisLabelRender: function (args) {
            args.text = value[args.value];
        },
        axes: [{
            radius: '70%',
            lineStyle: { width: 10, color: '#E0E0E0' },
            labelStyle: {
                font: {
                    size: '12px', color: '#333333', fontFamily: 'Roboto'
                },
                useRangeColor: true,
                autoAngle: true,
                hiddenLabel: 'Last'
            }, majorTicks: {
                height: 15,
                interval: 1,
                color: '#9E9E9E'
            }, minorTicks: {
                height: 10,
                interval: 0.5,
                color: '#9E9E9E'
            },
            startAngle: 0,
            endAngle: 360,
            minimum: 0,
            maximum: 8,
            ranges: [{
                start: 7,
                end: 7,
                color: '#f03e3e'
            }],
            pointers: [{
                value: 7,
                radius: '50%',
                color: '#f03e3e',
                pointerWidth: 20,
                cap: {
                    radius: 0
                },
                animation: { enable: false }
            }, {
                value: 3,
                radius: '50%',
                color: '#9E9E9E',
                pointerWidth: 20,
                cap: {
                    radius: 0
                },
                animation: { enable: false }
            }]
        }]
    });
    circulargauge.appendTo('#direction-container');
    pointerColor = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            var rangeColor = pointerColor.value.toString();
            circulargauge.axes[0].pointers[0].color = rangeColor;
            circulargauge.setPointerValue(0, 0, circulargauge.axes[0].pointers[0].value);
        }
    });
    pointerColor.appendTo('#poiterColor');
    labelColor = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            var rangeColor = labelColor.value.toString();
            circulargauge.axes[0].ranges[0].color = rangeColor;
            circulargauge.refresh();
        }
    });
    labelColor.appendTo('#labelColor');
};