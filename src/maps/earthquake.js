/**
 * Earthquake sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var earththeme = location.hash.split('/')[1];
            earththeme = earththeme ? earththeme : 'Material';
            args.maps.theme = (earththeme.charAt(0).toUpperCase() +
            earththeme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        centerPosition: {
            latitude: 1.5053645409602877,
            longitude: 105.14038085937499
        },
        zoomSettings: {
            enable: false,
            zoomFactor: 7,
            mouseWheelZoom: false
        },
        mapsArea: {
            background: '#AEE2FA'
        },
        titleSettings: {
            text: '7.6 Magnitude earthquake strikes Sumatra - 2009',
            textStyle: {
                size: '18px',
                fontFamily: 'Segeo UI'
            }
        },
        layers: [
            {
                animationDuration: 1000,
                shapeDataPath: 'name',
                shapePropertyPath: 'name',
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/asia.json'),
                markerSettings: [{
                        visible: true,
                        height: 100,
                        width: 100,
                        template: '#template',
                        animationDuration: 0,
                        dataSource: [{
                                latitude: 1.625758360412755, longitude: 98.5693359375
                            }]
                    }],
                shapeSettings: {
                    fill: '#FFFDCF',
                    border: {
                        color: '#3497C3 ',
                        width: 0.5
                    }
                },
                dataLabelSettings: {
                    visible: true,
                    labelPath: 'name',
                    smartLabelMode: 'Hide'
                }
            }
        ]
    });
    maps.appendTo('#maps');    
};