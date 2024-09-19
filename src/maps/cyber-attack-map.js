/**
 * sample for cyber attack map
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        titleSettings: {
            text: 'Cyber Attack Map of United States',
            textStyle: { size: '16px', fontFamily: 'Segeo UI' }
        },
        layers: [
            {
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json'),
                shapeSettings: {
                    border: { color: '#D2691E', width: 0.5 },
                    fill: '#FFFFE0'
                },
                navigationLineSettings: [
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.3, color: '#ffffb3',
                        latitude: [15.758401, 39.864171],
                        longitude: [101.155642, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: 0.4, color: '#ffffb3',
                        latitude: [57.725612, 39.864171],
                        longitude: [-101.802160, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.2, color: '#ffffb3',
                        latitude: [39.634177, 39.864171],
                        longitude: [42.410740, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.1, color: '#ffffb3',
                        latitude: [22.860388, 39.864171],
                        longitude: [79.739066, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.1, color: '#ffffb3',
                        latitude: [-24.763753, 39.864171],
                        longitude: [134.852191, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.4, color: '#ffffb3',
                        latitude: [34.611098, 39.864171],
                        longitude: [104.189872, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.8, color: '#ffffb3',
                        latitude: [-12.354844, 39.864171],
                        longitude: [-49.017709, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.4, color: '#ffffb3',
                        latitude: [3.450682, 39.864171],
                        longitude: [-72.943141, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.7, color: '#ffffb3',
                        latitude: [62.448268, 39.864171],
                        longitude: [97.251835, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.3, color: '#ffffb3',
                        latitude: [65.931163, 39.864171],
                        longitude: [-45.812820, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.2, color: '#ffffb3',
                        latitude: [-21.206222, 39.864171],
                        longitude: [17.122018, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.2, color: '#ffffb3',
                        latitude: [35.839969, 39.864171],
                        longitude: [137.904641, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.2, color: '#ffffb3',
                        latitude: [46.582184, 39.864171],
                        longitude: [2.232903, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.2, color: '#ffffb3',
                        latitude: [0.390617, 39.864171],
                        longitude: [37.893734, -100.854833],
                    }
                ],
                markerSettings: [
                    {
                        visible: true, height: 15, width: 15,
                        template: '#template', animationDuration: 0,
                        dataSource: [
                            { latitude: 15.758401, longitude: 101.155642, name: 'Thailand' },
                            { latitude: 57.725612, longitude: -101.802160, name: 'Canada' },
                            { latitude: 39.634177, longitude: 42.410740, name: 'Turkey' },
                            { latitude: 22.860388, longitude: 79.739066, name: 'India' },
                            { latitude: -24.763753, longitude: 134.852191, name: 'Australia' },
                            { latitude: 34.611098, longitude: 104.189872, name: 'China' },
                            { latitude: -12.354844, longitude: -49.017709, name: 'Brazil' },
                            { latitude: 3.450682, longitude: -72.943141, name: 'Colombia' },
                            { latitude: 62.448268, longitude: 97.251835, name: 'Russia' },
                            { latitude: 65.931163, longitude: -45.812820, name: 'Greenland' },
                            { latitude: -21.206222, longitude: 17.122018, name: 'Namibia' },
                            { latitude: 35.839969, longitude: 137.904641, name: 'Japan' },
                            { latitude: 46.582184, longitude: 2.232903, name: 'France' },
                            { latitude: 0.390617, longitude: 37.893734, name: 'Kenya' }
                        ]
                    },
                    {
                        visible: true, height: 15, width: 15,
                        template: '#parent_template', animationDuration: 0,
                        dataSource: [{
                            latitude: 39.864171,
                            longitude: -100.854833
                        }]
                    },
                ]
            },
        ],
        // custom code start
        load: function (args) {
            var theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.maps.theme = (theme.charAt(0).toUpperCase() +
            theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        loaded: function (args) {
            var lines = args.maps.layers[0].navigationLineSettings;
            var animation = function (i) {
                var line = document.getElementById('container_LayerIndex_0_NavigationIndex_' + i + '_Line0');
                var marker = document.getElementById('container_LayerIndex_0_MarkerIndex_0_dataIndex_' + i);
                if (line) {
                    line.style.strokeDasharray = '1000';
                    line.style.strokeDashoffset = '1000';
                    if (i < 4) {
                        line.style.animation = marker.style.animation = 'dash 5s linear 0s infinite';
                        marker.style.visibility = 'hidden';
                        setTimeout(function () {
                            marker.style.visibility = 'visible';
                        }, 0);
                    }
                    else if (i < 8) {
                        line.style.animation = marker.style.animation = 'dash 6s linear 2s infinite';
                        marker.style.visibility = 'hidden';
                        setTimeout(function () {
                            marker.style.visibility = 'visible';
                        }, 2000);
                    }
                    else if (i < 12) {
                        line.style.animation = marker.style.animation = 'dash 6s linear 4.5s infinite';
                        marker.style.visibility = 'hidden';
                        setTimeout(function () {
                            marker.style.visibility = 'visible';
                        }, 4500);
                    }
                    else {
                        line.style.animation = marker.style.animation = 'dash 5s linear 7s infinite';
                        marker.style.visibility = 'hidden';
                        setTimeout(function () {
                            marker.style.visibility = 'visible';
                        }, 7000);
                    }
                }
            };
            for (var i = 0; i < lines.length; i++) {
                animation(i);
            }
        }
        // custom code end
    });
    maps.appendTo('#container');
};