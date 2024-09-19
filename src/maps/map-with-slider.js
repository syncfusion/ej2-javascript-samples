var sliderVal = [-1.5, 3.75];
this.default = function () {
    var colorCodes = ['#7E9CDC', '#DCD57E', '#7EDCA2', '#6EB5D0', '#A6DC7E', '#DCA87E', '#d075c6'];
    var maps = new ej.maps.Maps({
        margin: {
            bottom: 20
        },
        titleSettings: {
            text: 'Average annual population growth in North American countries',
            textStyle: {
                size: '16px',
                fontFamily: 'Segeo UI'
            }
        },
        // custom code start
        loaded: function (args) {
            if (!ej.base.isNullOrUndefined(document.getElementById('mapslider_Annotation_0'))) {
                annotationRender(sliderVal);
            }
        },
        // custom code end
        zoomSettings: {
            enable: false
        },
        annotations: [
            {
                content: '#mapslider-annotation',
                horizontalAlignment: 'Center',
                y: '93%'

            }
        ],
        layers: [
            {
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/north-america.json'),
                shapePropertyPath: 'name',
                shapeDataPath: 'name',
                dataSource: new ej.maps.MapAjax('./src/maps/map-data/population-growth.json'),
                shapeSettings: {
                    colorValuePath: 'population',
                    colorMapping: [
                       {
                           from: -1.5, to: -0.75, color: '#7E9CDC'
                       },
                       {
                           from: -0.75, to: 0, color: '#DCD57E'
                       },
                       {
                           from: 0.1, to: 0.75, color: '#7EDCA2'
                       },
                       {
                           from: 0.76, to: 1.5, color: '#6EB5D0'
                       },
                       {
                           from: 1.5, to: 2.25, color: '#A6DC7E'
                       },
                       {
                           from: 2.25, to: 3, color: '#DCA87E'
                       },
                       {
                           from: 3, to: 3.75, color: '#d075c6'
                       }
                    ]
                },
                tooltipSettings: {
                    visible: true,
                    format: '${name} : ${population}%',
                    textStyle: { fontFamily: 'Segeo UI' }
                }
            }
        ],
        load: function (args) {        // custom code start
            var theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.maps.theme = (theme.charAt(0).toUpperCase() +
                theme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
        }
        // custom code end
    });
    maps.appendTo('#mapslider');
    function annotationRender(val) {
        var slider = new ej.inputs.Slider({
            min: -1.5, max: 3.75,
            value: val,
            step: 0.75,
            type: 'Range',
            ticks: { placement: 'After', largeStep: 0.75 },
            changed: function (args) {
                if (!isNaN(args.value[0]) && !isNaN(args.value[1])) {
                    for (var i = 0; i < maps.layers[0].shapeSettings.colorMapping.length; i++) {
                       if (maps.layers[0].shapeSettings.colorMapping[i].from < args.value[0] ||
                        maps.layers[0].shapeSettings.colorMapping[i].to > args.value[1]) {
                            maps.layers[0].shapeSettings.colorMapping[i].color = '#E5E5E5';
                        } else {
                            maps.layers[0].shapeSettings.colorMapping[i].color = colorCodes[i];
                        }
                    }
                    sliderVal = args.value;
                    maps.refresh();
                }
            }
        });
        slider.appendTo('#mapannotation');
    }
};