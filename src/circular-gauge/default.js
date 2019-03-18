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
            lineStyle: { width: 8, color: '#E0E0E0' },
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
                color: '#757575',
                pointerWidth: 7,
                cap: {
                    radius: 8,
                    color: '#757575',
                    border: { width: 0 }
                },
                needleTail: {
                    length: '25%',
                    color: '#757575'
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