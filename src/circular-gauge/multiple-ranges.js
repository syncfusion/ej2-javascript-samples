this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        background:'transparent',
        animationDuration: 2000,
        axes: [{
            radius: '90%',
            startAngle: 230,
            endAngle: 130,
            minimum: -30,
            maximum: 120,
            hideIntersectingLabel: true,
            majorTicks: {
                width: 0,
                interval: 10
            },
            lineStyle: { width: 0 },
            minorTicks: {
                width: 0,
            },
            labelStyle: {
                font: {
                    fontFamily: 'inherit'
                },
                offset: 50,
                position: 'Inside',
                autoAngle: true
            },
            pointers: [{
                value: 22.5,
                radius: '45%',
                pointerWidth: 7,
                color: '#F7B194',
                cap: {
                    radius: 10,
                    color: 'white',
                    border: { width: 4, color: '#F7B194' },
                },
                needleTail: {
                    length: "25%",
                    color: '#F7B194'
                },
                animation: {
                    enable: false,
                },
            }],
            annotations: [{
                content: '<div style="font-size:18px;margin-left: 5px;color:#9DD55A"> 22.5\u00b0C </div>',
                radius: '20%', angle: 180, zIndex: '1'
            }],
            ranges: [
                {
                    start: -30, end: -20, radius: '90%', color: '#58ABD5', startWidth: 35, endWidth: 35
                },
                {
                    start: -20, end: -10, radius: '90%', color: '#58ABD5', startWidth: 35, endWidth: 35
                },
                {
                    start: -10, end: 0, radius: '90%', color: '#58ABD5', startWidth: 35, endWidth: 35
                },
                {
                    start: 0, end: 10, radius: '90%', color: '#58D2D5', startWidth: 35, endWidth: 35
                },
                {
                    start: 10, end: 20, radius: '90%', color: '#9DD55A', startWidth: 35, endWidth: 35
                },
                {
                    start: 20, end: 30, radius: '90%', color: '#9DD55A', startWidth: 35, endWidth: 35
                },
                {
                    start: 30, end: 40, radius: '90%', color: '#F1D158', startWidth: 35, endWidth: 35
                },
                {
                    start: 40, end: 50, radius: '90%', color: '#F48C6F', startWidth: 35, endWidth: 35
                },
                {
                    start: 50, end: 60, radius: '90%', color: '#F48C6F', startWidth: 35, endWidth: 35
                },
                {
                    start: 60, end: 70, radius: '90%', color: '#F48C6F', startWidth: 35, endWidth: 35
                },
                {
                    start: 70, end: 80, radius: '90%', color: '#F48C6F', startWidth: 35, endWidth: 35
                },
                {
                    start: 80, end: 90, radius: '90%', color: '#F48C6F', startWidth: 35, endWidth: 35
                },
                {
                    start: 90, end: 100, radius: '90%', color: '#F48C6F', startWidth: 35, endWidth: 35
                },
                {
                    start: 100, end: 110, radius: '90%', color: '#F48C6F', startWidth: 35, endWidth: 35
                },
                {
                    start: 110, end: 120, radius: '90%', color: '#F48C6F', startWidth: 35, endWidth: 35
                }
            ]
        }],
        load: function (args) {
            // custom code start
            var selectRangeTheme = location.hash.split('/')[1];
            selectRangeTheme = selectRangeTheme ? selectRangeTheme : 'Material';
            args.gauge.theme = (selectRangeTheme.charAt(0).toUpperCase() +
                selectRangeTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    circulargauge.appendTo('#gauge');
};