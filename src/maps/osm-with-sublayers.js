this.default = function () {
    var maps = new ej.maps.Maps({        // custom code starts
        load: function (args) {
            var selectTheme = location.hash.split('/')[1];
            selectTheme = selectTheme ? selectTheme : 'Material';
            args.maps.theme = (selectTheme.charAt(0).toUpperCase() +
            selectTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        titleSettings: {
            text: 'Location of Africa continent in the World map',
            textStyle: {
                size: '16px',
                fontFamily: 'Segeo UI'
            }
        },
        zoomSettings: {
            enable: true
        },
        layers: [{
            urlTemplate:'https://tile.openstreetmap.org/level/tileX/tileY.png'
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
