window.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.maps.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
        },
        // custom code end
        titleSettings: {
            text: 'Location of Africa continent in the World map',
            textStyle: {
                size: '16px'
            }
        },
        zoomSettings: {
            enable: true
        },
        layers: [{
                layerType: 'OSM',
            },
            {
                type: 'SubLayer',
                animationDuration: 0,
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/africa.json'),
                shapeSettings: {
                    fill: '#5100a3',
                    opacity: 0.4
                }
            }]
    });
    maps.appendTo('#container');
};