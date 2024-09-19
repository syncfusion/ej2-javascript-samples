this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        background:'transparent',
        axes: [{
            radius: '70%',
            startAngle: 0,
            endAngle: 0,
            minimum: 0,
            maximum: 12,
            majorTicks: {
                offset: 4,
                width: 2,
                height: 12,
                interval: 1
            },
            lineStyle: { width: 0 },
            minorTicks: {
                offset: 4,
                width: 1,
                height: 7,
                interval: 0.2
            },
            labelStyle: {
                font: {
                    fontFamily: 'inherit'
                },
                hiddenLabel: 'First'
            },
            pointers: [{
                value: 4.7,
                radius: '97%',
                type: 'Marker',
                markerShape: 'Image',
                markerWidth: 28,
                markerHeight: 28,
                imageUrl: 'src/circular-gauge/images/sun-icon.png',
                animation: {
                    enable: false
                },
            },
            {
                value: 9,
                radius: '98%',
                type: 'Marker',
                markerShape: 'Image',
                markerWidth: 28,
                markerHeight: 28,
                imageUrl: 'src/circular-gauge/images/moon-icon.png',
                animation: {
                    enable: false,
                },
            }
            ],
            ranges: [{
                start: 0, end: 4.7, startWidth: 4, endWidth: 4, color: '#6453D0'
            }, {
                start: 12, end: 9, startWidth: 4, endWidth: 4, color: '#6453D0'
            },
            {
                start: 4.7, end: 9, startWidth: 4, endWidth: 4, color: '#d7d3ed'
            }],
            annotations: [{
                description:'Mon, 5 Apr',
                content: '<div style="font-size:15px;border-radius: 20px;border: 2px solid gray;padding: 5px 4px 5px;width: 93%;text-align: center;margin-left: 67px;">Mon, 5 Apr</div>',
                angle: 342, radius: '129%', zIndex: '1'
            },
            {
                description:'07 hrs 43 mins',
                content: '<div style="font-size:15px;margin-left:25px">07 hrs 43 mins</div>',
                angle: 185,
                radius: '120%',
                zIndex: '1'
            },
            {
                description:'Sleep time',
                content: '<div style="font-size:15px;margin-left: 34px;">Sleep Time</div>',
                angle: 185,
                radius: '140%',
                zIndex: '1'
            },
            {
                description:'4 Apr 9:00 PM',
                content: '<div style="color:#6453D0;font-size:15px;margin-top: 54px;margin-left:28px"><p style="text-align: center;">4 Apr</p><p style="margin-top: -10px;">9:00 PM</p></div>',
                angle: 285,
                radius: '60%',
                zIndex: '1'
            },
            {
                description:'-',
                content: '<div style="color:#6453D0;margin-top: -8px;"> - </div>',
                angle: 0,
                radius: '0%',
                zIndex: '1'
            },
            {
                description:'5 Apr 4:43 AM',
                content: '<div style="color:#6453D0;font-size:15px;margin-left: -15px;margin-top: 56px;"><p style="text-align: center;">5 Apr </p><p style="margin-top: -10px;">4:43 AM</p></div>',
                angle: 70,
                radius: '50%',
                zIndex: '1'
            },
            ]
        }],
        axisLabelRender: function (args) {
            if (args.value == 3 || args.value == 6 || args.value == 9 || args.value == 12) {
                args.text = args.value.toString();
            }
            else {
                args.text = "";
            }
        },
        load: function (args) {
            // custom code start
            var sleepTrackerTheme = location.hash.split('/')[1];
            sleepTrackerTheme = sleepTrackerTheme ? sleepTrackerTheme : 'Material';
            args.gauge.theme = (sleepTrackerTheme.charAt(0).toUpperCase() +
                sleepTrackerTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    circulargauge.appendTo('#gauge');
};