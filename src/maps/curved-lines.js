this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var selecttheme = location.hash.split('/')[1];
            selecttheme = selecttheme ? selecttheme : 'Material';
            args.maps.theme = (selecttheme.charAt(0).toUpperCase() +
            selecttheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        centerPosition: {
            latitude: 30.41078179084589,
            longitude: 90.52734374999999
        },
        zoomSettings: {
            enable: false,
            zoomFactor: 3.5
        },
        mapsArea: {
            background: '#AEE2FA'
        },
        titleSettings: {
            text: 'Flights from India to China',
            textStyle: {
                size: '16px',
                fontFamily: 'Segeo UI'
            }
        },
        layers: [
            {
                shapePropertyPath: 'name',
                shapeDataPath: 'name',
                dataSource: [
                    {
                        name: 'India'
                    },
                    {
                        name: 'China'
                    }
                ],
                shapeSettings: {
                    colorValuePath: 'name',
                    fill: '#fcfbf9',
                    border: {
                        width: 0.1,
                        color: 'black'
                    },
                    colorMapping: [
                        {
                            value: 'China',
                            color: '#f7d083'
                        },
                        {
                            value: 'India',
                            color: '#FFFE99'
                        }
                    ]
                },
                navigationLineSettings: window.navigationData,
                markerSettings: [
                    {
                        dataSource: window.markerLocation,
                        visible: true,
                        shape: 'Circle',
                        fill: 'white',
                        border: { width: 1, color: 'black' },
                        width: 4,
                        animationDuration: 0,
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'title',
                            textStyle: { fontFamily: 'Segeo UI' }
                        }
                    },
                    {
                        dataSource: [
                            { 'name': 'New Delhi',
                                'latitude': 28.6139391,
                                'longitude': 77.2090212
                            }
                        ],
                        visible: true,
                        template: '<div style="font-size: 12px;color:black;font-family: Segeo UI"; font-weight: 500>New Delhi' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: -50,
                            y: 10
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Mumbai',
                                'latitude': 19.0759837,
                                'longitude': 72.8776559
                            }
                        ],
                        visible: true,
                        template: '<div style="font-size: 12px;color:black; font-family: Segeo UI"; font-weight: 500>Mumbai' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: 12
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Chennai',
                                'latitude': 13.0826802,
                                'longitude': 80.2707184
                            }
                        ],
                        visible: true,
                        template: '<div style="font-size: 12px;color:black; font-family: Segeo UI"; font-weight: 500>Chennai' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: 12
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Kolkata',
                                'latitude': 22.572646,
                                'longitude': 88.363895
                            }
                        ],
                        visible: true,
                        template: '<div style="font-size: 12px;color:black;font-family: Segeo UI"; font-weight: 500>Kolkata' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: 12
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Kunming',
                                'latitude': 24.880095,
                                'longitude': 102.832891
                            }
                        ],
                        visible: true,
                        template: '<div style="font-size: 12px;color:black; font-family: Segeo UI"; font-weight: 500>Kunming' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: 12
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Beijing',
                                'latitude': 39.9041999,
                                'longitude': 116.4073963
                            }
                        ],
                        visible: true,
                        template: '<div style="font-size: 12px;color:black; font-family: Segeo UI"; font-weight: 500>Beijing' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: 12
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Shanghai',
                                'latitude': 31.2303904,
                                'longitude': 121.4737021
                            }
                        ],
                        visible: true,
                        template: '<div style="font-size: 12px;color:black;font-family: Segeo UI"; font-weight: 500>Shanghai' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: 12
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Hong Kong',
                                'latitude': 22.396428,
                                'longitude': 114.109497
                            }
                        ],
                        visible: true,
                        template: '<div style="font-size: 12px;color:black;font-family: Segeo UI"; font-weight: 500>Hong Kong' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 20,
                            y: 20
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Guangzhou',
                                'latitude': 23.12911,
                                'longitude': 113.264385
                            }
                        ],
                        visible: true,
                        template: '<div style="font-size: 12px;color:black; "; font-weight: 500>Guangzhou' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 35,
                            y: -10
                        }
                    }
                ],
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json')
            }
        ],
    });
    maps.appendTo('#container');
};
