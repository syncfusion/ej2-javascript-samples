/**
 * Marker sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        load: function (args) {
            var markertheme = location.hash.split('/')[1];
            markertheme = markertheme ? markertheme : 'Material';
            args.maps.theme = (markertheme.charAt(0).toUpperCase() + markertheme.slice(1));
        },
        useGroupingSeparator: true,
        format: 'n',
        zoomSettings: {
            enable: false
        },
        titleSettings: {
            text: 'Top 25 populated cities in the world',
            textStyle: {
                size: '16px'
            }
        },
        layers: [
            {
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json'),
                dataSource: window.topPopulation,
                shapeSettings: {
                    fill: '#C3E6ED'
                },
                markerSettings: [
                    {
                        dataSource: window.topPopulation,
                        visible: true,
                        animationDuration: 0,
                        shape: 'Circle',
                        fill: 'white',
                        width: 3,
                        border: { width: 2, color: '#285255' },
                        tooltipSettings: {
                            template: '#template',
                            visible: true,
                            valuePath: 'population',
                        }
                    },
                ]
            }
        ]
    });
    maps.appendTo('#container');
};