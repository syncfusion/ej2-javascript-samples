this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var templatetheme = location.hash.split('/')[1];
            templatetheme = templatetheme ? templatetheme : 'Material';
            args.maps.theme = (templatetheme.charAt(0).toUpperCase() +
            templatetheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        titleSettings: {
            text: 'Headquarters of the United Nations',
            textStyle: {
                size: '16px',
                fontFamily: 'Segeo UI'
            }
        },
        centerPosition: {
            latitude: 40.7209,
            longitude: -73.9680
        },
        zoomSettings: {
            zoomFactor: 10,
            enable: false
        },
        layers: [{
                urlTemplate:'https://tile.openstreetmap.org/level/tileX/tileY.png',
                animationDuration: 0,
                markerSettings: [
                    {
                        visible: true,
                        template: '<div><img alt="Ballon image" src="src/maps/images/ballon.png" style="height:30px;width:20px;"></img></div>',
                        dataSource: [{
                                name: 'Manhattan, New York, USA',
                                latitude: 40.7488758,
                                longitude: -73.9730091
                            }],
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'name'
                        }
                    }
                ]
            }]
    });
    maps.appendTo('#container');
};