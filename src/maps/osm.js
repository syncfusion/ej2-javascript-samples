this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var templatetheme = location.hash.split('/')[1];
            templatetheme = templatetheme ? templatetheme : 'Material';
            args.maps.theme = (templatetheme.charAt(0).toUpperCase() + templatetheme.slice(1));
        },
        // custom code end
        titleSettings: {
            text: 'Headquarters of the United Nations',
            textStyle: {
                size: '16px'
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
                layerType: 'OSM',
                animationDuration: 0,
                markerSettings: [
                    {
                        visible: true,
                        template: '<div><img src="src/maps/images/ballon.png" style="height:30px;width:20px;"></img></div>',
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