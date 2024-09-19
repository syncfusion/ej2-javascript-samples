this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        background:'transparent',
        animationDuration: 2000,
        axes: [{
            radius: '100%',
            startAngle: 0,
            endAngle: 0,
            direction: 'AntiClockWise',
            majorTicks: {
                position: 'Outside',
                width: 1,
                height: 25,
                interval: 10,
                useRangeColor: true
            },
            lineStyle: { width: 0 },
            minorTicks: {
                position: 'Outside',
                width: 1,
                height: 8,
                interval: 2,
                useRangeColor: true
            },
            ranges: [
                {
                    start: 0, end: 35,
                    radius: '90%',
                    startWidth: 55, endWidth: 55,
                    color: '#F8A197',
                },
                {
                    start: 35, end: 70,
                    radius: '90%',
                    startWidth: 55, endWidth: 55,
                    color: '#C45072',
                },
                {
                    start: 70, end: 100,
                    radius: '90%',
                    startWidth: 55, endWidth: 55,
                    color: '#1B679F',
                }
            ],
            labelStyle: {
                font: {
                    fontFamily: 'inherit',
                },
                offset: 2,
                position: 'Outside',
                useRangeColor: true,
                hiddenLabel: 'First',
            },
            pointers: []
        }],
        load: function (args) {
            // custom code start
            var selectedRangeColorTheme = location.hash.split('/')[1];
            selectedRangeColorTheme = selectedRangeColorTheme ? selectedRangeColorTheme : 'Material';
            args.gauge.theme = (selectedRangeColorTheme.charAt(0).toUpperCase() +
                selectedRangeColorTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    circulargauge.appendTo('#gauge');
};