this.default = function () {
    circularGauge1();
    circularGauge2();
    circularGauge3();
    circularGauge4();
    function circularGauge1() {
        var circulargauge1 = new ej.circulargauge.CircularGauge({
            width: '500px',
            height: '400px',
            background:'transparent',
            axes: [{
                annotations: [{
                    description:'The Gauge is indicated with a red arrow',
                    angle: 8, radius: '80%', zIndex: '1',
                    content: '<div id="annotation1"><img style="width:22px;height:22px;" alt="Red arrow" src="src/circular-gauge/images/image1.svg" /></div>'
                }, {
                    description:'The Gauge is indicated with a green arrow',
                    angle: 11, radius: '58%', zIndex: '1',
                    content: '<div id="annotation2"><img style="width:20px;height:20px;" alt="Green arrow" src="src/circular-gauge/images/image2.svg" /></div>'
                }, {
                    description:'The Gauge is indicated with a blue arrow',
                    angle: 16, radius: '36%', zIndex: '1',
                    content: '<div id="annotation3"><img style="width:22px;height:22px;" alt="Blue arrow" src="src/circular-gauge/images/image3.svg" /></div>'
                }],
                startAngle: 0,
                endAngle: 360,
                labelStyle: {
                    format:'Red Gauge {value}',
                    position: 'Inside',
                    useRangeColor: true,
                    font: {
                        size: '0px', color: 'white',
                        fontFamily: 'Segoe UI', fontStyle: 'Regular'
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
                    color: '#fa114f', opacity: 0.2
                },
                {
                    start: 0, end: 100,
                    radius: '68%',
                    startWidth: 40, endWidth: 40,
                    color: '#99ff01', opacity: 0.2
                },
                {
                    start: 0, end: 100,
                    radius: '46%',
                    startWidth: 40, endWidth: 40,
                    color: '#00d8fe', opacity: 0.2
                }],
                pointers: [{
                    roundedCornerRadius: 25,
                    value: 65,
                    description:'RangeBar pointer value :65',
                    type: 'RangeBar',
                    radius: '90%',
                    color: '#fa114f',
                    animation: { enable: true },
                    pointerWidth: 40
                },
                {
                    roundedCornerRadius: 25,
                    value: 43,
                    description:'RangeBar pointer value :43',
                    type: 'RangeBar',
                    radius: '68%',
                    color: '#99ff01',
                    animation: { enable: true },
                    pointerWidth: 40
                },
                {
                    roundedCornerRadius: 25,
                    description:'RangeBar pointer value :58',
                    value: 58,
                    type: 'RangeBar',
                    radius: '46%',
                    color: '#00d8fe',
                    animation: { enable: true },
                    pointerWidth: 40
                }]
            }], 
            load: function (args) {
                // custom code start
                var selectedTheme1 = location.hash.split('/')[1];
                selectedTheme1 = selectedTheme1 ? selectedTheme1 : 'Material';
                args.gauge.theme = (selectedTheme1.charAt(0).toUpperCase() +
                selectedTheme1.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
               // custom code end
            },
        });
        circulargauge1.appendTo('#gauge1');      
    }
    function circularGauge2() {
        var circulargauge2 = new ej.circulargauge.CircularGauge({            
            load: function (args) {
            // custom code start
                var selectedTheme2 = location.hash.split('/')[1];
                selectedTheme2 = selectedTheme2 ? selectedTheme2 : 'Material';
                args.gauge.theme = (selectedTheme2.charAt(0).toUpperCase() +
                selectedTheme2.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
                if (selectedTheme2.indexOf('highcontrast') !== -1 || selectedTheme2.indexOf('dark') !== -1) {
                    args.gauge.axes[0].annotations[0].content =
                        '<div class="annotation4"><img style="width:17px;height:17px;" src="src/circular-gauge/images/image4.svg" /></div>';
                }
            // custom code end
            },       
            height: '65px',
            width: '65px',
            background:'transparent',
            axes: [{
                annotations: [{
                    description:'The small gauge is indicated with a red arrow',
                    angle: 0, radius: '0%', zIndex: '1',
                    content: '<div class="annotation4"><img style="width:17px;height:17px;" alt="Arrow placed within the small red gauge" src="src/circular-gauge/images/image1.svg" /></div>'
                }],
                lineStyle: { width: 0 },
                startAngle: 0, endAngle: 360,
                labelStyle: {
                    format:'small red gauge {value}',
                    position: 'Inside', useRangeColor: true,
                    font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }
                },
                minimum: 0, maximum: 100,
                majorTicks: { height: 0, }, minorTicks: { height: 0 },
                ranges: [{
                    start: 0, end: 100,
                    radius: '100%',
                    startWidth: 8, endWidth: 8,
                    color: '#fa114f', opacity: 0.2
                }],
                pointers: [{
                    roundedCornerRadius: 5,
                    description:'RangeBar pointer value: 65',
                    value: 65,
                    type: 'RangeBar',
                    radius: '100%',
                    color: '#fa114f',
                    animation: { enable: true },
                    pointerWidth: 8
                }]
            }]
        });
        circulargauge2.appendTo('#gauge2');
    }
    function circularGauge3() {
        var circulargauge3 = new ej.circulargauge.CircularGauge({            
            load: function (args) {
            // custom code start
                var selectedTheme3 = location.hash.split('/')[1];
                selectedTheme3 = selectedTheme3 ? selectedTheme3 : 'Material';
                args.gauge.theme = (selectedTheme3.charAt(0).toUpperCase() +
                selectedTheme3.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
                if (selectedTheme3.indexOf('highcontrast') > -1 || selectedTheme3.indexOf('dark') > -1) {
                    args.gauge.axes[0].annotations[0].content =
                        '<div class="annotation5"><img style="width:15px;height:15px;" src="src/circular-gauge/images/image5.svg" /></div>';
                }
            // custom code end
            },
            height: '65px',
            width: '65px',
            background:'transparent',
            axes: [{
                annotations: [{
                    description:'The small gauge is indicated with a green arrow',
                    angle: 0, radius: '0%', zIndex: '1',
                    content: '<div class="annotation5"><img style="width:15px;height:15px;" alt="Arrow placed within the small green gauge" src="src/circular-gauge/images/image2.svg" /></div>'
                }],
                startAngle: 0, endAngle: 360,
                lineStyle: { width: 0 },
                majorTicks: { height: 0, }, minorTicks: { height: 0 },
                labelStyle: {
                    format:'small green gauge {value}',
                    position: 'Inside', useRangeColor: true,
                    font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }
                },
                maximum: 100, minimum: 0,
                ranges: [{
                    start: 0, end: 100,
                    radius: '100%',
                    startWidth: 8, endWidth: 8,
                    color: '#99ff01', opacity: 0.2
                }],
                pointers: [{
                    description:'RangeBar pointer value:43',
                    roundedCornerRadius: 5,
                    value: 43,
                    type: 'RangeBar',
                    radius: '100%',
                    color: '#99ff01',
                    animation: { enable: true },
                    pointerWidth: 8
                }]
            }]
        });
        circulargauge3.appendTo('#gauge3');
    }
    function circularGauge4() {
        var circulargauge4 = new ej.circulargauge.CircularGauge({
            load: function (args) {
            // custom code start
                var selectedTheme4 = location.hash.split('/')[1];
                selectedTheme4 = selectedTheme4 ? selectedTheme4 : 'Material';
                args.gauge.theme = (selectedTheme4.charAt(0).toUpperCase() +
                selectedTheme4.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
                if (selectedTheme4.indexOf('highcontrast') !== -1 || selectedTheme4.indexOf('dark') !== -1) {
                    args.gauge.axes[0].annotations[0].content =
                        '<div class="annotation6"><img style="width:17px;height:17px;" src="src/circular-gauge/images/image6.svg" /></div>';
                }
            // custom code end
            },
            height: '65px',
            width: '65px',
            background:'transparent',
            axes: [{
                annotations: [{
                    description:'The small gauge is indicated with a blue arrow',
                    angle: 0, radius: '0%', zIndex: '1',
                    content: '<div class="annotation6"><img style="width:17px;height:17px;" alt="Arrow placed within the small blue gauge" src="src/circular-gauge/images/image3.svg" /></div>'
                }],
                startAngle: 0, endAngle: 360,
                lineStyle: { width: 0 },
                labelStyle: {
                    format:'small blue gauge {value}',
                    position: 'Inside', useRangeColor: true,
                    font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }
                },
                majorTicks: { height: 0, }, minorTicks: { height: 0 },
                minimum: 0, maximum: 100,
                ranges: [{
                    start: 0, end: 100,
                    radius: '100%',
                    startWidth: 8, endWidth: 8,
                    color: '#00d8fe', opacity: 0.2
                }],
                pointers: [{
                    description:'RangeBar pointer value:58',
                    roundedCornerRadius: 5,
                    value: 58,
                    type: 'RangeBar',
                    radius: '100%',
                    color: '#00d8fe',
                    animation: { enable: true },
                    pointerWidth: 8
                }]
            }]
        });
        circulargauge4.appendTo('#gauge4');
    }
};