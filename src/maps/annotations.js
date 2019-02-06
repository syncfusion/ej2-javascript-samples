this.default = function () {
        var maps = new ej2_maps.Maps({
            annotations: [
                {
                    content: '#maps-annotation',
                    x: '0%', y: '70%'
                }, {
                    content: '#compass-maps',
                    x: '80%', y: '5%'
                }
            ],
            zoomSettings: {
                enable: false
            },
            layers: [
                {
                    shapeDataPath: 'name',
                    shapePropertyPath: 'name',
                    shapeData: new ej.maps.MapAjax(location.origin + location.pathname + 'src/maps/map-data/africa-continent.json'),                    
                    markerSettings: [
                        {
                            visible: true,
                            template: '<h3 style="color:white">{{:name}}</h3>',
                            animationDuration: 1,
                            dataSource: [{
                                    name: 'Africa', latitude: 13.97274101999902, longitude: 20.390625
                                }]
                        }
                    ],
                    shapeSettings: {
                        fill: 'url(#grad1)'
                    }
                }
            ]
        });
        maps.appendTo('#maps');
    };