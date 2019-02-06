this.default = function () {
    var maps = new ej.maps.Maps({
        load: function (args) {
            var templatetheme = location.hash.split('/')[1];
            templatetheme = templatetheme ? templatetheme : 'Material';
            args.maps.theme = (templatetheme.charAt(0).toUpperCase() + templatetheme.slice(1));
        },
        titleSettings: {
            text: 'Flight route from Los Angeles to Mexico city',
            textStyle: {
                size: '16px'
            }
        },
        zoomSettings: {
            zoomFactor: 5,
            enable: false
        },
        centerPosition: {
            latitude: 27.0902,
            longitude: -105.7129
        },
        layers: [
            {
                layerType: 'OSM',
                markerSettings: [
                    {
                        visible: true,
                        template: '<div><img src="src/maps/images/group.svg" style="height:15px;width:15px;"></img></div>',
                        dataSource: [{
                                name: 'Mexico City',
                                latitude: 23.6445,
                                longitude: -102.832
                            }],
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'name'
                        }
                    },
                    {
                        visible: true,
                        offset: { x: 2, y: -7 },
                        template: '<div><img src="src/maps/images/ballon.png" style="height:30px;width:20px;"></img></div>',
                        dataSource: [{
                                name: 'Mexico City',
                                latitude: 24.2005,
                                longitude: -102.832
                            }],
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'name'
                        }
                    },
                    {
                        visible: true,
                        offset: { x: 2, y: -7 },
                        template: '<div style= "font-weight:500; font-size: 13px; text-align: left">Mexico</div>',
                        dataSource: [{
                                name: 'Mexico City',
                                latitude: 24.0005,
                                longitude: -101.200
                            }],
                    },
                    {
                        visible: true,
                        template: '<div><img src="src/maps/images/oval.svg" style="height:15px;width:15px;"></img></div>',
                        dataSource: [{
                                name: 'Los Angeles',
                                latitude: 34.0522,
                                longitude: -118.2437
                            }],
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'name'
                        }
                    },
                    {
                        visible: true,
                        template: '<div><div style="text-align: right; font-weight:500; font-size: 13px;">Los Angeles</br>' +
                            'International Airport</div></div>',
                        dataSource: [{
                                name: 'Los Angeles City',
                                latitude: 34.7000,
                                longitude: -121.5000
                            }],
                    },
                    {
                        visible: true,
                        template: '<div><img src="src/maps/images/map-tooltip.svg" style="height:50px;width:100px;"></img></div>',
                        dataSource: [{
                                latitude: 28.5,
                                longitude: -110.400
                            }],
                    }
                ],
                navigationLineSettings: [{
                        width: 8,
                        visible: true,
                        angle: -0.05,
                        color: '#00ace6',
                        latitude: [23.6445, 34.0522],
                        longitude: [-102.832, -118.2437]
                    }]
            }
        ]
    });
    maps.appendTo('#container');
};