this.default = function () {
    var gauge = new ej.lineargauge.LinearGauge({
        container: {
            width: 13,
            roundedCornerRadius: 5,
            type: 'Thermometer',
            border: { width: 1 }
        },
        background:'transparent',  
        axes: [{
            minimum: -20,
            maximum: 50,
            pointers: [{
                value: 35,
                height: 12,
                width: 12,
                placement: 'Center',
                offset: 3,
                markerType: 'Triangle',
                color: '#0074E3'
            }],
            line: {
                width: 0
            },
            majorTicks: {
                height: 7, interval: 10
            },
            minorTicks: {
                height: 0, interval: 5
            },
            labelStyle: {
                font: { fontFamily: 'inherit' }
            }
        }, {
            minimum: 0,
            maximum: 120,
            opposedPosition: true,
            pointers: [{
                value: 94,
                height: 13,
                width: 13,
                type: 'Bar',
                color: '#0074E3'
            }],
            line: {
                width: 0
            },
            majorTicks: {
                height: 7, interval: 20
            },
            minorTicks: {
                height: 0, interval: 5
            },
            labelStyle: {
                font: { fontFamily: 'inherit' }
            }
        }],
        annotations: [
            {
                content: '<div style="font-size:13px;margin-left: -20px;margin-top: -30px;"> \u00b0C </div>',
                axisIndex: 0,
                axisValue: 50,
                x: 0,
                y: 0, zIndex: '1'
            },
            {
                content: '<div style="font-size:13px;margin-left: 18px;margin-top: -30px;"> \u00b0F </div>',
                axisIndex: 1,
                axisValue: 120,
                x: 12,
                y: 0, zIndex: '1'
            }
        ],
        load: function (args) {
            // custom code start
            var thermometerTheme = location.hash.split('/')[1];
            thermometerTheme = thermometerTheme ? thermometerTheme : 'Material';
            args.gauge.theme = (thermometerTheme.charAt(0).toUpperCase() +
                thermometerTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    gauge.appendTo('#thermometer');
};