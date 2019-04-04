/**
 * Sample for default gauge
 */
this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        axes: [{
            radius: '80%',
            startAngle: 230,
            endAngle: 130,
            majorTicks: {
                width: 0
            },
            lineStyle: { width: 8 },
            minorTicks: {
                width: 0
            },
            labelStyle: {
                font: {
                    fontFamily: 'Roboto',
                    size: '12px',
                    fontWeight: 'Regular'
                },
                offset: -5
            },
            pointers: [{
                value: 60,
                radius: '60%',
                pointerWidth: 7,
                cap: {
                    radius: 8,
                    border: { width: 0 }
                },
                needleTail: {
                    length: '25%'
                }
            }]
        }],
        // custom code start
        load: function (args) {
            var selectTheme = location.hash.split('/')[1];
            selectTheme = selectTheme ? selectTheme : 'Material';
            args.gauge.theme = (selectTheme.charAt(0).toUpperCase() + selectTheme.slice(1));
        }
        // custom code end
    });
    circulargauge.appendTo('#gauge');
};