/**
 * Linea penisular sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.maps.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        // custom code end
        titleSettings: {
            text: 'Shipping sea route between various cities',
            textStyle: {
                size: '18px'
            }
        },
        zoomSettings: {
            enable: false,
             zoomFactor: 13
        },
        mapsArea: {
            background: '#4863A0'
        },
        centerPosition: {
            latitude: 25.54244147012483,
            longitude: -89.62646484375
        },
        layers: [
            {
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json'),
                shapeSettings: { 
                    fill: '#789071'
                 },
                navigationLineSettings: window.penisular_location,
                markerSettings: [
                    {
                        visible: true,
                        shape: 'Circle',
                        fill: 'white',
                        width: 10,
                        height: 10,
                        dataSource: window.penisular_marker
                    },
                    {
                        visible: true,
                        template: '<div id="marker1" style="font-size: 12px;color:white">ALTAMIRA' +
                            '</div>',
                        dataSource: [
                            { latitude: 22.403410892712124, longitude: -99.5 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker2" style="font-size: 12px;color:white">HOUSTON' +
                            '</div>',
                        dataSource: [
                            { latitude: 30.332197482973, longitude: -95.36270141601562 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker3" style="font-size: 12px;color:white">PANAMA CITY' +
                            '</div>',
                        dataSource: [
                            { latitude: 30.380747605060766, longitude: -85.81283569335938 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker4" style="font-size: 12px;color:white">TAMPA' +
                            '</div>',
                        dataSource: [
                            { latitude: 27.9337540167772, longitude: -81.29908447265625 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker5" style="font-size: 12px;color:white">PROGRESO' +
                            '</div>',
                        dataSource: [
                            { latitude: 20.62336521195344, longitude: -89.6649169921875 }
                        ],
                        animationDuration: 0
                    }
                ]
            }
        ]
    });
    maps.appendTo('#container');
};