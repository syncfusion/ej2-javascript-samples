this.default = function () {
        var maps = new ej2_maps.Maps({
            zoomSettings: {
                enable: false
            },
            annotations: [
                {
                    content: '#maps-annotation',
                    x: '0%', y: '70%'
                }, {
                    content: '#compass-maps',
                    x: '80%', y: '5%'
                }
            ],
            layers: [
                {
                    shapeDataPath: 'name',
                    shapePropertyPath: 'name',
                    shapeData: window.africa_continent,
                    shapeSettings: {
                        fill: 'url(#grad1)'
                    },
                    markerSettings: [
                        {
                            visible: true,
                            template: '<h3 style="color:white">{{:name}}</h3>',
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