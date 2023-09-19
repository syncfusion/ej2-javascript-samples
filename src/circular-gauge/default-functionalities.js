this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        background:'transparent',
        axes: [{
            radius: '80%',
            startAngle: 230,
            endAngle: 130,
            majorTicks: {
                offset: 5
            },
            lineStyle: { width: 8, color: '#E0E0E0' },
            minorTicks: {
                offset: 5
            },
            labelStyle: {
                font: {
                    fontFamily: 'inherit'
                },
                offset: -1
            },
            pointers: [{
                value: 60,
                radius: '60%',
                pointerWidth: 7,
                cap: {
                    radius: 8,
                    color: '#c06c84',
                    border: { width: 0 },
                },
                needleTail: {
                    length: "0%",
                },
                color: '#c06c84',
                animation: {
                    enable: true,
                    duration: 500,
                },
            }]
        }],
        load: function (args) {
            // custom code start
            var selectTheme = location.hash.split('/')[1];
            selectTheme = selectTheme ? selectTheme : 'Material';
            args.gauge.theme = (selectTheme.charAt(0).toUpperCase() +
                selectTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            // custom code end
        }
    });
    circulargauge.appendTo('#gauge');
};