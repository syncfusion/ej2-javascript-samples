this.default = function () {
    var touchmove = false;
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var Theme = location.hash.split('/')[1];
            Theme = Theme ? Theme : 'Material';
            args.maps.theme = (Theme.charAt(0).toUpperCase() + Theme.slice(1));
        },
        loaded: function (args) {
            var mapsSVG = document.getElementById('mapdrilldown_svg');
            if(mapsSVG !== null){
            mapsSVG.addEventListener('touchmove', function(e) { touchmove = true; }, false);
            }
        },
        // custom code end
        shapeSelected: function (args) {
            var shape = args.shapeData.continent;
            if(maps.baseLayerIndex === 0){
                if (shape === 'Africa') {
                    maps.baseLayerIndex = 1;
                    maps.refresh();
                }
                else if (shape === 'Europe') {
                    maps.baseLayerIndex = 2;
                    maps.refresh();
                }
                else if (shape === 'Asia') {
                    maps.baseLayerIndex = 3;
                    maps.refresh();
                }
                else if (shape === 'North America') {
                    maps.baseLayerIndex = 4;
                    maps.refresh();
                }
                else if (shape === 'South America') {
                    maps.baseLayerIndex = 5;
                    maps.refresh();
                }
                else if (shape === 'Australia') {
                    maps.baseLayerIndex = 6;
                    maps.refresh();
                }
                var button = document.getElementById('button');
                button.style.display = 'block';
                document.getElementById('content').innerHTML = '';
                document.getElementById('category').style.visibility = 'visible';
                document.getElementById('text').innerHTML = shape;
                document.getElementById('symbol').style.visibility = 'visible';
            }
            touchmove = false;
        },
        zoomSettings: {
            enable: false
        },
        layers: [
            {
                layerType: 'Geometry',
                shapePropertyPath: 'continent',
                shapeDataPath: 'continent',
                dataSource: new ej.maps.MapAjax('./src/maps/map-data/default-datasource.json'),
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json'),
                shapeSettings: {
                    colorValuePath: 'drillColor'
                },
                tooltipSettings: {
                    visible: true,
                    valuePath: 'continent'
                },
                markerSettings: [
                    {
                        visible: true,
                        tooltipSettings: {
                            visible: true
                        },
                        template: '<div id="marker1" class="markerTemplate">Asia' +
                            '</div>',
                        dataSource: [
                            { latitude: 50.32087157990324, longitude: 90.015625 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker2" class="markerTemplate">Australia' +
                            '</div>',
                        dataSource: [
                            { latitude: -28.88583769986199, longitude: 130.296875 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker3" class="markerTemplate">Africa' +
                            '</div>',
                        dataSource: [
                            { latitude: 10.97274101999902, longitude: 16.390625 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker4" class="markerTemplate">Europe' +
                            '</div>',
                        dataSource: [
                            { latitude: 47.95121990866204, longitude: 18.468749999999998 }
                        ],
                        animationDuration: 0,
                    },
                    {
                        visible: true,
                        template: '<div id="marker5" class="markerTemplate" style="width:50px">North America' +
                            '</div>',
                        dataSource: [
                            { latitude: 59.88893689676585, longitude: -109.3359375 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker6" class="markerTemplate" style="width:50px">South America' +
                            '</div>',
                        dataSource: [
                            { latitude: -6.64607562172573, longitude: -55.54687499999999 }
                        ],
                        animationDuration: 0
                    },
                ]
            },
            {
                layerType: 'Geometry',
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/africa.json'),
                shapeSettings: {
                    fill: '#80306A'
                },
                highlightSettings: {
                    enable: true,
                    fill: '#80306A'
                },
                tooltipSettings: {
                    visible: true,
                    valuePath: 'name'
                }
            },
            {
                layerType: 'Geometry',
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/europe.json'),
                shapeSettings: {
                    fill: '#622D6C'
                },
                highlightSettings: {
                    enable: true,
                    fill: '#622D6C'
                },
                tooltipSettings: {
                    visible: true,
                    valuePath: 'name'
                }
            },
            {
                layerType: 'Geometry',
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/asia.json'),
                shapeSettings: {
                    fill: '#462A6D'
                },
                highlightSettings: {
                    enable: true,
                    fill: '#462A6D'
                },
                tooltipSettings: {
                    visible: true,
                    valuePath: 'name'
                }
            },
            {
                layerType: 'Geometry',
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/north-america.json'),
                shapeSettings: {
                    fill: '#C13664'
                },
                highlightSettings: {
                    enable: true,
                    fill: '#C13664'
                },
                tooltipSettings: {
                    visible: true,
                    valuePath: 'name'
                }
            },
            {
                layerType: 'Geometry',
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/south-america.json'),
                shapeSettings: {
                    fill: '#9C3367'
                },
                highlightSettings: {
                    enable: true,
                    fill: '#9C3367'
                },
                tooltipSettings: {
                    visible: true,
                    valuePath: 'name'
                }
            },
            {
                layerType: 'Geometry',
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/oceania.json'),
                shapeSettings: {
                    fill: '#2A2870'
                },
                highlightSettings: {
                    enable: true,
                    fill: '#2A2870'
                },
                tooltipSettings: {
                    visible: true,
                    valuePath: 'name'
                }
            },
            {
                layerType: 'Geometry',
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/australia.json'),
                shapeSettings: {
                    fill: '#2A2870'
                },
                highlightSettings: {
                    enable: true,
                    fill: '#2A2870'
                },
                tooltipSettings: {
                    visible: true,
                    valuePath: 'name'
                }
            }
        ]
    });
    maps.appendTo('#mapdrilldown');
    // Code for Property Panel
    document.getElementById('category').onclick = function () {
        maps.baseLayerIndex = 0;
        maps.refresh();
        var button = document.getElementById('button');
        button.style.display = 'none';
        document.getElementById('content').innerHTML = 'Click on a shape to drill';
        document.getElementById('category').style.visibility = 'hidden';
        document.getElementById('text').innerHTML = '';
        document.getElementById('symbol').style.visibility = 'hidden';
    };
};