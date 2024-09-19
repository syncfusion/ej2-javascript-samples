this.default = function () {
    var gauge1 = new ej.lineargauge.LinearGauge({
        dragMove: function (args) {
            gauge1.setPointerValue(0, 0, args.currentValue);
        },
        format: 'N0',
        tooltip: {
            enable: true,
            showAtMousePosition: true,
            textStyle: { fontFamily: "inherit" },
        },
        background:'transparent',  
        title: 'Enabled',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: 'normal'
        },
        orientation: 'Horizontal',
        axes: [{
            minimum: 0,
            maximum: 100,
            opposedPosition: true,
            line: {
                width: 5,
                color: '#C2DEF8'
            },
            pointers: [{
                    value: 50,
                    height: 5,
                    width: 5,
                    placement: 'Center',
                    color: '#0074E3',
                    type: 'Bar',
                    offset: 12
                },
                {
                    value: 50,
                    height: 15,
                    width: 15,
                    placement: 'Center',
                    color: '#0074E3',
                    offset: -10,
                    markerType: 'Circle',
                    enableDrag: true
            }],
            majorTicks: {
                interval: 20, height: 0
            },
            minorTicks: {
                interval: 10, height: 0
            },
            labelStyle: {
                offset: 10,
                font: { fontFamily: 'inherit' }
            }
        }],
        load: function (args) {
            // custom code start
            var sliderTheme1 = location.hash.split('/')[1];
            sliderTheme1 = sliderTheme1 ? sliderTheme1 : 'Material';
            args.gauge.theme = (sliderTheme1.charAt(0).toUpperCase() +
                sliderTheme1.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    gauge1.appendTo('#containerEnable');
    var gauge2 = new ej.lineargauge.LinearGauge({
        title: 'Disabled',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: 'normal'
        },
        background:'transparent',  
        orientation: 'Horizontal',
        axes: [{
            minimum: 0,
            maximum: 100,
            opposedPosition: true,
            line: {
                width: 5,
                color: '#E0E0E0'
            },
            pointers: [
                {
                    value: 50,
                    height: 5,
                    width: 5,
                    placement: 'Center',
                    color: '#ADADAD',
                    type: 'Bar',
                    offset: 12,
                    enableDrag: false
                },
                {
                    value: 50,
                    height: 15,
                    width: 15,
                    placement: 'Center',
                    color: '#ADADAD',
                    offset: -10,
                    markerType: 'Circle',
                    enableDrag: false
                },
            ],
            majorTicks: {
                interval: 20, height: 0
            },
            minorTicks: {
                interval: 10, height: 0
            },
            labelStyle: {
                offset: 10,
                font: { fontFamily: 'inherit' }
            }
        }],
        load: function (args) {
            // custom code start
            var sliderTheme2 = location.hash.split('/')[1];
            sliderTheme2 = sliderTheme2 ? sliderTheme2 : 'Material';
            args.gauge.theme = (sliderTheme2.charAt(0).toUpperCase() +
                sliderTheme2.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    gauge2.appendTo('#containerDisable');
};