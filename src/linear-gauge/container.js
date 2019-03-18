/**
 * Container Sample
 */
this.default = function () {
    var gauge = new ej.lineargauge.LinearGauge({
        title: 'Temperature Measure',
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        // custom code end
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
    // Code for property panel
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