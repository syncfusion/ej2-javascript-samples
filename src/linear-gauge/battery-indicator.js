this.default = function () {
    var gauge = new ej.lineargauge.LinearGauge({
        orientation: 'Horizontal',
        background:'transparent',  
        axes: [{
            minimum: 0,
            maximum: 60,
            line: { width: 0 },
            pointers: [{
                width: 0
            }],
            ranges: [
                {
                    start: 3,
                    end: 14,
                    startWidth: 45,
                    endWidth: 45,
                    color: '#66BB6A',
                    offset: 52
                },
                {
                    start: 16,
                    end: 29,
                    startWidth: 45,
                    endWidth: 45,
                    color: '#66BB6A',
                    offset: 52
                },
                {
                    start: 31,
                    end: 44,
                    startWidth: 45,
                    endWidth: 45,
                    color: '#66BB6A',
                    offset: 52
                }
            ],
            majorTicks: {
                interval: 15, height: 0
            },
            minorTicks: {
                interval: 5, height: 0
            },
            labelStyle: {
                font: { size: '0px' }
            }
        }],
        annotations: [{
            axisIndex: 0,
            axisValue: 60,
            x: 0,
            y: 0, zIndex: '1',
        }, {
            axisIndex: 0,
            axisValue: 0,
            x: 0,
            y: 0, zIndex: '1',
        }],
        container: {
            width: 58,
            type: 'RoundedRectangle',
            border: {
                width: 5
            }
        },
        load: function (args) {
            // custom code start
            var batteryTheme = location.hash.split('/')[1];
            batteryTheme = batteryTheme ? batteryTheme : 'Material';
            args.gauge.theme = (batteryTheme.charAt(0).toUpperCase() +
                batteryTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
            borderColor = args.gauge.theme.indexOf('Dark') > -1 ? 'white' : '#bfbfbf';
            textColor = args.gauge.theme.indexOf('Dark') > -1 || args.gauge.theme.indexOf('HighContrast') > -1 ? '#FFFFFF' : '#000000';            
            if (args.gauge.theme == 'Bootstrap5Dark' || args.gauge.theme == 'Tailwind3Dark') {
                borderColor = "#4b5563";
            }
            if (args.gauge.theme == 'FabricDark' || args.gauge.theme == 'BootstrapDark' || args.gauge.theme == 'MaterialDark' || args.gauge.theme == 'HighContrast' || args.gauge.theme == 'Material' || args.gauge.theme == 'Fabric' || args.gauge.theme == 'Bootstrap') {
                borderColor = "#bfbfbf";
            }
            if (args.gauge.theme == 'Fluent' || args.gauge.theme == 'Fluent2') {
                borderColor = "#EDEBE9";
            }
            if (args.gauge.theme == 'FluentDark' || args.gauge.theme == 'Fluent2Dark' || args.gauge.theme == 'Fluent2HighContrast') {
                borderColor = "#292827";
            }
            if (args.gauge.theme == 'Bootstrap5' || args.gauge.theme == 'Tailwind3') {
                borderColor = "#E5E7EB";
            }
            args.gauge.annotations[0].content = "<div style=\"width: 16px;height: 37px;border: 5px solid " + borderColor + ";margin-left:26px;margin-top:57px;border-radius: 6px;\" />";
            args.gauge.annotations[1].content = "<div style=\"width: 137px;font-size: 20px;margin-top:-47px;margin-left:147px;color:" + textColor + ";\">Charged: 75%</div>";
        }
    });
    gauge.appendTo('#batterycontainer');
};