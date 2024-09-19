this.default = function () {
    var gauge = new ej.lineargauge.LinearGauge({
        title: 'Temperature Measure',
        background:'transparent',  
        titleStyle: {
            size: '15px',
            fontFamily: 'inherit'
        },
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
            labelStyle: {
                font: {
                    fontFamily: 'inherit'
                }
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
                interval: 20,
                color: '#9e9e9e'
            },
            minorTicks: {
                color: '#9e9e9e'
            },
            opposedPosition: true,
            labelStyle: {
                font: {
                    fontFamily: 'inherit'
                }
            },
            pointers: [
                {
                    width: 0
                }
            ]
        }],
        load: function (args) {
            // custom code start
            var selectedContainerTheme = location.hash.split('/')[1];
            selectedContainerTheme = selectedContainerTheme ? selectedContainerTheme : 'Material';
            args.gauge.theme = (selectedContainerTheme.charAt(0).toUpperCase() +
                selectedContainerTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    gauge.appendTo('#boxContainer');
    var containerMode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: '93%',
        change: function () {
            gauge.container.type = containerMode.value;
            gauge.refresh();
        }
    });
    containerMode.appendTo('#containerMode');
    var orientationMode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: '93%',
        change: function () {
            gauge.orientation = orientationMode.value;
            gauge.refresh();
        }
    });
    orientationMode.appendTo('#orientationMode');
};