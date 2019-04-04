/**
 * Projection sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var exporttheme = location.hash.split('/')[1];
            exporttheme = exporttheme ? exporttheme : 'Material';
            args.maps.theme = (exporttheme.charAt(0).toUpperCase() + exporttheme.slice(1));
        },
        // custom code end
        titleSettings: {
            text: 'Location of the Wonders in the World',
            textStyle: {
                size: '16px'
            },
        },
        layers: [
            {
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json'),
				shapeSettings: { fill: 'lightgrey', border: { color: 'black', width: 0.1 } },
                markerSettings: [
                    {
                        animationDuration: 0,
                        visible: true,
                        dataSource: [
                            { longitude: 116.5703749, latitude: 40.4319077, name: 'The Great Wall of China, China ' },
                            { longitude: 35.4443622, latitude: 30.3284544, name: 'Petra, Jorden' },
                            { longitude: 78.0421552, latitude: 27.1750151, name: 'Taj Mahal, Agra, India' },
                            { longitude: 12.4922309, latitude: 41.8902102, name: 'The Roman Colosseum, Rome, Italy' },
                            { longitude: -88.5677826, latitude: 20.6842849, name: 'The Chichen Itza, Mexico' },
                            { longitude: -72.5449629, latitude: -13.1631412, name: 'Machu Picchu, Peru' },
                            { longitude: -43.2104872, latitude: -22.951916, name: 'Christ Redeemer, Rio de janeiro, Brazil' },
                        ],
                        shape: 'Balloon',
                        fill: '#E13E40',
                        height: 20,
                        width: 15,
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'name'
                        },
                    }
                ],  
            }
        ]
    });
    maps.appendTo('#export-container');
    // Code for Property Panel
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        width: 100
    });
    mode.appendTo('#mode');
    var togglebtn = new ej.buttons.Button({
        cssClass: 'e-info', isPrimary: true
    });
    togglebtn.appendTo('#togglebtn');
    document.getElementById('togglebtn').onclick = function () {
        var fileName = (document.getElementById('fileName')).value;
        maps.export(mode.value, fileName);
    };
};