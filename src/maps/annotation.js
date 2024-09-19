/**
 * Maps annotation sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var selectedtheme = location.hash.split('/')[1];
            selectedtheme = selectedtheme ? selectedtheme : 'Material';
            args.maps.theme = (selectedtheme.charAt(0).toUpperCase() +
            selectedtheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        zoomSettings: {
            enable: false
        },
        annotations: [
            {
                content: '#maps-annotation',
                x: '0%', y: '55%'
            }, {
                content: '#compass-maps',
                x: '85%', y: '5%'
            }
        ],
        layers: [
            {
                shapeDataPath: 'name',
                shapePropertyPath: 'name',
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/africa-continent.json'),
                shapeSettings: {
                    fill: 'url(#grad1)'
                },
                markerSettings: [
                    {
                        visible: true,
                        template: '<h3 style="color:white; font-family: Segeo UI">{{:name}}</h3>',
                        animationDuration: 1,
                        dataSource: [{
                                name: 'Africa', latitude: 13.97274101999902, longitude: 20.390625
                            }]
                    }
                ]
            }
        ]
    });
    maps.appendTo('#maps');
};
