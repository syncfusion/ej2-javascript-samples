this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        centerY: '75%',
        background: 'transparent',
        axes: [{
            radius: '120%',
            startAngle: 270,
            endAngle: 90,
            minimum: 0,
            maximum: 120,
            rangeGap: 3,
            majorTicks: {
                width: 0
            },
            lineStyle: { width: 0 },
            minorTicks: {
                width: 0
            },
            labelStyle: {
                font: {
                    size: '0px'
                },
                offset: -5
            },
            pointers: [{
                value: 82,
                radius: '60%',
                pointerWidth: 10,
                needleStartWidth: 1,
                needleEndWidth: 1,
                cap: {
                    radius: 0
                },
                animation: {
                    enable: true,
                },
                textStyle: {
                    fontFamily: 'inherit',
                    size: '18px'
                }
            },
            {
                value: 20,
                radius: '85%',
                text: 'Poor',
                pointerWidth: 10,
                type: 'Marker',
                markerShape: 'Text',
                cap: {
                    radius: 0
                },
                color: 'transparent',
                animation: {
                    enable: false,
                },
                textStyle: {
                    fontFamily: 'inherit',
                    size: '18px'
                },
                needleTail: {
                    length: '0%'
                }
            },
            {
                value: 60,
                radius: '85%',
                text: 'Average',
                pointerWidth: 10,
                type: 'Marker',
                markerShape: 'Text',
                cap: {
                    radius: 0
                },
                color: 'transparent',
                animation: {
                    enable: false,
                },
                textStyle: {
                    fontFamily: 'inherit',
                    size: '18px'
                }
            },
            {
                value: 100,
                radius: '85%',
                text: 'Good',
                pointerWidth: 10,
                type: 'Marker',
                markerShape: 'Text',
                cap: {
                    radius: 0
                },
                color: 'transparent',
                animation: {
                    enable: false,
                },
                textStyle: {
                    fontFamily: 'inherit',
                    size: '18px'
                }
            },
            ],
            ranges: [{
                start: 0,
                end: 20,
                radius: '80%',
                startWidth: 85,
                endWidth: 85,
                color: '#dd3800'
            },
            {
                start: 20.5,
                end: 40,
                radius: '80%',
                startWidth: 85,
                endWidth: 85,
                color: '#ff4100'
            },
            {
                start: 40.5,
                end: 60,
                radius: '80%',
                startWidth: 85,
                endWidth: 85,
                color: '#ffba00'
            },
            {
                start: 60.5,
                end: 80,
                radius: '80%',
                startWidth: 85,
                endWidth: 85,
                color: '#ffdf10'
            },
            {
                start: 80.5,
                end: 100,
                radius: '80%',
                startWidth: 85,
                endWidth: 85,
                color: '#8be724'
            },
            {
                start: 100.5,
                end: 120,
                radius: '80%',
                startWidth: 85,
                endWidth: 85,
                color: '#64be00'
            }
            ]
        }],
        load: function (args) {
            // custom code start
            var textPointerTheme = location.hash.split('/')[1];
            textPointerTheme = textPointerTheme ? textPointerTheme : 'Material';
            args.gauge.theme = (textPointerTheme.charAt(0).toUpperCase() +
                textPointerTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    circulargauge.appendTo('#gauge');
};