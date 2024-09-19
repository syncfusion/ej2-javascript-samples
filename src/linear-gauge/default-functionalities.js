this.default = function () {
    var gauge = new ej.lineargauge.LinearGauge({
        orientation: 'Horizontal',
        background:'transparent',        
        axes: [{
            pointers: [{
                value: 10,
                height: 15,
                width: 15,
                placement: 'Near',
                offset: -38,
                markerType: 'Triangle'
            }],
            majorTicks: {
                interval: 10,
                color: '#9E9E9E',
            },
            minorTicks: {
                interval: 2,
                color: '#9E9E9E',
            },
            labelStyle: {
                offset: 48,
                font: {
                    fontFamily: 'inherit'
                }
            }
        }],
        annotations: [{
            content: '<div id="pointer" style="width:70px;margin-left:-3%;margin-top: 21%;font-size:16px;">10 MPH</div>',
            axisIndex: 0,
            axisValue: 10,
            x: 10,
            y: -60, zIndex: '1'
        }],
        load: function (args) {
            // custom code start
            var defaultFunctionalityTheme = location.hash.split('/')[1];
            defaultFunctionalityTheme = defaultFunctionalityTheme ? defaultFunctionalityTheme : 'Material';
            args.gauge.theme = (defaultFunctionalityTheme.charAt(0).toUpperCase() +
                defaultFunctionalityTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }        
    });
    gauge.appendTo('#defaultContainer');
};