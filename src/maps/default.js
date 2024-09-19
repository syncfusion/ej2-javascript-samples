/**
 * Sample for maps default
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var defaulttheme = location.hash.split('/')[1];
            defaulttheme = defaulttheme ? defaulttheme : 'Material';
            args.maps.theme = (defaulttheme.charAt(0).toUpperCase() +
            defaulttheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        titleSettings: {
            text: 'YouTube office locations',
            textStyle: {
                size: '16px',
                fontFamily: 'Segoe UI'
            }
        },
        zoomSettings: {
            enable: false
        },
        legendSettings: {
            visible: true,
            textStyle: {
                fontFamily: 'Segoe UI'
            }
        },
        layers: [
            {
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json'),
                shapePropertyPath: 'continent',
                shapeDataPath: 'continent',
                dataSource: new ej.maps.MapAjax('./src/maps/map-data/default-datasource.json'),
                shapeSettings: {
                    colorValuePath: 'color',
                },
                markerSettings: [
                    {
                        visible: true,
                        dataSource: [
                            { latitude: 37.6276571, longitude: -122.4276688, name: 'San Bruno'},
                            { latitude: 33.5302186, longitude: -117.7418381, name: 'Laguna Niguel'},
                            { latitude: 40.7424509, longitude: -74.0081468, name: 'New York'},
                            { latitude: -23.5268201, longitude: -46.6489927, name: 'Bom Retiro'},
                            { latitude: 43.6533855, longitude: -79.3729994, name: 'Toronto'},
                            { latitude: 48.8773406, longitude: 2.3299627, name: 'Paris'},
                            { latitude: 52.4643089, longitude: 13.4107368, name: 'Berlin'},
                            { latitude: 19.1555762, longitude: 72.8849595, name: 'Mumbai'},
                            { latitude: 35.6628744, longitude: 139.7345469, name: 'Minato'},
                            { latitude: 51.5326602, longitude: -0.1262422, name: 'London'}
                        ],
                        shape: 'Image',
                        imageUrl: 'src/maps/images/ballon.png',
                        height: 20,
                        width: 20,
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'name',
                            textStyle: {
                                fontFamily: 'Segeo UI'
                             }
                        },
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker1" class="markerTemplate" style="font-family: Segoe UI">Asia' +
                            '</div>',
                        dataSource: [
                            { latitude: 50.32087157990324, longitude: 90.015625 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker2" class="markerTemplate" style="font-family: Segoe UI">Australia' +
                            '</div>',
                        dataSource: [
                             { latitude: -25.88583769986199, longitude: 134.296875 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker3" class="markerTemplate" style="font-family: Segoe UI">Africa' +
                            '</div>',
                        dataSource: [
                            { latitude: 16.97274101999902, longitude: 16.390625 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker4" class="markerTemplate" style="font-family: Segoe UI">Europe' +
                            '</div>',
                        dataSource: [
                           { latitude: 49.95121990866204, longitude: 18.468749999999998 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker5"  class="markerTemplate" style="width:50px; font-family: Segoe UI">North America' +
                            '</div>',
                        dataSource: [
                            { latitude: 59.88893689676585, longitude: -109.3359375 }
                        ],
                        animationDuration: 0
                    },
                     {
                        visible: true,
                        template: '<div id="marker6" class="markerTemplate" style="width:50px; font-family: Segoe UI">South America' +
                            '</div>',
                        dataSource: [
                            { latitude: -6.64607562172573, longitude: -55.54687499999999 }
                        ],
                        animationDuration: 0
                    },
                ]
            },
        ]
    });
    maps.appendTo('#container');
};
