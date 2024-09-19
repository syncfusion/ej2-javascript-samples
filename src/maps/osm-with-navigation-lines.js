this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var navigateTheme = location.hash.split('/')[1];
            navigateTheme = navigateTheme ? navigateTheme : 'Material';
            args.maps.theme = (navigateTheme.charAt(0).toUpperCase() +
            navigateTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        titleSettings: {
            text: 'Flight route from Los Angeles to Mexico city',
            textStyle: {
                size: '16px',
                fontFamily: 'Segeo UI'
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
                urlTemplate:'https://tile.openstreetmap.org/level/tileX/tileY.png',
                markerSettings: [
                    {
                        visible: true,
                        template: '<div><img alt="Group image" src="src/maps/images/group.svg" style="height:15px;width:15px;"></img></div>',
                        dataSource: [{
                                name: 'Mexico City',
                                latitude: 23.6445,
                                longitude: -102.832
                            }],
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'name',
                            textStyle: {
                                fontFamily: 'Segeo UI'
                            }
                        }
                    },
                    {
                        visible: true,
                        template: '<div><img alt="Ballon image" src="src/maps/images/ballon.png" style="height:30px;width:20px;"></img></div>',
                        dataSource: [{
                                name: 'Mexico City',
                                latitude: 24.2005,
                                longitude: -102.832
                            }],
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'name',
                            textStyle: {
                                fontFamily: 'Segeo UI'
                            }
                        }
                    },
                    {
                        visible: true,
                        template: '<div style= "color:#000;font-weight:500; font-size: 13px; text-align: left; font-family: Segeo UI">Mexico</div>',
                        dataSource: [{
                                name: 'Mexico City',
                                latitude: 24.0005,
                                longitude: -101.200
                            }],
                    },
                    {
                        visible: true,
                        template: '<div><img alt="Oval image" src="src/maps/images/oval.svg" style="height:15px;width:15px;"></img></div>',
                        dataSource: [{
                                name: 'Los Angeles',
                                latitude: 34.0522,
                                longitude: -118.2437
                            }],
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'name',
                            textStyle: {
                                fontFamily: 'Segeo UI'
                            }
                        }
                    },
                    {
                        visible: true,
                        template: '<div><div style="text-align: right; font-weight:500; font-size: 13px;font-family: Segeo UI;color:#000;">Los Angeles</br>' +
                            'International Airport</div></div>',
                        dataSource: [{
                                name: 'Los Angeles City',
                                latitude: 34.7000,
                                longitude: -121.5000
                            }],
                    },
                    {
                        visible: true,
                        template: '<div><img alt="Map tooltip" src="src/maps/images/map-tooltip.svg" style="height:50px;width:100px;"></img></div>',
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