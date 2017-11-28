/**
 * Container Sample
 */
this.default = function () {
    var gauge = new ej.lineargauge.LinearGauge({
        title: 'Temperature Measure',
        container: {
            width: 13,
            roundedCornerRadius: 5,
            type: 'Thermometer'
        },
        axes: [{
            minimum: 0,
            maximum: 180,
            line: {
                width: 0
            },
            labelStyle: {
                font: {
                    color: '#000000'
                }
            },
            majorTicks: {
                interval: 20,
                color: '#9e9e9e'
            },
            minorTicks: {
                color: '#9e9e9e'
            },
            pointers: [
                {
                    value: 90,
                    height: 13,
                    width: 13,
                    roundedCornerRadius: 5,
                    type: 'Bar',
                    color: '#f02828'
                }
            ]
        },
        {
            minimum: 0,
            maximum: 180,
            line: {
                width: 0
            },
            labelStyle: {
                font: {
                    color: '#000000'
                }
            },
            majorTicks: {
                interval: 20
            },
            opposedPosition: true,
            pointers: [
                {
                    width: 0
                }
            ]
        }]
    });
    gauge.appendTo('#boxContainer');
    var containerMode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            gauge.container.type = containerMode.value;
            gauge.refresh();
        }
    });
    containerMode.appendTo('#containerMode');
    var orientationMode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            gauge.orientation = orientationMode.value;
            gauge.refresh();
        }
    });
    orientationMode.appendTo('#orientationMode');
};