/**
 * Sample for Apple watch rings
 */
this.default = function () {
    var gauge1 = new ej.circulargauge.CircularGauge(circular1(), '#gauge1');
    var gauge2 = new ej.circulargauge.CircularGauge(circular2(), '#gauge2');
    var gauge3 = new ej.circulargauge.CircularGauge(circular3(), '#gauge3');
    var gauge4 = new ej.circulargauge.CircularGauge(circular4(), '#gauge4');
    function circular1() {
        var circulargauge1 = new ej.circulargauge.CircularGauge({
            // custom code start
            load: function (args) {
                var selectedTheme1 = location.hash.split('/')[1];
                selectedTheme1 = selectedTheme1 ? selectedTheme1 : 'Material';
                args.gauge.theme = (selectedTheme1.charAt(0).toUpperCase() + selectedTheme1.slice(1));
            },
            // custom code end
            width: '400px',
            height: '400px',
            axes: [{
                annotations: [{
                    angle: 8, radius: '80%', zIndex: '1',
                    content: '<div id="annotation1"><img style="width:22px;height:22px;" src="src/circular-gauge/images/image1.svg" /></div>'
                }, {
                    angle: 11, radius: '58%', zIndex: '1',
                    content: '<div id="annotation2"><img style="width:20px;height:20px;" src="src/circular-gauge/images/image2.svg" /></div>'
                }, {
                    angle: 16, radius: '36%', zIndex: '1',
                    content: '<div id="annotation3"><img style="width:22px;height:22px;" src="src/circular-gauge/images/image3.svg" /></div>'
                }],
                startAngle: 0,
                endAngle: 360,
                labelStyle: {
                    position: 'Inside',
                    useRangeColor: true,
                    font: {
                        size: '0px', color: 'white',
                        fontFamily: 'Roboto', fontStyle: 'Regular'
                    }
                },
                lineStyle: {
                    width: 0
                },
                majorTicks: { height: 0, }, minorTicks: { height: 0 },
                minimum: 0, maximum: 100,
                ranges: [{
                    start: 0,
                    end: 100,
                    radius: '90%',
                    startWidth: 40, endWidth: 40,
                    color: '#E30219', opacity: 0.2
                },
                {
                    start: 0, end: 100,
                    radius: '68%',
                    startWidth: 40, endWidth: 40,
                    color: '#3EDE00', opacity: 0.2
                },
                {
                    start: 0, end: 100,
                    radius: '46%',
                    startWidth: 40, endWidth: 40,
                    color: '#18F8F6', opacity: 0.2
                }],
                pointers: [{
                    roundedCornerRadius: 25,
                    value: 65,
                    type: 'RangeBar',
                    radius: '90%',
                    color: '#E2011A',
                    animation: { enable: true },
                    pointerWidth: 40
                },
                {
                    roundedCornerRadius: 25,
                    value: 43,
                    type: 'RangeBar',
                    radius: '68%',
                    color: '#3FE000',
                    animation: { enable: true },
                    pointerWidth: 40
                },
                {
                    roundedCornerRadius: 25,
                    value: 58,
                    type: 'RangeBar',
                    radius: '46%',
                    color: '#00C9E6',
                    animation: { enable: true },
                    pointerWidth: 40
                }]
            }]
        });
        return circulargauge1;
    }
    function circular2() {
        var circulargauge2 = new ej.circulargauge.CircularGauge({
            // custom code start
            load: function (args) {
                var selectedTheme2 = location.hash.split('/')[1];
                selectedTheme2 = selectedTheme2 ? selectedTheme2 : 'Material';
                args.gauge.theme = (selectedTheme2.charAt(0).toUpperCase() + selectedTheme2.slice(1));
                if (selectedTheme2 === 'highcontrast') {
                    args.gauge.axes[0].annotations[0].content =
                        '<div id="annotation4"><img style="width:17px;height:17px;" src="src/circular-gauge/images/image4.svg" /></div>';
                }
            },
            // custom code end
            height: '65px',
            width: '65px',
            axes: [{
                annotations: [{
                    angle: 0, radius: '0%', zIndex: '1',
                    content: '<div id="annotation4"><img style="width:17px;height:17px;" src="src/circular-gauge/images/image1.svg" /></div>'
                }],
                lineStyle: { width: 0 },
                startAngle: 0, endAngle: 360,
                labelStyle: {
                    position: 'Inside', useRangeColor: true,
                    font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }
                },
                minimum: 0, maximum: 100,
                majorTicks: { height: 0, }, minorTicks: { height: 0 },
                ranges: [{
                    start: 0, end: 100,
                    radius: '100%',
                    startWidth: 8, endWidth: 8,
                    color: '#E30219', opacity: 0.2
                }],
                pointers: [{
                    roundedCornerRadius: 5,
                    value: 65,
                    type: 'RangeBar',
                    radius: '100%',
                    color: '#E2011A',
                    animation: { enable: true },
                    pointerWidth: 8
                }]
            }]
        });
        return circulargauge2;
    }
    function circular3() {
        var circulargauge3 = new ej.circulargauge.CircularGauge({
            // custom code start
            load: function (args) {
                var selectedTheme3 = location.hash.split('/')[1];
                selectedTheme3 = selectedTheme3 ? selectedTheme3 : 'Material';
                args.gauge.theme = (selectedTheme3.charAt(0).toUpperCase() + selectedTheme3.slice(1));
                if (selectedTheme3 === 'highcontrast') {
                    args.gauge.axes[0].annotations[0].content =
                        '<div id="annotation5"><img style="width:15px;height:15px;" src="src/circular-gauge/images/image5.svg" /></div>';
                }
            },
            // custom code end
            height: '65px',
            width: '65px',
            axes: [{
                annotations: [{
                    angle: 0, radius: '0%', zIndex: '1',
                    content: '<div id="annotation5"><img style="width:15px;height:15px;" src="src/circular-gauge/images/image2.svg" /></div>'
                }],
                startAngle: 0, endAngle: 360,
                lineStyle: { width: 0 },
                majorTicks: { height: 0, }, minorTicks: { height: 0 },
                labelStyle: {
                    position: 'Inside', useRangeColor: true,
                    font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }
                },
                maximum: 100, minimum: 0,
                ranges: [{
                    start: 0, end: 100,
                    radius: '100%',
                    startWidth: 8, endWidth: 8,
                    color: '#3EDE00', opacity: 0.2
                }],
                pointers: [{
                    roundedCornerRadius: 5,
                    value: 43,
                    type: 'RangeBar',
                    radius: '100%',
                    color: '#3FE000',
                    animation: { enable: true },
                    pointerWidth: 8
                }]
            }]
        });
        return circulargauge3;
    }
    function circular4() {
        var circulargauge4 = new ej.circulargauge.CircularGauge({
            // custom code start
            load: function (args) {
                var selectedTheme4 = location.hash.split('/')[1];
                selectedTheme4 = selectedTheme4 ? selectedTheme4 : 'Material';
                args.gauge.theme = (selectedTheme4.charAt(0).toUpperCase() + selectedTheme4.slice(1));
                if (selectedTheme4 === 'highcontrast') {
                    args.gauge.axes[0].annotations[0].content =
                        '<div id="annotation6"><img style="width:17px;height:17px;" src="src/circular-gauge/images/image6.svg" /></div>';
                }
            },
            // custom code end
            height: '65px',
            width: '65px',
            axes: [{
                annotations: [{
                    angle: 0, radius: '0%', zIndex: '1',
                    content: '<div id="annotation6"><img style="width:17px;height:17px;" src="src/circular-gauge/images/image3.svg" /></div>'
                }],
                startAngle: 0, endAngle: 360,
                lineStyle: { width: 0 },
                labelStyle: {
                    position: 'Inside', useRangeColor: true,
                    font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }
                },
                majorTicks: { height: 0, }, minorTicks: { height: 0 },
                minimum: 0, maximum: 100,
                ranges: [{
                    start: 0, end: 100,
                    radius: '100%',
                    startWidth: 8, endWidth: 8,
                    color: '#18F8F6', opacity: 0.2
                }],
                pointers: [{
                    roundedCornerRadius: 5,
                    value: 58,
                    type: 'RangeBar',
                    radius: '100%',
                    color: '#00C9E6',
                    animation: { enable: true },
                    pointerWidth: 8
                }]
            }]
        });
        return circulargauge4;
    }
};
