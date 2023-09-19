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
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
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
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            // custom code end
        }
    });
    gauge2.appendTo('#containerDisable');
};