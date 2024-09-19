this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        title: 'Shot Put Distance',
        background:'transparent',
        titleStyle: {
            fontFamily: 'inherit'
        },
        centerY: '57%',
        axes: [{
            annotations: [{
                description:'12 M',
                content: '<div style="color:#9E9E9E; font-size:14px; font-family: inherit;"> 12 M </div>', radius: '108%', angle: 98, zIndex: '1'
            }, {
                description:'11 M',
                content: '<div style="color:#9E9E9E; font-size:14px; font-family: inherit;"> 11 M </div>', radius: '80%', angle: 81, zIndex: '1'
            }, {
                description:'10 M',
                content: '<div style="color:#9E9E9E; font-size:14px; font-family: inherit;"> 10 M </div>', radius: '50%', angle: 69, zIndex: '1'
            }, {
                description:'Doe',
                content: '<div style="color:#9E9E9E; font-size:14px; font-family: inherit;"> Doe </div>', radius: '106%', angle: ej.base.Browser.isDevice ? 190 : 192, zIndex: '1'
            }, {
                description:'Almaida',
                content: '<div style="color:#9E9E9E; font-size:14px; font-family: inherit;"> Almaida </div>', radius: '78%', angle: ej.base.Browser.isDevice ? 178 : 184, zIndex: '1'
            }, {
                description:'John',
                content: '<div style="color:#9E9E9E; font-size:14px; font-family: inherit;"> John </div>', radius: ej.base.Browser.isDevice ? '50%' : '48%', angle: ej.base.Browser.isDevice ? 174 : 179, zIndex: '1'
            }],
            lineStyle: {
                width: 0, color: '#1d1d1d'
            },
            radius: '80%',
            labelStyle: {
                font: {
                    size: '0px',
                    fontFamily: 'inherit'
                }
            }, majorTicks: {
                interval: 20, width: 0,
            }, minorTicks: {
                width: 0,
            },
            startAngle: 200, endAngle: 130,
            minimum: 0, maximum: 14,
            ranges: [{
                start: 0, end: 12, radius: '115%',
                color: '#01aebe', startWidth: 25, endWidth: 25
            }, {
                start: 0, end: 11, radius: '85%',
                color: '#3bceac', startWidth: 25, endWidth: 25
            }, {
                start: 0, end: 10, radius: '55%',
                color: '#ee4266', startWidth: 25, endWidth: 25
            }],
            pointers: [{
                description:'Marker pointer foot ball value : 12',
                type: 'Marker', value: 12, markerShape: 'Image',
                imageUrl: 'src/circular-gauge/images/football.png',
                radius: '108%', markerWidth: 28, markerHeight: 28,
                animation: { duration: 1500 }
            }, {
                description:'Marker pointer basket ball value : 11',
                type: 'Marker', value: 11, markerShape: 'Image',
                imageUrl: 'src/circular-gauge/images/basketball.png',
                radius: '78%', markerWidth: 28, markerHeight: 28,
                animation: { duration: 1200 }
            }, {
                description:'Marker pointer golf ball value : 10',
                type: 'Marker', value: 10, markerShape: 'Image',
                imageUrl: 'src/circular-gauge/images/golfball.png',
                radius: '48%', markerWidth: 28, markerHeight: 28,
                animation: { duration: 900 }
            }, {
                description:'Marker pointer athletic value : 10',
                type: 'Marker', value: 12, markerShape: 'Image',
                imageUrl: 'src/circular-gauge/images/athletic.png',
                radius: '0%', markerWidth: 90, markerHeight: 90,
                animation: { duration: 0 }
            }, {
                description:'Marker pointer girl value : 10',
                type: 'Marker', value: 0.1, markerShape: 'Image',
                imageUrl: 'src/circular-gauge/images/girl-1.png',
                radius: '108%', markerWidth: 28, markerHeight: 28,
                animation: { duration: 1500 }
            }, {
                description:'Marker pointer man value : 10',
                type: 'Marker', value: 0.1, markerShape: 'Image',
                imageUrl: 'src/circular-gauge/images/man-1.png',
                radius: '78%', markerWidth: 28, markerHeight: 28,
                animation: { duration: 1500 }
            }, {
                description:'Marker pointer man value: 10',
                type: 'Marker', value: 0.1, markerShape: 'Image',
                imageUrl: 'src/circular-gauge/images/man-2.png',
                radius: '48%', markerWidth: 28, markerHeight: 28,
                animation: { duration: 1500 }
            }]
        }],
        load: function (args) {
            // custom code start
            var imagePointerTheme = location.hash.split('/')[1];
            imagePointerTheme = imagePointerTheme ? imagePointerTheme : 'Material';
            args.gauge.theme = (imagePointerTheme.charAt(0).toUpperCase() +
                imagePointerTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    circulargauge.appendTo('#pointer-container');
};