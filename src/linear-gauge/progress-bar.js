this.default = function () {
    var gauge = new ej.lineargauge.LinearGauge({
        orientation: 'Horizontal',
        background:'transparent',
        animationDuration: 2000,
        container: {
            width: 30,
            roundedCornerRadius: 20,
            backgroundColor: '#D6D6D6',
            type: 'RoundedRectangle',
            border: {
                width: 1
            }
        },
        axes: [{
            minimum: 0,
            maximum: 100,
            line: {
                width: 0
            },
            pointers: [{
                value: 41,
                height: 30,
                width: 30,
                color: '#2196F3',
                type: 'Bar',
                roundedCornerRadius: 20
            }],
            majorTicks: {
                interval: 10, height: 0
            },
            minorTicks: {
                interval: 1, height: 0
            },
            labelStyle: {
                font: { size: '0px' }
            }
        }],
        annotations: [{
            content: '<div style="font-size: 15px;color: white;margin-top: 30px;margin-left:50%">41%</div>',
            axisIndex: 0,
            axisValue: 10,
            x: 0,
            y: 0, zIndex: '1',
        }],
        load: function (args) {
            // custom code start
            var selectedBarTheme = location.hash.split('/')[1];
            selectedBarTheme = selectedBarTheme ? selectedBarTheme : 'Material';
            args.gauge.theme = (selectedBarTheme.charAt(0).toUpperCase() +
                selectedBarTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    gauge.appendTo('#progressbar');
};